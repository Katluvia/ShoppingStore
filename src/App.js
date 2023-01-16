// Get the modal
var cart_modal = document.getElementById('CartID');
// cart_modal.style.display = 'none';

// Get the button that opens the modal
var cartBtn = document.getElementById('cartBtn');

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName('cartClose')[0];

// When the user clicks on the button, open the modal
cartBtn.onclick = function () {
    cart_modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
    cart_modal.style.display = 'none';
};


//Hover over the shopping cart
function onCartBtnEnter() {
    var cartImage = document.getElementById("cartItemImage");
    cartImage.src = "assets/shopping-cart-hover.png";
}

function onCartBtnLeave() {
    var cartImage = document.getElementById("cartItemImage");
    cartImage.src = "assets/shopping-cart.png";
}


//Hover over the logo
function onLogoBtnEnter() {
    var logoImage = document.getElementById("logoImage");
    logoImage.src = "assets/logo-hover.png";
}

function onLogoBtnLeave() {
    var logoImage = document.getElementById("logoImage");
    logoImage.src = "assets/logo.png";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == cart_modal) {
        cart_modal.style.display = 'none';
    }
};

function openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    //document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    //document.getElementById('main').style.marginLeft = '0';
}
const loginDialog = document.getElementById('loginDialog');

function openDialog() {
    loginDialog.showModal();
}

var loginElement = document.getElementById('loginElement');
var loginName = document.getElementById('loginName');
var loginLogo = document.getElementById('userLogo');
var userFlexBox = document.getElementById("userFlexBox");

function acceptLogin() {
    var usernameHTML = document.getElementById('username');
    var username = usernameHTML.value;
    var password = document.getElementById("password").value;
    console.log(username);
    console.log(password);

    if (username.length == 0 || password.length == 0) {
        document.getElementById("warningLogin").style.display = "flex";
    }
    else {
        document.getElementById("warningLogin").style.display = "none";
        loginDialog.close();


        loginName.innerText = username;

        loginElement.style.display = 'none';
        loginName.style.display = 'flex';
        loginLogo.style.display = 'flex';
        userFlexBox.style.display = "flex";
    }
}

var userContext = document.getElementById("userContext");
var userFlexBox = document.getElementById("userFlexBox");

function enterUserBox() {
    document.getElementById("loginName").style.color = "black"
    userContext.style.visibility = "visible";
    var rect = userFlexBox.getBoundingClientRect();
    console.log(rect["y"]);
    console.log(rect);
    userContext.style.left = rect["left"] + "px";
    userContext.style.top = (rect["y"] + rect["height"]) + "px";
}

//var womansection = getElementById("womansection");
//var mansection = getElementById("mansection");
//var seasonsection = getElementById("seasonsection");

function leaveUserBox() {
    document.getElementById("loginName").style.color = "white"
    userContext.style.visibility = "collapse";
}

function userLogout() {
    document.getElementById('username').value = "";
    document.getElementById("password").value = "";
    loginElement.style.display = 'flex';
    loginName.style.display = 'none';
    loginLogo.style.display = 'none';
    userFlexBox.style.display = "none";
}

function toggle(elementId) {
    console.log('here');
    if (document.getElementById(elementId).style.display === 'block') {
        document.getElementById(elementId).style.display = 'none';
    } else {
        document.getElementById(elementId).style.display = 'block';
    }
}

function toggleWomen() {
    toggle('womansection');
}

function toggleMan() {
    toggle('mansection');
}
function toggleSeason() {
    toggle('seasonsection');
}

var prefix = 'product';

function hideProducts() {
    Array(14)
        .fill(1, 0, 13)
        .forEach((elementId, index) => {
            document.getElementById(prefix + (index + 1)).style.visibility =
                'collapse';
        });
}

var breadSlash1 = document.getElementById("breadSlash1");
var breadcrumb1 = document.getElementById("breadcrumb1");
var breadSlash2 = document.getElementById("breadSlash2");
var breadcrumb2 = document.getElementById("breadcrumb2");

