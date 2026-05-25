# WAWeb & GalaxyX Bot

Koleksi resource dan tools untuk analisis WhatsApp Web.

## Files

| File | Description |
|------|-------------|
| `waweb-patterns.js` | Library patterns dari WAWeb.js untuk searching |
| `WAWeb-Patterns-List.txt` | Daftar pattern lengkap |
| `WAWeb.js` | Extracted WAWeb source code |
| `WAProto.proto.txt` | Protocol buffer definitions |
| `WAWeb_README.txt` | Dokumentasi WAWeb |
| `GalaxyX.js` | Main bot script |
| `GalaxyX-Bot.zip` / `galaxy.rar` | Bot binaries |

## Usage

```bash
# Search patterns
node waweb-patterns.js search websocket

# List categories
node waweb-patterns.js list

# Statistics
node waweb-patterns.js stats
```

## Modules

```javascript
import { searchPatterns, getCategories } from './waweb-patterns.js';

// Search
const results = searchPatterns('websocket');

// Get by category
const categories = getCategories();
```

## Categories

Total **21 categories** dengan **150+ patterns**:
- WebSocket Endpoints
- API Endpoints
- Core Modules
- Logging & Error
- Binary Protocol
- Database & Storage
- Authentication
- Chat & Messages
- Dan lainnya...

## ⚠️ WARNING - GalaxyX.js

File `GalaxyX.js` berisi script yang **sangat powerful** dan memiliki kemampuan:

- **Akses penuh ke sistem file** - bisa read/write/delete file
- **Eksekusi command shell** - bisa jalanin perintah sistem
- **OCR & media processing** - bisa akses webcam, mic, screen capture
- **Full WhatsApp API access** - bisa kirim/terima/manipulasi semua pesan

### Penggunaan:

> Script ini disediakan **seperti pisau dapur** - bisa untuk masak enak, bisa juga untuk hal berbahaya. Terserah klien masing-masing bagaimana cara pakainya. **Yang bikin bot itu cuma kasih pisau nya, bukan yang pakai.**

- Pastikan gunakan di environment yang terisolasi
- Jangan beri akses ke orang yang tidak dipercaya
- Check code sebelum jalanin
- Gunakan dengan bijak

## Catatan

> Resource ini disediakan khusus untuk klien. Usage dan modification terserah klien masing-masing.