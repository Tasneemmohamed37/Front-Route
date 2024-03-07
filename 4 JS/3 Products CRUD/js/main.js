//* HTML Elements 
var nameInput = document.getElementById("name");
var categoryInput = document.getElementById("category");
var priceInput = document.getElementById("price");
var descriptionInput = document.getElementById("description");
var picUrlInput = document.getElementById("picUrl");
var productsContainer = document.getElementById("productsContainer");


//* Variables
var product ;
var productsList = JSON.parse(localStorage.getItem("productList")) || [] ;
displayAllProducts();

//* functions 

function addProduct(){
    product ={
        name : nameInput.value,
        category : categoryInput.value,
        price : priceInput.value ,
        description: descriptionInput.value,
        picUrl: `${picUrlInput.files[0].name}`
    };

    productsList.push(product);

    localStorage.setItem("productList",JSON.stringify(productsList));

    displayProduct(-1);
}

function displayProduct(index){
var productHTML = `
            <div class="col-sm-6 col-md-4 col-lg-3">
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
                            <p class="text-secondary">${productsList[index].description}.</p>
                            <button class="btn btn-outline-warning">Update</button>
                            <button class="btn btn-outline-danger">Delete</button>
                        </div>
            </div>
`;

productsContainer.innerHTML += productHTML ;
}

function displayAllProducts(){
    for (let i = 0; i < productsList.length; i++) {
        displayProduct(i)
    }
}