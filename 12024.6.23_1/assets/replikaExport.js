//assets/replikaExport.js
const GlobalScope = typeof globalThis !== "undefined" ? globalThis :
                    typeof window !== "undefined" ? window :
                    typeof global !== "undefined" ? global :
                    typeof self !== "undefined" ? self : {};

const dbName = "replika-export";
let database;

const dbRequest = indexedDB.open(dbName, 1);

dbRequest.onsuccess = event => {
    database = event.target.result;
    console.log("Database opened successfully.");
};

dbRequest.onupgradeneeded = event => {
    const db = event.target.result;

    // Create messages object store
    if (!db.objectStoreNames.contains("messages")) {
        db.createObjectStore("messages", { keyPath: "id" });
        console.log("Messages object store created.");
    }

    // Create memories object store
    if (!db.objectStoreNames.contains("memories")) {
        db.createObjectStore("memories", { keyPath: "id" });
        console.log("Memories object store created.");
    }

    // Create diary object store
    if (!db.objectStoreNames.contains("diary")) {
        db.createObjectStore("diary", { keyPath: "id" });
        console.log("Diary object store created.");
    }

    // Create images object store
    if (!db.objectStoreNames.contains("images")) {
        db.createObjectStore("images", { keyPath: "id" });
        console.log("Images object store created.");
    }

    // Create voice Message object store
    if (!db.objectStoreNames.contains("voiceMSG")) {
        db.createObjectStore("voiceMSG", { keyPath: "id" });
        console.log("Voice Message object store created.");
   }
};

dbRequest.onerror = event => {
    console.error("Database error:", event.target.error);
};


async function getLastMessageId() {
    if (!database) return;
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").getAllKeys();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const keys = event.target.result;
            const lastKey = keys[keys.length - 1];
            resolve(lastKey);
        };
    });
}


async function countMessages() {
    if (!database) return 0;
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").count();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const messageCount = event.target.result;
            resolve(messageCount);
        };
    });
}

async function getFirstAndLastMessage() {
    if (!database) return;
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").getAll();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const messages = event.target.result;
            const lastMessage = messages[messages.length - 1];
            const firstMessage = messages[0];
            resolve({
                lastMessage: lastMessage,
                firstMessage: firstMessage
            });
        };
    });
}

async function getAllMessages() {
    if (!database) return;
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").getAll();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const allMessages = event.target.result;
            resolve(allMessages);
        };
    });
}

export {
    countMessages,            
    getLastMessageId,        
    getFirstAndLastMessage,  
    database,                      
    GlobalScope,             
    getAllMessages,          
};
