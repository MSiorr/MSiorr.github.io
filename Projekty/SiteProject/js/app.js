const lineLogoLeft = document.getElementById('lineLogoLeft');
const lineLogoRight = document.getElementById('lineLogoRight');
const marka = document.getElementById('marka');
const model = document.getElementById('model');

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

models = {
    "astonMartin":[
        { "id":"1", "name":"DB9" },
        { "id":"2", "name":"DB11" },
        { "id":"3", "name":"Vanquish" }
    ],
    "audi":[
        { "id":"1", "name":"R8" },
        { "id":"2", "name":"RS5" },
        { "id":"3", "name":"RS7" }
    ],
    "bugatti":[
        { "id":"1", "name":"Chiron" },
        { "id":"2", "name":"Divo" },
        { "id":"3", "name":"Veyron" }
    ],
    "ferrari":[
        { "id":"1", "name":"Enzo" },
        { "id":"2", "name":"LaFerrari" },
        { "id":"3", "name":"F8 Tributo" }
    ],
    "rollsRoyce":[
        { "id":"1", "name":"Ghost" },
        { "id":"2", "name":"Phantom" },
        { "id":"3", "name":"Wraith" }
    ]
};

autoSlider();

function load() {
    lineLogoLeft.style.width = "400px";
    lineLogoRight.style.width = "400px";
}



slideCarousel.style.transform = 'translateX(' + (-size * counter) + 'px)';

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

marka.onchange = () => {
    model.setAttribute("disabled", "disabled");
    model.style.backgroundImage = "linear-gradient(white, grey)";
    model.style.cursor = "no-drop";
    if(marka.value != "all") {
        model.innerHTML = "<option value='all'>Wszystkie Modele</option>";
        model.removeAttribute("disabled");
        model.style.backgroundImage = "linear-gradient(white, #e8db99)";
        model.style.cursor = "pointer";
        if (marka.value == "astonMartin"){
            for(i=0; i<models.astonMartin.length; i++){
                model.innerHTML += "<option value=" + models.astonMartin[i].id + "> " + models.astonMartin[i].name + "</option>";
            }
        }
        else if(marka.value == "audi"){
            for(i=0; i<models.audi.length; i++){
                model.innerHTML += "<option value=" + models.audi[i].id + "> " + models.audi[i].name + "</option>";
            }
        }
        else if(marka.value == "bugatti"){
            for(i=0; i<models.bugatti.length; i++){
                model.innerHTML += "<option value=" + models.bugatti[i].id + "> " + models.bugatti[i].name + "</option>";
            }
        }
        else if(marka.value == "ferrari"){
            for(i=0; i<models.ferrari.length; i++){
                model.innerHTML += "<option value=" + models.ferrari[i].id + "> " + models.ferrari[i].name + "</option>";
            }
        }
        else if(marka.value == "rollsRoyce"){
            for(i=0; i<models.rollsRoyce.length; i++){
                model.innerHTML += "<option value=" + models.rollsRoyce[i].id + "> " + models.rollsRoyce[i].name + "</option>";
            }
        }
    }
}
