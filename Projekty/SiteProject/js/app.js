const lineLogoLeft = document.getElementById('lineLogoLeft');
const lineLogoRight = document.getElementById('lineLogoRight');

const slideCarousel = document.querySelector('#slideCarousel');
const imagesCarousel = document.querySelectorAll('#slideCarousel img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

var dot1 = document.getElementById('dot1');
var dot2 = document.getElementById('dot2');
var dot3 = document.getElementById('dot3');

dots = [dot1, dot2, dot3];

let counter = 1;
var InputChange = false;
var timer;
const size = imagesCarousel[0].clientWidth;

autoSlider();

window.onload = load;

function load() {
    lineLogoLeft.style.width = "400px";
    lineLogoRight.style.width = "400px";
}



slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(() => {console.log(counter)}, 1000);

nextBtn.addEventListener('click', () => {
    if(InputChange == false){
        if(counter >= imagesCarousel.length - 1) return;
        slideCarousel.style.transition = "transform 1s ease-in-out";
        counter++;
        slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
        InputChange = true;
        clearInterval(timer);
        autoSlider();
        dotStyle(counter);
    };
});

prevBtn.addEventListener('click', () => {
    if(InputChange == false){
        if(counter <= 0) return;
        slideCarousel.style.transition = "transform 1s ease-in-out";
        counter--;
        slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
        InputChange = true;
        clearInterval(timer);
        autoSlider();
        dotStyle(counter);
    };
});

slideCarousel.addEventListener('transitionend', () => {
    InputChange = false;
    if(imagesCarousel[counter].id === 'lastClone'){
        slideCarousel.style.transition = "none";
        counter = imagesCarousel.length -2;
        dotStyle(counter);
        slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(imagesCarousel[counter].id === 'firstClone'){
        slideCarousel.style.transition = "none";
        counter = imagesCarousel.length - counter;
        dotStyle(counter);
        slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

dot1.addEventListener('click', function() { dotChange(1) });
dot2.addEventListener('click', function() { dotChange(2) });
dot3.addEventListener('click', function() { dotChange(3) });

function dotChange(number) {
    if(InputChange == false){
        if(counter == number){ 
            return
        }
        slideCarousel.style.transition = "transform 1s ease-in-out";
        slideCarousel.style.transform = 'translateX(' + (-size * number) + 'px)';
        counter = number;
        InputChange = true;
        clearInterval(timer);
        autoSlider();
        dotStyle(counter);
        dotStyle(number);
    } 
}

function dotStyle(number) {
    if(number == 0) {
        number = 3; 
    }
    if(number == 4) {
        number = 1; 
    }
    
    for (i=0; i<3 ; i++){
        dots[i].classList.remove('fas');
        dots[i].classList.add('far');
    }
    dots[number-1].classList.remove('far');
    dots[number-1].classList.add('fas');
}

function autoSlider() {
    timer = setInterval(() => {
        if(counter >= imagesCarousel.length - 1) return;
        slideCarousel.style.transition = "transform 1s ease-in-out";
        counter++;
        slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';
        InputChange = true;
        dotStyle(counter);
    }, 5000);
}