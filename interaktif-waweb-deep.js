/*═══════════════════════════════════════════════════════════════════════════
   WAWeb.js - SIMULASI INTERAKTIF LENGKAP (DEEP DIVE EDITION)
   Author: rvnnsix

   Ini adalah panduan paling detail untuk memahami cara kerja WAWeb.js
   Semua penjelasan disertai code asli dari file, baris per baris

   Run: node interaktif-waweb-deep.js
═══════════════════════════════════════════════════════════════════════════*/

const fs = require('fs');
const readline = require('readline');

// ════════════════════════════════════════════════════════════════════════════
// KONFIGURASI & UTILITY
// ════════════════════════════════════════════════════════════════════════════

const FILE_PATH = './WAWeb.js';
const C = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[36m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
    bold: '\x1b[1m'
};

let content = null;
let lines = null;

function clear() { console.clear(); }

function line() { console.log('─'.repeat(70)); }

function header(text) {
    console.log(`\n${C.green}${C.bold}▶ ${text}${C.reset}`);
}

function subheader(text) {
    console.log(`\n${C.cyan}  ▸ ${text}${C.reset}`);
}

function info(text) {
    console.log(`${C.blue}  ℹ ${text}${C.reset}`);
}

function warn(text) {
    console.log(`${C.yellow}  ⚠ ${text}${C.reset}`);
}

function error(text) {
    console.log(`${C.red}  ❌ ${text}${C.reset}`);
}

function code(text) {
    console.log(`${C.magenta}    ${text}${C.reset}`);
}

function highlight(text, keyword) {
    return text.replace(new RegExp(keyword, 'gi'), `\x1b[41m${keyword}\x1b[0m`);
}

function showLine(lineNum, context = 0) {
    const start = Math.max(0, lineNum - context);
    const end = Math.min(lines.length, lineNum + context + 1);

    for (let i = start; i < end; i++) {
        const prefix = i === lineNum - 1 ? '  → ' : '    ';
        const num = String(i + 1).padStart(6);
        const text = lines[i].substring(0, 100);
        console.log(`${prefix}${C.cyan}${num}${C.reset} │ ${text}`);
    }
}

function wait() {
    return new Promise(resolve => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question(`\n${C.yellow}  Tekan ENTER untuk lanjut...${C.reset}`, () => {
            rl.close();
            resolve();
        });
    });
}

function ask(question) {
    return new Promise(resolve => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        rl.question(question, ans => {
            rl.close();
            resolve(ans);
        });
    });
}

function search(pattern, options = {}) {
    const { limit = 50, context = 0 } = options;
    const regex = new RegExp(pattern, 'gi');
    const results = [];

    lines.forEach((line, i) => {
        if (regex.test(line)) {
            results.push({ line: i + 1, content: line });
        }
    });

    return results;
}

// ════════════════════════════════════════════════════════════════════════════
// LOAD FILE
// ════════════════════════════════════════════════════════════════════════════

