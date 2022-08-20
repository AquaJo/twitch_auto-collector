let tabIds = [];
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url !== undefined) {
        if (changeInfo.url.match("https://twitch.tv/*") || changeInfo.url.match("https://www.twitch.tv/*")) {
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
    }
});
