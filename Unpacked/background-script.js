//background-script.js
const runtime = typeof browser === "undefined" ? chrome : browser;
const contextMenuId = "replika-export";

//Check if contextMenus API is available
if (runtime.contextMenus) {
    runtime.contextMenus.removeAll(() => {
        runtime.contextMenus.create({
            contexts: ["action"],
            documentUrlPatterns: ["https://my.replika.com/*", "https://my.replika.ai/*"],
            id: contextMenuId,
            title: "Export Replika Chat"
        });
    });

    //Handle context menu item click
    runtime.contextMenus.onClicked.addListener(async event => {
        if (event.menuItemId === contextMenuId) {
            const exportPageUrl = runtime.runtime.getURL("index.html?ref=menu");
            await runtime.tabs.create({ url: exportPageUrl });
        }
    });
}

//Handle extension icon click
runtime.action.onClicked.addListener(() => {
    const exportPageUrl = runtime.runtime.getURL("index.html");
    runtime.tabs.create({ url: exportPageUrl });
});
