/*═══════════════════════════════════════════════════════════════
   WAWeb.js - SIMULASI INTERAKTIF CARA BACA FILE
   Author: rvnnsix
   Run: node interaktif-waweb.js
═══════════════════════════════════════════════════════════════*/

const fs = require('fs');
const readline = require('readline');

// ═══════════════════════════════════════════════════════════════
// KONFIGURASI
// ═══════════════════════════════════════════════════════════════

const FILE_PATH = './WAWeb.js';
const WA_AUDIO = '🔊 ';
const WA_GREEN = '\x1b[32m';
const WA_YELLOW = '\x1b[33m';
const WA_BLUE = '\x1b[36m';
const WA_RED = '\x1b[31m';
const WA_RESET = '\x1b[0m';

let fileCache = null;
let lineCount = 0;

// ═══════════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════

function loading(text) {
    process.stdout.write(`\r${WA_BLUE}⏳ ${text}${WA_RESET}`);
}

function success(text) {
    console.log(`${WA_GREEN}✅ ${text}${WA_RESET}`);
}

function info(text) {
    console.log(`${WA_BLUE}ℹ️  ${text}${WA_RESET}`);
}

function error(text) {
    console.log(`${WA_RED}❌ ${text}${WA_RESET}`);
}

function section(title) {
    console.log(`\n${'═'.repeat(60)}`);
    console.log(`${WA_YELLOW}  ${title}${WA_RESET}`);
    console.log('═'.repeat(60));
}

function header(text) {
    console.log(`\n${WA_GREEN}▶ ${text}${WA_RESET}`);
}

function code(text) {
    console.log(`${WA_BLUE}${text}${WA_RESET}`);
}

function highlight(text, search) {
    return text.replace(new RegExp(search, 'gi'), (match) => `\x1b[41m${match}\x1b[0m`);
}

async function loadFile() {
    if (fileCache) return fileCache;

    loading('Memuat WAWeb.js...');
    try {
        const content = fs.readFileSync(FILE_PATH, 'utf-8');
        lineCount = content.split('\n').length;
        fileCache = content;
        success(`File dimuat! (${lineCount.toLocaleString()} baris, ${(content.length / 1024 / 1024).toFixed(1)}MB)`);
        return content;
    } catch (e) {
        error(`Gagal memuat file: ${e.message}`);
        return null;
    }
}

function searchInFile(content, pattern, options = {}) {
    const { limit = 10, ignoreCase = true } = options;
    const regex = new RegExp(pattern, ignoreCase ? 'gi' : 'g');
    const lines = content.split('\n');
    const results = [];

    lines.forEach((line, index) => {
        if (regex.test(line)) {
            results.push({ line: index + 1, content: line.trim() });
        }
    });

    return results;
}

function displayResults(results, pattern, maxLen = 100) {
    console.log(`\nDitemukan ${results.length} hasil untuk: "${pattern}"`);
    console.log('-'.repeat(60));

    if (results.length === 0) {
        console.log(`${WA_RED}Tidak ada hasil${WA_RESET}`);
        return;
    }

    results.slice(0, 10).forEach((r, i) => {
        const preview = r.content.length > maxLen
            ? r.content.substring(0, maxLen) + '...'
            : r.content;
        console.log(`${WA_YELLOW}${String(i + 1).padStart(3)}. ${WA_RESET}Line ${r.line}: ${preview}`);
    });

    if (results.length > 10) {
        console.log(`${WA_BLUE}... dan ${results.length - 10} hasil lainnya${WA_RESET}`);
    }
}

// ═══════════════════════════════════════════════════════════════
// SIMULASI INTERAKTIF - MENU UTAMA
// ═══════════════════════════════════════════════════════════════

