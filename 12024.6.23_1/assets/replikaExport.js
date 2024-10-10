//assets/replikaExport.js
// Define a global object reference
const GlobalScope = typeof globalThis !== "undefined" ? globalThis :
                    typeof window !== "undefined" ? window :
                    typeof global !== "undefined" ? global :
                    typeof self !== "undefined" ? self : {};

// Create an exports object
let moduleExports = {};
const module = {
    get exports() {
        return moduleExports;
    },
    set exports(obj) {
        moduleExports = obj;
    }
};

// Function to handle storage setting
function saveToStorage(key) {
    async function saveData(data) {
        try {
            return await moduleExports.storage.sync.set(data);
        } catch {
            return await moduleExports.storage.local.set(data);
        }
    }
}

const replikaExportKey = saveToStorage("replika-export");
//fuck you
async function checkPayment() {
    return true;
}

const dbName = "replika-export";
let database; // Declare the database variable at the top for accessibility

const dbRequest = indexedDB.open(dbName, 1);

dbRequest.onerror = error => {}; // Handle errors

dbRequest.addEventListener("success", event => {
    database = event.target.result; // Store the database reference
});

dbRequest.onupgradeneeded = event => {
    event.target.result.createObjectStore("messages", {
        keyPath: "id" // Define the key path for messages
    });
};

// Function to get the last message ID
async function getLastMessageId() {
    if (!database) return; // Return if the database is not initialized
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").getAllKeys();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const keys = event.target.result;
            const lastKey = keys[keys.length - 1]; // Get the last key
            resolve(lastKey);
        };
    });
}

// Function to count total messages
async function countMessages() {
    if (!database) return 0; // Return 0 if the database is not initialized
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").count();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const messageCount = event.target.result; // Get the count of messages
            resolve(messageCount);
        };
    });
}

// Function to get the first and last message
async function getFirstAndLastMessage() {
    if (!database) return; // Return if the database is not initialized
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").getAll();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const messages = event.target.result;
            const lastMessage = messages[messages.length - 1]; // Get the last message
            const firstMessage = messages[0]; // Get the first message
            resolve({
                lastMessage: lastMessage,
                firstMessage: firstMessage
            });
        };
    });
}

// Function to retrieve all messages
async function getAllMessages() {
    if (!database) return; // Return if the database is not initialized
    const transaction = database.transaction(["messages"], "readonly").objectStore("messages").getAll();
    return new Promise(resolve => {
        transaction.onsuccess = event => {
            const allMessages = event.target.result; // Get all messages
            resolve(allMessages);
        };
    });
}

// Exporting functions and vars
export {
    countMessages,            // Previously Y
    getLastMessageId,        // Previously J
    getFirstAndLastMessage,  // Previously Z
    database,                // Previously E
    replikaExportKey,        // Previously U
    GlobalScope,             // Previously F
    getAllMessages,          // Previously K
    checkPayment             // Previously G I really dont wanna dig thru index too much so good enough for me
};
