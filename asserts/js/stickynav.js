window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header-bottom");
var sticky = navbar.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("stickyy")
  } else {
    navbar.classList.remove("stickyy");
  }
}