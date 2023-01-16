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

function createItemForCart(productID, name){
    increaseItemsInCart();
    var divBase = document.createElement("div");
    divBase.id = "product" + productID + "_" + currentItemsInCart;
    divBase.className = "item-in-cart-base";

    var pPrice = document.createElement("div");
    pPrice.innerText = "Value €"; // TODO make mapping via switch between price and product name

    
    var pProductName = document.createElement("p");
    pProductName.innerText = name;

    var pAmount = document.createElement("p");
    pAmount.innerText = "Amount: "
    
    var inputAmount = document.createElement("input");
    inputAmount.type = "number";
    inputAmount.min = 1;
    inputAmount.max = 3;
    inputAmount.value = 1;
    
    var divAmount = document.createElement("div");
    divAmount.appendChild(pAmount);
    divAmount.appendChild(inputAmount);
    divAmount.className = "pair-item-row";
    
    var divNameAmount = document.createElement("div");
    divNameAmount.appendChild(pProductName);
    divNameAmount.appendChild(divAmount);
    divNameAmount.className = "pair-item-content";
    
    var divEmpty = document.createElement("div");
    var btnDelet = document.createElement("button");
    btnDelet.innerText = "Delete";
    btnDelet.addEventListener("click", function () { deletItem(divBase.id); }, false);
    
    var divEmptyDelete = document.createElement("div");
    divEmptyDelete.appendChild(divEmpty);
    divEmptyDelete.appendChild(btnDelet);
    divEmptyDelete.className = "pair-item-content";
    divEmptyDelete.style.justifyContent = "flex-end";

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



function deletItem(id) {
    console.log(id);
    var element = document.getElementById(id);
    console.log(element);
    var parent = document.getElementById("itemCartList")
    parent.removeChild(element); 
    decreaseItemsInCart();
};

//Functions to add an item to the shopping cart
function addCap1(){document.getElementById("itemCartList").appendChild(createItemForCart("1", "cap1"));}
function addCap2(){document.getElementById("itemCartList").appendChild(createItemForCart("2", "cap2"));}
function addCap3(){ document.getElementById("itemCartList").appendChild(createItemForCart("3", "cap3"));}
function addCoat1(){ document.getElementById("itemCartList").appendChild(createItemForCart("1", "coat1"));}
function addCoat2(){ document.getElementById("itemCartList").appendChild(createItemForCart("2", "coat2"));}
function addGloves1(){ document.getElementById("itemCartList").appendChild(createItemForCart("1", "gloves1"));}
function addGloves2(){ document.getElementById("itemCartList").appendChild(createItemForCart("2", "gloves2"));}
function addPullover1(){ document.getElementById("itemCartList").appendChild(createItemForCart("1", "pullover1"));}
function addPullover2(){ document.getElementById("itemCartList").appendChild(createItemForCart("2", "pullover2"));}
function addShoes1(){ document.getElementById("itemCartList").appendChild(createItemForCart("1", "shoes1"));}
function addTrousers1(){ document.getElementById("itemCartList").appendChild(createItemForCart("1", "trousers1"));}
function addTrousers2(){ document.getElementById("itemCartList").appendChild(createItemForCart("2", "trousers2"));}
function addTrousers3(){ document.getElementById("itemCartList").appendChild(createItemForCart("3", "trousers3"));}



