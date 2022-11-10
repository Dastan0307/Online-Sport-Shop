let menuItems = document.querySelector('#MenuItems');
menuItems.style.maxHeight = '0px';
function menutoggle() {
    if(menuItems.style.maxHeight == '0px') {
        menuItems.style.maxHeight = '200px'
    }else {
        menuItems.style.maxHeight = '0px'
    }
};




// add product 
let addProduct = document.querySelector('.add-product');
let addImg = document.querySelector('.add-img');
addImg.addEventListener('click', addProductFunc);
function addProductFunc() {
    let decideImgUrl = prompt('URL');
    let decideTitle = prompt('Enter title')
    let decidePrice = +prompt('Enter price');
    addProduct.innerHTML += `
    <div class="col-4">
        <img src="${decideImgUrl}" alt="Error :(">
        <h4>${decideTitle}</h4>
        <div class="rating">
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
        </div>
        <p>$${decidePrice}</p>
    </div>`;
};

// account register and login 