async function load() {
    clear();
    console.log(`
${C.green}${C.bold}╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   🔍 DEEP DIVE: CARA BACA WAWeb.js                                  ║
║   ─────────────────────────────────────────────────────            ║
║   Panduan paling detail untuk memahami WhatsApp Web dari A-Z       ║
║                                                                    ║
║   Author: rvnnsix                                                  ║
║   Telegram: @rvnnsix | IG: @tamainfinity_                          ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝${C.reset}
    `);

    info('Memuat WAWeb.js...');

    try {
        content = fs.readFileSync(FILE_PATH, 'utf-8');
        lines = content.split('\n');

        console.log(`
${C.green}  ✅ File berhasil dimuat!${C.reset}

    📊 Stats:
    • Baris: ${lines.length.toLocaleString()}
    • Ukuran: ${(content.length / 1024 / 1024).toFixed(1)} MB
    • Karakter: ${content.length.toLocaleString()}
        `);

    } catch (e) {
        error(`Gagal load file: ${e.message}`);
        process.exit(1);
    }

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 1: PENDAHULUAN - APA ITU WAWeb.js
// ════════════════════════════════════════════════════════════════════════════

async function bagian1() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 1: PENDAHULUAN
═══════════════════════════════════════════════════════════════════════════${C.reset}
    `);

    console.log(`
${C.bold}${C.yellow}1.1 APA ITU WAWeb.js?${C.reset}

WAWeb.js adalah ${C.bold}bundled JavaScript${C.reset} dari WhatsApp Web yang merupakan
file utama yang di-download oleh browser saat lo membuka web.whatsapp.com.

${C.cyan}─────────────────────────────────────────────────────────────────────${C.reset}

${C.bold}Definisi Teknis:${C.reset}
• File type: JavaScript (application/javascript)
• Format: UMD (Universal Module Definition) bundle
• Target: Browser & Node.js environments
• Size: ~6.8 MB / 182,422 baris
• Build: Webpack/Rollup dengan minification & obfuscation

${C.cyan}─────────────────────────────────────────────────────────────────────${C.reset}

${C.bold}Kenapa jadi 1 file besar?${C.reset}

WhatsApp Web terdiri dari ${C.bold}ratusan file JavaScript${C.reset}. Untuk optimasi:

1. ${C.green}Bundle${C.reset} - Semua file di-combine jadi 1
2. ${C.green}Minify${C.reset} - Spasi, newline dihapus
3. ${C.green}Obfuscate${C.reset} - Variable dirandomize
4. ${C.green}Compress${C.reset} - Gzip/Brotli compression

Ini bikin page load jadi lebih cepat, tapi susah dibaca.
    `);

    console.log(`
${C.bold}${C.yellow}1.2 APA BEDA NYA DARI SOURCE CODE?${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│  SOURCE CODE (Development)          │  BUNDLED (Production)        │
├─────────────────────────────────────┼──────────────────────────────┤
│  Banyak file terpisah               │  1 file besar                │
│  Nama variable jelas               │  a, b, c, d...              │
│  Comments ada                      │  Comments dihapus           │
│  Readable                          │  Obfuscated                 │
│  Debug friendly                    │  Minified                    │
└─────────────────────────────────────┴──────────────────────────────┘${C.reset}

${C.bold}Contoh Ubah Nama Variable:${C.reset}
`);

    code('// Source code asli (readable)');
    code('class WhatsAppConnection {');
    code('    constructor(serverUrl) {');
    code('        this.websocketConnection = new WebSocket(serverUrl);');
    code('    }');
    code('    sendMessage(encodedData) {');
    code('        this.websocketConnection.send(encodedData);');
    code('    }');
    code('}');

    console.log('\n' + C.red + '       ↓ Minified & Obfuscated ↓' + C.reset + '\n');

    code('// WAWeb.js (garbage)');
    code('var A=function(a){function b(c){this.d=new WebSocket(c);this.e()}');
    code('b.prototype.e=function(){this.d.onmessage=function(a){this.f(a)}};');

    console.log(`
${C.bold}${C.yellow}1.3 KENAPA WA OBFUSCATE CODE NYA?${C.reset}

Ada 4 alasan utama:

${C.green}1. Keamanan${C.reset}
   • Hide proprietary protocol details
   • Cegah orang tau cara kerja internal
   • Lindungi trade secrets

${C.green}2. Performa${C.reset}
   • File lebih kecil = load lebih cepat
   • Less bandwidth usage
   • Parse time lebih cepat

${C.green}3. Anti-Hack${C.reset}
   • Bikin susah reverse engineer
   • Cegah injection/ tampering
   • Protect dari exploit discovery

${C.green}4. Legal/Patent${C.reset}
   • Lindungi intellectual property
   • Bikin susah bukti plagiarisme
   • WhatsApp lawsuit prevention
    `);

    console.log(`
${C.bold}${C.yellow}1.4 APA YANG BISA LO LAKUKAN DENGAN WAWeb.js?${C.reset}

Despite being obfuscated, lo masih bisa:

${C.green}✅ Extract Endpoints${C.reset}
   • WebSocket URLs
   • API endpoints
   • Server addresses

${C.green}✅ Understand Flow${C.reset}
   • Cara koneksi dibuat
   • Alur message handling
   • Error handling logic

${C.green}✅ Find Vulnerabilities${C.reset}
   • Security gaps
   • Rate limiting issues
   • Auth bypass possibilities

${C.green}✅ Learn Patterns${C.reset}
   • Module system
   • Binary protocol structure
   • Authentication flow
    `);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 2: STRUKTUR FILE - BAGIAN PER BAGIAN
// ════════════════════════════════════════════════════════════════════════════

async function bagian2() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 2: STRUKTUR FILE
═══════════════════════════════════════════════════════════════════════════${C.reset}

WAWeb.js punya struktur yang bisa lo bagi jadi beberapa section utama.
Mari kita analyze setiap section.
    `);

    console.log(`
${C.bold}${C.yellow}2.1 VISUALISASI STRUKTUR Keseluruhan${C.reset}

${C.cyan}┌───────────────────────────────────────────────────────────────────┐
│                        WAWeb.js - 182,422 BARIS                        │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 1-1,000                                                     │
│  ══════════════════════════                                        │
│  POLYFILLS & SHIMS                                                 │
│  • AbortController, AbortSignal                                   │
│  • EventTarget, CustomEvent                                        │
│  • Promise, Map, Set polyfills                                      │
│  • Browser compatibility layer                                     │
│  • Readable: YES (generic code)                                    │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 1,000-50,000                                                │
│  ══════════════════════════════════════════════════════════════    │
│  MODULE DEFINITIONS - PART 1 (Core)                                │
│  • __d("WAWebBackendApi"...)                                       │
│  • __d("WAWebXHR"...)                                              │
│  • __d("WAWebEventEmitter"...)                                     │
│  • Readable: NO (obfuscated)                                       │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 50,000-100,000                                              │
│  ══════════════════════════════════════════════════════════════    │
│  MODULE DEFINITIONS - PART 2 (Features)                            │
│  • __d("WAWebChat"...)                                             │
│  • __d("WAWebMessage"...)                                          │
│  • __d("WAWebContact"...)                                          │
│  • Readable: NO (obfuscated)                                       │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 100,000-140,000                                             │
│  ══════════════════════════════════════════════════════════════    │
│  MODULE DEFINITIONS - PART 3 (UI/Storage)                          │
│  • __d("WAWebGroup"...)                                            │
│  • __d("WAWebMedia"...)                                            │
│  • __d("WAWebDb"...)                                               │
│  • Readable: NO (obfuscated)                                       │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 140,000-162,000                                             │
│  ══════════════════════════════════════════════════════════════    │
│  NETWORK & PROTOCOL                                                │
│  • __d("WAWebSocketTransport"...)                                  │
│  • __d("WABinary"...)                                              │
│  • __d("encodeProtobuf"...)                                       │
│  • Readable: NO (critical code)                                   │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 162,000-170,000                                             │
│  ══════════════════════════════════════════════════════════════    │
│  WEBSOCKET TRANSPORT (CRITICAL)                                    │
│  • WebSocket connection logic                                      │
│  • wss://web.whatsapp.com/ws/chat                                 │
│  • Message routing                                                 │
│  • Reconnection logic                                              │
│  • Readable: PARTIAL (URLs visible)                               │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  BARIS 170,000-182,422                                             │
│  ══════════════════════════════════════════════════════════════    │
│  MISC & BOOTSTRAP                                                  │
│  • Crypto utilities                                                │
│  • Initialization code                                             │
│  • Export module definitions                                        │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    header('Mari kita lihat actual code dari setiap section:');

    // Section 1: Polyfills
    console.log(`
${C.bold}${C.yellow}2.2 SECTION 1: POLYFILLS (Baris 1-1000)${C.reset}

Ini bagian paling mudah dibaca karena isinya generic JavaScript polyfills
yang sering dipake di browser lama.
    `);

    subheader('Sample dari Baris 1-30:');
    line();
    for (let i = 0; i < 30; i++) {
        const num = String(i + 1).padStart(4);
        console.log(`  ${C.cyan}${num}${C.reset} │ ${lines[i].substring(0, 90)}`);
    }

    console.log(`
${C.green}✅ Bisa dibaca!${C.reset} Ini generic code yang sama di semua project.

Ciri-ciri polyfills:
• Nama function jelas (AbortController, addEventListener)
• Pattern standard JavaScript
• Bisa ketemu di internet (open source)
    `);

    await wait();

    // Section 2: Module Definitions
    clear();
    console.log(`
${C.bold}${C.yellow}2.3 SECTION 2: MODULE DEFINITIONS (Baris 1000-162,000)${C.reset}

Ini bagian terbesar dan paling obfuscated. Semua fitur WA di-define di sini
pake pattern __d("ModuleName", [deps], callback).
    `);

    subheader('Sample module definitions:');
    line();

    const sampleModules = [
        search('__d\\("WAWebBackendApi"')[0],
        search('__d\\("WAWebXHR"')[0],
        search('__d\\("WAWebSocketManager"')[0]
    ].filter(Boolean);

    sampleModules.forEach((mod, i) => {
        console.log(`\n  ${C.green}Module ${i + 1}:${C.reset}`);
        showLine(mod.line, 2);
    });

    console.log(`
${C.bold}${C.yellow}Anatomi __d() Call:${C.reset}

${C.cyan}__d("NAMAMODULE", [DEPENDENCIES], function(a, b, c) {
    // Implementation code di sini
    // Isinya obfuscated, variable a, b, c
});${C.reset}

• ${C.green}NAMAMODULE${C.reset} - Nama module (bisa ketemu plaintext)
• ${C.green}[DEPENDENCIES]${C.reset} - Module lain yang dibutuhin
• ${C.green}function(a, b, c)${C.reset} - Callback dengan parameter obfuscated

${C.red}❌ Variable dalam function di-obfuscate${C.reset}
${C.green}✅ Nama module tetap readable${C.reset}
    `);

    await wait();

    // Section 3: WebSocket Transport
    clear();
    console.log(`
${C.bold}${C.yellow}2.4 SECTION 3: WEBSOCKET TRANSPORT (Baris 162,000-170,000)${C.reset}

Ini section paling penting karena handle koneksi real-time ke server WA.
    `);

    const wsResults = search('wss://web.whatsapp.com');
    const wsLine = wsResults[0]?.line || 163476;

    subheader(`WebSocket URL ada di Line ${wsLine}:`);
    line();
    showLine(wsLine, 10);

    console.log(`
${C.bold}Penjelasan:${C.reset}

${C.green}wss://web.whatsapp.com/ws/chat${C.reset}
  • wss = WebSocket Secure (SSL/TLS)
  • web.whatsapp.com = WhatsApp domain
  • /ws/chat = WebSocket path untuk chat protocol

Ini endpoint yang dipake browser untuk koneksi real-time.
    `);

    // Find WebSocket class
    const wsClassResults = search('WebSocketTransport');
    const wsClassLine = wsClassResults[0]?.line || 162413;

    subheader(`WebSocketTransport class di Line ${wsClassLine}:`);
    line();
    showLine(wsClassLine, 15);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 3: MODULE SYSTEM - DETAIL
// ════════════════════════════════════════════════════════════════════════════

async function bagian3() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 3: MODULE SYSTEM
═══════════════════════════════════════════════════════════════════════════${C.reset}

WhatsApp Web pake module system custom yang beda dari CommonJS/ESM standard.
Mari kita dalami.
    `);

    console.log(`
${C.bold}${C.yellow}3.1 ANATOMI MODULE SYSTEM${C.reset}

WhatsApp pake 4 fungsi utama:

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  __d(name, deps, factory)                                       │
│  ├─── Define module                                              │
│  │                                                              │
│  __r(id)                                                        │
│  ├─── Require/load module by ID                                  │
│  │                                                              │
│  __x(expr)                                                      │
│  ├─── Eval expression (obfuscated eval)                          │
│  │                                                              │
│  __h(obj, prop, value)                                           │
│  ├─── Hook/monkey-patch                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    // Find actual usage
    const dResults = search('__d\\("');
    const rResults = search('__r\\(');
    const xResults = search('__x\\(');

    console.log(`
${C.bold}Stats Module System:${C.reset}

${C.green}__d()${C.reset} - Define module  : ${dResults.length.toLocaleString()} kali
${C.green}__r()${C.reset} - Require module : ${rResults.length.toLocaleString()} kali
${C.green}__x()${C.reset} - Eval expression: ${xResults.length.toLocaleString()} kali
    `);

    subheader('Contoh __d() - Define Module:');
    line();
    const firstD = dResults[100]?.line || 1000;
    showLine(firstD, 5);

    subheader('Contoh __r() - Require Module:');
    line();
    const firstR = rResults[50]?.line || 1000;
    showLine(firstR, 3);

    console.log(`
${C.bold}${C.yellow}3.2 MODULE DEPENDENCIES${C.reset}

Modules di WA punya dependencies. Contoh:

${C.cyan}__d("WAWebBackendApi", [
    "Promise",           // dependency 1
    "WALogger",          // dependency 2
    "WAWebURLUtils",     // dependency 3
    "asyncToGeneratorRuntime"  // dependency 4
], function(a, b, c, d) {
    // a = Promise, b = WALogger, c = WAWebURLUtils, d = asyncToGeneratorRuntime
});${C.reset}

Dependencies di-load duluan sebelum callback di-execute.
Parameter function = dependency modules.
    `);

    console.log(`
${C.bold}${C.yellow}3.3 MODULE YANG PENTING${C.reset}

${C.green}┌─────────────────────────────────────────────────────────────────┐
│ MODULE NAME                  │ FUNGSI                              │
├───────────────────────────────┼─────────────────────────────────────┤
│ WAWebBackendApi              │ HTTP API calls ke server            │
│ WAWebXHR                     │ XMLHttpRequest wrapper               │
│ WAWebSocketTransport         │ WebSocket connection management     │
│ WAWebSocketManager          │ High-level socket orchestration      │
│ WABinary                     │ Binary encoding/decoding             │
│ WAWebLidUtils                │ LID (Login ID) utilities             │
│ WALogger                     │ Logging system                      │
│ WAWebUserPrefs               │ User preferences storage             │
│ WAWebChatMessageParser       │ Parse incoming messages             │
│ WAWebSendMessageUtils       │ Send message utilities               │
└───────────────────────────────┴─────────────────────────────────────┘${C.reset}
    `);

    // Find all important modules
    const importantModules = [
        'WAWebBackendApi',
        'WAWebXHR',
        'WAWebSocketTransport',
        'WABinary',
        'WAWebLidUtils',
        'WALogger'
    ];

    console.log(`\n${C.bold}Cari posisi module:${C.reset}\n`);

    for (const mod of importantModules) {
        const results = search(`__d\\("${mod}"`);
        if (results.length > 0) {
            console.log(`  ${C.green}${mod.padEnd(25)}${C.reset} → Line ${results[0].line.toString().padStart(7)}`);
        }
    }

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 4: WEBSOCKET - DETAIL LENGKAP
// ════════════════════════════════════════════════════════════════════════════

async function bagian4() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 4: WEBSOCKET CONNECTION - DEEP DIVE
═══════════════════════════════════════════════════════════════════════════${C.reset}

WebSocket adalah teknologi yang bikin WA Web bisa komunikasi real-time
tanpa polling. Mari kita dalami cara kerja nya.
    `);

    console.log(`
${C.bold}${C.yellow}4.1 APA ITU WEBSOCKET?${C.reset}

WebSocket adalah protocol untuk komunikasi bidirectional (dua arah)
antara client dan server melalui single TCP connection.

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│                     HTTP vs WEBSOCKET                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HTTP (Traditional)          │  WebSocket (Real-time)           │
│  ───────────────────────     │  ─────────────────────────       │
│  Client request              │  Client ━━━━━━━━━━┓              │
│  ──► Server                  │           ━━━━━━► │              │
│  Client request              │                 │              │
│  ──► Server                  │           ━━━━━━► │              │
│                              │                 ▼              │
│  ❌ Tidak real-time          │  ✅ Real-time (push)             │
│  ❌ Polling needed           │  ✅ Bidirectional                 │
│  ❌ Connection per request   │  ✅ Persistent connection         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    // Find WebSocket URL
    const wsUrlResults = search('wss://web.whatsapp.com');
    const wsUrlLine = wsUrlResults[0]?.line || 163476;

    console.log(`
${C.bold}${C.yellow}4.2 WEBSOCKET ENDPOINT${C.reset}

${C.green}URL:${C.reset} wss://web.whatsapp.com/ws/chat
${C.green}Line:${C.reset} ${wsUrlLine}

Mari kita lihat kode di sekitar endpoint ini:
    `);

    line();
    showLine(wsUrlLine, 15);

    console.log(`
${C.bold}Penjelasan Kode:${C.reset}

• ${C.green}wss://${C.reset} - WebSocket Secure (SSL encrypted)
• ${C.green}web.whatsapp.com${C.reset} - WhatsApp Web domain
• ${C.green}/ws/chat${C.reset} - Path untuk chat WebSocket protocol

Browser akan membuat persistent TCP connection ke endpoint ini
untuk kirim/terima pesan real-time.
    `);

    await wait();

    clear();
    console.log(`
${C.bold}${C.yellow}4.3 WEBSOCKET TRANSPORT CLASS${C.reset}

WhatsApp punya custom WebSocket transport class yang handle koneksi.
Mari kita trace implementasinya.
    `);

    // Find WebSocketTransport
    const transportResults = search('WebSocketTransport');
    const transportLine = transportResults[0]?.line || 162413;

    console.log(`\nWebSocketTransport definition di Line ${transportLine}:`);
    line();
    showLine(transportLine, 30);

    // Find new WebSocket()
    const newWsResults = search('new WebSocket\\(');
    const newWsLine = newWsResults[0]?.line || 162500;

    console.log(`\n${C.bold}WebSocket instantiation di Line ${newWsLine}:`);
    line();
    showLine(newWsLine, 5);

    console.log(`
${C.bold}${C.yellow}4.4 CONNECTION FLOW${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│              WEBSOCKET CONNECTION FLOW                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. INITIALIZATION                                               │
│     __d("WAWebSocketTransport", [...], function(...)             │
│     │                                                             │
│     ▼                                                             │
│  2. OPEN SOCKET                                                   │
│     openWebSocket("wss://web.whatsapp.com/ws/chat")              │
│     │                                                             │
│     ▼                                                             │
│  3. NEW WebSocket()                                               │
│     new WebSocket(url) → Browser opens TCP connection            │
│     │                                                             │
│     ▼                                                             │
│  4. HANDSHAKE (WebSocket upgrade)                                │
│     HTTP GET → Upgrade to WebSocket protocol                     │
│     │                                                             │
│     ▼                                                             │
│  5. CONNECTION OPEN                                              │
│     onopen callback fired                                         │
│     │                                                             │
│     ▼                                                             │
│  6. MESSAGE LOOP                                                  │
│     ◄── send() / recv() loop ──►                                │
│     │                                                             │
│  7. ON ERROR/CLOSE                                               │
│     handle error → maybe reconnect                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    // Find onopen, onmessage, onclose
    const onopenResults = search('onopen');
    const onmessageResults = search('onmessage');
    const oncloseResults = search('onclose');

    console.log(`\n${C.bold}Event handlers stats:${C.reset}

  onopen   : ${onopenResults.length.toLocaleString()} references
  onmessage: ${onmessageResults.length.toLocaleString()} references
  onerror  : ${search('onerror').length.toLocaleString()} references
  onclose  : ${oncloseResults.length.toLocaleString()} references
    `);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 5: BINARY PROTOCOL - DETAIL LENGKAP
// ════════════════════════════════════════════════════════════════════════════

async function bagian5() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 5: BINARY PROTOCOL - DEEP DIVE
═══════════════════════════════════════════════════════════════════════════${C.reset}

WhatsApp tidak pakai JSON untuk komunikasi. Mereka pakai binary protocol
yang lebih compact tapi susah dibaca manusia.
    `);

    console.log(`
${C.bold}${C.yellow}5.1 JSON vs BINARY${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│                 JSON                    │  BINARY PROTOCOL        │
├─────────────────────────────────────────┼─────────────────────────┤
│                                                                 │
│  {"type": "message",            │  [0x00, 0x15, 0x08, 0x01...] │
│   "to": "6281234567890",         │                           │
│   "body": "Hello"}              │                           │
│                                         │                         │
│  Size: ~70 bytes              │  Size: ~20 bytes           │
│  Human readable               │  Not readable               │
│  Parsing: JSON.parse()        │  Parsing: Custom decoder    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}

Binary protocol lebih efficient tapi butuh decoder khusus.
    `);

    // Find WABinary
    const binaryResults = search('__d\\("WABinary"');
    const binaryLine = binaryResults[0]?.line || 150000;

    console.log(`\n${C.bold}WABinary module di Line ${binaryLine}:`);
    line();
    showLine(binaryLine, 20);

    // Find encode/decode
    const encodeResults = search('encodeProtobuf');
    const decodeResults = search('decodeProtobuf');

    console.log(`
${C.bold}${C.yellow}5.2 ENCODE/DECODE FUNCTIONS${C.reset}

  encodeProtobuf : Line ${encodeResults[0]?.line || '?'}
  decodeProtobuf : Line ${decodeResults[0]?.line || '?'}
    `);

    console.log(`
${C.bold}${C.yellow}5.3 MESSAGE FRAME FORMAT${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│              WHATSAPP BINARY MESSAGE FRAME                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┬──────────┬───────────────────────────────────┐    │
│  │   TAG    │  LENGTH  │           PAYLOAD                 │    │
│  │ (1 byte) │ (varint) │         (protobuf)                │    │
│  └──────────┴──────────┴───────────────────────────────────┘    │
│                                                                 │
│  TAG Bytes:                                                      │
│  0x00 = single chat message                                     │
│  0x01 = group message                                           │
│  0x02 = direct message                                          │
│  0x03 = broadcast                                                │
│  0x04 = ephemeral message                                       │
│  0x05 = newsletter message                                      │
│                                                                 │
│  LENGTH: Variable integer (varint) encoding                     │
│  • Small numbers: 1 byte (0-127)                                │
│  • Large numbers: 2-3 bytes                                     │
│                                                                 │
│  PAYLOAD: Protocol Buffers encoded data                        │
│  • Message metadata                                             │
│  • Content (text, media, etc)                                   │
│  • Extras (mentions, quoted, etc)                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    console.log(`
${C.bold}${C.yellow}5.4 PROTOBUF BASICS${C.reset}

WhatsApp pakai Protocol Buffers (protobuf) untuk serialize data.

${C.green}Definisi Proto (contoh):${C.reset}
    message ClientMessage {
      optional string to = 1;
      optional string body = 2;
      optional string type = 3;
    }

${C.green}Encoded (binary):${C.reset}
    [0x08, 0x01, 0x12, 0x0D, 0x48, 0x65, 0x6C, 0x6C, 0x6F]

${C.green}Decoded:${C.reset}
    to: "6281234567890"
    body: "Hello"
    type: "chat"

WhatsApp punya proto definitions yang complex untuk semua
message types: text, media, location, poll, sticker, etc.
    `);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 6: AUTHENTICATION FLOW
// ════════════════════════════════════════════════════════════════════════════

async function bagian6() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 6: AUTHENTICATION FLOW
═══════════════════════════════════════════════════════════════════════════${C.reset}

WhatsApp Web punya authentication system yang complex. Mari kita dalami.
    `);

    console.log(`
${C.bold}${C.yellow}6.1 AUTH METHODS${C.reset}

WhatsApp Web support 2 authentication methods:

${C.green}┌─────────────────────────────────────────────────────────────────┐
│                    QR CODE SCAN (Legacy)                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. User buka web.whatsapp.com                                   │
│  2. Browser generate QR code                                      │
│  3. User scan QR dengan HP WhatsApp                               │
│  4. HP kirim auth credentials ke browser                          │
│  5. Browser simpan credentials                                    │
│  6. Koneksi established                                          │
│                                                                 │
│  Pros: ✅ Simpel, langsung                                        │
│  Cons: ❌ Perlu scan setiap browser baru                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
│                                                                 │
│  ┌─────────────────────────────────────────────────────────────────┐
│  │                    PAIRING CODE (Modern)                       │
│  ├─────────────────────────────────────────────────────────────────┤
│  │                                                                 │
│  1. User input nomor HP di web                                   │
│  2. Server kirim pairing code ke HP via WhatsApp                 │
│  3. User approve pairing di HP                                   │
│  4. Auth credentials di-generate                                  │
│  5. Browser simpan credentials                                    │
│  6. Koneksi established                                          │
│  │                                                                 │
│  Pros: ✅ No scan, bisa remote                                    │
│  Cons: ❌ More complex setup                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    // Find auth related code
    const authResults = search('authState');
    const credsResults = search('creds');

    console.log(`
${C.bold}${C.yellow}6.2 CREDENTIALS STRUCTURE${C.reset}

WhatsApp Web simpan credentials untuk reconnect tanpa scan ulang:

${C.green}Key Data dalam Credentials:${C.reset}

  • noiseKey        - untuk noise handshake
  • signedIdentityKey - untuk identity verification
  • signedPreKey   - untuk key agreement
  • registrationId  - WA registration ID
  • advSecretKey    - advertising secret
  • me              - user profile info

${C.green}Storage Format:${C.reset}
    ./session/
    ├──creds.json   - Credentials utama
    ├──keys/        - Signal keys
    │   ├──app-state-sync-key.json
    │   ├──app-state-cache.json
    │   └──session-*.json
    └──auth-info.json
    `);

    console.log(`
${C.bold}${C.yellow}6.3 AUTHENTICATION FLOW (Detail)${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│              WHATSAPP AUTHENTICATION FLOW                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PHASE 1: Handshake                                              │
│  ─────────────────────────────────────────────────────          │
│  Client ──► generateNoiseKey()                                   │
│  Client ──► sendClientHello(noiseKey) ──► Server                  │
│  Client ◄── ServerHello ◄── Server                               │
│  Client ──► verifyServerAuth()                                    │
│                                                                 │
│  PHASE 2: Authentication                                         │
│  ─────────────────────────────────────────────────────          │
│  User scan QR / input pairing code                               │
│  HP ──► Auth credentials ──► Browser                               │
│                                                                 │
│  PHASE 3: Session Store                                          │
│  ─────────────────────────────────────────────────────          │
│  Store creds.json                                                │
│  Store Signal keys in keys/                                      │
│                                                                 │
│  PHASE 4: Reconnect                                              │
│  ─────────────────────────────────────────────────────          │
│  Load creds.json on startup                                      │
│  Send auth message with stored credentials                       │
│  Server verify → allow reconnect                                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    // Find relevant code
    const qrResults = search('qr');
    const pairResults = search('pairing');

    console.log(`
${C.bold}References found:${C.reset}
  "qr" related   : ${qrResults.length.toLocaleString()} times
  "pairing" related: ${pairResults.length.toLocaleString()} times
    `);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 7: MESSAGE FLOW
// ════════════════════════════════════════════════════════════════════════════

async function bagian7() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 7: MESSAGE FLOW
═══════════════════════════════════════════════════════════════════════════${C.reset}

Mari kita trace alur message dari awal sampai akhir.
    `);

    console.log(`
${C.bold}${C.yellow}7.1 KIRIM PESAN (OUTGOING)${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│                    MESSAGE SEND FLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. User ketik pesan di chat                                      │
│  2. UI trigger sendMessage()                                      │
│  3. Message di-serialize ke protobuf                            │
│  4. Encrypt dengan Signal protocol                               │
│  5. Bungkus dalam WebSocket frame                                 │
│  6. Kirim via WebSocket ke server                                │
│  7. Server forward ke destination                                │
│  8. Server kirim receipt (ack)                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    // Find send related code
    const sendResults = search('sendMessage');
    const recvResults = search('recv\\(');

    console.log(`
${C.bold}Search references:${C.reset}
  sendMessage : ${sendResults.length.toLocaleString()} times
    `);

    console.log(`
${C.bold}${C.yellow}7.2 TERIMA PESAN (INCOMING)${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│                    MESSAGE RECEIVE FLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Data masuk via WebSocket                                      │
│  2. Decode WebSocket frame                                       │
│  3. Decrypt dengan Signal protocol                               │
│  4. Parse protobuf message                                       │
│  5. Deserialize ke JavaScript object                             │
│  6. Emit "messages.upsert" event                                 │
│  7. UI update chat view                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    console.log(`
${C.bold}${C.yellow}7.3 MESSAGE TYPES${C.reset}

${C.green}WhatsApp support banyak message types:${C.reset}

  • text           - Pesan teks biasa
  • image          - Gambar/foto
  • video          - Video
  • audio          - Audio/voice note
  • document       - Dokumen/file
  • sticker        - Sticker
  • location       - Lokasi/GPS
  • contact        - Kontak vCard
  • poll           - Poll/survey
  • list           - Interactive list
  • buttons        - Interactive buttons
  • template       - Template message
  • reaction       - Reaction ke pesan
  • newsletter     - Channel/newsletter
    `);

    // Find message types
    const msgTypes = ['conversation', 'imageMessage', 'videoMessage', 'audioMessage', 'stickerMessage'];

    console.log(`\n${C.bold}Message type references:${C.reset}\n`);

    for (const type of msgTypes) {
        const count = search(type).length;
        console.log(`  ${type.padEnd(20)} : ${count.toLocaleString()} references`);
    }

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 8: PRACTICAL SEARCH PATTERNS
// ════════════════════════════════════════════════════════════════════════════

async function bagian8() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 8: SEARCH PATTERNS PRAKTIS
═══════════════════════════════════════════════════════════════════════════${C.reset}

Ini panduan search patterns yang paling berguna untuk extract info dari WAWeb.js.
    `);

    console.log(`
${C.bold}${C.yellow}8.1 NETWORK & CONNECTION${C.reset}

${C.green}┌─────────────────────────────────────────────────────────────────┐
│ PATTERN                    │ HASIL                              │
├────────────────────────────┼────────────────────────────────────┤
│ wss://web.whatsapp.com     │ WebSocket production URL           │
│ wss://dev-web.whatsapp.com │ WebSocket dev URL                  │
│ /flows/json/               │ API fetch endpoint                 │
│ /download/                 │ Media download endpoint            │
│ /upload/                   │ Media upload endpoint               │
│ /auth/                     │ Authentication endpoint             │
└────────────────────────────┴────────────────────────────────────┘${C.reset}
    `);

    subheader('Cari WebSocket URL:');
    const wssResults = search('wss://');
    console.log(`  Found: ${wssResults.length.toLocaleString()} URLs`);
    if (wssResults[0]) {
        showLine(wssResults[0].line, 3);
    }

    subheader('Cari API endpoints:');
    const apiResults = search('\\/flows\\/');
    console.log(`  Found: ${apiResults.length.toLocaleString()} endpoints`);
    if (apiResults[0]) {
        showLine(apiResults[0].line, 3);
    }

    console.log(`
${C.bold}${C.yellow}8.2 MESSAGE HANDLING${C.reset}

${C.green}┌─────────────────────────────────────────────────────────────────┐
│ PATTERN                    │ HASIL                              │
├────────────────────────────┼────────────────────────────────────┤
│ messages.upsert            │ Incoming message handler           │
│ sendMessage                │ Outgoing message function          │
│ downloadMedia             │ Media download function            │
│ uploadMedia               │ Media upload function              │
│ messageType               │ Message type constants             │
│ pollCreationMessage        │ Poll creation                      │
└────────────────────────────┴────────────────────────────────────┘${C.reset}
    `);

    subheader('Cari message handlers:');
    const upsertResults = search('upsert');
    console.log(`  Found: ${upsertResults.length.toLocaleString()} references`);

    console.log(`
${C.bold}${C.yellow}8.3 ERROR & STATUS${C.reset}

${C.green}┌─────────────────────────────────────────────────────────────────┐
│ PATTERN                    │ HASIL                              │
├────────────────────────────┼────────────────────────────────────┤
│ DisconnectReason           │ Disconnect reason enum             │
│ LogoutReason              │ Logout reason enum                 │
│ error.message             │ Error handling                     │
│ catch\\(                   │ Try-catch blocks                   │
│ retry                      │ Retry logic                        │
└────────────────────────────┴────────────────────────────────────┘${C.reset}
    `);

    subheader('Cari disconnect reasons:');
    const discResults = search('DisconnectReason');
    console.log(`  Found: ${discResults.length.toLocaleString()} references`);

    console.log(`
${C.bold}${C.yellow}8.4 BINARY & CRYPTO${C.reset}

${C.green}┌─────────────────────────────────────────────────────────────────┐
│ PATTERN                    │ HASIL                              │
├────────────────────────────┼────────────────────────────────────┤
│ WABinary                   │ Binary protocol module             │
│ encodeProtobuf            │ Message encoder                    │
│ decodeProtobuf            │ Message decoder                    │
│ encrypt                   │ Encryption function                │
│ decrypt                   │ Decryption function               │
│ Signal                    │ Signal protocol references         │
└────────────────────────────┴────────────────────────────────────┘${C.reset}
    `);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 9: TOOLS & METHODS
// ════════════════════════════════════════════════════════════════════════════

async function bagian9() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 9: TOOLS & METHODS
═══════════════════════════════════════════════════════════════════════════${C.reset}

Ini cara-cara untuk analyze WAWeb.js lebih efisien.
    `);

    console.log(`
${C.bold}${C.yellow}9.1 TOOLS YANG DIPERLUKAN${C.reset}

${C.green}1. Text Editor (VS Code)${C.reset}
   • Load file (6.8MB manageable)
   • Ctrl+F untuk search
   • Ctrl+G untuk go to line
   • Minimap untuk navigation

${C.green}2. Terminal / Command Line${C.reset}
   • grep, Select-String untuk search
   • sed untuk extract sections
   • wc untuk line count

${C.green}3. Browser DevTools${C.reset}
   • Network tab untuk live traffic
   • Console untuk debugging
   • Sources untuk source maps

${C.green}4. Hex Editor (Optional)${C.reset}
   • Untuk analyze binary data
   • Untuk see raw WebSocket frames
    `);

    console.log(`
${C.bold}${C.yellow}9.2 SEARCH COMMANDS${C.reset}

${C.cyan}Windows PowerShell:${C.reset}
    Select-String -Path "WAWeb.js" -Pattern "wss://"
    Select-String -Path "WAWeb.js" -Pattern "__d\\(" -Context 2,2

${C.cyan}Linux/Mac:${C.reset}
    grep -n "wss://" WAWeb.js
    grep -B2 -A2 "__d\\(" WAWeb.js | head -50

${C.cyan}Node.js (Interactive):${C.reset}
    const fs = require('fs');
    const content = fs.readFileSync('WAWeb.js', 'utf-8');
    const lines = content.split('\\n');
    const matches = lines.filter(l => l.includes('wss://'));
    matches.forEach((m, i) => console.log(\`Line \${i+1}: \${m}\`));
    `);

    console.log(`
${C.bold}${C.yellow}9.3 EXTRACT SECTIONS${C.reset}

${C.cyan}Extract lines 162000-165000 (WebSocket section):${C.reset}
    sed -n '162000,165000p' WAWeb.js > websocket-section.js

${C.cyan}Count total lines:${C.reset}
    wc -l WAWeb.js

${C.cyan}Find specific pattern with line number:${C.reset}
    grep -n "pattern" WAWeb.js | head -20
    `);

    console.log(`
${C.bold}${C.yellow}9.4 REVERSE ENGINEERING WORKFLOW${C.reset}

${C.cyan}┌─────────────────────────────────────────────────────────────────┐
│              5-STEP REVERSE ENGINEERING WORKFLOW                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STEP 1: Identify Target                                         │
│  ─────────────────────────────────────────────────────          │
│  Mau cari apa? (URL, function, pattern, etc)                     │
│                                                                 │
│  STEP 2: Search Pattern                                          │
│  ─────────────────────────────────────────────────────          │
│  grep "__d(\"TARGET" WAWeb.js                                    │
│                                                                 │
│  STEP 3: Find Context                                            │
│  ─────────────────────────────────────────────────────          │
│  Look at surrounding code (before/after)                        │
│  cat -n WAWeb.js | sed -n 'LINE-10,LINE+10p'                    │
│                                                                 │
│  STEP 4: Trace Dependencies                                      │
│  ─────────────────────────────────────────────────────          │
│  Find __r() calls yang load module                               │
│  Understand data flow                                            │
│                                                                 │
│  STEP 5: Document & Replicate                                   │
│  ─────────────────────────────────────────────────────          │
│  Write down findings                                             │
│  Test dengan Baileys atau live traffic                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘${C.reset}
    `);

    await wait();
}

// ════════════════════════════════════════════════════════════════════════════
// BAGIAN 10: CHEATSHEET
// ════════════════════════════════════════════════════════════════════════════

async function bagian10() {
    clear();
    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════
BAGIAN 10: CHEATSHEET - RINGKASAN SEMUA YANG PENTING
═══════════════════════════════════════════════════════════════════════════${C.reset}
    `);

    console.log(`
${C.bold}${C.yellow}📊 FILE STATS${C.reset}
    • Lines: ${lines.length.toLocaleString()}
    • Size: ${(content.length / 1024 / 1024).toFixed(1)} MB
    • Format: UMD Bundle
    • Obfuscated: YES

${C.bold}${C.yellow}📍 KEY LOCATIONS${C.reset}
    • WebSocket URL    : Line ${search('wss://web.whatsapp.com')[0]?.line || '?'}
    • Dev WebSocket    : Line ${search('wss://dev-web.whatsapp.com')[0]?.line || '?'}
    • WAWebBackendApi  : Line ${search('__d\\("WAWebBackendApi"')[0]?.line || '?'}
    • WAWebXHR         : Line ${search('__d\\("WAWebXHR"')[0]?.line || '?'}
    • WABinary         : Line ${search('__d\\("WABinary"')[0]?.line || '?'}

${C.bold}${C.yellow}🔑 KEY PATTERNS${C.reset}
    • __d("...")       : Module definition (${search('__d\\("')[0] ? search('__d\\("').length + ' found' : '?'})
    • __r(...)         : Module require (${search('__r\\(')[0] ? search('__r\\(').length + ' found' : '?'})
    • wss://           : WebSocket endpoints
    • /flows/          : API endpoints
    • new WebSocket    : WS instantiation

${C.bold}${C.yellow}📋 MODULE SYSTEM${C.reset}
    • __d(name, deps, fn)  : Define module
    • __r(id)               : Require module
    • __x(expr)             : Eval expression
    • Dependencies = [deps] : Array of module names

${C.bold}${C.yellow}🔌 WEBSOCKET${C.reset}
    • wss://web.whatsapp.com/ws/chat
    • Connection: new WebSocket(url)
    • Events: onopen, onmessage, onclose, onerror
    • Protocol: Binary frame with tag + length + payload

${C.bold}${C.yellow}📦 BINARY PROTOCOL${C.reset}
    • Format: Tag(1) + Length(varint) + Payload(protobuf)
    • Tags: 0x00=chat, 0x01=group, 0x02=direct, etc
    • Encoder: encodeProtobuf()
    • Decoder: decodeProtobuf()

${C.bold}${C.yellow}🔐 AUTHENTICATION${C.reset}
    • Methods: QR scan, Pairing code
    • Storage: ./session/creds.json
    • Keys: noiseKey, signedIdentityKey, signedPreKey

${C.bold}${C.yellow}💬 MESSAGE TYPES${C.reset}
    • text, image, video, audio, document
    • sticker, location, contact, poll
    • list, buttons, template, reaction
    `);

    console.log(`
${C.bold}${C.yellow}🛠️ QUICK SEARCH COMMANDS${C.reset}

    # Cari WebSocket URL
    grep -n "wss://web.whatsapp.com" WAWeb.js

    # Cari semua module definitions
    grep -o '__d("[^"]*"' WAWeb.js | sort | uniq

    # Cari WebSocket class
    grep -n "WebSocketTransport" WAWeb.js

    # Cari API endpoints
    grep -oE '/[a-z]+/[a-z]+/' WAWeb.js | sort | uniq

    # Extract specific line range
    sed -n '162000,165000p' WAWeb.js
    `);

    console.log(`
${C.bold}${C.yellow}📚 RESOURCES${C.reset}
    • Baileys Library: github.com/WhiskeySockets/Baileys
    • WA Web Rev: github.com/sigalor/whatsapp-web-rev
    • WA Protocol: docs.whatsapp.com
    `);

    console.log(`
${C.green}${C.bold}═══════════════════════════════════════════════════════════════════════════

Ini baru permukaan dari WAWeb.js.

Ada 182,422 baris code di file ini, dan kita baru covered
sekitar 10% dari info yang bisa di-extract.

Kunci utama: PATTERN MATCHING dan TRACE THE FLOW.

Selamat belajar!

═══════════════════════════════════════════════════════════════════════════${C.reset}
    `);
}

// ════════════════════════════════════════════════════════════════════════════
// MENU UTAMA
// ════════════════════════════════════════════════════════════════════════════

async function showMenu() {
    clear();
    console.log(`
${C.green}${C.bold}╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║   🔍 MENU UTAMA - DEEP DIVE WAWeb.js                               ║
║                                                                    ║
║   Author: rvnnsix | Telegram: @rvnnsix                              ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝${C.reset}
    `);

    console.log(`
${C.cyan}  ┌──────────────────────────────────────────────────────────────┐
  │                                                              │
  │  ${C.green}1${C.reset})  📖 PENDAHULUAN - Apa itu WAWeb.js?              │
  │  ${C.green}2${C.reset})  📊 STRUKTUR FILE - Analyze bagian per bagian     │
  │  ${C.green}3${C.reset})  🔧 MODULE SYSTEM - __d() __r() __x() deep dive   │
  │  ${C.green}4${C.reset})  🔌 WEBSOCKET - Connection flow详解              │
  │  ${C.green}5${C.reset})  📦 BINARY PROTOCOL - Encode/Decode详解         │
  │  ${C.green}6${C.reset})  🔐 AUTHENTICATION - Auth flow详解              │
  │  ${C.green}7${C.reset})  💬 MESSAGE FLOW - Send/Receive详解             │
  │  ${C.green}8${C.reset})  🎯 SEARCH PATTERNS - Praktis untuk extract    │
  │  ${C.green}9${C.reset})  🛠️  TOOLS & METHODS - Workflow reverse eng    │
  │  ${C.green}10${C.reset}) 📋 CHEATSHEET - Ringkasan semua                │
  │                                                              │
  │  ${C.yellow}0${C.reset})  🚪 Exit                                           │
  │                                                              │
  └──────────────────────────────────────────────────────────────┘
    `);

    const answer = await ask(`\n  ${C.yellow}Pilih menu (0-10): ${C.reset}`);
    return answer.trim();
}

// ════════════════════════════════════════════════════════════════════════════
// MAIN
// ════════════════════════════════════════════════════════════════════════════

async function main() {
    await load();

    let running = true;

    while (running) {
        const choice = await showMenu();

        switch (choice) {
            case '1': await bagian1(); break;
            case '2': await bagian2(); break;
            case '3': await bagian3(); break;
            case '4': await bagian4(); break;
            case '5': await bagian5(); break;
            case '6': await bagian6(); break;
            case '7': await bagian7(); break;
            case '8': await bagian8(); break;
            case '9': await bagian9(); break;
            case '10': await bagian10(); break;
            case '0':
                console.log(`\n${C.green}  👋 Bye! Thanks sudah belajar!${C.reset}\n`);
                console.log(`  📚 Docs: WAWeb_README.txt`);
                console.log(`  🎬 Script: script-video.txt`);
                console.log(`  🔧 Simulasi: interaktif-waweb.js`);
                console.log(`  📱 Telegram: @rvnnsix\n`);
                running = false;
                break;
            default:
                console.log(`\n  ${C.red}❌ Pilihan tidak valid. Pilih 0-10.${C.reset}`);
        }

        if (running && choice !== '0') {
            await wait();
        }
    }
}

main().catch(console.error);

// ════════════════════════════════════════════════════════════════════════════
// CREDITS
// ════════════════════════════════════════════════════════════════════════════
//
//   Written by: rvnnsix
//   Telegram: @rvnnsix
//   Instagram: @tamainfinity_
//
//   FREE EDUCATION - Share knowledge, grow together
//
// ════════════════════════════════════════════════════════════════════════════