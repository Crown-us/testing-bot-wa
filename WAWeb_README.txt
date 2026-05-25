📚 *CARA BACA WAWeb.js*
━━━━━━━━━━━━━━━━━━
_Panduan Reverse Engineering WA Web_
_Author: @rvnnsix_

━━━━━━━━━━━━━━━━━━

⚠️ *PERHATIAN*
File ini adalah WhatsApp Web bundle yang di-obfuscate/minify.
Bukan source code original, tapi hasil build/bundle.

━━━━━━━━━━━━━━━━━━

🔍 *BAGIAN 1: APA ITU WAWeb.js?*

WAWeb.js adalah *bundled JavaScript* dari WhatsApp Web yang sudah:
- ❌ Minified (variable obfuscated)
- ❌ Minified (spaces/newlines removed)
- ❌ Tersimpan dalam 1 file besar
- ❌ Di-obfuscate (nama function dirandom)

*Ukuran file: ~182,421 lines*
*Format: UMD/CommonJS bundle*

━━━━━━━━━━━━━━━━━━

📋 *BAGIAN 2: STRUKTUR FILE*

```
WAWeb.js
├── Polyfills (baris 1-1000)
│   ├── AbortController
│   ├── AbortSignal
│   ├── EventTarget
│   └── ...
│
├── WebSocket Transport (baris ~160,000+)
│   ├── WAWebSocket
│   ├── WAWebSocketManager
│   └── connection handling
│
├── Module Definitions
│   └── __d("ModuleName", [...deps], callback)
│
├── API Calls
│   ├── WAWebBackendApi
│   ├── WAWebXHR
│   └── network requests
│
└── Binary Protocol
    ├── WABinary
    ├── encodeProtobuf
    └── decodeProtobuf
```

━━━━━━━━━━━━━━━━━━

🔑 *BAGIAN 3: CARA BACA/SEARCH*

*1. Cari WebSocket URL:*
```
Search: wss://web.whatsapp.com/ws/chat
Result: line 163476
```
```javascript
// Ada 2 endpoint:
- wss://web.whatsapp.com/ws/chat  (production)
- wss://dev-web.whatsapp.com/ws/chat  (dev)
```

*2. Cari Module Names:*
```
Search: __d\("WAWeb
Result: hundreds of module definitions
```
```javascript
__d("WAWebXHR", [...deps], function(a,b,c,...){
  // Module code
});
```

*3. Cari WebSocket Class:*
```
Search: WebSocketTransport
Result: line 162413-16523
```
```javascript
new WebSocket(a)  // Membuka koneksi WS
```

*4. Cari API Endpoints:*
```
Search: /flows/json/
Result: line 146391
```

━━━━━━━━━━━━━━━━━━

📊 *BAGIAN 4: KEY PATTERNS*

*Search patterns yang berguna:*

```
┌─────────────────────────────────┬─────────────────┐
│ Pattern                         │ Fungsi          │
├─────────────────────────────────┼─────────────────┤
│ wss://web.whatsapp.com          │ WS endpoint     │
│ wss://dev-web.whatsapp.com      │ Dev WS endpoint │
│ /flows/json/                    │ API call        │
│ XMLHttpRequest                  │ XHR transport   │
│ WebSocket                       │ WS connection   │
│ __d("WAWeb                     │ Module def      │
│ WALogger                        │ Logging system  │
│ WABinary                        │ Binary protocol │
│ WAWebBackendApi                 │ Backend API     │
└─────────────────────────────────┴─────────────────┘
```

━━━━━━━━━━━━━━━━━━

🎯 *BAGIAN 5: HAL PENTING*

*1. Binary Protocol*
WhatsApp pakai binary protocol (bukan JSON).
Encode/decode pakai protobuf-like format.
```
Search: WABinary
Search: encodeProtobuf
Search: decodeProtobuf
```

*2. WebSocket Frame*
```
Search: WebSocket # not opened (line 162413)
Search: WebSocket # errored (line 162421)
```

*3. Auth/Credentials*
```
Search: WAWebCreds
Search: authState
Search: creds
```

*4. Message Handling*
```
Search: messages.upsert
Search: sendMessage
Search: receiveMessage
```

━━━━━━━━━━━━━━━━━━

🔧 *BAGIAN 6: TOOLS UNTUK BACA*

*1. VS Code / Text Editor*
- Load file, search patterns
- Go to line number
- Format document (Ctrl+Shift+P)

