let tabIds = [];
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.match("https://twitch.tv/*") || tab.url.match("https://www.twitch.tv/*")) {
        if (tabIds.includes(tabId)) {
            if (changeInfo.url) {
                console.log("tab-change");
                chrome.tabs.sendMessage(tabId, {
                    message: 'tabC',
                    url: changeInfo.url
                });
            }
        } else {
            tabIds.push(tabId);
        }
    }
});
