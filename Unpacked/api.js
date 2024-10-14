//api.js

import {
    getLastMessageId,
    database,
    getAllMessages,

} from "./replikaExport.js";

//Helper Functions
async function swapActiveTab(targetTabId) {
    const tabsAPI = typeof browser !== 'undefined' ? browser.tabs : chrome.tabs;
    const tabs = await tabsAPI.query({
        currentWindow: true
    });
    const targetTab = tabs.find(tab => tab.id === targetTabId);
    const activeTab = tabs.find(tab => tab.active);
    await tabsAPI.update(activeTab.id, {
        active: false
    });
    await tabsAPI.update(targetTab.id, {
        active: true
    });
}

async function waitForTabLoad(tabId) {
    return new Promise((resolve) => {
        const tabsAPI = typeof browser !== 'undefined' ? browser.tabs : chrome.tabs;

        const checkTabStatus = async (tabId) => {
            const tab = await tabsAPI.get(tabId);
            if (tab.status === 'complete') {
                resolve();
            } else {
                setTimeout(() => checkTabStatus(tabId), 500);
            }
        };

        checkTabStatus(tabId);
    });
}

const randomBytes = new Uint8Array(16);
const hexArray = [];
for (let i = 0; i < 256; i++) {
    hexArray.push((i + 256).toString(16).slice(1));
}

function getRNGValues() {
    if (!crypto?.getRandomValues) {
        throw new Error("crypto.getRandomValues() not supported.");
    }
    return crypto.getRandomValues(randomBytes);
}

function formatUUID(bytes) {
    return (
        hexArray[bytes[0]] + hexArray[bytes[1]] + hexArray[bytes[2]] + hexArray[bytes[3]] + "-" +
        hexArray[bytes[4]] + hexArray[bytes[5]] + "-" +
        hexArray[bytes[6] & 0x0f | 0x40] + hexArray[bytes[7]] + "-" +
        hexArray[bytes[8] & 0x3f | 0x80] + hexArray[bytes[9]] + "-" +
        hexArray[bytes[10]] + hexArray[bytes[11]] + hexArray[bytes[12]] + hexArray[bytes[13]] + hexArray[bytes[14]] + hexArray[bytes[15]]
    ).toLowerCase();
}

function generateUUID() {
    const bytes = getRNGValues();
    return formatUUID(bytes);
}

var cryptographyHelpers = {},
    moduleExports = {
        get exports() {
            return cryptographyHelpers
        },
        set exports(value) {
            cryptographyHelpers = value
        }
    },
    no = {},
    O1 = {
        get exports() {
            return no
        },
        set exports(f) {
            no = f
        }
    };
(function () {
    var icryptoUtils = {
        rotateLeft: function (n, l) {
            return n << l | n >>> 32 - l
        },
        endian: function (n) {
            if (n.constructor == Number) return icryptoUtils.rotateLeft(n, 8) & 16711935 | icryptoUtils.rotateLeft(n, 24) & 4278255360;
            for (var l = 0; l < n.length; l++) n[l] = icryptoUtils.endian(n[l]);
            return n
        },
        randomBytes: function (n) {
            for (var l = []; n > 0; n--) l.push(Math.floor(Math.random() * 256));
            return l
        },
        bytesToWords: function (n) {
            for (var l = [], s = 0, d = 0; s < n.length; s++, d += 8) l[d >>> 5] |= n[s] << 24 - d % 32;
            return l
        },
        wordsToBytes: function (n) {
            for (var l = [], s = 0; s < n.length * 32; s += 8) l.push(n[s >>> 5] >>> 24 - s % 32 & 255);
            return l
        },
        bytesToHex: function (n) {
            for (var l = [], s = 0; s < n.length; s++) l.push((n[s] >>> 4).toString(16)), l.push((n[s] & 15).toString(16));
            return l.join("")
        }
    };
    O1.exports = icryptoUtils
})();
var ro = {
    utf8: {
        stringToBytes: function (f) {
            return ro.bin.stringToBytes(unescape(encodeURIComponent(f)))
        },
        bytesToString: function (f) {
            return decodeURIComponent(escape(ro.bin.bytesToString(f)))
        }
    },
    bin: {
        stringToBytes: function (f) {
            for (var i = [], n = 0; n < f.length; n++) i.push(f.charCodeAt(n) & 255);
            return i
        },
        bytesToString: function (f) {
            for (var i = [], n = 0; n < f.length; n++) i.push(String.fromCharCode(f[n]));
            return i.join("")
        }
    }
},
    Hu = ro;
