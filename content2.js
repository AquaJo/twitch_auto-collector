
let tabC = 0; // for controlling on which tab actions happened, ... -->  bec of the many timeouts and possibilites for multiple new watching() executions

start();
function start() {
    let testElm = document.getElementsByClassName('Layout-sc-nxg1ff-0 Aqzax')[0];
    if (testElm === null || testElm === undefined) {
        let observer1 = new MutationObserver(function (mutations, mutationInstance) {
            let watchedElement = document.getElementsByClassName('Layout-sc-nxg1ff-0 Aqzax')[0];
            if (watchedElement) {
                console.log("foundWatchedElement - twitch - auto-collector");
                main();
                observer1.disconnect();
            }
        });
        observer1.observe(document, { // observing for main element to watch out for changes
            childList: true,
            subtree: true
        });
    } else {
        main();
    }
}
function main() { // received main element ...
    let btn = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0];
    if (btn) { // check if coins btn already is there and click in case and after that activate normal listening for new creation of this button
        let randomInt = getRandomInt(3000, 6500);
        clickElementAfterTime(btn, randomInt, tabC);
        setTimeout(function () {
            watching();
        }, randomInt + 2000)
    } else { // direct listening for new creation of this btn
        watching();
    }
}
let watchedElement;
let observer;
function watching() {
    watchedElement = document.getElementsByClassName('Layout-sc-nxg1ff-0 Aqzax')[0];
    observer = new MutationObserver(function (mutations, mutationInstance) {
        let btn = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0];
        console.log("change in watched div detected - twitch - auto-collector");
        if (btn) { // found btn --> click
            clickElementAfterTime(btn, getRandomInt(3000, 6500), tabC);
            observer.disconnect(); // disconnect, .. new observer made after clicked + timeout, so it continues
        }
    });
    observer.observe(watchedElement, {
        childList: true,
        subtree: true
    });
}

function clickElementAfterTime(elm, time, tabCOld) { // time in ms
    setTimeout(function () {
        if (tabCOld == tabC) {
            elm.click();

            setTimeout(function () {
                if (tabCOld == tabC) {
                    watching();
                }
            }, 3500)
        }
    }, time)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === 'tabC') {
        console.log("tab change --> new start() - twitch - auto-collector");
        tabC++;
        //
        observer.disconnect();
        //
        start(); // need to restart whole script on tab / url change to keep observer up
    }
});

/*
let observer6 = new MutationObserver(function (mutations, mutationInstance) {
    let watchedElement = document.getElementsByClassName('Layout-sc-nxg1ff-0 Aqzax')[0];
    if (watchedElement) {
        let observer9 = new MutationObserver(function (e) {
            try {
                if (e[0].addedNodes) {
                    if (e[0].addedNodes[0]) {
                        //alert("new");
                        console.log(e[0].addedNodes[0]);
                    }
                }
            } catch (e) {

            }
        });
        observer9.observe(document.body, { // observing for main element to watch out for changes
            childList: true,
            subtree: true
        });
        observer6.disconnect();
    }
});
observer6.observe(document, { // observing for main element to watch out for changes
    childList: true,
    subtree: true
});
*/

// RELOAD 