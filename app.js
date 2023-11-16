const form = document.querySelector("form")
const emailInput = document.getElementById("email-input")
const submitBtn = document.getElementById("submit-btn")
const error = document.querySelector(".error")

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

document.addEventListener('invalid', (function(){
    return function(e) {

        e.preventDefault();

        error.style.visibility = "visible"

    };
})(), true);

function emailSuccess(){
    error.style.visibility = "hidden"
}

function emailError() {
    error.style.visibility = "visible"
}

form.addEventListener("submit", (e) => {

    e.preventDefault()

    let emailValue = emailInput.value

    let isValidEmail = emailRegex.test(emailValue)

    if (isValidEmail/true ){
        emailSuccess()
    } else {
        emailError()
    }
})