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

## Catatan

> Resource ini disediakan khusus untuk klien. Usage dan modification terserah klien masing-masing.