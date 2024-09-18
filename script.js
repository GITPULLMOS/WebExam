
let displayUnderMenu = false

function showUnderMenu() {
    var underMenu = document.getElementById("bottomNav")
    var MenuIcon = document.getElementById("menu-Icon")

    if (!displayUnderMenu) {
        underMenu.style.display = "flex"
        MenuIcon.src = "kryss.webp"
        displayUnderMenu = true
    } else {
        underMenu.style.display = "none"
        MenuIcon.src = "menuIcon.webp"
        displayUnderMenu = false
    }
}

var prevScrollpos = window.scrollY
window.onscroll = function() {
    var currentScrollpos = window.scrollY
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("nav").style.top = "0"
        document.getElementById("bottomNav").style.display = "none"
        document.getElementById("menu-Icon").src = "menuIcon.webp"
        displayUnderMenu = false
    } else {
        document.getElementById("nav").style.top = "-100px"
        document.getElementById("bottomNav").style.display = "none"
        document.getElementById("menu-Icon").src = "menuIcon.webp"
        displayUnderMenu = false
    }
    prevScrollpos = currentScrollpos
}