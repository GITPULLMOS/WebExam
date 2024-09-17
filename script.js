

let displayUnderMenu = true


function showUnderMenu() {
    var underMenu = document.getElementById("under-Nav")

    if (displayUnderMenu) {
        underMenu.style.display = "flex"
        displayUnderMenu = false
    } else {
        underMenu.style.display = "none"
        displayUnderMenu = true
    }
}