function showBreadcrumbs(){
    breadSlash1.style.visibility = "visible";
    breadcrumb1.style.visibility = "visible";
    breadSlash2.style.visibility = "visible";
    breadcrumb2.style.visibility = "visible";
}

function displayItems(idlist) {
    hideProducts();
    idlist.forEach((index) => {
        document.getElementById(prefix + index).style.visibility = 'visible';
    });
    closeNav();
}

function showWomanCap() {
    displayItems([1, 2, 3]);
    showBreadcrumbs();
    breadcrumb1.innerText = "Woman";
    breadcrumb2.innerText = "Cap";
}

function showWomanCoat() {
    displayItems([4,5]);
    showBreadcrumbs();
    breadcrumb1.innerText = "Woman";
    breadcrumb2.innerText = "Coat";
}

function showWomanPullover() {
    displayItems([8, 9]);
    showBreadcrumbs();
    breadcrumb1.innerText = "Woman";
    breadcrumb2.innerText = "Gloves";
}

function showWomanGloves() {
    displayItems([6, 7]);
    showBreadcrumbs();
    breadcrumb1.innerText = "Woman";
    breadcrumb2.innerText = "Gloves";
}

function showWomanShoes() {
    displayItems([10]);
    showBreadcrumbs();
    breadcrumb1.innerText = "Woman";
    breadcrumb2.innerText = "Shoes";
}

function showWomanTrousers() {
    displayItems([11, 12, 13]);
    showBreadcrumbs();
    breadcrumb1.innerText = "Woman";
    breadcrumb2.innerText = "Trousers";
}

function showAll() {
    displayItems(
        Array(14)
            .fill(1, 0, 13)
            .map((el, index) => {
                return index + 1;
            })
    );
    breadSlash1.style.visibility = "collapse";
    breadcrumb1.style.visibility = "collapse";
    breadSlash2.style.visibility = "collapse";
    breadcrumb2.style.visibility = "collapse";
}
/*
var product_modal = document.getElementById('openPicID');
var product1Btn = document.getElementById('product1');
var span2 = document.getElementsByClassName('pictureClose')[0];

product1Btn.onclick = function () {
    product_modal.style.display = 'block';
};
span2.onclick = function () {
    product_modal.style.display = 'none';
};
window.onclick = function (event) {
    if (event.target == product_modal) {
        product_modal.style.display = 'none';
    }
};*/


//shopping cart implementation
var currentItemsInCart = 0;
function increaseItemsInCart(){
   document.getElementById("itemsInCart").innerHTML = ++currentItemsInCart;
}

function decreaseItemsInCart(){
    document.getElementById("itemsInCart").innerHTML = --currentItemsInCart;
}

const pPrice = new Intl.NumberFormat('de-DE',
                        { style: 'currency', currency: 'EUR',
                          minimumFractionDigits: 2 });

var currentItemCartValue = 0.0;
var bucketListItems =  [];

function newItemCartValue(id, value){
    for(let i=0; i < bucketListItems.length; ++i){
        if(id === bucketListItems[i].id){
            bucketListItems[i].value = value;
            return;
        }
    }
    bucketListItems.push({
        "id": id, 
        "value": value
    });
}

var pSum = document.getElementById("pSum");

function valueItemSum(){
    var sum = 0.0;
    for(let i=0; i < bucketListItems.length; ++i){
        sum += bucketListItems[i].value;
    }
    pSum.innerText = pPrice.format(sum);
}


