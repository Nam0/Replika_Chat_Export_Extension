//assets/background-script.js
import { e as runtime } from "./replikaExport.js";

// Remove existing context menus and create a new one for exporting Replika chat
chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
        documentUrlPatterns: ["https://my.replika.com/*", "https://my.replika.ai/*"],
        id: "replika-export",
        title: "Export Replika Chat"
    });
});

// Add a click listener for the context menu
chrome.contextMenus.onClicked.addListener(async event => {
    if (event.menuItemId !== "replika-export") return;

    // Open the chat export page when the context menu item is clicked
    const exportPageUrl = chrome.runtime.getURL("index.html?ref=menu");
    await chrome.tabs.create({ url: exportPageUrl });
});

// Add a listener for the action button click
chrome.action.onClicked.addListener(() => {
    // Open the options page when the action button is clicked
    chrome.runtime.openOptionsPage();
});
