var plates = document.getElementsByClassName("plate");
var all = document.getElementById('all');
var illustrations = document.getElementById('illustrations');
var posters = document.getElementById('posters');
var typography = document.getElementById('typography');
var packaging = document.getElementById('packaging');

all.addEventListener("click", function(element) { SelectionPlate(element) });
illustrations.addEventListener("click", function(element) { SelectionPlate(element) });
posters.addEventListener("click", function(element) { SelectionPlate(element) });
typography.addEventListener("click", function(element) { SelectionPlate(element) });
packaging.addEventListener("click", function(element) { SelectionPlate(element) });

function SelectionPlate(element) {

    for(i=0;i<plates.length; i++) {
        if(element.target.dataset['type'] == "all"){
            plates[i].style.display = "block";
        }
        else if(plates[i].dataset['type'] == element.target.dataset['type']) {
            plates[i].style.display = "block";
        } else {
            plates[i].style.display = "none";
        }
        console.log(element.target.dataset['type']);
    }
};