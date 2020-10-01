// Nav Menu



// Bars menu
// fuction showHideMenu() {
//     const burger = document.getElementById("burgerBtn");
//     if (menuPane.style.display === "none") {
//         menuPane.style.display = "block";
//     } else {
//         menuPane.style.display = "none";
//     }
// }












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