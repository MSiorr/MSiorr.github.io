var corona = document.getElementById("coronavirus");
var score = document.getElementById("scoreSpan");
var rescueScore = document.getElementById("rescueSpan");
var siteUpgrades = document.getElementsByClassName("upgradeLook");
var hospUpgrades = document.getElementsByClassName("upgradeLookv2");
var prestiegeButton = document.getElementById("prestiege");
var scoreSec = document.getElementById("secondCounter");
var resPerSec = document.getElementById('resPerSec');
var upgrButton = document.getElementById("upgrades");
var hospButton = document.getElementById("hospitals");
var listOfUpgrades = document.getElementById('upgradeList');
var listOfHospitals = document.getElementById('hospitalList');
var barBorder = document.getElementById('barBorder');
var bar = document.getElementById('bar');
var alertHandle = document.getElementById("alert");
var menuHide = document.getElementById('menuHide');
var upgradeMenu = document.getElementById('upgradeMenu');
var clickarea = document.getElementById('clickarea');


var points = 0;
var rescue = 0;
var secScore = 0;
var secRescue = 0;
var secondList = [];
var rescueList = [];
var target = Math.log(7794798739);
var menuVisible = false;

var UpgradeList = {upgrades: []};
var HospitalList = {upgrades: []};

UpgradeList.upgrades.push({
    tag: "tapUpgrade",
    name: "Medicus",
    desc: "Points / tap:",
    currentPoints: 1,
    nextPoints: 2,
    basePoints: 1,
    cost: 10,
    level: 1,
    pointsMultip: 1.3,
    costMultip: 1.25,
    multipMoreCost: 0.025,
    visibilityOn: 0,
    visible: true
});
UpgradeList.upgrades.push({
    tag: "mask",
    name: "Masks",
    desc: "Points / sec:",
    currentPoints: 0,
    nextPoints: 5,
    basePoints: 5,
    cost: 150,
    level: 0,
    pointsMultip: 1.25,
    costMultip: 1.25,
    multipMoreCost: 0.025,
    visibilityOn: 150,
    visible: false
});
UpgradeList.upgrades.push({
    tag: "glove",
    name: "Gloves",
    desc: "Points / sec:",
    currentPoints: 0,
    nextPoints: 25,
    basePoints: 25,
    cost: 900,
    level: 0,
    pointsMultip: 1.25,
    costMultip: 1.3,
    multipMoreCost: 0.025,
    visibilityOn: 900,
    visible: false
});
UpgradeList.upgrades.push({
    tag: "suit",
    name: "Suits",
    desc: "Points / sec:",
    currentPoints: 0,
    nextPoints: 100,
    basePoints: 100,
    cost: 2750,
    level: 0,
    pointsMultip: 1.25,
    costMultip: 1.3,
    multipMoreCost: 0.025,
    visibilityOn: 2750,
    visible: false
});
UpgradeList.upgrades.push({
    tag: "ambulance",
    name: "Ambulances",
    desc: "Points / sec:",
    currentPoints: 0,
    nextPoints: 250,
    basePoints: 250,
    cost: 9750,
    level: 0,
    pointsMultip: 1.2,
    costMultip: 1.3,
    multipMoreCost: 0.03,
    visibilityOn: 9750,
    visible: false
});


//HOSPITALS

HospitalList.upgrades.push({
    tag: "hospital1Upgrade",
    name: "First Hospital",
    desc: "People rescued / sec:",
    currentPoints: 0,
    nextPoints: 0.1,
    basePoints: 0.1,
    cost: 1000,
    level: 0,
    costMultip: 1.2,
    multipMoreCost: 0.02,
    visibilityOn: 0,
    visible: true
});

prestiegeButton.style.height = "0";
prestiegeButton.style.filter = "opacity(0%)";
alertHandle.style.height = "0";
alertHandle.style.filter = "opacity(0%)";
upgradeMenu.style.display = "none";

for(i=0; i < UpgradeList.upgrades.length; i++) {
    if(UpgradeList.upgrades[i].desc == "Points / sec:"){
        secondList.push(i);
    }
}

for(i=0; i < HospitalList.upgrades.length; i++) {
    if(HospitalList.upgrades[i].desc == "People rescued / sec:"){
        rescueList.push(i);
    }
}

for(i=1 ; i<siteUpgrades.length; i++){
    siteUpgrades[i].style.height = "0";
    siteUpgrades[i].style.filter = "opacity(0%)";
}


unlockVisible();
upgradeTime()
secPoints()


