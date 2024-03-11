//* HTML Elements 
var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput = document.getElementById("bookmarkURL");
var websitesTableContent = document.getElementById("websitesTableContent");

//* Variables
var website;
var bookmarkNameRegex = /^[A-Z][a-z]{3,}$/;
var bookmarkURLRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/;
var websitesList = JSON.parse(localStorage.getItem("websitesList")) || [];
displayAllWebsites();

//* functions 
function addWebsite() {
    if (validate(bookmarkNameInput, bookmarkNameRegex) && (bookmarkURLInput, bookmarkURLRegex)) {
        website = {
            name: bookmarkNameInput.value,
            url: bookmarkURLInput.value
        };
        websitesList.push(website);
        localStorage.setItem("websitesList", JSON.stringify(websitesList));
        clearForm();
        displayWebsite(websitesList.length - 1);
    }
    else {
        alert("Please fill in all fields correct.");
    }
}

function displayWebsite(index) {
    var websiteHTML = `
    <tr>
    <td>${index+1}</td>
    <td>${websitesList[index].name}</td>
    <td><button class="btn btn-visit" onclick="visitWebsite('${websitesList[index].url}')"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td>
    <td><button class="btn btn-danger" onclick="deleteWebsite(${index})"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`;
    websitesTableContent.innerHTML += websiteHTML;
}

function displayAllWebsites() {
    for (let i = 0; i < websitesList.length; i++) {
        displayWebsite(i);
    }
}

function validate(element, regex) {
    if (regex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.add("d-none");
        return true;
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.remove("d-none");
        return false;
    }
}

function clearForm() {
    bookmarkNameInput.value = '';
    bookmarkNameInput.classList.remove("is-valid", "is-invalid");
    bookmarkURLInput.value = '';
    bookmarkNameInput.classList.remove("is-valid", "is-invalid");
}

function visitWebsite(url){
    window.open(url);
}

function deleteWebsite(index) {
    websitesList.splice(index, 1);
    localStorage.setItem("websitesList", JSON.stringify(websitesList));
    websitesTableContent.innerHTML = "";
    displayAllWebsites();
}