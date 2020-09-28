// Nav Menu



// Bars menu
fuction showHideMenu() {
    const burger = document.getElementById("burgerBtn");
    if (burger.style.display === "none") {
        burger.style.display = "block";
    } else {
        burger.style.display = "none";
    }
}










// Image slideshow

var navItems = ['Home', 'Characters', 'Booking', 'Tip Jar']

const rotatingImgs = document.getElementsByClassName('slide-img');
let i = 0;

setInterval(function() {
    if (i == 0) {
        rotatingImgs[i].style.display = 'block';
    } else {
        rotatingImgs[i - 1].style.display = 'none';
        rotatingImgs[i].style.display = 'block';
    }

    i++;

}, 2000);