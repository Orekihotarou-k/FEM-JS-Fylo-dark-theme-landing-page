const form = document.querySelector("form")
const emailInput = document.getElementById("email-input")
const submitBtn = document.getElementById("submit-btn")
const error = document.querySelector(".error")

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

document.addEventListener("invalid", (e) => {
    e.preventDefault()
})






















// form.addEventListener("submit", (e) => {

//     e.preventDefault()
//     error.style.visibility = "visible"

//     let emailValue = emailInput.value

//     let isValidEmail = emailRegex.test(emailValue)

//     if (isValidEmail === false ){
//         console.log("Try again mudafoka")
//     }
// })
