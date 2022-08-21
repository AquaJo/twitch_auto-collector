let tabIds = [];
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("tab-change-noFilter");
    if (changeInfo.url !== undefined) {
        if (changeInfo.url.match("https://twitch.tv/*") || changeInfo.url.match("https://www.twitch.tv/*")) {
            if (tabIds.includes(tabId)) {
                //if (changeInfo.url) {
                    console.log("tab-change");
                    setTimeout(function() {
                        chrome.tabs.sendMessage(tabId, {
                            message: 'tabC'
                        });
                    },2000)
               // }
            } else {
                tabIds.push(tabId);
            }
        }
    }
});