async function showWelcome() {
    console.clear();
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ${WA_GREEN}🔍 SIMULASI INTERAKTIF: CARA BACA WAWeb.js${WA_RESET}                ║
║                                                              ║
║   Author: @rvnnsix | Telegram: @rvnnsix                      ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
    `);

    await loadFile();
}

async function showMenu(content) {
    console.log(`
┌──────────────────────────────────────────────────────────────┐
│  PILIH AKSI YANG MAU DIJALANKAN:                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ${WA_GREEN}1${WA_RESET}) 📊 Lihat Struktur File WAWeb.js                    │
│  ${WA_GREEN}2${WA_RESET}) 🔍 Demo Search: WebSocket URL                         │
│  ${WA_GREEN}3${WA_RESET}) 🔍 Demo Search: Module Definitions                   │
│  ${WA_GREEN}4${WA_RESET}) 🔍 Demo Search: API Endpoints                       │
│  ${WA_GREEN}5${WA_RESET}) 🔍 Demo Search: Error Messages                       │
│  ${WA_GREEN}6${WA_RESET}) 🔍 Demo Search: Custom Pattern                       │
│  ${WA_GREEN}7${WA_RESET}) 💻 Code Walkthrough: WebSocket Transport            │
│  ${WA_GREEN}8${WA_RESET}) 💻 Code Walkthrough: Binary Protocol                 │
│  ${WA_GREEN}9${WA_RESET}) 📖 Belajar: Apa itu Obfuscation?                    │
│  ${WA_GREEN}10${WA_RESET}) 🎯 Quiz: Test Pemahaman                            │
│  ${WA_GREEN}0${WA_RESET}) 🚪 Exit                                                │
│                                                              │
└──────────────────────────────────────────────────────────────┘
    `);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(`\n${WA_YELLOW}Pilih menu (0-10): ${WA_RESET}`, async (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 1: STRUKTUR FILE
// ═══════════════════════════════════════════════════════════════

async function simStrukturFile(content) {
    section('📊 STRUKTUR FILE WAWeb.js');

    console.log(`
WAWeb.js adalah bundled JavaScript dari WhatsApp Web.
File ini berisi ${lineCount.toLocaleString()} baris code yang di-combine dan di-obfuscate.

Struktur umum file:
    `);

    console.log(`
┌─────────────────────────────────────────────────────────────┐
│                    STRUKTUR WAWeb.js                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ SECTION 1: POLYFILLS (Baris 1-1000)                 │   │
│  │ • AbortController, AbortSignal, EventTarget         │   │
│  │ • Promise, Map, Set polyfills                       │   │
│  │ • Generic JavaScript untuk browser compatibility    │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ↓                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ SECTION 2: MODULE DEFINITIONS (~Baris 1000-160000) │   │
│  │ • __d("ModuleName", [deps], callback)               │   │
│  │ • WAWebBackendApi, WAWebXHR, WAWebSocketManager     │   │
│  │ • Handler untuk berbagai fitur WA                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ↓                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ SECTION 3: WEBSOCKET TRANSPORT (~Baris 160000+)     │   │
│  │ • WAWebSocketTransport                             │   │
│  │ • new WebSocket() - koneksi ke server WA           │   │
│  │ • wss://web.whatsapp.com/ws/chat                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                           ↓                                 │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ SECTION 4: BINARY PROTOCOL                          │   │
│  │ • WABinary, encodeProtobuf, decodeProtobuf         │   │
│  │ • Encode/decode message WA                         │   │
│  │ • Compression & decompression                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
    `);

    header('Membaca section secara langsung...');
    const lines = content.split('\n');

    console.log('\n📍 Sample dari Baris 1-20 (Polyfills):');
    console.log('-'.repeat(60));
    lines.slice(0, 20).forEach((line, i) => {
        console.log(`${String(i + 1).padStart(4)} │ ${line.substring(0, 80)}${line.length > 80 ? '...' : ''}`);
    });

    console.log('\n📍 Sample dari Baris 162400-162420 (WebSocket):');
    console.log('-'.repeat(60));
    for (let i = 162399; i < 162420 && i < lines.length; i++) {
        console.log(`${String(i + 1).padStart(4)} │ ${lines[i].substring(0, 80)}${lines[i].length > 80 ? '...' : ''}`);
    }

    info('Perhatikan perbedaan: polyfills readable, WebSocket obfuscated');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 2: SEARCH - WEBSOCKET URL
// ═══════════════════════════════════════════════════════════════

async function simSearchWebSocket(content) {
    section('🔍 SEARCH: WebSocket URL');

    console.log(`
