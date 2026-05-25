/**
 * WAWeb Patterns Library
 * Koleksi lengkap pattern dari WAWeb.js untuk reference dan searching
 * Cocok untuk analisis, debugging, dan development WhatsApp Web
 *
 * @author Crown-us
 * @version 1.0.0
 */

// ============================================
// CATEGORY 1: WEBSOCKET ENDPOINTS
// ============================================
export const WEBSOCKET_ENDPOINTS = {
  name: "WebSocket Endpoints",
  description: "EndPoint koneksi real-time WhatsApp Web",
  patterns: [
    {
      name: "Chat WebSocket URL",
      pattern: "wss://web.whatsapp.com/ws/chat",
      description: "Endpoint utama WebSocket untuk koneksi chat WhatsApp Web",
      category: "network",
      regex: /wss:\/\/web\.whatsapp\.com\/ws\/chat/g
    },
    {
      name: "Dev WebSocket URL",
      pattern: "wss://dev-web.whatsapp.com/ws/chat",
      description: "Endpoint development WebSocket untuk testing",
      category: "network",
      regex: /wss:\/\/dev-web\.whatsapp\.com\/ws\/chat/g
    }
  ]
};

// ============================================
// CATEGORY 2: API ENDPOINTS
// ============================================
export const API_ENDPOINTS = {
  name: "API Endpoints",
  description: "Endpoint API yang digunakan WhatsApp Web",
  patterns: [
    {
      name: "Flows JSON API",
      pattern: "/flows/json/",
      description: "Endpoint untuk flows API JSON",
      category: "api",
      regex: /\/flows\/json\//g
    },
    {
      name: "Generic JSON Endpoint",
      pattern: "/flows/json",
      description: "Pattern generik untuk JSON flows",
      category: "api",
      regex: /\/flows\/json/g
    }
  ]
};

