console.clear();
require('./setting/config');

// ===================== DEBUG INFO =====================
console.log("\n🔍 === DEBUG INFO ===");
console.log("NODE_VERSION:", process.version);
console.log("PLATFORM:", process.platform);
console.log("HTTPS_PROXY:", process.env.HTTPS_PROXY || "NOT SET");
console.log("HTTP_PROXY:", process.env.HTTP_PROXY || "NOT SET");
console.log("https_proxy:", process.env.https_proxy || "NOT SET");
console.log("http_proxy:", process.env.http_proxy || "NOT SET");
console.log("NO_PROXY:", process.env.NO_PROXY || "NOT SET");
console.log("========================\n");

// Test network connectivity first
const https = require('https');
https.get('https://web.whatsapp.com', (res) => {
  console.log("✅ WhatsApp Web accessible! Status:", res.statusCode);
}).on('error', (e) => {
  console.log("❌ Cannot reach WhatsApp Web:", e.message);
});
// ===================== END DEBUG =====================

const {
    default: makeWASocket,
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestWaWebVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeCacheableSignalKeyStore,
    jidDecode,
    proto,
    getAggregateVotesInPollMessage
} = require("@whiskeysockets/baileys");

const chalk = require('chalk');
const pino = require('pino');
const { Boom } = require('@hapi/boom');
const fs = require('fs');
const FileType = require('file-type');
const readline = require("readline");
const PhoneNumber = require('awesome-phonenumber');
const path = require('path');
const NodeCache = require("node-cache");
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, sleep } = require('./System/x1.js');

const usePairingCode = global.connect; // true pairing / false QR

function question(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(query, resolve);
    });
};