WebSocket URL adalah endpoint yang dipakai WhatsApp Web
untuk koneksi real-time ke server.

LOKASI: Line 163476
PATTERN: wss://web.whatsapp.com
    `);

    header('Step 1: Search pattern "wss://web.whatsapp.com"');
    const results = searchInFile(content, 'wss://web.whatsapp.com', { limit: 50 });
    displayResults(results, 'wss://web.whatsapp.com');

    console.log('\n📝 Penjelasan:');
    console.log('   • wss:// = WebSocket Secure (SSL/TLS)');
    console.log('   • web.whatsapp.com = Domain WA');
    console.log('   • /ws/chat = WebSocket path untuk chat');

    header('Step 2: Cari Dev endpoint juga');
    const devResults = searchInFile(content, 'wss://dev-web.whatsapp.com', { limit: 50 });
    displayResults(devResults, 'wss://dev-web.whatsapp.com');

    header('Step 3: Lihat kode di sekitar WebSocket URL');

    const lines = content.split('\n');
    console.log('\n📍 Kode di Line 163476:');
    console.log('-'.repeat(60));

    const targetLine = 163476 - 1; // 0-indexed
    for (let i = Math.max(0, targetLine - 5); i <= Math.min(lines.length - 1, targetLine + 10); i++) {
        const prefix = i === targetLine ? '→ ' : '  ';
        const lineNum = String(i + 1).padStart(5);
        console.log(`${prefix}${lineNum} │ ${lines[i].substring(0, 100)}`);
    }

    console.log('\n💡 Insight:');
    console.log('   • Ada 2 endpoint: production & dev');
    console.log('   • Dev endpoint dipake untuk testing');
    console.log('   • /ws/chat adalah WebSocket chat protocol');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 3: SEARCH - MODULE DEFINITIONS
// ═══════════════════════════════════════════════════════════════

async function simSearchModules(content) {
    section('🔍 SEARCH: Module Definitions');

    console.log(`
WhatsApp Web pake module system sendiri yang dipanggil __d().
Format: __d("ModuleName", [dependencies], function callback)

