let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
let messageError = document.getElementById("message-error");

function validateName() {
    let name = document.getElementById("form-name").value.trim();

    if (name == "") {
        nameError.textContent = "*Username is empty";
        return false;
    }

    else if (name.length < 3) {
        nameError.textContent = "*Username should be atleast 3 characters long";
        return false;
    }

    return true;
}

function validateEmail() {
    let email = document.getElementById("form-email").value.trim();

    if (!emailPattern.test(email)) {
        emailError.textContent = "*Please enter a valid email";
        return false;
    }

    return true;
}

function validateMessage() {
    let message = document.getElementById("form-message").value.trim();

    if (message == "") {
        messageError.textContent = "*Type something to send message";
        return false;
    }

    return true;
}

function validateForm() {
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isMessageValid = validateMessage();

    if (isNameValid && isEmailValid && isMessageValid) {
        let buttonText = document.getElementById("form-submit");

        buttonText.textContent = "Message Sent!";
        buttonText.disabled = true;

        setTimeout(() => {
            buttonText.textContent = "Send the Message!";
            buttonText.disabled = false;
        }, 2000);

        return false;
    }

    return false;
}

function toggleMenu() {
    document.querySelector(".navBar").classList.toggle("show");
}