// Get the modal
var cart_modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    cart_modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    cart_modal.style.display = 'none';
};

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

    if(username.length == 0 || password.length == 0){
        document.getElementById("warningLogin").style.display = "flex";
    }
    else{
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

function enterUserBox(){
    document.getElementById("loginName").style.color = "black"
    userContext.style.visibility = "visible";
    var rect = userFlexBox.getBoundingClientRect();
    console.log(rect["y"]);
    console.log(rect);
    userContext.style.left = rect["left"] + "px";
    userContext.style.top = (rect["y"] + rect["height"])+ "px";
}

function leaveUserBox(){
    document.getElementById("loginName").style.color = "white"
    userContext.style.visibility = "collapse";
}

function userLogout(){
    document.getElementById('username').value = "";
    document.getElementById("password").value = "";
    loginElement.style.display = 'flex';
    loginName.style.display = 'none';
    loginLogo.style.display = 'none';
    userFlexBox.style.display = "none";
}


//var womansection = getElementById("womansection");
//var mansection = getElementById("mansection");
//var seasonsection = getElementById("seasonsection");

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
            document.getElementById(prefix + (index + 1)).style.visibility = "collapse";
            console.log(prefix + (index + 1));
        });
}

function displayItems(idlist) {
    hideProducts();
    idlist.forEach((index) => {
        document.getElementById(prefix + index).style.visibility = 'visible';
    });
    closeNav();
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
    breadcrumb2.innerText = "Pullover";
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

var product_modal = document.getElementById('product1');
var btn = document.getElementById('openP1');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    product_modal.style.display = 'block';
};
span.onclick = function () {
    product_modal.style.display = 'none';
};
window.onclick = function (event) {
    if (event.target == product_modal) {
        product_modal.style.display = 'none';
    }
};