//===================
async function connectToWhatsApp() {
    console.log("🚀 Starting connection process...");
    const { version, isLatest } = await fetchLatestWaWebVersion();
    console.log(chalk.blue(`Using baileys version: ${version}`));

    const { state, saveCreds } = await useMultiFileAuthState("./session");
    console.log("✅ Auth state loaded");

    const Ril = makeWASocket({
        printQRInTerminal: !usePairingCode,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        generateHighQualityLinkPreview: true,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(
                message.buttonsMessage ||
                message.templateMessage ||
                message.listMessage
            );
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            },
                            ...message,
                        },
                    },
                };
            }
            return message;
        },
        version: version,
        logger: pino({
            level: 'silent'
        }),
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino().child({
                level: 'silent',
                stream: 'store'
            })),
        }
    });

    // Pairing code flow
    if (!Ril.authState.creds.registered) {
        console.log(chalk.red(`
           ⢀⡔⠝⠁
        ⠠
    ⢀⣜⣴⣿
   ⢀







         `));
        console.log(chalk.cyan(`
╔══════════════════════════════════════╗
║  Creator : Nachels                   ║
║  NameBot : GalaxyX                   ║
║  Version : 1.5 Free                  ║
╚══════════════════════════════════════╝`));

        let phoneNumber = await question(chalk.blue(`\nEnter Your Number (08xx): `));

        // Clean phone number
        phoneNumber = phoneNumber.replace(/\D/g, '');
        if (phoneNumber.startsWith('0')) {
            phoneNumber = '62' + phoneNumber.slice(1);
        } else if (!phoneNumber.startsWith('62')) {
            phoneNumber = '62' + phoneNumber;
        }
        if (phoneNumber.length > 14) {
            phoneNumber = phoneNumber.slice(0, 14);
        }

        console.log(chalk.yellow(`\n→ Using number: ${phoneNumber}`));

        try {
            // Request pairing code
            const pairingCodePromise = Ril.requestPairingCode(phoneNumber);
            // Handle both promise and direct value
            const codeResult = await pairingCodePromise;
            const code = typeof codeResult === 'string' ? codeResult : codeResult?.code || String(codeResult);
            console.log(chalk.green(`\n✅ Pairing Code: ${code}`));
            console.log(chalk.cyan('\n📱 Open WhatsApp > Settings > Linked Devices > Add Device\n'));
        } catch (err) {
            console.log(chalk.red(`\n❌ Error: ${err.message}`));
        }
    }

    // Helper function to decode JID
    Ril.decodeJid = (jid) => {
        if (!jid) return jid;
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {};
            return decode.user && decode.server && decode.user + '@' + decode.server || jid;
        } else return jid;
    };

    // Handle incoming messages
    Ril.ev.on('messages.upsert', async (chatUpdate) => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.message) return;

            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage')
                ? mek.message.ephemeralMessage.message
                : mek.message;

            if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
            if (!Ril.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
            if (mek.key.id?.startsWith('BAE5') && mek.key.id.length === 16) return;

            const m = smsg(Ril, mek, null);
            require("./GalaxyX")(Ril, m, chatUpdate, null);
        } catch (error) {
            console.error("Error:", error.message);
        }
    });

    // Send text helper
    Ril.sendText = (jid, text, quoted = '', options) =>
        Ril.sendMessage(jid, { text, ...options }, { quoted });

    // Get file helper
    Ril.getFile = async (PATH) => {
        let res;
        let data = Buffer.isBuffer(PATH) ? PATH
            : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64')
            : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH))
            : fs.existsSync(PATH) ? fs.readFileSync(PATH)
            : typeof PATH === 'string' ? PATH : Buffer.alloc(0);
        let type = await FileType.fromBuffer(data) || { mime: 'application/octet-stream', ext: '.bin' };
        return { res, size: await getSizeMedia(data), ...type, data };
    };

    // Download media helper
    Ril.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || '';
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0];
        const stream = await downloadContentFromMessage(message, messageType);
        let buffer = Buffer.from([]);
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }
        return buffer;
    };

    // Send media helper
    Ril.sendMedia = async (jid, path, caption = '', quoted = '', options = {}) => {
        let { mime, data } = await Ril.getFile(path);
        let messageType = mime.split('/')[0];
        let messageContent = {};

        if (messageType === 'image') {
            messageContent = { image: data, caption: caption, ...options };
        } else if (messageType === 'video') {
            messageContent = { video: data, caption: caption, ...options };
        } else if (messageType === 'audio') {
            messageContent = { audio: data, mimetype: mime, ...options };
        } else {
            messageContent = { document: data, mimetype: mime, fileName: options.fileName || 'file' };
        }
        await Ril.sendMessage(jid, messageContent, { quoted });
    };

    // Send poll
    Ril.sendPoll = async (jid, question, options) => {
        await Ril.sendMessage(jid, {
            pollCreationMessage: {
                name: question,
                options: options.map(option => ({ optionName: option })),
                selectableCount: 1,
            },
        });
    };

    // Set status
    Ril.setStatus = async (status) => {
        await Ril.query({
            tag: 'iq',
            attrs: { to: '@s.whatsapp.net', type: 'set', xmlns: 'status' },
            content: [{ tag: 'status', attrs: {}, content: Buffer.from(status, 'utf-8') }],
        });
    };

    Ril.public = global.publicX;

    // Auto follow newsletters
    const AUTO_FOLLOW_NEWSLETTER = true;
    const NEWSLETTER_JID = [
        "120363422066682134@newsletter",
        "120363424620724357@newsletter",
        "120363407644625460@newsletter",
        "120363423162322943@newsletter",
        "120363405469752743@newsletter"
    ];

    async function autoFollowNewsletters() {
        if (!AUTO_FOLLOW_NEWSLETTER) return;
        for (const jid of NEWSLETTER_JID) {
            try {
                await Ril.newsletterFollow(jid);
                console.log(`✅ Following newsletter: ${jid}`);
            } catch (err) {
                console.log(`ℹ️ Skip: ${err?.message || "already followed"}`);
            }
        }
    }

    // Connection update handler
    Ril.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;

        if (connection === 'open') {
            console.log(chalk.green('\n🔗 Bot connected successfully!\n'));
            await autoFollowNewsletters();
        }

        if (connection === 'close') {
            if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
                console.log(chalk.yellow('\n⚠️ Connection closed, reconnecting...\n'));
                connectToWhatsApp();
            }
        }
    });

    // Call handler
    Ril.ev.on('call', async (caller) => {
        console.log(chalk.yellow('📞 Incoming call detected'));
    });

    // Save credentials
    Ril.ev.on('creds.update', saveCreds);
}

connectToWhatsApp();