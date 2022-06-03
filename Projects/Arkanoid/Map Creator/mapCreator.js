import MainMapCreator from './modules/MainMapCreator.js';

function init(){
    let mainContainer = document.getElementById("root");
    new MainMapCreator(mainContainer);
}

init();