// fixed navbar

var navbar = document.querySelector(".navbar");
var navbarList = document.querySelector(".navbar__list");

function fixNavbar(e){
    if (document.documentElement.scrollTop>10&&document.documentElement.scrollWidth>768){
        console.log(document.documentElement.scrollWidth)
        navbar.classList.add("fixNavbar");
        currentPosition = document.documentElement.scrollTop;
       
    }
    else{
        navbar.classList.remove("fixNavbar");
    }
}
window.addEventListener("scroll",fixNavbar);

//Hide Navbar 

var bar = document.querySelector(".navbar__bar");
var listNavbar = document.querySelector(".navbar__list");
bar.addEventListener("click",function(){
    listNavbar.classList.toggle("navbar__listResponsive");
})