//* HTML Elements 
var nameInput = document.getElementById("name");
var categoryInput = document.getElementById("category");
var priceInput = document.getElementById("price");
var descriptionInput = document.getElementById("description");
var picUrlInput = document.getElementById("picUrl");
var searchInput = document.getElementById("searchInput");
var imgSrc = document.getElementById("imgSrc");
var addBtn = document.getElementById("add-btn");
var updateBtn = document.getElementById("update-btn");
var imgSrcContainer = document.getElementById("imgSrcContainer");
var productsContainer = document.getElementById("productsContainer");


//* Variables
var product;
var updatedIndex;
var nameRegEx = /^[A-Z][a-z]{3,}$/;
var categoryRegEx = /^[A-Z][a-z]{3,}$/;
var priceRegEx = /^([0-9][0-9]|100)$/;
var descriptionRegEx = /^[a-z\s]{10,100}$/;
var productsList = JSON.parse(localStorage.getItem("productList")) || [];
displayAllProducts();

//* functions 

function addProduct() {
    if (validate(nameInput, nameRegEx) &&
        validate(categoryInput, categoryRegEx) &&
        validate(priceInput, priceRegEx) &&
        validate(descriptionInput, descriptionRegEx) &&
        picUrlInput.files.length != 0) {
        product = {
            name: nameInput.value,
            category: categoryInput.value,
            price: priceInput.value,
            description: descriptionInput.value,
            picUrl: `${picUrlInput.files[0].name}`
        };

        productsList.push(product);

        localStorage.setItem("productList", JSON.stringify(productsList));

        clearForm();

        displayProduct(productsList.length - 1);
    }
    else {
        alert("Please fill in all fields and select an image.");
    }
}

function displayProduct(index) {
    var productHTML = `
            <div class="col-sm-6 col-md-4 col-lg-3 mb-3">
                        <div class="inner p-3">
                            <img src="./imgs/${productsList[index].picUrl}" class="w-100" alt="iphone">
                            <div class="d-flex justify-content-between my-2">
                                <h5>${productsList[index].name}</h5>
                                <span>${productsList[index].price}$</span>
                            </div>
                            <div class="d-flex gap-2">
                                <i class="fa-solid fa-tag align-items-center"></i>
                                <h6>${productsList[index].category}</h6>
                            </div>
                            <p class="text-secondary" style="max-width: 80px;">${productsList[index].description}.</p>
                            <button class="btn btn-outline-warning" onclick="getProductInfo(${index})">Update</button>
                            <button class="btn btn-outline-danger" onclick="deleteProduct(${index})">Delete</button>
                        </div>
            </div>
`;
    productsContainer.innerHTML += productHTML;
}

function displayAllProducts() {
    for (let i = 0; i < productsList.length; i++) {
        displayProduct(i)
    }
}

function getProductInfo(index) {
    nameInput.value = productsList[index].name;
    categoryInput.value = productsList[index].category;
    priceInput.value = productsList[index].price;
    descriptionInput.value = productsList[index].description;
    imgSrc.innerHTML = productsList[index].picUrl;

    imgSrcContainer.classList.remove("d-none");
    addBtn.classList.add("d-none");
    updateBtn.classList.remove("d-none");
    updatedIndex = index;
}

function updateProduct() {
    if (validate(nameInput, nameRegEx) &&
        validate(categoryInput, categoryRegEx) &&
        validate(priceInput, priceRegEx) &&
        validate(descriptionInput, descriptionRegEx)
        ) 
        {
        productsList[updatedIndex].name = nameInput.value;
        productsList[updatedIndex].price = priceInput.value;
        productsList[updatedIndex].category = categoryInput.value;
        productsList[updatedIndex].description = descriptionInput.value;
        if(picUrlInput.files.length > 0){
            productsList[updatedIndex].picUrl = picUrlInput.files[0].name;
        }

        localStorage.setItem("productList", JSON.stringify(productsList));
        productsContainer.innerHTML = "";
        displayAllProducts();
        clearForm();
        imgSrcContainer.classList.add("d-none");

        addBtn.classList.remove("d-none");
        updateBtn.classList.add("d-none");
    }
    else{
        alert("Please fill in all fields and select an image.");
    }
}

function clearForm() {
    nameInput.value = '';
    nameInput.classList.remove("is-valid", "is-invalid");
    categoryInput.value = '';
    categoryInput.classList.remove("is-valid", "is-invalid");
    priceInput.value = '';
    priceInput.classList.remove("is-valid", "is-invalid");
    descriptionInput.value = '';
    descriptionInput.classList.remove("is-valid", "is-invalid");
    picUrlInput.value = null;
    imgSrc.innerHTML = "";
}

function deleteProduct(index) {
    productsList.splice(index, 1);
    localStorage.setItem("productList", JSON.stringify(productsList));
    productsContainer.innerHTML = "";
    displayAllProducts();
}

function search() {
    productsContainer.innerHTML = "";
    for (let i = 0; i < productsList.length; i++) {
        if (productsList[i].name.toLowerCase().includes(searchInput.value.toLowerCase())) {
            displayProduct(i)
        }
    }
}

function validate(element, regex) {
    if (regex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.nextElementSibling.classList.add("d-none");
        return true;
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.nextElementSibling.classList.remove("d-none");
        return false;
    }
}