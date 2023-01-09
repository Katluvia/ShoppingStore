function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
const loginDialog = document.getElementById("loginDialog");

function openDialog() {
    loginDialog.showModal();
}

function acceptLogin() {
    var usernameHTML = document.getElementById("username");
    var username = usernameHTML.value;
    console.log(username);
    loginDialog.close();

    var loginElement = document.getElementById("loginElement");
    var loginName = document.getElementById("loginName");
    var loginLogo = document.getElementById("userLogo");

    loginName.innerText = username;

    loginElement.style.display = "none";
    loginName.style.display = "flex";
    loginLogo.style.display = "flex";
}


//var womansection = getElementById("womansection");
//var mansection = getElementById("mansection");
//var seasonsection = getElementById("seasonsection");

function toggle(elementId) {
    console.log("here");
    if (document.getElementById(elementId).style.display === "block") {
        document.getElementById(elementId).style.display = "none"
    } else {
        document.getElementById(elementId).style.display = "block"
    }
}

function toggleWomen() {
    toggle("womansection");
}

function toggleMan() { toggle("mansection"); }
function toggleSeason() { toggle("seasonsection"); }

var prefix = "product";

function hideProducts() {
    Array(14).fill(1, 0, 13).forEach((elementId, index) => {
        document.getElementById(prefix + (index + 1)).style.visibility = 'collapse';
    });
}

function displayItems(idlist) {
    hideProducts()
    idlist.forEach((index) => {
        document.getElementById(prefix + index).style.visibility = 'visible';
    });
    closeNav();
}

function showWomanCap() { displayItems([1, 2, 3]); }

function showWomanCoat() { displayItems([4, 5]); }

function showWomanPullover() { displayItems([8, 9]); }

function showWomanGloves() { displayItems([6, 7]); }

function showWomanShoes() { displayItems([10]); }

function showWomanTrousers() { displayItems([11, 12, 13]); }

function showAll() { displayItems(Array(14).fill(1, 0, 13).map((el, index) => { return index + 1; })); }

// Product Modal test//
var modal = document.getElementById("product1");
var btn = document.getElementById("openP1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Endtest//