function createItemForCart(productID, name, price){
    increaseItemsInCart();
    var divBase = document.createElement("div");
    divBase.id = "product" + productID + "_" + currentItemsInCart;
    divBase.className = "item-in-cart-base";
    newItemCartValue(divBase.id, price);
    valueItemSum();

    var pPrice = document.createElement("div");
    pPrice.id = divBase.id + "_price";
    pPrice.innerText = price + " €"; // TODO make mapping via switch between price and product name

    
    var pProductName = document.createElement("p");
    pProductName.innerText = name;

    var pAmount = document.createElement("p");
    pAmount.innerText = "Amount: "
    pAmount.style.marginRight = "12px";
    
    var inputAmount = document.createElement("input");
    inputAmount.type = "number";
    inputAmount.min = 1;
    inputAmount.max = 10;
    inputAmount.value = 1;
    inputAmount.addEventListener("change", (event) => { onChangePrice(event, pPrice.id, price, divBase.id); });

    var divAmount = document.createElement("div");
    divAmount.appendChild(pAmount);
    divAmount.appendChild(inputAmount);
    divAmount.className = "pair-item-row";
    
    var divNameAmount = document.createElement("div");
    divNameAmount.appendChild(pProductName);
    divNameAmount.appendChild(divAmount);
    divNameAmount.className = "pair-item-content";
    
    var divEmpty = document.createElement("div");
    divEmpty.style.display = "flex";
    divEmpty.style.flexGrow= "1";
    divEmpty.style.height = "50px";
    var btnDelet = document.createElement("button");
    btnDelet.innerText = "Delete";
    btnDelet.addEventListener("click", function () { deletItem(divBase.id); }, false);
    
    var divEmptyDelete = document.createElement("div");
    divEmptyDelete.appendChild(divEmpty);
    divEmptyDelete.appendChild(btnDelet);
    divEmptyDelete.className = "pair-item-content";
    divEmptyDelete.style.justifyContent = "space-between";
    divEmptyDelete.style.flexGrow = "1";
    divEmptyDelete.style.alignItems = "flex-end";
    divEmptyDelete.style.marginLeft = "12px";

    var divNAED = document.createElement("div");
    divNAED.appendChild(divNameAmount);
    divNAED.appendChild(divEmptyDelete);
    divNAED.className = "pair-item-row";

    var imgProduct = document.createElement("img");
    imgProduct.className = "product-image-cart";
    imgProduct.src = "assets/clothes/" + name + ".png";
    var content = document.createElement("div");
    content.appendChild(imgProduct);
    content.appendChild(divNAED);
    content.className = "pair-item-row";

    divBase.appendChild(content);
    divBase.appendChild(pPrice);

    return divBase;
}



function onChangePrice(event, resultId, price, baseID) {
    var res = document.getElementById(resultId);
    res.innerText = pPrice.format(event.target.value * price); 
    newItemCartValue(baseID, event.target.value * price);
    valueItemSum();
}


function deletItem(id) {
    console.log(id);
    var element = document.getElementById(id);
    console.log(element);
    var parent = document.getElementById("itemCartList")
    parent.removeChild(element); 
    newItemCartValue(id, 0.0);
    valueItemSum();
    decreaseItemsInCart();
};

//Functions to add an item to the shopping cart
var divItemCartList = document.getElementById("itemCartList");
function addCap1(){divItemCartList.appendChild(createItemForCart("1", "cap1", 9.99));}
function addCap2(){divItemCartList.appendChild(createItemForCart("2", "cap2", 10.99));}
function addCap3(){ divItemCartList.appendChild(createItemForCart("3", "cap3", 7.99));}
function addCoat1(){ divItemCartList.appendChild(createItemForCart("1", "coat1", 34.99));}
function addCoat2(){ divItemCartList.appendChild(createItemForCart("2", "coat2", 39.99));}
function addGloves1(){ divItemCartList.appendChild(createItemForCart("1", "gloves1", 9.99));}
function addGloves2(){ divItemCartList.appendChild(createItemForCart("2", "gloves2", 6.99));}
function addPullover1(){ divItemCartList.appendChild(createItemForCart("1", "pullover1", 16.99));}
function addPullover2(){ divItemCartList.appendChild(createItemForCart("2", "pullover2", 21.99));}
function addShoes1(){ divItemCartList.appendChild(createItemForCart("1", "shoes1", 25.99));}
function addTrousers1(){ divItemCartList.appendChild(createItemForCart("1", "trousers1", 15.99));}
function addTrousers2(){ divItemCartList.appendChild(createItemForCart("2", "trousers2", 18.99));}
function addTrousers3(){ divItemCartList.appendChild(createItemForCart("3", "trousers3", 30.99));}



