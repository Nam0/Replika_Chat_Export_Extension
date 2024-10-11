// assets/background-script.js
const runtime = typeof browser === "undefined" ? chrome : browser;
const contextMenuId = "replika-export";

runtime.contextMenus.removeAll(() => {
    runtime.contextMenus.create({
        contexts: ["action"],
        documentUrlPatterns: ["https://my.replika.com/*", "https://my.replika.ai/*"],
        id: contextMenuId,
        title: "Export Replika Chat"
    });
});

runtime.contextMenus.onClicked.addListener(async event => {
    if (event.menuItemId !== contextMenuId) return;

    const exportPageUrl = runtime.runtime.getURL("index.html?ref=menu");
    await runtime.tabs.create({ url: exportPageUrl });
});

runtime.action.onClicked.addListener(() => {
    runtime.runtime.openOptionsPage();
});
