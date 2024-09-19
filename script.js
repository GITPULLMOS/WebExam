
let displayUnderMenu = false

function showUnderMenu() {
    var underMenu = document.getElementById("bottomNav")
    var MenuIcon = document.getElementById("menu-Icon")
    var Cover = document.getElementById("Cover")

    if (!displayUnderMenu) {
        underMenu.style.display = "flex"
        Cover.style.display = "flex"
        MenuIcon.src = "Images/kryss.webp"
        displayUnderMenu = true
    } else {
        underMenu.style.display = "none"
        Cover.style.display = "none"
        MenuIcon.src = "Images/menuIcon.webp"
        displayUnderMenu = false
    }
}

function closeUnderMenu() {
    var underMenu = document.getElementById("bottomNav")
    var MenuIcon = document.getElementById("menu-Icon")
    var Cover = document.getElementById("Cover")

    Cover.style.display = "none"
    underMenu.style.display = "none"
    MenuIcon.src = "Images/menuIcon.webp"
}

var prevScrollpos = window.scrollY
window.onscroll = function() {
    var currentScrollpos = window.scrollY
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("bottomNav").style.display = "none"
        document.getElementById("Cover").style.display = "none"
        document.getElementById("menu-Icon").src = "Images/menuIcon.webp"
        displayUnderMenu = false
    }
    prevScrollpos = currentScrollpos
}