// ============================================
// CATEGORY 3: CORE MODULES
// ============================================
export const CORE_MODULES = {
  name: "Core Modules",
  description: "Module inti WhatsApp Web",
  patterns: [
    {
      name: "MetaConfigMap",
      pattern: '__d("MetaConfigMap"',
      description: "Konfigurasi metadata untuk WhatsApp Web",
      category: "module",
      regex: /__d\("MetaConfigMap"/g
    },
    {
      name: "FBLogger",
      pattern: '__d("FBLogger"',
      description: "Facebook Logger untuk tracking",
      category: "module",
      regex: /__d\("FBLogger"/g
    },
    {
      name: "BitMap",
      pattern: '__d("BitMap"',
      description: "BitMap utilities untuk WhatsApp",
      category: "module",
      regex: /__d\("BitMap"/g
    },
    {
      name: "ErrorGuard",
      pattern: '__d("ErrorGuard"',
      description: "Error handling guard",
      category: "module",
      regex: /__d\("ErrorGuard"/g
    },
    {
      name: "CircularBuffer",
      pattern: '__d("CircularBuffer"',
      description: "Buffer circular untuk message queue",
      category: "module",
      regex: /__d\("CircularBuffer"/g
    },
    {
      name: "ErrorPubSub",
      pattern: '__d("ErrorPubSub"',
      description: "Publish/Subscribe untuk error handling",
      category: "module",
      regex: /__d\("ErrorPubSub"/g
    },
    {
      name: "Promise",
      pattern: '__d("Promise"',
      description: "Promise polyfill atau wrapper",
      category: "module",
      regex: /__d\("Promise"/g
    }
  ]
};

// ============================================
// CATEGORY 4: LOGGING & ERROR HANDLING
// ============================================
export const LOGGING_MODULES = {
  name: "Logging & Error Modules",
  description: "Module untuk logging dan error handling",
  patterns: [
    {
      name: "WAHex",
      pattern: '__d("WAHex"',
      description: "Hex encoding/decoding utilities",
      category: "logging",
      regex: /__d\("WAHex"/g
    },
    {
      name: "WALogger",
      pattern: '__d("WALogger"',
      description: "Logger utama WhatsApp",
      category: "logging",
      regex: /__d\("WALogger"/g
    },
    {
      name: "WALoggerUtils",
      pattern: '__d("WALoggerUtils"',
      description: "Utilities untuk logger",
      category: "logging",
      regex: /__d\("WALoggerUtils"/g
    },
    {
      name: "WATagsLogger",
      pattern: '__d("WATagsLogger"',
      description: "Tagged logging system",
      category: "logging",
      regex: /__d\("WATagsLogger"/g
    },
    {
      name: "WAWebLoggerFormatMessage",
      pattern: '__d("WAWebLoggerFormatMessage"',
      description: "Format pesan log untuk Web",
      category: "logging",
      regex: /__d\("WAWebLoggerFormatMessage"/g
    },
    {
      name: "WAWebLoggerOptimizer",
      pattern: '__d("WAWebLoggerOptimizer"',
      description: "Optimizer untuk logging",
      category: "logging",
      regex: /__d\("WAWebLoggerOptimizer"/g
    },
    {
      name: "WAWebLoggerUtils",
      pattern: '__d("WAWebLoggerUtils"',
      description: "Logger utilities untuk Web",
      category: "logging",
      regex: /__d\("WAWebLoggerUtils"/g
    },
    {
      name: "WAWebNormalizeStack",
      pattern: '__d("WAWebNormalizeStack"',
      description: "Normalize stack traces",
      category: "logging",
      regex: /__d\("WAWebNormalizeStack"/g
    },
    {
      name: "WAWebLoggerImpl",
      pattern: '__d("WAWebLoggerImpl"',
      description: "Implementation logger WhatsApp Web",
      category: "logging",
      regex: /__d\("WAWebLoggerImpl"/g
    },
    {
      name: "WAWebLogLineSanitizer",
      pattern: '__d("WAWebLogLineSanitizer"',
      description: "Sanitize log lines untuk privacy",
      category: "logging",
      regex: /__d\("WAWebLogLineSanitizer"/g
    },
    {
      name: "WALogger.error",
      pattern: "WALogger.error",
      description: "Error logging function",
      category: "logging",
      regex: /WALogger\.error/g
    },
    {
      name: "invariant",
      pattern: "invariant(",
      description: "Assertion untuk validasi kondisi",
      category: "logging",
      regex: /invariant\(/g
    },
    {
      name: "unrecoverableViolation",
      pattern: "unrecoverableViolation(",
      description: "Error yang tidak bisa recovery",
      category: "logging",
      regex: /unrecoverableViolation\(/g
    }
  ]
};

// ============================================
// CATEGORY 5: BINARY PROTOCOL
// ============================================
export const BINARY_PROTOCOL = {
  name: "Binary Protocol",
  description: "Protocol binary WhatsApp untuk encoding/decoding message",
  patterns: [
    {
      name: "WABinary",
      pattern: '__d("WABinary"',
      description: "Module utama binary protocol WhatsApp",
      category: "protocol",
      regex: /__d\("WABinary"/g
    },
    {
      name: "decodeProtobuf",
      pattern: "decodeProtobuf",
      description: "Function untuk decode protobuf message",
      category: "protocol",
      regex: /decodeProtobuf/g
    },
    {
      name: "encodeProtobuf",
      pattern: "encodeProtobuf",
      description: "Function untuk encode protobuf message",
      category: "protocol",
      regex: /encodeProtobuf/g
    },
    {
      name: "WAWebProtobufsAdv.pb",
      pattern: '__d("WAWebProtobufsAdv.pb"',
      description: "Protobuf definitions untuk ADV",
      category: "protocol",
      regex: /__d\("WAWebProtobufsAdv\.pb"/g
    },
    {
      name: "WAWebProtobufSyncAction.pb",
      pattern: '__d("WAWebProtobufSyncAction.pb"',
      description: "Protobuf untuk sync action",
      category: "protocol",
      regex: /__d\("WAWebProtobufSyncAction\.pb"/g
    },
    {
      name: "WAWebProtobufsProtocol.pb",
      pattern: '__d("WAWebProtobufsProtocol.pb"',
      description: "Protobuf protocol definitions",
      category: "protocol",
      regex: /__d\("WAWebProtobufsProtocol\.pb"/g
    },
    {
      name: "WAWebProtobufsUserPassword.pb",
      pattern: '__d("WAWebProtobufsUserPassword.pb"',
      description: "Protobuf untuk user password auth",
      category: "protocol",
      regex: /__d\("WAWebProtobufsUserPassword\.pb"/g
    },
    {
      name: "WAWebProtobufsChatLockSettings.pb",
      pattern: '__d("WAWebProtobufsChatLockSettings.pb"',
      description: "Protobuf chat lock settings",
      category: "protocol",
      regex: /__d\("WAWebProtobufsChatLockSettings\.pb"/g
    },
    {
      name: "WAWebProtobufsDeviceCapabilities.pb",
      pattern: '__d("WAWebProtobufsDeviceCapabilities.pb"',
      description: "Protobuf device capabilities",
      category: "protocol",
      regex: /__d\("WAWebProtobufsDeviceCapabilities\.pb"/g
    },
    {
      name: "WAWebProtobufsCompanionReg.pb",
      pattern: '__d("WAWebProtobufsCompanionReg.pb"',
      description: "Protobuf companion registration",
      category: "protocol",
      regex: /__d\("WAWebProtobufsCompanionReg\.pb"/g
    }
  ]
};

// ============================================
// CATEGORY 6: WEBSOCKET & CONNECTION
// ============================================
export const WEBSOCKET_MODULES = {
  name: "WebSocket & Connection",
  description: "Module untuk koneksi WebSocket",
  patterns: [
    {
      name: "WebSocketTransport",
      pattern: '__d("WebSocketTransport"',
      description: "WebSocket transport layer",
      category: "connection",
      regex: /__d\("WebSocketTransport"/g
    },
    {
      name: "WAWebSocketLogoutJob",
      pattern: '__d("WAWebSocketLogoutJob"',
      description: "Job untuk logout via WebSocket",
      category: "connection",
      regex: /__d\("WAWebSocketLogoutJob"/g
    },
    {
      name: "WAWebLoginWamEvent",
      pattern: '__d("WAWebLoginWamEvent"',
      description: "WAM event untuk login tracking",
      category: "connection",
      regex: /__d\("WAWebLoginWamEvent"/g
    },
    {
      name: "WAWebWamLoginMetricUtils",
      pattern: '__d("WAWebWamLoginMetricUtils"',
      description: "Metrics utilities untuk login",
      category: "connection",
      regex: /__d\("WAWebWamLoginMetricUtils"/g
    },
    {
      name: "WebSocket Not Opened",
      pattern: "WebSocket.*not.*opened",
      description: "Error saat WebSocket belum terbuka",
      category: "error",
      regex: /WebSocket.*not.*opened/gi
    },
    {
      name: "WebSocket Errored",
      pattern: "WebSocket.*errored",
      description: "Error saat WebSocket mengalami error",
      category: "error",
      regex: /WebSocket.*errored/gi
    }
  ]
};

// ============================================
// CATEGORY 7: BACKEND & API
// ============================================
export const BACKEND_API = {
  name: "Backend & API",
  description: "Module untuk backend API calls",
  patterns: [
    {
      name: "WAWebBackendApi",
      pattern: '__d("WAWebBackendApi"',
      description: "Backend API utama WhatsApp Web",
      category: "api",
      regex: /__d\("WAWebBackendApi"/g
    },
    {
      name: "WAWebApiContact",
      pattern: '__d("WAWebApiContact"',
      description: "API untuk manipulasi contact",
      category: "api",
      regex: /__d\("WAWebApiContact"/g
    }
  ]
};

// ============================================
// CATEGORY 8: DATABASE & STORAGE
// ============================================
export const DATABASE_MODULES = {
  name: "Database & Storage",
  description: "Module untuk storage dan database IndexedDB",
  patterns: [
    {
      name: "WAWebIdb",
      pattern: '__d("WAWebIdb"',
      description: "IndexedDB wrapper untuk WhatsApp",
      category: "storage",
      regex: /__d\("WAWebIdb"/g
    },
    {
      name: "WAWebStorage",
      pattern: '__d("WAWebStorage"',
      description: "Storage utama WhatsApp Web",
      category: "storage",
      regex: /__d\("WAWebStorage"/g
    },
    {
      name: "WAWebStorageSchema",
      pattern: '__d("WAWebStorageSchema"',
      description: "Schema untuk storage WhatsApp",
      category: "storage",
      regex: /__d\("WAWebStorageSchema"/g
    },
    {
      name: "WAWebModelStorageUtils",
      pattern: '__d("WAWebModelStorageUtils"',
      description: "Model storage utilities",
      category: "storage",
      regex: /__d\("WAWebModelStorageUtils"/g
    },
    {
      name: "WAWebModelStorageVersions",
      pattern: '__d("WAWebModelStorageVersions"',
      description: "Versi storage model",
      category: "storage",
      regex: /__d\("WAWebModelStorageVersions"/g
    },
    {
      name: "WAWebDexieCastTypes",
      pattern: '__d("WAWebDexieCastTypes"',
      description: "Dexie.js type definitions",
      category: "storage",
      regex: /__d\("WAWebDexieCastTypes"/g
    },
    {
      name: "WAWebDbEncryptionKey",
      pattern: '__d("WAWebDbEncryptionKey"',
      description: "Database encryption key management",
      category: "storage",
      regex: /__d\("WAWebDbEncryptionKey"/g
    },
    {
      name: "WAWebIndexedDBPurge",
      pattern: '__d("WAWebIndexedDBPurge"',
      description: "IndexedDB purge/cleanup",
      category: "storage",
      regex: /__d\("WAWebIndexedDBPurge"/g
    },
    {
      name: "WAWebWAWCStorage",
      pattern: '__d("WAWebWAWCStorage"',
      description: "WAWC (WhatsApp Web Companion) storage",
      category: "storage",
      regex: /__d\("WAWebWAWCStorage"/g
    },
    {
      name: "WAWebLocalStorage",
      pattern: '__d("WAWebLocalStorage"',
      description: "LocalStorage wrapper",
      category: "storage",
      regex: /__d\("WAWebLocalStorage"/g
    },
    {
      name: "IndexedDB",
      pattern: "WAWeb-dexie",
      description: "Dexie.js wrapper untuk IndexedDB",
      category: "storage",
      regex: /WAWeb-dexie/g
    }
  ]
};

// ============================================
// CATEGORY 9: AUTHENTICATION
// ============================================
export const AUTH_MODULES = {
  name: "Authentication",
  description: "Module untuk authentication dan credentials",
  patterns: [
    {
      name: "WAWebCreds",
      pattern: '__d("WAWebCreds"',
      description: "Credentials management",
      category: "auth",
      regex: /__d\("WAWebCreds"/g
    },
    {
      name: "WAWebUserPrefs",
      pattern: '__d("WAWebUserPrefs"',
      description: "User preferences storage",
      category: "auth",
      regex: /__d\("WAWebUserPrefs"/g
    },
    {
      name: "WAWebLogoutReasonConstants",
      pattern: '__d("WAWebLogoutReasonConstants"',
      description: "Logout reason constants",
      category: "auth",
      regex: /__d\("WAWebLogoutReasonConstants"/g
    },
    {
      name: "authenticate",
      pattern: "authenticate",
      description: "Function untuk authenticate",
      category: "auth",
      regex: /authenticate/g
    },
    {
      name: "authState",
      pattern: "authState",
      description: "Authentication state management",
      category: "auth",
      regex: /authState/g
    },
    {
      name: "Creds",
      pattern: "Creds",
      description: "Credentials references",
      category: "auth",
      regex: /Creds/g
    }
  ]
};

// ============================================
// CATEGORY 10: CHAT & MESSAGES
// ============================================
export const CHAT_MODULES = {
  name: "Chat & Messages",
  description: "Module untuk chat dan message handling",
  patterns: [
    {
      name: "WAWebChatStore",
      pattern: '__d("WAWebChatStore"',
      description: "Store untuk chat data",
      category: "chat",
      regex: /__d\("WAWebChatStore"/g
    },
    {
      name: "WAWebContactStore",
      pattern: '__d("WAWebContactStore"',
      description: "Store untuk contact data",
      category: "chat",
      regex: /__d\("WAWebContactStore"/g
    },
    {
      name: "WAWebMessageStore",
      pattern: '__d("WAWebMessageStore"',
      description: "Store untuk message data",
      category: "chat",
      regex: /__d\("WAWebMessageStore"/g
    },
    {
      name: "WAWebSchemaChat",
      pattern: '__d("WAWebSchemaChat"',
      description: "Schema untuk chat table",
      category: "chat",
      regex: /__d\("WAWebSchemaChat"/g
    },
    {
      name: "WAWebSchemaContact",
      pattern: '__d("WAWebSchemaContact"',
      description: "Schema untuk contact table",
      category: "chat",
      regex: /__d\("WAWebSchemaContact"/g
    },
    {
      name: "WAWebSchemaVersions",
      pattern: '__d("WAWebSchemaVersions"',
      description: "Schema versions untuk DB",
      category: "chat",
      regex: /__d\("WAWebSchemaVersions"/g
    },
    {
      name: "MessageKey",
      pattern: "MessageKey",
      description: "Key untuk identifikasi message",
      category: "chat",
      regex: /MessageKey/g
    },
    {
      name: "Message",
      pattern: '__d("Message"',
      description: "Message class/definition",
      category: "chat",
      regex: /__d\("Message"/g
    },
    {
      name: "MessageStubType",
      pattern: "MessageStubType",
      description: "Type untuk message stub (deleted messages)",
      category: "chat",
      regex: /MessageStubType/g
    },
    {
      name: "MessageType",
      pattern: "MessageType",
      description: "Enum untuk type message (text, image, video, etc)",
      category: "chat",
      regex: /MessageType/g
    },
    {
      name: "ExtendedTextMessage",
      pattern: "ExtendedTextMessage",
      description: "Extended text message dengan preview/link",
      category: "chat",
      regex: /ExtendedTextMessage/g
    },
    {
      name: "ImageMessage",
      pattern: "ImageMessage",
      description: "Image message type",
      category: "chat",
      regex: /ImageMessage/g
    },
    {
      name: "VideoMessage",
      pattern: "VideoMessage",
      description: "Video message type",
      category: "chat",
      regex: /VideoMessage/g
    },
    {
      name: "AudioMessage",
      pattern: "AudioMessage",
      description: "Audio/voice message type",
      category: "chat",
      regex: /AudioMessage/g
    },
    {
      name: "DocumentMessage",
      pattern: "DocumentMessage",
      description: "Document file message type",
      category: "chat",
      regex: /DocumentMessage/g
    },
    {
      name: "LocationMessage",
      pattern: "LocationMessage",
      description: "Location sharing message type",
      category: "chat",
      regex: /LocationMessage/g
    },
    {
      name: "ContactMessage",
      pattern: "ContactMessage",
      description: "Contact card message type",
      category: "chat",
      regex: /ContactMessage/g
    },
    {
      name: "StickerMessage",
      pattern: "StickerMessage",
      description: "Sticker message type",
      category: "chat",
      regex: /StickerMessage/g
    }
  ]
};

// ============================================
// CATEGORY 11: CHAT TYPES
// ============================================
export const CHAT_TYPES = {
  name: "Chat Types",
  description: "Tipe-tipe chat di WhatsApp",
  patterns: [
    {
      name: "chat",
      pattern: "chat",
      description: "Regular individual chat",
      category: "chattype",
      regex: /chat/g
    },
    {
      name: "group",
      pattern: "group",
      description: "Group chat",
      category: "chattype",
      regex: /group/g
    },
    {
      name: "broadcast",
      pattern: "broadcast",
      description: "Broadcast list",
      category: "chattype",
      regex: /broadcast/g
    },
    {
      name: "status",
      pattern: "status",
      description: "WhatsApp Status (formerly Story)",
      category: "chattype",
      regex: /status/g
    },
    {
      name: "newsletter",
      pattern: "newsletter",
      description: "WhatsApp Channel/Newsletter",
      category: "chattype",
      regex: /newsletter/g
    }
  ]
};

// ============================================
// CATEGORY 12: JID PATTERNS (WhatsApp ID)
// ============================================
export const JID_PATTERNS = {
  name: "JID Patterns",
  description: "Pattern untuk WhatsApp ID (JID) manipulation",
  patterns: [
    {
      name: "toGroupJid",
      pattern: "toGroupJid",
      description: "Convert ke group JID format",
      category: "jid",
      regex: /toGroupJid/g
    },
    {
      name: "asChatJid",
      pattern: "asChatJid",
      description: "Convert ke chat JID format",
      category: "jid",
      regex: /asChatJid/g
    },
    {
      name: "getGroupDomain",
      pattern: "getGroupDomain",
      description: "Get domain dari group JID",
      category: "jid",
      regex: /getGroupDomain/g
    },
    {
      name: "switchOnChatJidType",
      pattern: "switchOnChatJidType",
      description: "Switch berdasarkan JID type",
      category: "jid",
      regex: /switchOnChatJidType/g
    },
    {
      name: "validateGroupJid",
      pattern: "validateGroupJid",
      description: "Validate group JID format",
      category: "jid",
      regex: /validateGroupJid/g
    },
    {
      name: "validateChatJid",
      pattern: "validateChatJid",
      description: "Validate chat JID format",
      category: "jid",
      regex: /validateChatJid/g
    },
    {
      name: "unsafeCoerceToChatJid",
      pattern: "unsafeCoerceToChatJid",
      description: "Coerce ke chat JID tanpa validasi",
      category: "jid",
      regex: /unsafeCoerceToChatJid/g
    },
    {
      name: "unsafeCoerceToGroupJid",
      pattern: "unsafeCoerceToGroupJid",
      description: "Coerce ke group JID tanpa validasi",
      category: "jid",
      regex: /unsafeCoerceToGroupJid/g
    }
  ]
};

// ============================================
// CATEGORY 13: USER & CONTACT
// ============================================
export const USER_CONTACT_MODULES = {
  name: "User & Contact",
  description: "Module untuk user dan contact management",
  patterns: [
    {
      name: "WAWebUserPrefsMeUser",
      pattern: '__d("WAWebUserPrefsMeUser"',
      description: "Current user preferences",
      category: "user",
      regex: /__d\("WAWebUserPrefsMeUser"/g
    },
    {
      name: "WAWebWid",
      pattern: '__d("WAWebWid"',
      description: "WhatsApp ID representation",
      category: "user",
      regex: /__d\("WAWebWid"/g
    },
    {
      name: "WAWebWidFactory",
      pattern: '__d("WAWebWidFactory"',
      description: "Factory untuk membuat WID",
      category: "user",
      regex: /__d\("WAWebWidFactory"/g
    },
    {
      name: "WAJids",
      pattern: '__d("WAJids"',
      description: "JID constants dan utilities",
      category: "user",
      regex: /__d\("WAJids"/g
    },
    {
      name: "WAWebBizCoex",
      pattern: '__d("WAWebBizCoex"',
      description: "Business coexistence features",
      category: "user",
      regex: /__d\("WAWebBizCoex"/g
    }
  ]
};

// ============================================
// CATEGORY 14: QR CODE & LOGIN
// ============================================
export const QR_LOGIN_MODULES = {
  name: "QR Code & Login",
  description: "Module untuk QR code dan login flow",
  patterns: [
    {
      name: "WAWebLoginWamEvent",
      pattern: '__d("WAWebLoginWamEvent"',
      description: "WAM event untuk login",
      category: "auth",
      regex: /__d\("WAWebLoginWamEvent"/g
    },
    {
      name: "WAWebWamEnumLoginResultType",
      pattern: '__d("WAWebWamEnumLoginResultType"',
      description: "Enum untuk login result type",
      category: "auth",
      regex: /__d\("WAWebWamEnumLoginResultType"/g
    },
    {
      name: "WAWebWamEnumConnectionSequenceStepType",
      pattern: '__d("WAWebWamEnumConnectionSequenceStepType"',
      description: "Enum untuk connection step tracking",
      category: "auth",
      regex: /__d\("WAWebWamEnumConnectionSequenceStepType"/g
    }
  ]
};

// ============================================
// CATEGORY 15: PROTOCOL & SYNC
// ============================================
export const SYNC_MODULES = {
  name: "Protocol & Sync",
  description: "Module untuk synchronization",
  patterns: [
    {
      name: "WAWebSyncdCollectionHandlerTypesConverter",
      pattern: '__d("WAWebSyncdCollectionHandlerTypesConverter"',
      description: "Sync collection handler type converter",
      category: "sync",
      regex: /__d\("WAWebSyncdCollectionHandlerTypesConverter"/g
    },
    {
      name: "WASyncAction.pb",
      pattern: '__d("WASyncAction.pb"',
      description: "Protobuf untuk sync action",
      category: "sync",
      regex: /__d\("WASyncAction\.pb"/g
    },
    {
      name: "WAServerSync.pb",
      pattern: '__d("WAServerSync.pb"',
      description: "Protobuf untuk server sync",
      category: "sync",
      regex: /__d\("WAServerSync\.pb"/g
    },
    {
      name: "WAWebLidAwareContactsDB",
      pattern: '__d("WAWebLidAwareContactsDB"',
      description: "LID-aware contacts database",
      category: "sync",
      regex: /__d\("WAWebLidAwareContactsDB"/g
    }
  ]
};

// ============================================
// CATEGORY 16: CRASH & TELEMETRY
// ============================================
export const CRASH_TELEMETRY = {
  name: "Crash & Telemetry",
  description: "Module untuk crash reporting dan telemetry",
  patterns: [
    {
      name: "WAWebCrashLogWamEvent",
      pattern: '__d("WAWebCrashLogWamEvent"',
      description: "WAM event untuk crash logging",
      category: "telemetry",
      regex: /__d\("WAWebCrashLogWamEvent"/g
    },
    {
      name: "WAWebCrashlogConstants",
      pattern: '__d("WAWebCrashlogConstants"',
      description: "Crash log constants",
      category: "telemetry",
      regex: /__d\("WAWebCrashlogConstants"/g
    },
    {
      name: "WAWebCrashlogUserAgent",
      pattern: '__d("WAWebCrashlogUserAgent"',
      description: "Crash log user agent info",
      category: "telemetry",
      regex: /__d\("WAWebCrashlogUserAgent"/g
    },
    {
      name: "WAWebWamCodegenUtils",
      pattern: '__d("WAWebWamCodegenUtils"',
      description: "WAM codegen utilities",
      category: "telemetry",
      regex: /__d\("WAWebWamCodegenUtils"/g
    },
    {
      name: "WAWebWamCodegenWamEvent",
      pattern: '__d("WAWebWamCodegenWamEvent"',
      description: "WAM codegen event definitions",
      category: "telemetry",
      regex: /__d\("WAWebWamCodegenWamEvent"/g
    },
    {
      name: "WAWebWamInitQueue",
      pattern: '__d("WAWebWamInitQueue"',
      description: "WAM initialization queue",
      category: "telemetry",
      regex: /__d\("WAWebWamInitQueue"/g
    },
    {
      name: "WAWebWamRuntimeProvider",
      pattern: '__d("WAWebWamRuntimeProvider"',
      description: "WAM runtime provider",
      category: "telemetry",
      regex: /__d\("WAWebWamRuntimeProvider"/g
    },
    {
      name: "WAWebWamDroppedEventWamEvent",
      pattern: '__d("WAWebWamDroppedEventWamEvent"',
      description: "WAM dropped event tracking",
      category: "telemetry",
      regex: /__d\("WAWebWamDroppedEventWamEvent"/g
    },
    {
      name: "WAWebWamEnumCrashType",
      pattern: '__d("WAWebWamEnumCrashType"',
      description: "Enum untuk crash type",
      category: "telemetry",
      regex: /__d\("WAWebWamEnumCrashType"/g
    },
    {
      name: "WAWebWamEnumCrashApplicationState",
      pattern: '__d("WAWebWamEnumCrashApplicationState"',
      description: "Enum untuk crash application state",
      category: "telemetry",
      regex: /__d\("WAWebWamEnumCrashApplicationState"/g
    }
  ]
};

// ============================================
// CATEGORY 17: UTILITIES
// ============================================
export const UTILITIES = {
  name: "Utilities",
  description: "Module utility umum",
  patterns: [
    {
      name: "WAWebUA (User Agent)",
      pattern: '__d("WAWebUA"',
      description: "User Agent management",
      category: "util",
      regex: /__d\("WAWebUA"/g
    },
    {
      name: "WAWebABProps (A/B Testing)",
      pattern: '__d("WAWebABProps"',
      description: "A/B testing properties",
      category: "util",
      regex: /__d\("WAWebABProps"/g
    },
    {
      name: "WAWebABPropsConfigs",
      pattern: '__d("WAWebABPropsConfigs"',
      description: "A/B testing configurations",
      category: "util",
      regex: /__d\("WAWebABPropsConfigs"/g
    },
    {
      name: "WAWebDebounce",
      pattern: '__d("WAWebDebounce"',
      description: "Debounce utility function",
      category: "util",
      regex: /__d\("WAWebDebounce"/g
    },
    {
      name: "WAWebGetSpecialAbProps",
      pattern: '__d("WAWebGetSpecialAbProps"',
      description: "Get special A/B props",
      category: "util",
      regex: /__d\("WAWebGetSpecialAbProps"/g
    },
    {
      name: "WAWebRuntimeEnvironmentUtils",
      pattern: '__d("WAWebRuntimeEnvironmentUtils"',
      description: "Runtime environment utilities",
      category: "util",
      regex: /__d\("WAWebRuntimeEnvironmentUtils"/g
    },
    {
      name: "WAWebEnvironment",
      pattern: '__d("WAWebEnvironment"',
      description: "Environment detection/management",
      category: "util",
      regex: /__d\("WAWebEnvironment"/g
    },
    {
      name: "WAWebBuildConstants",
      pattern: '__d("WAWebBuildConstants"',
      description: "Build-time constants",
      category: "util",
      regex: /__d\("WAWebBuildConstants"/g
    }
  ]
};

// ============================================
// CATEGORY 18: ENCRYPTION & SECURITY
// ============================================
export const ENCRYPTION_SECURITY = {
  name: "Encryption & Security",
  description: "Module untuk enkripsi dan keamanan",
  patterns: [
    {
      name: "crypto_onetimeauth",
      pattern: "crypto_onetimeauth",
      description: "One-time auth crypto function",
      category: "crypto",
      regex: /crypto_onetimeauth/g
    },
    {
      name: "crypto_onetimeauth_verify",
      pattern: "crypto_onetimeauth_verify",
      description: "Verify one-time auth signature",
      category: "crypto",
      regex: /crypto_onetimeauth_verify/g
    },
    {
      name: "WAWebDbEncryptionKey",
      pattern: "WAWebDbEncryptionKey",
      description: "Database encryption key",
      category: "crypto",
      regex: /WAWebDbEncryptionKey/g
    },
    {
      name: "WAWebWorkerEncKeyHelper",
      pattern: '__d("WAWebWorkerEncKeyHelper"',
      description: "Worker encryption key helper",
      category: "crypto",
      regex: /__d\("WAWebWorkerEncKeyHelper"/g
    },
    {
      name: "WAProtobufsUserPassword.pb",
      pattern: "WAProtobufsUserPassword.pb",
      description: "User password protobuf",
      category: "crypto",
      regex: /WAProtobufsUserPassword\.pb/g
    }
  ]
};

// ============================================
// CATEGORY 19: LOGOUT REASONS
// ============================================
export const LOGOUT_REASONS = {
  name: "Logout Reasons",
  description: "Constants untuk alasan logout",
  patterns: [
    {
      name: "ClientFatalError",
      pattern: "ClientFatalError",
      description: "Fatal client error causing logout",
      category: "auth",
      regex: /ClientFatalError/g
    },
    {
      name: "LidMigrationFailedToParseMapping",
      pattern: "LidMigrationFailedToParseMapping",
      description: "LID migration parse failure",
      category: "auth",
      regex: /LidMigrationFailedToParseMapping/g
    },
    {
      name: "LidMigrationPeerMappingsMalformed",
      pattern: "LidMigrationPeerMappingsMalformed",
      description: "Malformed peer mappings during LID migration",
      category: "auth",
      regex: /LidMigrationPeerMappingsMalformed/g
    },
    {
      name: "LidMigrationCompanionIncompatibleKillswitch",
      pattern: "LidMigrationCompanionIncompatibleKillswitch",
      description: "Companion incompatible killswitch triggered",
      category: "auth",
      regex: /LidMigrationCompanionIncompatibleKillswitch/g
    },
    {
      name: "LidMigrationOneOnOneThreadMigrationInternalError",
      pattern: "LidMigrationOneOnOneThreadMigrationInternalError",
      description: "Internal error during thread migration",
      category: "auth",
      regex: /LidMigrationOneOnOneThreadMigrationInternalError/g
    },
    {
      name: "UnknownCompanion",
      pattern: "UnknownCompanion",
      description: "Unknown companion device",
      category: "auth",
      regex: /UnknownCompanion/g
    }
  ]
};

// ============================================
// CATEGORY 20: DATABASE TABLES
// ============================================
export const DATABASE_TABLES = {
  name: "Database Tables",
  description: "Table names di IndexedDB",
  patterns: [
    {
      name: "Chat table",
      pattern: "Chat",
      description: "Table untuk menyimpan chat data",
      category: "database",
      regex: /\bChat\b/g
    },
    {
      name: "Contact table",
      pattern: "Contact",
      description: "Table untuk menyimpan contact data",
      category: "database",
      regex: /\bContact\b/g
    },
    {
      name: "Message table",
      pattern: "Message",
      description: "Table untuk menyimpan message data",
      category: "database",
      regex: /\bMessage\b/g
    },
    {
      name: "MeUser table",
      pattern: "MeUser",
      description: "Table untuk menyimpan current user data",
      category: "database",
      regex: /\bMeUser\b/g
    },
    {
      name: "MediaBlob table",
      pattern: "MediaBlob",
      description: "Table untuk menyimpan media blob data",
      category: "database",
      regex: /MediaBlob/g
    },
    {
      name: "PendingMsgs table",
      pattern: "PendingMsgs",
      description: "Table untuk pending messages",
      category: "database",
      regex: /PendingMsgs/g
    },
    {
      name: "Starred table",
      pattern: "Starred",
      description: "Table untuk starred messages",
      category: "database",
      regex: /\bStarred\b/g
    },
    {
      name: "CallLog table",
      pattern: "CallLog",
      description: "Table untuk call history",
      category: "database",
      regex: /\bCallLog\b/g
    }
  ]
};

// ============================================
// CATEGORY 21: ADDITIONAL ERROR TYPES
// ============================================
export const ERROR_TYPES = {
  name: "Error Types",
  description: "Tipe-tipe error khusus",
  patterns: [
    {
      name: "RMRNotSupportedOnNewsletterMessagesError",
      pattern: "RMRNotSupportedOnNewsletterMessagesError",
      description: "RMR (Read Mark Receipt) not supported on newsletter",
      category: "error",
      regex: /RMRNotSupportedOnNewsletterMessagesError/g
    }
  ]
};

// ============================================
// EXPORT ALL CATEGORIES
// ============================================
export const ALL_CATEGORIES = [
  WEBSOCKET_ENDPOINTS,
  API_ENDPOINTS,
  CORE_MODULES,
  LOGGING_MODULES,
  BINARY_PROTOCOL,
  WEBSOCKET_MODULES,
  BACKEND_API,
  DATABASE_MODULES,
  AUTH_MODULES,
  CHAT_MODULES,
  CHAT_TYPES,
  JID_PATTERNS,
  USER_CONTACT_MODULES,
  QR_LOGIN_MODULES,
  SYNC_MODULES,
  CRASH_TELEMETRY,
  UTILITIES,
  ENCRYPTION_SECURITY,
  LOGOUT_REASONS,
  DATABASE_TABLES,
  ERROR_TYPES
];

// ============================================
// EXPORT ALL PATTERNS (FLAT)
// ============================================
export const ALL_PATTERNS = ALL_CATEGORIES.flatMap(cat => cat.patterns);

// ============================================
// SEARCH FUNCTION - UTAMA!
// ============================================

/**
 * Search patterns dengan query string
 * @param {string} query - Kata kunci pencarian
 * @param {Object} options - Opsi pencarian
 * @param {string} options.category - Filter berdasarkan category
 * @param {boolean} options.exactMatch - Match persis (default: false)
 * @param {number} options.limit - Batas hasil (default: 50)
 * @returns {Array} Array hasil pencarian
 */
export function searchPatterns(query, options = {}) {
  const { category = null, exactMatch = false, limit = 50 } = options;

  if (!query || query.trim() === "") {
    return category
      ? ALL_PATTERNS.filter(p => p.category === category).slice(0, limit)
      : ALL_PATTERNS.slice(0, limit);
  }

  const normalizedQuery = query.toLowerCase().trim();
  let results = ALL_PATTERNS;

  // Filter by category first if specified
  if (category) {
    results = results.filter(p => p.category === category);
  }

  // Search logic
  if (exactMatch) {
    results = results.filter(p =>
      p.name.toLowerCase() === normalizedQuery ||
      p.pattern.toLowerCase() === normalizedQuery
    );
  } else {
    results = results.filter(p => {
      const nameMatch = p.name.toLowerCase().includes(normalizedQuery);
      const patternMatch = p.pattern.toLowerCase().includes(normalizedQuery);
      const descMatch = p.description.toLowerCase().includes(normalizedQuery);
      const categoryMatch = p.category.toLowerCase().includes(normalizedQuery);
      return nameMatch || patternMatch || descMatch || categoryMatch;
    });
  }

  return results.slice(0, limit);
}

/**
 * Search patterns by regex pattern
 * @param {string} regexPattern - Pattern regex untuk matching
 * @returns {Array} Array hasil yang match
 */
export function searchByRegex(regexPattern) {
  try {
    const regex = new RegExp(regexPattern, 'g');
    return ALL_PATTERNS.filter(p => regex.test(p.pattern));
  } catch (e) {
    console.error("Invalid regex pattern:", e);
    return [];
  }
}

/**
 * Get all categories
 * @returns {Array} Array category names
 */
export function getCategories() {
  return ALL_CATEGORIES.map(cat => ({
    name: cat.name,
    description: cat.description,
    count: cat.patterns.length
  }));
}

/**
 * Get patterns by category name
 * @param {string} categoryName - Nama category
 * @returns {Array} Array patterns dalam category
 */
export function getPatternsByCategory(categoryName) {
  const category = ALL_CATEGORIES.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );
  return category ? category.patterns : [];
}

/**
 * Get pattern by name
 * @param {string} name - Nama pattern
 * @returns {Object|null} Pattern object atau null
 */
export function getPatternByName(name) {
  return ALL_PATTERNS.find(
    p => p.name.toLowerCase() === name.toLowerCase()
  ) || null;
}

/**
 * Get pattern statistics
 * @returns {Object} Statistik semua patterns
 */
export function getPatternStats() {
  const categoryCount = ALL_CATEGORIES.length;
  const totalPatterns = ALL_PATTERNS.length;
  const byCategory = {};

  ALL_CATEGORIES.forEach(cat => {
    byCategory[cat.name] = cat.patterns.length;
  });

  return {
    totalCategories: categoryCount,
    totalPatterns,
    byCategory
  };
}

/**
 * Generate search suggestions berdasarkan prefix
 * @param {string} prefix - Prefix untuk suggestions
 * @returns {Array} Array suggestion strings
 */
export function getSuggestions(prefix) {
  if (!prefix || prefix.length < 2) return [];

  const normalizedPrefix = prefix.toLowerCase();
  const suggestions = new Set();

  ALL_PATTERNS.forEach(p => {
    if (p.name.toLowerCase().startsWith(normalizedPrefix)) {
      suggestions.add(p.name);
    }
    if (p.pattern.toLowerCase().startsWith(normalizedPrefix)) {
      suggestions.add(p.pattern);
    }
  });

  return Array.from(suggestions).slice(0, 10);
}

// ============================================
// CLI INTERFACE (untuk command line usage)
// ============================================

// Usage example and CLI interface
const CLI_USAGE = `
╔════════════════════════════════════════════════════════╗
║           WAWeb Patterns Search CLI v1.0.0               ║
╠════════════════════════════════════════════════════════╣
║                                                          ║
║  Usage:                                                  ║
║    node waweb-patterns.js <command> [options]           ║
║                                                          ║
║  Commands:                                               ║
║    search <query>     - Search patterns                  ║
║    category <name>    - List patterns by category        ║
║    list               - List all categories              ║
║    stats              - Show statistics                  ║
║    suggest <prefix>   - Get suggestions                  ║
║                                                          ║
║  Examples:                                               ║
║    node waweb-patterns.js search websocket              ║
║    node waweb-patterns.js category "binary protocol"     ║
║    node waweb-patterns.js list                          ║
║    node waweb-patterns.js stats                          ║
║    node waweb-patterns.js suggest wa                    ║
║                                                          ║
╚════════════════════════════════════════════════════════╝
`;

// Export for module usage
export default {
  searchPatterns,
  searchByRegex,
  getCategories,
  getPatternsByCategory,
  getPatternByName,
  getPatternStats,
  getSuggestions,
  ALL_CATEGORIES,
  ALL_PATTERNS,
  CLI_USAGE
};

// CLI handler
if (typeof process !== 'undefined' && process.argv && process.argv[1] && process.argv[1].includes('waweb-patterns')) {
  const args = process.argv.slice(2);
  const command = args[0] || 'help';
  const param = args.slice(1).join(' ');

  switch (command) {
    case 'search':
      if (!param) {
        console.log("Usage: search <query>");
      } else {
        const results = searchPatterns(param);
        console.log(`\n🔍 Search results for "${param}":\n`);
        results.forEach((p, i) => {
          console.log(`${i + 1}. ${p.name}`);
          console.log(`   Pattern: ${p.pattern}`);
          console.log(`   Desc: ${p.description}`);
          console.log(`   Category: ${p.category}\n`);
        });
        console.log(`Total: ${results.length} results`);
      }
      break;

    case 'category':
      if (!param) {
        console.log("Usage: category <category-name>");
      } else {
        const patterns = getPatternsByCategory(param);
        console.log(`\n📁 Category: ${param}\n`);
        patterns.forEach((p, i) => {
          console.log(`${i + 1}. ${p.name}`);
          console.log(`   Pattern: ${p.pattern}`);
          console.log(`   Desc: ${p.description}\n`);
        });
        console.log(`Total: ${patterns.length} patterns`);
      }
      break;

    case 'list':
      const cats = getCategories();
      console.log(`\n📋 All Categories:\n`);
      cats.forEach((c, i) => {
        console.log(`${i + 1}. ${c.name} - ${c.count} patterns`);
        console.log(`   ${c.description}\n`);
      });
      break;

    case 'stats':
      const stats = getPatternStats();
      console.log(`\n📊 Pattern Statistics:\n`);
      console.log(`Total Categories: ${stats.totalCategories}`);
      console.log(`Total Patterns: ${stats.totalPatterns}\n`);
      console.log("Patterns per category:");
      Object.entries(stats.byCategory).forEach(([name, count]) => {
        console.log(`  - ${name}: ${count}`);
      });
      break;

    case 'suggest':
      if (!param) {
        console.log("Usage: suggest <prefix>");
      } else {
        const suggestions = getSuggestions(param);
        console.log(`\n💡 Suggestions for "${param}":\n`);
        suggestions.forEach((s, i) => console.log(`${i + 1}. ${s}`));
      }
      break;

    case 'help':
    default:
      console.log(CLI_USAGE);
  }
}