LOKASI: Seluruh file
PATTERN: __d\\("WAWeb
    `);

    header('Step 1: Search pattern "__d(\"WAWeb"');
    const results = searchInFile(content, '__d\\("WAWeb', { limit: 50 });
    displayResults(results, '__d("WAWeb', 120);

    header('Step 2: Cari module spesifik yang penting');

    const importantModules = [
        { name: 'WAWebBackendApi', desc: 'Backend API calls' },
        { name: 'WAWebXHR', desc: 'HTTP requests' },
        { name: 'WAWebSocketManager', desc: 'WebSocket management' },
        { name: 'WABinary', desc: 'Binary protocol' },
        { name: 'WALogger', desc: 'Logging system' }
    ];

    console.log('\n┌─────────────────────────────────────────────────────┐');
    console.log('│           MODULE PENTING YANG PERLU DIKETAHUI        │');
    console.log('├─────────────────────────────────────────────────────┤');

    for (const mod of importantModules) {
        const modResults = searchInFile(content, `__d\\("${mod.name}"`, { limit: 1 });
        if (modResults.length > 0) {
            console.log(`│ ${mod.name.padEnd(25)} │ Line ${modResults[0].line} │ ${mod.desc.padEnd(25)} │`);
        }
    }

    console.log('└─────────────────────────────────────────────────────┘');

    header('Step 3: Lihat struktur __d()');
    console.log('\n📍 Contoh __d() call:');
    console.log('-'.repeat(60));

    const sampleModule = results.find(r => r.content.includes('function'));
    if (sampleModule) {
        const lines = content.split('\n');
        for (let i = Math.max(0, sampleModule.line - 10); i < Math.min(lines.length, sampleModule.line + 5); i++) {
            const prefix = i === sampleModule.line - 1 ? '→ ' : '  ';
            console.log(`${prefix}${String(i + 1).padStart(5)} │ ${lines[i].substring(0, 100)}`);
        }
    }

    console.log('\n💡 Insight:');
    console.log('   • __d() = define module');
    console.log('   • [deps] = dependencies module lain');
    console.log('   • function(a,b,c) = implementation');
    console.log('   • pattern ini bisa dipake buat inject code');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 4: SEARCH - API ENDPOINTS
// ═══════════════════════════════════════════════════════════════

async function simSearchAPI(content) {
    section('🔍 SEARCH: API Endpoints');

    console.log(`
WhatsApp Web pake REST API untuk berbagai operasi.
Endpoint biasanya dipanggil lewat fetch() atau XMLHttpRequest.

PATTERN: /flows/json/
LOKASI: Line 146391
    `);

    header('Step 1: Search pattern "/flows/json/"');
    const results = searchInFile(content, '/flows/json/', { limit: 50 });
    displayResults(results, '/flows/json/');

    header('Step 2: Cari pattern API lainnya');

    const apiPatterns = [
        { pattern: '/api/', desc: 'General API calls' },
        { pattern: '\\.whatsapp\\.com\\/v', desc: 'WhatsApp API version' },
        { pattern: 'x-wa-group', desc: 'Group-related headers' }
    ];

    console.log('\n┌─────────────────────────────────────────────────────┐');
    console.log('│              API PATTERNS YANG DITEMUKAN             │');
    console.log('├─────────────────────────────────────────────────────┤');

    for (const api of apiPatterns) {
        const res = searchInFile(content, api.pattern, { limit: 1 });
        if (res.length > 0) {
            console.log(`│ ${api.pattern.padEnd(35)} │ Line ${res[0].line} │`);
        }
    }

    console.log('└─────────────────────────────────────────────────────┘');

    header('Step 3: Lihat XHR implementation');
    const xhrResults = searchInFile(content, 'XMLHttpRequest', { limit: 5 });
    displayResults(xhrResults, 'XMLHttpRequest', 80);

    console.log('\n💡 Insight:');
    console.log('   • API calls dipake buat fetch data');
    console.log('   • Headers include x-wa-group buat grup info');
    console.log('   • Version endpoint: /v/ untuk versioning');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 5: SEARCH - ERROR MESSAGES
// ═══════════════════════════════════════════════════════════════

async function simSearchErrors(content) {
    section('🔍 SEARCH: Error Messages');

    console.log(`
Error messages adalah petunjuk penting untuk memahami
bagaimana WhatsApp Web handle errors dan edge cases.

PATTERN: "WebSocket #
    `);

    header('Step 1: Search error patterns');
    const results = searchInFile(content, '"WebSocket #', { limit: 50 });
    displayResults(results, '"WebSocket #', 100);

    header('Step 2: Cari error handling codes');

    const errorPatterns = [
        { pattern: 'LogoutReason', desc: 'Logout reason constants' },
        { pattern: 'DisconnectReason', desc: 'Disconnect reasons' },
        { pattern: 'error\\.message', desc: 'Error message handling' },
        { pattern: 'catch\\(', desc: 'Catch blocks' }
    ];

    console.log('\n┌─────────────────────────────────────────────────────┐');
    console.log('│              ERROR HANDLING PATTERNS                 │');
    console.log('├─────────────────────────────────────────────────────┤');

    for (const err of errorPatterns) {
        const res = searchInFile(content, err.pattern, { limit: 1 });
        if (res.length > 0) {
            console.log(`│ ${err.pattern.padEnd(25)} │ Line ${res[0].line} │`);
        }
    }

    header('Step 3: Lihat error constants');

    const lines = content.split('\n');
    console.log('\n📍 Sample error definitions (LogoutReason):');
    console.log('-'.repeat(60));

    const logoutIdx = lines.findIndex(l => l.includes('LogoutReason'));
    if (logoutIdx !== -1) {
        for (let i = logoutIdx; i < logoutIdx + 20 && i < lines.length; i++) {
            if (lines[i].includes('LogoutReason') || lines[i].includes('Logout')) {
                console.log(`${String(i + 1).padStart(5)} │ ${lines[i].substring(0, 100)}`);
            }
        }
    }

    console.log('\n💡 Insight:');
    console.log('   • Error codes penting buat debugging');
    console.log('   • LogoutReason dipake buat handle disconnect');
    console.log('   • DisconnectReason.di = check reason');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 6: CUSTOM SEARCH
// ═══════════════════════════════════════════════════════════════

async function simCustomSearch(content) {
    section('🔍 CUSTOM SEARCH');

    console.log(`
Mau cari pattern sendiri? Masukkan regex atau string
yang mau lo cari di dalam file WAWeb.js.
    `);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(`\n${WA_YELLOW}Masukkan pattern yang mau dicari: ${WA_RESET}`, async (pattern) => {
            rl.close();

            if (!pattern.trim()) {
                console.log('Pattern kosong, dibatalkan.');
                resolve();
                return;
            }

            console.log(`\n🔍 Searching: "${pattern}"...`);

            try {
                const results = searchInFile(content, pattern, { limit: 20 });
                displayResults(results, pattern, 120);
            } catch (e) {
                error(`Search error: ${e.message}`);
            }

            resolve();
        });
    });
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 7: WEBSOCKET WALKTHROUGH
// ═══════════════════════════════════════════════════════════════

async function simWebSocketWalkthrough(content) {
    section('💻 WEBSOCKET TRANSPORT WALKTHROUGH');

    console.log(`
WebSocket adalah teknologi yang dipake WhatsApp Web untuk
komunikasi real-time. Mari kita trace alur kerja nya.

LOKASI: Line ~162413-16523
CLASS: WAWebSocketTransport
    `);

    header('Step 1: Cari class WebSocketTransport');

    const lines = content.split('\n');
    const wsLineIdx = lines.findIndex(l => l.includes('WebSocketTransport'));

    if (wsLineIdx !== -1) {
        console.log(`\n📍 Found at Line ${wsLineIdx + 1}`);
        console.log('-'.repeat(60));

        for (let i = wsLineIdx; i < wsLineIdx + 30 && i < lines.length; i++) {
            const line = lines[i].substring(0, 120);
            // Highlight keywords
            let highlighted = line
                .replace(/WebSocket/g, `${WA_GREEN}WebSocket${WA_RESET}`)
                .replace(/open/g, `${WA_YELLOW}open${WA_RESET}`)
                .replace(/close/g, `${WA_YELLOW}close${WA_RESET}`)
                .replace(/error/g, `${WA_RED}error${WA_RESET}`);
            console.log(`${String(i + 1).padStart(5)} │ ${highlighted}`);
        }
    }

    header('Step 2: Trace WebSocket URL initialization');

    const urlLineIdx = lines.findIndex(l => l.includes('wss://web.whatsapp.com'));
    if (urlLineIdx !== -1) {
        console.log('\n📍 WebSocket URL definition:');
        console.log('-'.repeat(60));

        for (let i = urlLineIdx - 5; i < urlLineIdx + 10 && i < lines.length; i++) {
            const prefix = i === urlLineIdx ? '→ ' : '  ';
            console.log(`${prefix}${String(i + 1).padStart(5)} │ ${lines[i].substring(0, 120)}`);
        }
    }

    header('Step 3: Flow diagram');

    console.log(`
┌─────────────────────────────────────────────────────────────┐
│              WEBSOCKET CONNECTION FLOW                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. App Start                                               │
│     │                                                       │
│     ▼                                                       │
│  2. Load WAWeb.js                                           │
│     │                                                       │
│     ▼                                                       │
│  3. __d("WAWebSocketTransport", ...) called                │
│     │                                                       │
│     ▼                                                       │
│  4. openWebSocket(url) invoked                             │
│     │                                                       │
│     ▼                                                       │
│  5. new WebSocket(wss://web.whatsapp.com/ws/chat)          │
│     │                                                       │
│     ▼                                                       │
│  6. onopen → connection established                        │
│     │                                                       │
│     ▼                                                       │
│  7. onmessage → receive data                               │
│     │                                                       │
│     ▼                                                       │
│  8. onerror → handle errors                                 │
│     │                                                       │
│     ▼                                                       │
│  9. onclose → cleanup or reconnect                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
    `);

    console.log('\n💡 Key Points:');
    console.log('   • WebSocketTransport manage koneksi');
    console.log('   • wss:// = secure WebSocket');
    console.log('   • /ws/chat = chat protocol endpoint');
    console.log('   • Auto-reconnect saat disconnect');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 8: BINARY PROTOCOL WALKTHROUGH
// ═══════════════════════════════════════════════════════════════

async function simBinaryProtocolWalkthrough(content) {
    section('💻 BINARY PROTOCOL WALKTHROUGH');

    console.log(`
WhatsApp pake binary protocol (bukan JSON) untuk komunikasi.
Ini bikin data lebih compact tapi susah dibaca manusia.

CLASS: WABinary
PATTERN: encodeProtobuf, decodeProtobuf
    `);

    header('Step 1: Cari WABinary module');

    const lines = content.split('\n');
    const binaryIdx = lines.findIndex(l => l.includes('__d("WABinary"'));

    if (binaryIdx !== -1) {
        console.log(`\n📍 Found at Line ${binaryIdx + 1}`);
        console.log('-'.repeat(60));

        for (let i = binaryIdx; i < binaryIdx + 30 && i < lines.length; i++) {
            const line = lines[i].substring(0, 100);
            let highlighted = line
                .replace(/WABinary/g, `${WA_GREEN}WABinary${WA_RESET}`)
                .replace(/encode/g, `${WA_YELLOW}encode${WA_RESET}`)
                .replace(/decode/g, `${WA_YELLOW}decode${WA_RESET}`)
                .replace(/protobuf/g, `${WA_BLUE}protobuf${WA_RESET}`);
            console.log(`${String(i + 1).padStart(5)} │ ${highlighted}`);
        }
    }

    header('Step 2: Cari encode/decode functions');

    const encodeIdx = lines.findIndex(l => l.includes('encodeProtobuf'));
    const decodeIdx = lines.findIndex(l => l.includes('decodeProtobuf'));

    console.log('\n┌─────────────────────────────────────────────────────┐');
    console.log('│              BINARY PROTOCOL FUNCTIONS               │');
    console.log('├─────────────────────────────────────────────────────┤');

    if (encodeIdx !== -1) {
        console.log(`│ encodeProtobuf    │ Line ${encodeIdx + 1} │`);
    }
    if (decodeIdx !== -1) {
        console.log(`│ decodeProtobuf    │ Line ${decodeIdx + 1} │`);
    }

    console.log('└─────────────────────────────────────────────────────┘');

    header('Step 3: Message format');

    console.log(`
┌─────────────────────────────────────────────────────────────┐
│              WHATSAPP BINARY MESSAGE FORMAT                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Frame Structure:                                           │
│  ┌─────────────┬─────────────┬─────────────────────────┐  │
│  │   Tag (3)   │  Length     │     Payload            │  │
│  │   bytes     │  (varint)   │     (protobuf)         │  │
│  └─────────────┴─────────────┴─────────────────────────┘  │
│                                                             │
│  Tag bytes:                                                 │
│  • 0 -> single byte                                        │
│  • 1 -> group                                               │
│  • 2 -> direct message                                     │
│  • 3 -> broadcast                                           │
│                                                             │
│  Example:                                                   │
│  • [0x00, 0x15] + message = single chat                     │
│  • [0x01, 0x2A] + message = group message                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
    `);

    console.log('\n💡 Key Points:');
    console.log('   • Binary format lebih compact dari JSON');
    console.log('   • Pakai Protocol Buffers (protobuf)');
    console.log('   • Tag byte menunjukkan message type');
    console.log('   • Length di-encode sebagai varint');
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 9: APA ITU OBFUSCATION
// ═══════════════════════════════════════════════════════════════

async function simObfuscation() {
    section('📖 APA ITU OBFUSCATION?');

    console.log(`
Obfuscation adalah proses bikin code susah dibaca manusia
tanpa mengubah fungsionalitas nya.

Ini yang bikin WAWeb.js susah dibaca.
    `);

    header('BEFORE (Original Code):');

    console.log(`
${WA_GREEN}
class WhatsAppConnection {
    constructor(url) {
        this.websocket = new WebSocket(url);
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.websocket.onopen = () => {
            console.log("Connected to WhatsApp!");
        };

        this.websocket.onmessage = (event) => {
            this.handleMessage(event.data);
        };
    }

    handleMessage(data) {
        const decoded = this.decodeBinary(data);
        this.processIncoming(decoded);
    }
}
${WA_RESET}`);

    header('AFTER (Obfuscated Code):');

    console.log(`
${WA_RED}
var a=function(b){function c(a){this.d=new WebSocket(a);this.e()}c.prototype.e=function(){this.d.onopen=function(){console.log("Connected!")};this.d.onmessage=function(a){this.f(a.data)}};c.prototype.f=function(a){var b=this.g(a);this.h(b)};return c}()
${WA_RESET}`);

    console.log(`
┌─────────────────────────────────────────────────────────────┐
│              OBFUSCATION TECHNIQUES                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Variable Renaming                                       │
│     • nama asli: websocketConnection                        │
│     • hasil: a, b, c, d, e, f...                            │
│                                                             │
│  2. Function Name Mangling                                  │
│     • nama asli: handleIncomingMessage                      │
│     • hasil: _0x1a2b3c atau single char                     │
│                                                             │
│  3. String Encoding                                         │
│     • nama asli: "WhatsApp Web"                             │
│     • hasil: "\\x57\\x68\\x61\\x74\\x73\\x41\\x70\\x70"        │
│                                                             │
│  4. Code Minification                                       │
│     • hapus spasi, newline, comments                        │
│     • satu baris bisa ribuan karakter                        │
│                                                             │
│  5. Control Flow Flattening                                 │
│     • bikin alur program susah diikuti                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
    `);

    header('Kenapa WA obfuscate code nya?');

    console.log(`
   1. 🔒 SECURITY - Hide proprietary protocol details
   2. ⚡ PERFORMANCE - Smaller file size = faster load
   3. 🛡️ ANTI-HACK - Bikin susah reverse engineer
   4. 📜 LEGAL - Protect intellectual property
    `);

    header('Cara deal dengan obfuscated code:');

    console.log(`
   1. 🔍 Pakai pattern matching (regex)
   2. 📊 Analyze structure, bukan readability
   3. 🎯 Focus ke specific parts yang нужн
   4. 📚 Pakai reference (Baileys, community docs)
   5. 🧪 Experiment & test
    `);
}

// ═══════════════════════════════════════════════════════════════
// SIMULATION 10: QUIZ
// ═══════════════════════════════════════════════════════════════

async function simQuiz() {
    section('🎯 QUIZ: TEST PEMAHAMAN');

    const questions = [
        {
            q: 'Berapa jumlah baris dalam WAWeb.js?',
            options: ['~50,000', '~182,000', '~500,000', '~1,000,000'],
            answer: 1
        },
        {
            q: 'Pattern apa yang dipake WhatsApp untuk define modules?',
            options: ['__d("...")', 'module.exports', 'require("...")', 'import(...)'],
            answer: 0
        },
        {
            q: 'WebSocket URL untuk production ada di line berapa?',
            options: ['~50,000', '~100,000', '~163,000', '~180,000'],
            answer: 2
        },
        {
            q: 'Teknologi apa yang dipake WA untuk binary message encoding?',
            options: ['JSON', 'XML', 'Protocol Buffers (protobuf)', 'YAML'],
            answer: 2
        },
        {
            q: 'Apa yang pertama lo harus lakukan saat baca WAWeb.js?',
            options: [
                'Baca seluruh file',
                'Search pattern tertentu',
                'Decode semua string',
                'Hapus semua comments'
            ],
            answer: 1
        }
    ];

    let correct = 0;

    console.log('\nJawab pertanyaan berikut untuk test pemahaman lo.\n');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];

        console.log(`\n📌 Question ${i + 1}/${questions.length}:`);
        console.log(`   ${q.q}\n`);

        q.options.forEach((opt, j) => {
            console.log(`   ${j + 1}. ${opt}`);
        });

        const answer = await new Promise((resolve) => {
            const qrl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            qrl.question(`\n${WA_YELLOW}Your answer (1-${q.options.length}): ${WA_RESET}`, (ans) => {
                qrl.close();
                resolve(parseInt(ans) - 1);
            });
        });

        if (answer === q.answer) {
            success(`Correct! ✓`);
            correct++;
        } else {
            error(`Wrong! The answer was: ${q.options[q.answer]}`);
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`\n🎉 FINAL SCORE: ${correct}/${questions.length}`);

    if (correct >= 4) {
        console.log(`${WA_GREEN}🎊 Excellent! Lo udah paham dasar reverse engineering WAWeb.js!${WA_RESET}`);
    } else if (correct >= 2) {
        console.log(`${WA_YELLOW}👍 Not bad, tapi masih perlu belajar lebih!${WA_RESET}`);
    } else {
        console.log(`${WA_RED}📚 Coba baca ulang materinya ya!${WA_RESET}`);
    }

    console.log('\n💡 Remember: Kunci utama adalah PATTERN MATCHING!');
}

// ═══════════════════════════════════════════════════════════════
// MAIN LOOP
// ═══════════════════════════════════════════════════════════════

async function main() {
    await showWelcome();

    let running = true;

    while (running) {
        const choice = await showMenu(fileCache);

        switch (choice) {
            case '1':
                await simStrukturFile(fileCache);
                break;
            case '2':
                await simSearchWebSocket(fileCache);
                break;
            case '3':
                await simSearchModules(fileCache);
                break;
            case '4':
                await simSearchAPI(fileCache);
                break;
            case '5':
                await simSearchErrors(fileCache);
                break;
            case '6':
                await simCustomSearch(fileCache);
                break;
            case '7':
                await simWebSocketWalkthrough(fileCache);
                break;
            case '8':
                await simBinaryProtocolWalkthrough(fileCache);
                break;
            case '9':
                await simObfuscation();
                break;
            case '10':
                await simQuiz();
                break;
            case '0':
                console.log(`\n${WA_GREEN}👋 Bye! Thanks sudah belajar!${WA_RESET}`);
                console.log(`📚 Docs: README.txt`);
                console.log(`💻 Video: script-video.txt`);
                console.log(`🔗 Telegram: @rvnnsix\n`);
                running = false;
                break;
            default:
                error('Pilihan tidak valid. Pilih 0-10.');
        }

        if (running && choice !== '0') {
            console.log('\n');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            await new Promise((resolve) => {
                rl.question(`${WA_YELLOW}Tekan ENTER untuk lanjut...${WA_RESET}`, () => {
                    rl.close();
                    resolve();
                });
            });
        }
    }
}

// Run
main().catch(console.error);

// ═══════════════════════════════════════════════════════════════
// CREDITS
// ═══════════════════════════════════════════════════════════════
// Author: rvnnsix
// Telegram: @rvnnsix
// Instagram: @tamainfinity_
// ═══════════════════════════════════════════════════════════════