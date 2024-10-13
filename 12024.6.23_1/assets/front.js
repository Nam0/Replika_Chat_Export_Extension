//assets/front.js
import {
    exportChat,
    exportMemories,
    exportDiary,
    exportImages,
    exportVoice,
    exportAll,
    exportDatabaseContent,
} from "./api.js";

import {
    database,
} from "./replikaExport.js";

//Func for buttons on the export page
async function createButtonWithCount(label, exportFunction, storeName) {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";

    const button = document.createElement("button");
    button.textContent = label;
    button.onclick = async () => {
        await exportFunction();
        console.log(`${label} exported.`); //log shit


        if (storeName) {
            const count = await countEntries(storeName);
            countElement.textContent = `${label.split(" ")[1]} Entries: ${count}`;
        } else {

            await updateAllCounts(); //Update DB counts to the rigth of buttons
        }
    };

    const countElement = document.createElement("span");
    //Set Unique ID for entry count
    countElement.id = `count-${storeName ? storeName.toLowerCase() : 'all'}`;
    countElement.textContent = storeName ? `${label.split(" ")[1]} Entries: 0` : '';
    countElement.style.marginLeft = "10px";

    container.appendChild(button);
    container.appendChild(countElement);

    document.getElementById("app").appendChild(container);

    //init count display for the stores
    if (storeName) {
        const count = await countEntries(storeName);
        countElement.textContent = `${label.split(" ")[1]} Entries: ${count}`;
    }
}

async function countEntries(storeName) {
    if (!database) {
        console.error("Database is not initialized.");
        return 0;
    }

    return new Promise((resolve, reject) => {
        const transaction = database.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const request = store.count(); //Count entries

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = (error) => {
            console.error(`Error counting entries in ${storeName}:`, error);
            reject(error);
        };
    });
}

//Func to update all counts
async function updateAllCounts() {
    const stores = ["messages", "memories", "diary", "images", "voiceMSG"];
    for (const store of stores) {
        const countElement = document.getElementById(`count-${store}`);
        if (countElement) {
            const count = await countEntries(store);
            countElement.textContent = `${store.charAt(0).toUpperCase() + store.slice(1)} Entries: ${count}`;
        }
    }
}

//Func to show Export Page
function showExportPage() {
    clearApp();
    drawNavigationButtons();
    const title = document.createElement("h1");
    title.textContent = "Export Data";
    document.getElementById("app").appendChild(title);
    updateAllCounts();
    //Da export buttons
    createButtonWithCount("Export Chat", exportChat, "messages");
    createButtonWithCount("Export Memories", exportMemories, "memories");
    createButtonWithCount("Export Diary", exportDiary, "diary");
    createButtonWithCount("Export Images", exportImages, "images");
    createButtonWithCount("Export Voice", exportVoice, "voiceMSG");
    createButtonWithCount("Export All", exportAll, null);
}

//Funct to show Download pages
function showDownloadPage() {
    clearApp();
    drawNavigationButtons();

    const title = document.createElement("h1");
    title.textContent = "Download Data";
    document.getElementById("app").appendChild(title);


    const formatDropdown = document.createElement("select");
    const formats = ["txt", "json", "csv"];


    formats.forEach(format => {
        const option = document.createElement("option");
        option.value = format;
        option.textContent = format.toUpperCase();
        formatDropdown.appendChild(option);
    });


    document.getElementById("app").appendChild(formatDropdown);


    const downloadContainer = document.createElement("div");
    downloadContainer.style.marginTop = "20px";


    const updateDownloadButtons = () => {

        const existingButtons = downloadContainer.querySelectorAll(".download-button");
        existingButtons.forEach(button => button.remove());


        downloadLinks.forEach(link => {
            const button = document.createElement("button");
            button.className = "download-button";
            button.textContent = `Download ${link.label} (${formatDropdown.value.toUpperCase()})`;
            button.onclick = () => exportDatabaseContent(formatDropdown.value, link.storeName);
            downloadContainer.appendChild(button);
        });
    };


    formatDropdown.addEventListener("change", updateDownloadButtons);


    updateDownloadButtons();


    document.getElementById("app").appendChild(downloadContainer);
}

//Label -> DB Name
const downloadLinks = [{
    label: "Chat",
    storeName: "messages"
}, {
    label: "Memories",
    storeName: "memories"
}, {
    label: "Diary",
    storeName: "diary"
}, {
    label: "Images",
    storeName: "images"
}, {
    label: "Voice Messages",
    storeName: "voiceMSG"
},];

