// Target DOM elements

const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector("nav")
const hamburgerNav = document.querySelector(".hamburger-nav")
const closeIcon = document.querySelector(".close-icon")

// Adding an eventlistener to DOM element hamburger. This is used
// to show hamburger-navigation. This will also hide the elements in the original NAV
// I am using hamburger.nav for the possibility to add new html elements. 

console.log(hamburger)
hamburger.addEventListener("click", () => {
    console.log("iamclicked")
    hamburgerNav.style.display = "flex"
    nav.style.display = "none"
})

// CloseIcon hides the hamburger.nav and shows the original nav again 

console.log(closeIcon)
closeIcon.addEventListener("click", () => {
    console.log("closeme")
    hamburgerNav.style.display = "none"
    nav.style.display = "flex"
})




