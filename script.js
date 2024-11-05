
 
 //variable that controls whether the pop-up menu is displayed or not
 let displayUnderMenu = false

 function openUnderMenu() {
     var underMenu = document.getElementById("bottomNav")
     var Cover = document.getElementById("Cover")

     //checks of the variable "displayUnderMenu" is false or true
     //if the variable is false, the menu will appear
     //if else / variable is true, the menu will dissapear
     //after each check the value of the variable will change to the opposite value so that the menu can be closed when checked next time
     if (!displayUnderMenu) {
         underMenu.style.display = "flex"
         Cover.style.display = "flex"
         displayUnderMenu = true
     } else {
         underMenu.style.display = "none"
         Cover.style.display = "none"
         displayUnderMenu = false
     }    
 }

//function connected to the cover that appears under the pop-up menu and above the main content of the website
//when you click the cover, the menu will disappear
 function closeUnderMenu() {
     var underMenu = document.getElementById("bottomNav")
     var Cover = document.getElementById("Cover")
    
     Cover.style.display = "none"
     underMenu.style.display = "none"
     displayUnderMenu = false
 }

//saves the current scrollY value
 var prevScrollpos = window.scrollY
 //Function which checks if the user scrolls while having the pop-up menu open
 //The menu is open and the user decides to scroll, the menu is closed
 window.onscroll = function() {
    //saves the new scrollY value 
     var currentScrollpos = window.scrollY
    //if the new scrollY value is more than the previous value, it indicates that the user has scrolled down
    //The menu as well as the cover will close
     if (prevScrollpos < currentScrollpos) {
         document.getElementById("bottomNav").style.display = "none"
         document.getElementById("Cover").style.display = "none"
         displayUnderMenu = false
     }
     prevScrollpos = currentScrollpos     
 }

 //This reactive function checks if the user scales the website while having the pop-up menu open
 //the website scales wider, the menu will close
 window.addEventListener('resize', () => {
    if (window.innerWidth >= 500) {
        document.getElementById("bottomNav").style.display = "none"
        document.getElementById("Cover").style.display = "none"
        displayUnderMenu = false
    }
 })

 
let activeButton = null
let activeMoreInfoButton = null
let activeEvenMoreInfoButton = null

function openInfo(ButtonId) {
    var InfoSections = document.querySelectorAll(".InfoSection")
    var InfoButtons = document.querySelectorAll(".InfoButton")

    // hides previous information
    InfoSections.forEach(section => {
        section.style.display = "none"
    })

    InfoButtons.forEach(buttons => {
        buttons.style.backgroundColor = "var(--OsloMet-gul)"
    })

    // shows current information
    var currentInfo = document.getElementById('info-' + ButtonId)
    var currentButton = document.getElementById('button-' + ButtonId)

    if (activeButton === ButtonId) {
        //closes the information if the button is pressed twice
         activeButton = null
         currentButton.style.backgroundColor = "var(--OsloMet-gul)"
    } else {
        currentInfo.style.display = "flex"
        activeButton = ButtonId //sets the current button as active
        currentButton.style.backgroundColor = "lightgrey"
        var InfoSections = document.querySelectorAll(".moreInfoSection")
        InfoSections.forEach(section => {
            section.style.display = "none"
        })
    }
}


function openMoreInfo(ButtonId) {
    var InfoSections = document.querySelectorAll(".moreInfoSection")
    var InfoButtons = document.querySelectorAll(".moreInfoButton")

    InfoSections.forEach(section => {
        section.style.display = "none"
    })

    InfoButtons.forEach(buttons => {
        buttons.style.fontWeight = "normal"
    })

    // shows current information
    var currentInfo = document.getElementById('moreInfo-' + ButtonId)
    var currentButton = document.getElementById('moreInfoButton-' + ButtonId)

    if (activeMoreInfoButton === ButtonId) {
        //closes the information if the button is pressed twice
         activeMoreInfoButton = null
         currentButton.style.fontWeight = "normal"
    } else {
        currentInfo.style.display = "flex"
        activeMoreInfoButton = ButtonId //sets the current button as active
        currentButton.style.fontWeight = "bold"
    }
}