//Clear DB
async function clearIndexedDB() {
    const dbNames = await indexedDB.databases();
    const deletePromises = dbNames.map(db => {
        return new Promise((resolve, reject) => {
            const request = indexedDB.deleteDatabase(db.name);
            request.onsuccess = () => {
                console.log(`IndexedDB ${db.name} cleared.`);
                resolve();
            };
            request.onerror = () => {
                console.error(`Failed to clear IndexedDB ${db.name}.`);
                reject();
            };
        });
    });
    await Promise.all(deletePromises);
}

//Func to show Settings
function showSettingsPage() {
    clearApp();
    drawNavigationButtons();

    const title = document.createElement("h1");
    title.textContent = "Settings";
    document.getElementById("app").appendChild(title);


    const createInputField = (label, id, value) => {
        const fieldContainer = document.createElement("div");
        fieldContainer.style.display = "flex";
        fieldContainer.style.alignItems = "center";
        fieldContainer.style.marginBottom = "10px";

        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = label;
        fieldLabel.htmlFor = id;
        fieldLabel.style.marginRight = "10px";

        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.id = id;
        inputField.value = value;
        inputField.style.width = "300px";

        fieldContainer.appendChild(fieldLabel);
        fieldContainer.appendChild(inputField);
        document.getElementById("app").appendChild(fieldContainer);
    };


    const authData = localStorage.getItem("auth");
    const chatData = localStorage.getItem("ws");
    const profileData = localStorage.getItem("profile");

    let authObj = authData ? JSON.parse(authData) : {};
    let chatObj = chatData ? JSON.parse(chatData) : {};
    let profileObj = profileData ? JSON.parse(profileData) : {};


    createInputField("User ID", "auth-userId", authObj.userId || "");
    createInputField("Device ID", "auth-deviceId", authObj.deviceId || "");
    createInputField("Auth Token", "auth-authToken", authObj.authToken || "");


    createInputField("Chat ID", "ws-chatId", chatObj.chatId || "");


    createInputField("User Name", "profile-userName", profileObj.userProfile ? profileObj.userProfile.first_name : "");
    createInputField("Bot Name", "profile-botName", profileObj.bot ? profileObj.bot.name : "");


    const saveButton = document.createElement("button");
    saveButton.textContent = "Save Settings";
    saveButton.onclick = () => {
        const newAuthData = {
            userId: document.getElementById("auth-userId").value,
            deviceId: document.getElementById("auth-deviceId").value,
            authToken: document.getElementById("auth-authToken").value
        };
        const newChatData = {
            chatId: document.getElementById("ws-chatId").value
        };
        const newProfileData = {
            userProfile: {
                first_name: document.getElementById("profile-userName").value
            },
            bot: {
                name: document.getElementById("profile-botName").value
            }
        };


        localStorage.setItem("auth", JSON.stringify(newAuthData));
        localStorage.setItem("ws", JSON.stringify(newChatData));
        localStorage.setItem("profile", JSON.stringify(newProfileData));
        console.log("Settings saved.");
        alert("Settings saved successfully!");
    };
    document.getElementById("app").appendChild(saveButton);

    //Stuff to clear everything
    const clearButton = document.createElement("button");
    clearButton.textContent = "Clear Saved Data";
    clearButton.onclick = () => {
        if (confirm("Are you sure you want to clear all saved data?")) {
            localStorage.removeItem("auth");
            localStorage.removeItem("ws");
            localStorage.removeItem("profile");
            clearIndexedDB()
            console.log("Saved data cleared.");
            alert("Saved data cleared successfully!");
        }
    };
    document.getElementById("app").appendChild(clearButton);
}


//Wipe the main page
function clearApp() {
    const appElement = document.getElementById("app");
    appElement.innerHTML = "";
}

//Da nav buttons
function drawNavigationButtons() {
    const navContainer = document.createElement("div");
    navContainer.style.position = "absolute";
    navContainer.style.top = "10px";
    navContainer.style.left = "10px";
    navContainer.style.zIndex = "1000";
    navContainer.style.display = "flex";
    navContainer.style.gap = "10px";

    const exportButton = document.createElement("button");
    exportButton.textContent = "Export";
    exportButton.onclick = showExportPage;

    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download";
    downloadButton.onclick = showDownloadPage;

    const settingsButton = document.createElement("button");
    settingsButton.textContent = "Settings";
    settingsButton.onclick = showSettingsPage;

    navContainer.appendChild(exportButton);
    navContainer.appendChild(downloadButton);
    navContainer.appendChild(settingsButton);
    document.getElementById("app").appendChild(navContainer);
}


const dbReadyPromise = new Promise((resolve) => {
    const checkDatabase = setInterval(() => {
        if (database) {
            clearInterval(checkDatabase);
            resolve();
        }
    }, 100);
});

dbReadyPromise
    .then(async () => {
        await updateAllCounts();


        showExportPage();
    })
    .catch(error => {
        console.error("Failed to initialize database:", error);
    });