*2. Grep/Search Tools*
```
# Windows (PowerShell)
Select-String -Path "WAWeb.js" -Pattern "wss://"

# Linux/Mac
grep -n "wss://" WAWeb.js

# With context
grep -B2 -A2 "pattern" WAWeb.js
```

*3. Online Tools*
- https://beautifier.io (format minified JS)
- https://regex101.com (test regex patterns)

━━━━━━━━━━━━━━━━━━

📝 *BAGIAN 7: CONTOH PENCARIAN*

*Contoh 1: Cari WebSocket URL*
```
grep "wss://web.whatsapp.com" WAWeb.js
Result: line 163476
```

*Contoh 2: Cari Module BackendApi*
```
grep "__d(\"WAWebBackendApi" WAWeb.js
Result: Banyak matches
```

*Contoh 3: Cari XHR Request*
```
grep "XMLHttpRequest" WAWeb.js | head -5
Result:
- line 77798
- line 80232
- line 146745
```

━━━━━━━━━━━━━━━━━━

🧠 *BAGIAN 8: TIPS REVERSE ENGINEERING*

1. *Cari Endpoint aja, jangan baca seluruh code*
   - Pattern: `wss://`, `fetch(`, `/api/`

2. *Baca dari module definition*
   - Pattern: `__d("NAMAMODULE",`

3. *Follow the flow*
   - Mulai dari `WebSocket`
   - Follow ke `__d("WAWebSocketManager"`
   - Follow ke `BackendApi`

4. *Catat semua references*
   - Module names
   - Function names
   - URL patterns

5. *Bandingin dengan Baileys source*
   - Baileys adalah open source WA library
   - Bisa jadi referensi cara kerja WA

━━━━━━━━━━━━━━━━━━

⚡ *BAGIAN 9: YANG BISA DIEXTRACT*

```
┌────────────────────────────────────┬────────────────────────┐
│ Info                               │ Cara Extract           │
├────────────────────────────────────┼────────────────────────┤
│ WebSocket endpoints                │ grep "wss://"          │
│ API endpoints                      │ grep "/flows/"         │
│ Module structure                   │ grep "__d("            │
│ Error messages                     │ grep "WALogger"        │
│ Protobuf definitions              │ grep "protobuf"        │
│ Binary protocol handlers           │ grep "WABinary"        │
│ WebSocket error codes              │ grep "WebSocket #"     │
│ Connection timeouts                │ grep "timeout"         │
│ Auth mechanisms                    │ grep "auth"            │
│ Message types                      │ grep "messageType"     │
└────────────────────────────────────┴────────────────────────┘
```

━━━━━━━━━━━━━━━━━━

📌 *BAGIAN 10: CARA LAIN (REKOMENDASI)*

Daripada baca WAWeb.js langsung, lebih baik:

*1. Baca Baileys Source Code*
```
https://github.com/WhiskeySockets/Baileys
```
Library ini reverse-engineered dari WA Web.
Clean code, documented, open source.

*2. Baca WA Web DevTools*
- Buka web.whatsapp.com
- Buka DevTools (F12)
- Network tab → WebSocket
- Lihat real-time traffic

*3. Pakai mitmproxy/WireShark*
- Capture traffic HP ke WA server
- Lihat real binary protocol

*4. Baca Protocol Documentation*
```
https://github.com/sigalor/whatsapp-web-rev
```
Community-made reverse engineering docs.

━━━━━━━━━━━━━━━━━━

📚 *BAGIAN 11: RINGKASAN COMMANDS*

```bash
# Cari WebSocket URL
grep -n "wss://web.whatsapp.com" WAWeb.js

# Cari module definitions
grep -n '__d("WAWeb' WAWeb.js | head -20

# Cari WebSocket class
grep -n "WebSocketTransport" WAWeb.js

# Cari XHR
grep -n "XMLHttpRequest" WAWeb.js | head -5

# Cari specific string
grep -n "text: " WAWeb.js | head -10

# Count total lines
wc -l WAWeb.js

# Extract section (lines 160000-165000)
sed -n '160000,165000p' WAWeb.js
```

━━━━━━━━━━━━━━━━━━

💡 *KESIMPULAN*

WAWeb.js adalah *bundled & obfuscated* code.
Untuk memahami WA Web Protocol:

1. ✅ Baca Baileys source code (cleaner)
2. ✅ Capture real traffic (Wireshark/mitmproxy)
3. ✅ Baca community docs
4. ❌ Jangan baca WAWeb.js langsung (sulit)

━━━━━━━━━━━━━━━━━━

📌 *INFO*

Telegram: @rvnnsix
Instagram: @tamainfinity_

_© rvnnsix_