var menuButton_img = document.getElementById("mobile-menu")
var menu_div = document.getElementById("mobile-nav")

menu_div.style.left = "-120%"

function showHidemenu(){
    if (menu_div.style.left === "-120%"){
        menu_div.style.left = "0"
        menuButton_img.src = "images/icon-close.svg"
    }
    else{
        menu_div.style.left = "-120%"
        menuButton_img.src = "images/icon-hamburger.svg"
    }
}