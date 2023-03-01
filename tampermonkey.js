// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       AquaJo  --> https://github.com/AquaJo
// @match        https://*.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        none
// ==/UserScript==

// working on tampermonkey and violentmonkey

(function () {
    'use strict';

    window.onload = () => {
        let mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.target && mutation.target.classList && document.querySelector('[class*="claimable-bonus__icon"]')) {
                    let btns = document.querySelectorAll('[class*="claimable-bonus__icon"]');
                    btns.forEach(function (btn) {
                        setTimeout(function () {
                            try {
                                btn.click();
                            } catch (e) {

                            }
                        }, getRandomInt(3000, 6000));
                    });
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
})();