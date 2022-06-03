import MainGame from './modules/MainGame.js';

function init(){
    let mainContainer = document.getElementById("root");
    new MainGame(mainContainer);
}

init();