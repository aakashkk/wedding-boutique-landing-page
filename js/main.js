var navMenu, storeInfo;
navMenu = document.getElementById("nav-menu");
storeInfo = document.getElementById("store-info");

var hamburgerMenu = document.getElementById("hamburger");
hamburgerMenu.hidden = true;

if (window.matchMedia("(min-width: 400px)").matches)) {
    hamburgerMenu.style.visibility = "visible";
} else {
    hamburgerMenu.style.visibility = "hidden";
}
function showMenuMobile() {
    'use strict';
    
    var buttonClicked = false;
    navMenu = document.getElementById("nav-menu");
    storeInfo = document.getElementById("store-info");
    
    if (buttonClicked === false) {
        navMenu.style.visibility = 'visible';
        storeInfo.style.visibility = 'visible';
        buttonClicked = true;
    } else {
        navMenu.style.visibility = 'hidden';
        storeInfo.style.visibility = 'hidden';
    }
}

hamburgerMenu.addEventListener("click", showMenuMobile, true);