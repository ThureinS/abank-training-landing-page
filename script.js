// JavaScript code
const menuIcon = document.getElementById("menu-icon");
const navSmallMenu = document.getElementById("nav-small-menu");
const scrollTopImage = document.getElementById("scroll-top-image");
let menuIconActive = false;

menuIcon.addEventListener("click", function () {
  if (menuIconActive) {
    menuIcon.src = "./assets/hamburger-menu.svg";
    navSmallMenu.style.display = "none";
    menuIconActive = false;
  } else {
    menuIcon.src = "./assets/cross.png";
    navSmallMenu.style.display = "flex";
    menuIconActive = true;
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTopImage.style.display = "block";
    scrollTopImage.src = "./assets/up-arrow.png";
  } else {
    scrollTopImage.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

scrollTopImage.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function myFunction(x) {
  if (x.matches && menuIconActive) {
    // If media query matches
    navSmallMenu.style.display = "flex";
  } else {
    navSmallMenu.style.display = "none";
    menuIcon.src = "./assets/hamburger-menu.svg";
    menuIconActive = false;
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 767px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});
