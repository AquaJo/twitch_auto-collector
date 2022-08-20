setTimeout(function () {
    let btn = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0];
    if (btn !== undefined && btn !== null) {
        console.log("clicking1 ....");
        clickElementAfterTime(btn, getRandomInt(3000, 6500));
    }

    let watchedElement = document.getElementsByClassName('Layout-sc-nxg1ff-0 Aqzax')[0];
    let observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (!mutation.addedNodes) return

            for (let i = 0; i < 1/*mutation.addedNodes.length*/; i++) {
                // do things to your newly added nodes here
                let node = mutation.addedNodes[i];
                console.log("clicking in some seconds");
                setTimeout(function () {
                    let btn = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0];
                    if (btn !== undefined && btn !== null) {
                        console.log("clicking ....");
                        clickElementAfterTime(btn, getRandomInt(3000, 6500));
                    }
                }, 3800)
            }
        })
    })

    observer.observe(watchedElement, {
        childList: true
        , subtree: true
        , attributes: false
        , characterData: false
    })

}, 11000)


function clickElementAfterTime(elm, time) { // time in ms
    setTimeout(function () {
        elm.click();
    }, time)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}