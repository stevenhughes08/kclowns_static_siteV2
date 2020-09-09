// Image slideshow

const rotatingImgs = document.getElementById("slideshow").querySelector("img");
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
