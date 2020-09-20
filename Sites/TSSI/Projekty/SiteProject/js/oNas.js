const lineLogoLeft = document.getElementById('lineLogoLeft');
const lineLogoRight = document.getElementById('lineLogoRight');
const formContact = document.getElementById('formContact');

const alertInfo = document.getElementById('alert');
var submitBtn = document.getElementById('submitBtn');


function load() {
    lineLogoLeft.style.width = "400px";
    lineLogoRight.style.width = "400px";
}

submitBtn.addEventListener('click', function () { event.preventDefault(), sendAlert() });

function sendAlert() {
    formContact.reset();
    alertInfo.style.transition = "all 1s ease-in-out"
    alertInfo.style.top = "10px";

    setTimeout(function () { infoAlert() }, 3000);

    function infoAlert() {
        alertInfo.style.top = "-51px";
    }
}