for(i=0; i < siteUpgrades.length; i++){
    siteUpgrades[i].addEventListener("click", (event) => { upgradeBuy(event); });
};

for(i=0; i < hospUpgrades.length; i++){
    hospUpgrades[i].addEventListener("click", (event) => { hospitalBuy(event); });
};

menuHide.addEventListener("click", function() { menuShow(); });
prestiegeButton.addEventListener("click", function() { prestiegeAlert(); });
upgrButton.addEventListener("click", function(element) { updatePanel(element); });
hospButton.addEventListener("click", function(element) { updatePanel(element); });
corona.addEventListener("click", function() { click() });

function click() {
    points += UpgradeList.upgrades[0].currentPoints;
    updateScore();
}

function secPoints() {
    secScore = 0;
    
    for(i = 1; i < UpgradeList.upgrades.length; i++){
        if(UpgradeList.upgrades[i].visible == true){
            secScore += UpgradeList.upgrades[i].currentPoints;
        }
    }
}

function updateScore() {

    score.innerHTML = points;
    unlockVisible();
    
    if(secScore > 0) {
        scoreSec.innerHTML = 'Points / sec: <span id="secondScore">'+secScore+'</span>';
    } else {
        scoreSec.innerHTML = '';
    }
};

function updateRescue() {

    rescueScore.innerHTML = rescue;

    progressBar()

    if(secRescue > 0) {
        resPerSec.innerHTML = 'Rescued / sec: <span id="resSpan">'+secRescue+'</span>';
    } else {
        resPerSec.innerHTML = '';
    }
};

function unlockVisible() {
    for(i=0; i<UpgradeList.upgrades.length; i++) {
        if(points >= UpgradeList.upgrades[i].visibilityOn && UpgradeList.upgrades[i].visible == false){
            for(x=0; x<siteUpgrades.length; x++){
                if(siteUpgrades[x].dataset['upgrade'] == UpgradeList.upgrades[i].tag){
                    siteUpgrades[x].style.height = "auto";
                    siteUpgrades[x].style.transition = "filter 600ms";
                    siteUpgrades[x].style.filter = "opacity(100%)";
                    UpgradeList.upgrades[i].visible = true; 
                }
                
            }
        }
    }
}


function upgradeTime() {

    setInterval( function() { upgradeSec(); }, 1000);

};

function upgradeSec() {
    secondList.forEach(element => {
        if(UpgradeList.upgrades[element].currentPoints > 0){

            points += UpgradeList.upgrades[element].currentPoints;
        }
    });
    rescueList.forEach(element => {
        if(HospitalList.upgrades[element].currentPoints > 0){

            rescue = Math.round((rescue + HospitalList.upgrades[element].currentPoints) * 10 ) / 10;
        }
    });

    updateScore();
    updateRescue();
    secPoints();
}

function upgradeBuy(event){
    var eventId = event.target.parentNode.dataset['upgrade'];
    for(i=0; i < UpgradeList.upgrades.length; i++) {
        if(eventId == UpgradeList.upgrades[i].tag) {
            if(points >= UpgradeList.upgrades[i].cost) {
                points -= UpgradeList.upgrades[i].cost;
                UpgradeList.upgrades[i].level++ ;
                UpgradeList.upgrades[i].currentPoints = UpgradeList.upgrades[i].nextPoints
                UpgradeList.upgrades[i].cost = Math.round(UpgradeList.upgrades[i].cost * UpgradeList.upgrades[i].costMultip);
                UpgradeList.upgrades[i].costMultip += UpgradeList.upgrades[i].multipMoreCost;
                if (Math.floor(UpgradeList.upgrades[i].nextPoints * UpgradeList.upgrades[i].pointsMultip - UpgradeList.upgrades[i].nextPoints) < UpgradeList.upgrades[i].basePoints) {
                    UpgradeList.upgrades[i].nextPoints += UpgradeList.upgrades[i].basePoints;
                } else {
                    UpgradeList.upgrades[i].nextPoints += Math.floor(UpgradeList.upgrades[i].nextPoints * UpgradeList.upgrades[i].pointsMultip - UpgradeList.upgrades[i].nextPoints);
                }

                secPoints()
                updateScore();
                updateOnSite(eventId);
            }
        }
    }
};

