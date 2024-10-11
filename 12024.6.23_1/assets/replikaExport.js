//assets/replikaExport.js
const GlobalScope = typeof globalThis !== "undefined" ? globalThis :
                    typeof window !== "undefined" ? window :
                    typeof global !== "undefined" ? global :
                    typeof self !== "undefined" ? self : {};

const dbName = "replika-export";
let database;

const dbRequest = indexedDB.open(dbName, 1);

dbRequest.addEventListener("success", event => {
    database = event.target.result;
});

dbRequest.onupgradeneeded = event => {
    event.target.result.createObjectStore("messages", {
        keyPath: "id"
    });
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
