// JS for toggle menu

let MenuItems = document.getElementById('menu-items');

MenuItems.style.maxHeight = "0px";

function menutoggle() {
  if (MenuItems.style.maxHeight == "0px") {
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}

// JS for product gallery

let ProductImg = document.getElementById('ProductImg');
let SmallImg = document.getElementsByClassName('small-img');

SmallImg[0].onclick = function () {
  ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function () {
  ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function () {
  ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function () {
  ProductImg.src = SmallImg[3].src;
}


// Toggle account
let a = document.getElementById("toggle-Login");
let b = document.getElementById("toggle-Reg");

let Togglelog = document.getElementById("login");
let toggleReg = document.getElementById("register");

loadEventListeners();

function loadEventListeners() {
  a.addEventListener('click', loginForm);
  b.addEventListener('click', registerForm);
}

function registerForm(event) {
  Togglelog.style.transform = "translateX(0px)";
  toggleReg.style.transform = "translateX(0px)";
}

function loginForm(event) {
  Togglelog.style.transform = "translateX(300px)";
  toggleReg.style.transform = "translateX(300px)";
}