function hospitalBuy(event){
    var eventId = event.target.parentNode.dataset['upgrade'];
    for(i=0; i < HospitalList.upgrades.length; i++) {
        if(eventId == HospitalList.upgrades[i].tag) {
            if(points >= HospitalList.upgrades[i].cost) {
                points -= HospitalList.upgrades[i].cost;
                HospitalList.upgrades[i].level++ ;
                HospitalList.upgrades[i].currentPoints = HospitalList.upgrades[i].nextPoints
                HospitalList.upgrades[i].cost = Math.round(HospitalList.upgrades[i].cost * HospitalList.upgrades[i].costMultip);
                HospitalList.upgrades[i].costMultip += HospitalList.upgrades[i].multipMoreCost;
                HospitalList.upgrades[i].nextPoints = Math.round((HospitalList.upgrades[i].nextPoints + HospitalList.upgrades[i].basePoints) * 10) / 10 ;
                secRescue = HospitalList.upgrades[i].currentPoints;

                if(HospitalList.upgrades[i].level == 20) {
                    prestiegeButton.style.height = "40px";
                    prestiegeButton.style.transition = "filter 600ms";
                    prestiegeButton.style.filter = "opacity(100%)";
                }
                updateScore();
                updateRescue();
                updateHospitalsOnSite(eventId);
            }
        }
    }
};

function updateOnSite(eventId) {
    for(i = 0; i < siteUpgrades.length; i++) {
        if(siteUpgrades[i].dataset["upgrade"] == eventId) {

            siteUpgrades[i].children[1].innerHTML = UpgradeList.upgrades[i].desc + " " + UpgradeList.upgrades[i].currentPoints;
            siteUpgrades[i].children[3].innerHTML = "Points: " + UpgradeList.upgrades[i].nextPoints;
            siteUpgrades[i].children[4].innerHTML = "Cost: " + UpgradeList.upgrades[i].cost;
            siteUpgrades[i].children[5].innerHTML = "LVL: " + UpgradeList.upgrades[i].level;
        }
    }
};

function updateHospitalsOnSite(eventId) {
    for(i = 0; i < hospUpgrades.length; i++) {
        if(hospUpgrades[i].dataset["upgrade"] == eventId) {

            hospUpgrades[i].children[1].innerHTML = HospitalList.upgrades[i].desc + " " + HospitalList.upgrades[i].currentPoints;
            hospUpgrades[i].children[3].innerHTML = "Rescue: " + HospitalList.upgrades[i].nextPoints;
            hospUpgrades[i].children[4].innerHTML = "Cost: " + HospitalList.upgrades[i].cost;
            hospUpgrades[i].children[5].innerHTML = "LVL: " + HospitalList.upgrades[i].level;
        }
    }
};

function updatePanel(x) {

    var eventId = x.target.parentNode.dataset['button'];
    if(eventId == "upgr") {
        listOfUpgrades.classList.add("listVisible");
        listOfUpgrades.classList.remove("listHidden");
        listOfHospitals.classList.add("listHidden");
        listOfHospitals.classList.remove("listVisible");
    }
    else if(eventId == "hosp") {
        listOfUpgrades.classList.remove("listVisible");
        listOfUpgrades.classList.add("listHidden");
        listOfHospitals.classList.remove("listHidden");
        listOfHospitals.classList.add("listVisible");
    }
};

function progressBar() {

    if(rescue > 1) {
        progres = Math.log(rescue) / target;
    } else {
        progres = 0;
    }    
    value = Math.floor(barBorder.offsetWidth * progres );
    bar.style.width = value + "px";
};

function prestiegeAlert() {

    document.getElementById("main").style.transition = "opacity 1.5s";
    document.getElementById("main").style.opacity = "25%";
    document.getElementById("backgroundMax").style.width = "100%";
    document.getElementById("backgroundMax").style.height = "100%";

    alertHandle.innerHTML = " KONIEC WERSJI DEMO "
    alertHandle.style.width = "700px";
    alertHandle.style.height = "300px";
    alertHandle.style.padding = "55px";
    alertHandle.style.border = "10px solid #e8d595";
    alertHandle.style.transition = "filter 2s";
    alertHandle.style.filter = "opacity(100%)";

    secRescue = 0;
    secScore = 0;

    HospitalList.upgrades[0].currentPoints = 0
    for(i=0; i < UpgradeList.upgrades.length; i++) {

        UpgradeList.upgrades[i].currentPoints = 0;
    }
};

function menuShow() {

    if(menuVisible == false) {
        upgradeMenu.style.display = "block";
        menuVisible = true;
        clickarea.style.width = "calc(100% - 270px)";

    } else {
        upgradeMenu.style.display = "none"
        menuVisible = false;
        clickarea.style.width = "100%";
    }
};