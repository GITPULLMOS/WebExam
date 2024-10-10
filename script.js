
// let displayUnderMenu = false

// function openUnderMenu() {
//     var underMenu = document.getElementById("bottomNav")
//     var MenuIcon = document.getElementById("menu-Icon")
//     var Cover = document.getElementById("Cover")

//     if (!displayUnderMenu) {
//         underMenu.style.display = "flex"
//         Cover.style.display = "flex"
//         MenuIcon.src = "Images/kryss.webp"
//         displayUnderMenu = true
//     } else {
//         underMenu.style.display = "none"
//         Cover.style.display = "none"
//         MenuIcon.src = "Images/menuIcon.webp"
//         displayUnderMenu = false
//     }
// }

// function closeUnderMenu() {
//     var underMenu = document.getElementById("bottomNav")
//     var MenuIcon = document.getElementById("menu-Icon")
//     var Cover = document.getElementById("Cover")
    
//     Cover.style.display = "none"
//     underMenu.style.display = "none"
//     displayUnderMenu = false
//     MenuIcon.src = "Images/menuIcon.webp"
// }

// var prevScrollpos = window.scrollY

// window.onscroll = function() {
//     var currentScrollpos = window.scrollY
//     if (prevScrollpos < currentScrollpos) {
//         document.getElementById("bottomNav").style.display = "none"
//         document.getElementById("Cover").style.display = "none"
//         document.getElementById("menu-Icon").src = "Images/menuIcon.webp"
//         displayUnderMenu = false
//     }
//     prevScrollpos = currentScrollpos
// }

let activeButton = null

function openInfo(ButtonId) {
    var InfoSections = document.querySelectorAll(".InfoSection")
    var InfoButtons = document.querySelectorAll(".InfoButton")

    // hides previous information
    InfoSections.forEach(section => {
        section.style.display = "none"
    })

    InfoButtons.forEach(buttons => {
        buttons.style.backgroundColor = "white"
    })

    // shows current information
    var currentInfo = document.getElementById('info-' + ButtonId)
    var currentButton = document.getElementById('button-' + ButtonId)

    if (activeButton === ButtonId) {
        //closes the information if the button is pressed twice
         activeButton = null
         currentButton.style.backgroundColor = "white"
    } else {
        currentInfo.style.display = "flex"
        activeButton = ButtonId //sets the current button as active
        currentButton.style.backgroundColor = "lightgrey"
    }
}