//* HTML Elements
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var loggedUserName = document.getElementById("loggedUserName");
var errorMsg = document.getElementById("errorMsg");
var eExistDiv = document.querySelector(".eExist");


//* Variables
var nameRegEx = /^[A-Z][a-z]{3,}$/;
var emailRegEx = /^[a-z0-9]{3,}@gmail\.com$/;
var passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
var user;
var loggedUser;
var usersList = JSON.parse(localStorage.getItem("usersList")) || [];

//* functions

function signUp() {
    if (validate(nameInput, nameRegEx) && validate(emailInput, emailRegEx) && validate(passwordInput, passwordRegEx)) {
        if(checkEmailExist()){
            eExistDiv.classList.remove("d-none");
        }else{
            eExistDiv.classList.add("d-none");
            user = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
            usersList.push(user);
            localStorage.setItem("usersList", JSON.stringify(usersList));
            localStorage.setItem("loggedUserName", JSON.stringify(user.name));
            location.assign("../home.html");
        }
    }
    else {
        window.prompt("please write correct data");
    }
}

function logIn() {
    usersList = JSON.parse(localStorage.getItem("usersList"));
    loggedUser = usersList.find((u) => u.email == emailInput.value && u.password == passwordInput.value);
    if (loggedUser) {
        localStorage.setItem("loggedUserName", JSON.stringify(loggedUser.name));
        location.assign("../home.html");
        
    }
    else {
        errorMsg.classList.remove("d-none");
    }
}

function checkEmailExist(){
    var userWithThisEmail = usersList.find((u) => u.email == emailInput.value);
    if(userWithThisEmail)
        return true;
    else
        return false;
}

function validate(element, regex) {
    if (regex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.parentElement.nextElementSibling.classList.add("d-none");
        return true;
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.parentElement.nextElementSibling.classList.remove("d-none");
        return false;
    }
}


