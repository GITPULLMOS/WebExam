



let displayUnderMenu = false

function showUnderMenu() {
    var underMenu = document.getElementById("under-Nav")

    if (!displayUnderMenu) {
        underMenu.style.display = "flex"
        displayUnderMenu = true
    } else {
        underMenu.style.display = "none"
        displayUnderMenu = false
    }
}