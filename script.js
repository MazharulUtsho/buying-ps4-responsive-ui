const menuItems = document.getElementById("menu-bar");
function toggleMenu() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "230px";
    }
    else {
        menuItems.style.maxHeight = "0px";
    }
}