var menuButton_img = document.getElementById("mobile-menu")
var menu_div = document.getElementById("mobile-nav")
var productInnerList_ul = document.querySelector(".product")
var companyInnerList_ul = document.querySelector(".company")
var connectInnerList_ul = document.querySelector(".connect")
var productArrow_img = document.querySelector(".product-arrow")
var companyArrow_img = document.querySelector(".company-arrow")
var connectArrow_img = document.querySelector(".connect-arrow")

menu_div.style.left = "-120%"
productInnerList_ul.style.display = "none"
companyInnerList_ul.style.display = "none"
connectInnerList_ul.style.display = "none"
productArrow_img.style.transform = "rotate(0deg)"
companyArrow_img.style.transform = "rotate(0deg)"
connectArrow_img.style.transform = "rotate(0deg)"

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

function showProductInnerlist(){
    if (productInnerList_ul.style.display === "none" &&  productArrow_img.style.transform === "rotate(0deg)"){
        productInnerList_ul.style.display = "block"
        productArrow_img.style.transform = "rotate(-180deg)"
    }
    else{
        productInnerList_ul.style.display = "none"
        productArrow_img.style.transform = "rotate(0deg)"
    }
}

function showCompanyInnerlist(){
    if (companyInnerList_ul.style.display === "none" &&  companyArrow_img.style.transform === "rotate(0deg)"){
        companyInnerList_ul.style.display = "block"
        companyArrow_img.style.transform = "rotate(-180deg)"
    }
    else{
        companyInnerList_ul.style.display = "none"
        companyArrow_img.style.transform = "rotate(0deg)"
    }
}

function showConnectInnerlist(){
    if (connectInnerList_ul.style.display === "none" &&  connectArrow_img.style.transform === "rotate(0deg)"){
        connectInnerList_ul.style.display = "block"
        connectArrow_img.style.transform = "rotate(-180deg)"
    }
    else{
        connectInnerList_ul.style.display = "none"
        connectArrow_img.style.transform = "rotate(0deg)"
    }
}