// Image slideshow

var navItems = ['Home', 'Characters',  'Booking', 'Tip Jar']

const rotatingImgs = document.getElementsByClassName('slide-img');
let i = 0;

setInterval(function(){
if(i == 0){
    rotatingImgs[i].style.display = 'block';
} else {
    rotatingImgs[i - 1].style.display = 'none';
    rotatingImgs[i].style.display = 'block';
} 

i++;

}, 2000);
