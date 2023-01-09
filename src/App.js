function sayHello() {
    alert('Hello');
}

function openNav() {
    document.getElementById('mySidebar').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}

function closeNav() {
    document.getElementById('mySidebar').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

const loginDialog = document.getElementById('loginDialog');

function openDialog() {
    loginDialog.showModal();
}

function acceptLogin() {
    var usernameHTML = document.getElementById('username');
    var username = usernameHTML.value;
    console.log(username);
    loginDialog.close();

    var loginElement = document.getElementById('loginElement');
    var loginName = document.getElementById('loginName');
    var loginLogo = document.getElementById('userLogo');

    loginName.innerText = username;

    loginElement.style.display = 'none';
    loginName.style.display = 'flex';
    loginLogo.style.display = 'flex';
}

//loginDialog.addEventListener('click',)
