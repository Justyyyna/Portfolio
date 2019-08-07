//----------------- BURGERMENU-OVERLAY ----------------------//
//----------------------------------------------------------//

document.querySelector('.j-burger').addEventListener('click', function (event) {
  event.preventDefault();

  var ul = document.querySelector('.j-burger-content');
  ul.classList.toggle('burger-content--open');
});



// ------------------- BACK TO TOP -----------------------//
//-------------------------------------------------------//

var toTopBtn = document.querySelector('#backtotop-Btn'); //refernz auf den button

window.onscroll = function () {  // scrollFunction wird ausgeführt
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
  ) {
    toTopBtn.style.display = 'block'; // beim runterscrollen wird er angezeigt
  } else {
    toTopBtn.style.display = 'none'; // sonst nicht
  }
}

function topFunction() {
  document.body.scrollTop = 0; // fürSafari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE Und Opera
}


toTopBtn.addEventListener('click', topFunction);


//------------------- STICKY NAV ---------------------//
//----------------------------------------------------//


var windowWidth = window.innerWidth;
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;
});

var nav = document.querySelector('.nav-main__items'); // referenz auf die ul
var header = document.querySelector(".header-nav"); // referenz auf die nav (ohne logo)
var siteHeader = document.querySelector('.site-header'); // referenz auf den header
var logo = document.querySelector('.nav-main__logo'); // referenz nur auf das logo
var burgerIcon = document.querySelector('.j-burger');
var navPadding = document.querySelector('.nav-main');
var main = document.querySelector('main');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky && windowWidth < 1300) {
    siteHeader.classList.add('sticky');
    main.classList.add("sticky-margin"); // es wird ein margin hinzugefügt damit es smoother ist
    navPadding.classList.add("nav-padding");
    if (windowWidth > 765) {
      logo.classList.add('j-hidden');
    }
  } else {
    siteHeader.classList.remove('sticky');

    main.classList.remove("sticky-margin");
    navPadding.classList.remove("nav-padding");
    if (windowWidth > 765) {
      logo.classList.remove('j-hidden');
    }
  }
}

window.addEventListener('scroll', function () {
  myFunction();
});
