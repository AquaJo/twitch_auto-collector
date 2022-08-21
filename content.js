window.onload = () => {
    let mutationObserver = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.target && mutation.target.classList && document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0]) {
                let btn = document.getElementsByClassName('ScCoreButton-sc-1qn4ixc-0 ScCoreButtonSuccess-sc-1qn4ixc-5 ffyxRu gjXDMG')[0];
                setTimeout(function () {
                    try {
                        btn.click();
                    } catch (e) {

                    }
                }, getRandomInt(3000, 6000))
                console.log("clicked bonus --> from twitch - auto-collector");
            }
        });
    });
    mutationObserver.observe(document.body, { attributes: true, subtree: true, childList: true, characterData: true });
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}