var isValidBuffer = function (buffer) {
    return buffer != null && (isNativeBuffer(buffer) || L1(buffer) || !!buffer._isBuffer)
};

function isNativeBuffer(buffer) {
    return !!buffer.constructor && typeof buffer.constructor.isBuffer == "function" && buffer.constructor.isBuffer(buffer)
}

function L1(f) {
    return typeof f.readFloatLE == "function" && typeof f.slice == "function" && isNativeBuffer(f.slice(0, 0))
} (function () {
    var f = no,
        i = Hu.utf8,
        n = isValidBuffer,
        l = Hu.bin,
        s = function (d, u) {
            d.constructor == String ? u && u.encoding === "binary" ? d = l.stringToBytes(d) : d = i.stringToBytes(d) : n(d) ? d = Array.prototype.slice.call(d, 0) : !Array.isArray(d) && d.constructor !== Uint8Array && (d = d.toString());
            for (var a = f.bytesToWords(d), m = d.length * 8, _ = 1732584193, c = -271733879, g = -1732584194, h = 271733878, p = 0; p < a.length; p++) a[p] = (a[p] << 8 | a[p] >>> 24) & 16711935 | (a[p] << 24 | a[p] >>> 8) & 4278255360;
            a[m >>> 5] |= 128 << m % 32, a[(m + 64 >>> 9 << 4) + 14] = m;
            for (var x = s._ff, y = s._gg, A = s._hh, S = s._ii, p = 0; p < a.length; p += 16) {
                var C = _,
                    T = c,
                    L = g,
                    B = h;
                _ = x(_, c, g, h, a[p + 0], 7, -680876936), h = x(h, _, c, g, a[p + 1], 12, -389564586), g = x(g, h, _, c, a[p + 2], 17, 606105819), c = x(c, g, h, _, a[p + 3], 22, -1044525330), _ = x(_, c, g, h, a[p + 4], 7, -176418897), h = x(h, _, c, g, a[p + 5], 12, 1200080426), g = x(g, h, _, c, a[p + 6], 17, -1473231341), c = x(c, g, h, _, a[p + 7], 22, -45705983), _ = x(_, c, g, h, a[p + 8], 7, 1770035416), h = x(h, _, c, g, a[p + 9], 12, -1958414417), g = x(g, h, _, c, a[p + 10], 17, -42063), c = x(c, g, h, _, a[p + 11], 22, -1990404162), _ = x(_, c, g, h, a[p + 12], 7, 1804603682), h = x(h, _, c, g, a[p + 13], 12, -40341101), g = x(g, h, _, c, a[p + 14], 17, -1502002290), c = x(c, g, h, _, a[p + 15], 22, 1236535329), _ = y(_, c, g, h, a[p + 1], 5, -165796510), h = y(h, _, c, g, a[p + 6], 9, -1069501632), g = y(g, h, _, c, a[p + 11], 14, 643717713), c = y(c, g, h, _, a[p + 0], 20, -373897302), _ = y(_, c, g, h, a[p + 5], 5, -701558691), h = y(h, _, c, g, a[p + 10], 9, 38016083), g = y(g, h, _, c, a[p + 15], 14, -660478335), c = y(c, g, h, _, a[p + 4], 20, -405537848), _ = y(_, c, g, h, a[p + 9], 5, 568446438), h = y(h, _, c, g, a[p + 14], 9, -1019803690), g = y(g, h, _, c, a[p + 3], 14, -187363961), c = y(c, g, h, _, a[p + 8], 20, 1163531501), _ = y(_, c, g, h, a[p + 13], 5, -1444681467), h = y(h, _, c, g, a[p + 2], 9, -51403784), g = y(g, h, _, c, a[p + 7], 14, 1735328473), c = y(c, g, h, _, a[p + 12], 20, -1926607734), _ = A(_, c, g, h, a[p + 5], 4, -378558), h = A(h, _, c, g, a[p + 8], 11, -2022574463), g = A(g, h, _, c, a[p + 11], 16, 1839030562), c = A(c, g, h, _, a[p + 14], 23, -35309556), _ = A(_, c, g, h, a[p + 1], 4, -1530992060), h = A(h, _, c, g, a[p + 4], 11, 1272893353), g = A(g, h, _, c, a[p + 7], 16, -155497632), c = A(c, g, h, _, a[p + 10], 23, -1094730640), _ = A(_, c, g, h, a[p + 13], 4, 681279174), h = A(h, _, c, g, a[p + 0], 11, -358537222), g = A(g, h, _, c, a[p + 3], 16, -722521979), c = A(c, g, h, _, a[p + 6], 23, 76029189), _ = A(_, c, g, h, a[p + 9], 4, -640364487), h = A(h, _, c, g, a[p + 12], 11, -421815835), g = A(g, h, _, c, a[p + 15], 16, 530742520), c = A(c, g, h, _, a[p + 2], 23, -995338651), _ = S(_, c, g, h, a[p + 0], 6, -198630844), h = S(h, _, c, g, a[p + 7], 10, 1126891415), g = S(g, h, _, c, a[p + 14], 15, -1416354905), c = S(c, g, h, _, a[p + 5], 21, -57434055), _ = S(_, c, g, h, a[p + 12], 6, 1700485571), h = S(h, _, c, g, a[p + 3], 10, -1894986606), g = S(g, h, _, c, a[p + 10], 15, -1051523), c = S(c, g, h, _, a[p + 1], 21, -2054922799), _ = S(_, c, g, h, a[p + 8], 6, 1873313359), h = S(h, _, c, g, a[p + 15], 10, -30611744), g = S(g, h, _, c, a[p + 6], 15, -1560198380), c = S(c, g, h, _, a[p + 13], 21, 1309151649), _ = S(_, c, g, h, a[p + 4], 6, -145523070), h = S(h, _, c, g, a[p + 11], 10, -1120210379), g = S(g, h, _, c, a[p + 2], 15, 718787259), c = S(c, g, h, _, a[p + 9], 21, -343485551), _ = _ + C >>> 0, c = c + T >>> 0, g = g + L >>> 0, h = h + B >>> 0
            }
            return f.endian([_, c, g, h])
        };
    s._ff = function (d, u, a, m, _, c, g) {
        var h = d + (u & a | ~u & m) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._gg = function (d, u, a, m, _, c, g) {
        var h = d + (u & m | a & ~m) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._hh = function (d, u, a, m, _, c, g) {
        var h = d + (u ^ a ^ m) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._ii = function (d, u, a, m, _, c, g) {
        var h = d + (a ^ (u | ~m)) + (_ >>> 0) + g;
        return (h << c | h >>> 32 - c) + u
    }, s._blocksize = 16, s._digestsize = 16, moduleExports.exports = function (d, u) {
        if (d == null) throw new Error("Illegal argument " + d);
        var a = f.wordsToBytes(s(d, u));
        return u && u.asBytes ? a : u && u.asString ? l.bytesToString(a) : f.bytesToHex(a)
    }
})();

function createRequestHeaders(userData) {
    const i = cryptographyHelpers(`time_covfefe_prefix=2020_${userData.deviceId}`);
    return {
        "x-user-id": userData.userId,
        "x-auth-token": userData.authToken,
        "x-device-id": userData.deviceId,
        "x-timestamp-hash": i
    }
}

//Edited to store keys for other calls because it doesnt change often
let userAuthData = {};
async function extractAuthData() {

    const userData = {
        ...userAuthData
    };
    const urlList = ["https://my.replika.com/", "https://my.replika.ai/"];
    const result = {
        error: null,
        data: null
    };

    //Retrieve data from localStorage
    const authData = localStorage.getItem("auth");
    const chatData = localStorage.getItem("ws");
    const profileData = localStorage.getItem("profile");

    //If all necessary data is available in localStorage and assign it
    if (authData && chatData && profileData) {
        try {
            const parsedAuthData = JSON.parse(authData);
            userData.userId = parsedAuthData.userId;
            userData.deviceId = parsedAuthData.deviceId;
            userData.authToken = parsedAuthData.authToken;

            const parsedChatData = JSON.parse(chatData);
            userData.chatId = parsedChatData.chatId;

            const parsedProfileData = JSON.parse(profileData);
            userData.userName = parsedProfileData.userProfile.first_name;
            userData.botName = parsedProfileData.bot.name;

            result.data = userData;
            return result;
        } catch (error) {
            console.error("Error parsing data from localStorage:", error);
            result.error = "Failed to parse data from localStorage.";
            return result;
        }
    }

    const isFirefox = typeof browser !== "undefined";
    const tabsAPI = isFirefox ? browser.tabs : chrome.tabs;
    const scriptingAPI = isFirefox ? browser.scripting : chrome.scripting;

    for (const url of urlList) {
        const {
            id: tabId
        } = await tabsAPI.create({
            url: url,
            active: false
        });
        await waitForTabLoad(tabId);
        await swapActiveTab(tabId);
        let executionResult = null;

        try {
            executionResult = await scriptingAPI.executeScript({
                target: {
                    tabId: tabId
                },
                args: [userData],
                func: (userData) => {
                    let error = null;
                    try {
                        const authData = localStorage.getItem("auth");
                        const parsedAuthData = JSON.parse(authData);
                        userData.userId = parsedAuthData.userId;
                        userData.deviceId = parsedAuthData.deviceId;
                        userData.authToken = parsedAuthData.authToken;

                        const chatData = localStorage.getItem("ws");
                        const parsedChatData = JSON.parse(chatData);
                        userData.chatId = parsedChatData.chatId;

                        const profileData = localStorage.getItem("profile");
                        const parsedProfileData = JSON.parse(profileData);
                        userData.userName = parsedProfileData.userProfile.first_name;
                        userData.botName = parsedProfileData.bot.name;
                    } catch (error) {
                        console.error("Error extracting user data from localStorage:", error);
                        error = JSON.stringify(error, Object.getOwnPropertyNames(error));
                    }
                    return {
                        error,
                        data: userData
                    };
                }
            });
        } catch (wrappedErr) {
            console.error("Error executing script:", wrappedErr);
        }

        tabsAPI.remove(tabId);

        if (executionResult) {
            const {
                error: scriptError,
                data: resultedUserData
            } = executionResult[0].result;

            if (scriptError) {
                result.error = result.error || {};
                result.error[url] = scriptError;
                console.error(`Error from ${url}:`, scriptError);
                continue;
            }

            result.data = resultedUserData;

            //Store extracted data back in localStorage
            localStorage.setItem("auth", JSON.stringify({
                userId: resultedUserData.userId,
                deviceId: resultedUserData.deviceId,
                authToken: resultedUserData.authToken
            }));
            localStorage.setItem("ws", JSON.stringify({
                chatId: resultedUserData.chatId
            }));
            localStorage.setItem("profile", JSON.stringify({
                userProfile: {
                    first_name: resultedUserData.userName
                },
                bot: {
                    name: resultedUserData.botName
                }
            }));
            break;
        } else {
            console.error("No execution result returned.");
        }
    }

    //Check if data was successful
    if (!result.data) {
        console.error("No data was extracted.");
        return result;
    }

    //If data was extracted successfully
    result.error = null;

    //Validate that all expected user data keys are present
    for (const key of Object.keys(userData)) {
        if (!result.data[key]) {
            result.error = result.error || {};
            result.error[key] = "Could not find data";
        }
    }

    return result;
}

//Function to export Chat with Replika AI
async function exportChat() {
    try {
        const {
            error: authError,
            data: authData
        } = await extractAuthData();
        if (authError) {
            console.error("Error extracting authentication data:", authError);
            return;
        }

        const lastMsgID = await getLastMessageId(); //Get the last message ID from the database
        const exportWebSocket = new WebSocket("wss://ws.replika.com/v17"); //Initialize WebSocket

        //Construct the request payload
        const requestPayload = {
            event_name: "history",
            token: generateUUID(), //Generate a unique token for the request
            auth: {
                user_id: authData.userId,
                auth_token: authData.authToken,
                device_id: authData.deviceId
            },
            payload: {
                chat_id: authData.chatId,
                limit: 1000,
                last_message_id: undefined //No last message ID initially
            }
        };

        exportWebSocket.addEventListener("open", () => {
            exportWebSocket.send(JSON.stringify(requestPayload)); //Send the payload
        });

        //When a message is received from the WebSocket
        exportWebSocket.addEventListener("message", async ({
            data
        }) => {
            try {
                const response = JSON.parse(data); //Parse incoming data
                if (response.event_name !== "history") return; //Only process "history" events

                const messages = response.payload.messages; //Extract messages
                if (!messages.length) {
                    exportWebSocket.close(); //Close if no messages
                    return;
                }

                //Store received messages
                const messageStore = database.transaction("messages", "readwrite").objectStore("messages");
                messages.forEach(message => messageStore.add(message));

                //Check for last message ID
                if (messages.find(msg => msg.id === lastMsgID)) {
                    exportWebSocket.close();
                } else {
                    //Update the last message ID for the next request
                    requestPayload.payload.last_message_id = messages[0].id;
                    exportWebSocket.send(JSON.stringify(requestPayload));
                }
            } catch (error) {
                console.error("Error processing messages:", error);
                exportWebSocket.close();
            }
        });
    } catch (error) {
        console.error("Error during chat export:", error);
        return null;
    }
}

//Fucntion to export Replika Memories
async function exportMemories() {
    try {

        if (!database) {
            throw new Error("Database not initialized.");
        }

        //Extract auth data
        const {
            error: authError,
            data: authData
        } = await extractAuthData();
        if (authError) {
            throw authError;
        }

        //Fetch memory facts
        const memoryResponse = await (async () => {
            const headers = await createRequestHeaders(authData);
            return await fetch("https://my.replika.ai/api/mobile/1.4/memory", {
                headers: headers
            }); //Fetch memory
        })().then(response => response.json());

        //Check if the response contains memory facts
        if (!Array.isArray(memoryResponse.facts)) {
            throw {
                message: "Unexpected response, no facts found",
                json: memoryResponse
            };
        }

        //Store the fetched memory 
        let memoryFacts = memoryResponse.facts;

        //Fetch additional memory facts
        const additionalMemoryResponse = await (await fetch("https://my.replika.ai/api/mobile/1.5/memory/v3/", {
            headers: createRequestHeaders(authData)
        })).json();

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

            navContainer.appendChild(exportButton);
            navContainer.appendChild(downloadButton);
            document.getElementById("app").appendChild(navContainer);
        }

        //Combine the initial and additional memory facts
        memoryFacts = [
            ...memoryFacts, //Existing memory facts
            ...additionalMemoryResponse.customer_facts, //Additional customer facts
            ...additionalMemoryResponse.robot_facts //Additional robot facts
        ];

        //Store all memory facts 
        const messageStore = database.transaction("memories", "readwrite").objectStore("memories");
        memoryFacts.forEach(fact => messageStore.add(fact)); //Add each memory fact

        return memoryFacts;
    } catch (error) {
        console.error("Error during memory export:", error);
        return null;
    }
}

//Function to export Replika Diary
async function exportDiary() {
    try {

        if (!database) {
            throw new Error("Database not initialized.");
        }


        const {
            error: authError,
            data: authData
        } = await extractAuthData();
        if (authError) {
            throw authError;
        }

        //Fetch all diary entries
        const allEntries = await (async () => {
            const headers = await createRequestHeaders(authData);
            let entries = await fetch("https://my.replika.com/api/mobile/1.4/saved_chat_items/previews?t=diary&offset=0&limit=100", {
                headers: headers
            })
                .then(response => response.json()); //Parse the response

            let allDiaryEntries = [...entries]; //Initialize with the first batch of entries
            let offset = 100;

            //Continue fetching entries
            while (entries.length > 0) {
                const nextResponse = await fetch(`https://my.replika.com/api/mobile/1.4/saved_chat_items/previews?t=diary&offset=${offset}&limit=100`, {
                    headers: headers
                });
                entries = await nextResponse.json();
                allDiaryEntries.push(...entries);
                offset += 100;
            }

            return allDiaryEntries; //Return all fetched diary entries
        })();

        //Fetch detailed information for each diary entry
        const diaryEntries = await (async () => {
            const headers = await createRequestHeaders(authData);
            const response = await fetch("https://my.replika.com/api/mobile/1.4/saved_chat_items/actions/get_by_ids", {
                headers: headers,
                method: "POST",
                body: JSON.stringify({
                    ids: allEntries.map(entry => entry.id) //Send the IDs of all diary entries
                })
            });
            return await response.json(); //Parse the detailed entries response
        })();

        //Store diary entries
        const diaryStore = database.transaction("diary", "readwrite").objectStore("diary");
        diaryEntries.forEach(entry => diaryStore.add(entry)); //Add each diary entry

        return diaryEntries;
    } catch (error) {
        console.error("Error during diary export:", error);
        return null;
    }
}

//Function to export Replika Images
async function exportImages() {
    let errorMessage = "";
    const chunkSize = 100;
    const delayInSeconds = 1;
    let imageMessages = [];

    try {
        if (!database) {
            throw new Error("Database not initialized.");
        }

        //Fetch all messages and filter for image messages
        const allMessages = await getAllMessages();
        imageMessages = allMessages.filter(message => message.content.type === "images");


        const {
            data: authData,
            error: authError
        } = await extractAuthData();
        if (authError) {
            throw authError;
        }

        //Function to split an array into smaller chunks
        const chunkArray = (array, size) => {
            const chunks = [];
            for (let i = 0; i < array.length; i += size) {
                chunks.push(array.slice(i, i + size)); //Slice the array into chunks
            }
            return chunks;
        };

        //Split image messages into chunks
        const messageChunks = chunkArray(imageMessages, chunkSize);
        for (const chunk of messageChunks) {
            //Process each message in the current chunk
            await Promise.all(chunk.map(async (message) => {
                const imageUrl = message.content.text; //Extract image URL
                const participant = {
                    Customer: authData.userName,
                    Robot: authData.botName
                }[message.meta.nature]; //Determine participant based on message nature

                //Format the timestamp for storage
                const formattedTimestamp = message.meta.timestamp.replaceAll(":", "-").replaceAll(".", "-");
                try {
                    //Get signed URL for the image
                    const signedUrlResponse = await fetch("https://my.replika.ai/api/mobile/1.5/images/signed/actions/get_url", {
                        method: "POST",
                        headers: createRequestHeaders(authData),
                        body: JSON.stringify({
                            image_url: imageUrl
                        })
                    });
                    const signedUrlData = await signedUrlResponse.json();

                    //Fetch the image as a blob
                    const imageBlob = await (await fetch(`https://corsproxy.io/?${signedUrlData.image_url}`)).blob();

                    //Convert the blob to Base64
                    const reader = new FileReader();
                    reader.onloadend = async function () {
                        const base64data = reader.result; //Get the Base64 data
                        //Save the image
                        const imageStore = database.transaction("images", "readwrite").objectStore("images");
                        await imageStore.add({
                            id: message.id,
                            base64: base64data,
                            timestamp: message.meta.timestamp,
                            participant: participant
                        });
                    };
                    reader.readAsDataURL(imageBlob);
                } catch (error) {
                    console.warn("Error processing image:", error);
                    errorMessage += `${message.id} - ${error}\n`;
                }
            }));

            await new Promise(resolve => setTimeout(resolve, 1000 * delayInSeconds));
        }
    } catch (error) {
        console.error("Error during image export:", error);
        errorMessage += error.message;
    } finally {

        if (errorMessage) {
            console.error("Errors encountered during export:", errorMessage);
        }
    }
}

//Function to export Replika Voice URLs
async function exportVoice() {
    try {
        const chunkSize = 100;
        const voiceMessages = [];

        //Fetch all messages and filter to get only voice messages
        const allMessages = await getAllMessages();
        voiceMessages.push(...allMessages.filter(msg => msg.content.type === "voice_message")); //Add filtered voice messages


        const {
            data: authData,
            error: authError
        } = await extractAuthData();
        if (authError) {
            console.error("Authentication error:", JSON.stringify(authError, null, 4));
            return;
        }

        //Process voice messages in chunks
        for (let i = 0; i < voiceMessages.length; i += chunkSize) {
            const chunk = voiceMessages.slice(i, i + chunkSize); //Get the current chunk of voice messages
            const voiceEntries = [];

            //Process each message in the current chunk
            await Promise.all(chunk.map(async (message) => {
                const voiceMessageUrl = message.content.voice_message_url; //Extract the voice message URL
                const entry = {
                    id: message.id,
                    url: voiceMessageUrl
                }; //Create an object with the message ID and URL
                voiceEntries.push(entry); //Add the entry to the array
            }));

            //Store all entries
            const dbTransaction = database.transaction("voiceMSG", "readwrite");
            const voiceStore = dbTransaction.objectStore("voiceMSG");

            //Add each entry to the store
            voiceEntries.forEach(entry => voiceStore.add(entry));
        }
    } catch (error) {
        console.error("Error during voice export:", error);
        return null;
    }
}

//Function to export everything all at once
async function exportAll() {
    try {
        await exportChat();
        await exportMemories();
        await exportDiary();
        await exportImages();
        await exportVoice();
        console.log("All exports completed successfully.");
    } catch (error) {
        console.error("Error during export:", error);
    }
}

//Function to convert data to CSV format
function convertToCSV(data) {
    if (data.length === 0) {
        return '';
    }

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(',')); //Add headers

    for (const row of data) {
        csvRows.push(headers.map(field => JSON.stringify(row[field])).join(',')); //Convert each row to CSV format
    }

    return csvRows.join('\n'); //Return the joined CSV string
}

//Function to download content with a specified type and file name
function downloadContent(content, mimeType, fileName) {
    const anchor = document.createElement("a");
    const blob = new Blob([content], {
        type: mimeType
    });
    anchor.href = URL.createObjectURL(blob);
    anchor.download = fileName;
    anchor.click();
}

//Function to gen filenames
function generateFileName(exportType, ext) {
    const currDate = new Date().toISOString().split("T")[0];
    return `replika-${exportType}-export-${currDate}.${ext}`;
}

//Main export function that handles the download of the selected format
async function exportDatabaseContent(format, storeName) {

    const profileData = await extractAuthData();
    const roles = {
        userName: profileData.data.userName,
        botName: profileData.data.botName
    };

    //Fetch data from the specified store
    const data = await fetchDataFromStore(storeName);
    if (!data) return;

    //Create a filename based on the export type and format
    const fileName = generateFileName(storeName, format);

    //Array to hold formatted export data
    let exportData = [];

    //Iterate through each entry in the fetched data
    for (const entry of data) {
        //Check if the entry is Chat shoutout chat tbh fav 4th person pronoun
        if (entry.content?.type === "text") {
            //Determine the sender name based on entry metadata
            const senderName = entry.meta.nature === "Customer" ? roles.userName : roles.botName;
            //Format and push the text message to the export data
            exportData.push(`${new Date(entry.meta.timestamp).toLocaleString()} ${senderName}: ${entry.content.text}`);
        }
        //Check if the entry is Diary
        else if (entry.type === "diary") {
            //Get the timestamp for the diary entry
            const timestamp = new Date(entry.creation_timestamp || entry.timestamp).toLocaleString();
            //Iterate through diary entries and format them
            for (const diaryEntry of entry.entries) {
                exportData.push(`${timestamp}\nDiary Entry: ${diaryEntry.text}`);
            }
        }
        //Check if the entry is Memory
        else if (entry.text && entry.creation_timestamp) {
            //Format the memory entry with its timestamp
            const timestamp = new Date(entry.creation_timestamp).toLocaleString();
            exportData.push(`${timestamp}\nMemory: ${entry.text}`);
        }
        //Check if the entry is Voice Message
        else if (entry.url) {
            //If an ID is present, add the voice message URL to the export data
            if (entry.id) {
                exportData.push(`Voice Message URL: ${entry.url}`);
            }
        }
        //Check if the entry is Images
        else if (entry.base64) {
            //Format the image entry with its timestamp
            const timestamp = new Date(entry.timestamp).toLocaleString();
            exportData.push(`${timestamp}\nImage: ${entry.base64}`);
        }
    }

    //Join the export data into a single string with double newlines between entries
    const joinedData = exportData.join('\n\n');

    //Handle different formats
    switch (format) {
        case 'txt':
            //Download as a plain text file
            downloadContent(joinedData, "text/plain", fileName);
            break;

        case 'csv':
            //Convert exported data to CSV format
            const csvData = convertToCSV(exportData.map((msg) => {
                const lines = msg.split('\n');
                return {
                    time: lines[0] || "",
                    message: lines.slice(1).join(' ') || ''
                };
            }));
            //Download as a CSV file
            downloadContent(csvData, "text/csv", fileName);
            break;

        case 'json':
            //Convert exported data to JSON format
            const jsonData = JSON.stringify(exportData.map((msg) => {
                const lines = msg.split('\n');
                return {
                    time: lines[0] || "",
                    message: lines.slice(1).join(' ') || ''
                };
            }), null, 2);
            //Download as a JSON file
            downloadContent(jsonData, "application/json", fileName);
            break;

        default:
            console.error("Unsupported format:", format);
    }
}


//Function to fetch data from the specified store
async function fetchDataFromStore(storeName) {
    return new Promise((resolve, reject) => {
        const transaction = database.transaction(storeName, 'readonly');
        const store = transaction.objectStore(storeName);
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result); //Resolve with all entries from the store
        };

        request.onerror = (error) => {
            console.error(`Error fetching data from ${storeName}:`, error);
            reject(error);
        };
    });
}

//Exporting functions for use in front.js
export {
    exportChat,
    exportMemories,
    exportDiary,
    exportImages,
    exportVoice,
    exportAll,
    exportDatabaseContent
};