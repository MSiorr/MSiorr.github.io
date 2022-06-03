"use strict"
var size = [window.width, window.height]
var shuffling = false;
var imgCount = 4;
var imgIndex = 1;
var currentImgIndex = 1;
var imgSlideBool = false;
var nickname;
var currentSize;
var cookieInstance = new Cookies()
let puzzle = new PuzzleStructure()

var menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";

var gameDiv = document.createElement("div");
gameDiv.id = "gameDiv";

var imgSlider = document.createElement("div");
imgSlider.id = "imgSlider";

var leftArrow = document.createElement("span")
leftArrow.classList.add("arrow")
leftArrow.innerHTML = "&#129052;";
leftArrow.addEventListener("click", () => {
    if(imgSlideBool == false){
        imgSlideBool = true
        imgIndex--;
        Slider.MoveImg(-1)
    }
})
imgSlider.appendChild(leftArrow)

var borderImg = document.createElement("div");
borderImg.id = "borderImg";

var images = document.createElement("div");
images.id = "images";
for (let i = 1; i<=imgCount; i++){
    if(i == 1){
        let img = document.createElement("img");
        img.classList.add("slideImg");
        img.src = "./img/image"+imgCount+".png";
        images.appendChild(img)
    }
    let img = document.createElement("img");
    img.classList.add("slideImg");
    img.src = "./img/image"+i+".png";
    images.appendChild(img)
    if(i == imgCount){
        let img = document.createElement("img");
        img.classList.add("slideImg");
        img.src = "./img/image1.png";
        images.appendChild(img)
    }
}
borderImg.appendChild(images)

imgSlider.appendChild(borderImg);
var rightArrow = document.createElement("span")
rightArrow.classList.add("arrow")
rightArrow.innerHTML = "&#129054;";
rightArrow.addEventListener("click", () => {
    if(imgSlideBool == false){
        imgSlideBool = true
        imgIndex++;
        Slider.MoveImg(1)
    }
})
imgSlider.appendChild(rightArrow)
menuDiv.appendChild(imgSlider);

var interactionDiv = document.createElement("div");
interactionDiv.id = "interactionDiv";

var leftSideDiv = document.createElement("div");
leftSideDiv.id = "leftSideDiv";

var rankingBtn = document.createElement("button");
rankingBtn.id = "rankingBtn";
rankingBtn.innerHTML = "Ranking"
rankingBtn.addEventListener("click", () => {
    cookieInstance.ReadCookie();
    CustomAlerts.ShowRanking();
})
leftSideDiv.appendChild(rankingBtn)

var numbersBtn = document.createElement("button");
numbersBtn.id = "numbersBtn";
numbersBtn.innerHTML = "Numbers"
numbersBtn.addEventListener("click", () => {
    puzzle.ShowNumbers();
})
leftSideDiv.appendChild(numbersBtn)

interactionDiv.appendChild(leftSideDiv);

var baseElementsDiv = document.createElement("div");
baseElementsDiv.id = "baseElementsDiv";

var buttonsModeDiv = document.createElement("div");
buttonsModeDiv.id = "buttonsModeDiv";

var buttonsVal = [3, 4, 5, 6]
for(let i = 0; i<buttonsVal.length; i++){
    var button = document.createElement("button");
    button.classList.add("btn", "white");
    button.innerHTML = buttonsVal[i] + "x" + buttonsVal[i]
    button.addEventListener("click", () => {
        if(shuffling == false && imgSlideBool == false){
            currentImgIndex = imgIndex;
            shuffling = true;
            puzzle.CreatePuzzle(buttonsVal[i]);
        }
    })
    buttonsModeDiv.appendChild(button);
}
baseElementsDiv.appendChild(buttonsModeDiv)

var timerDiv = document.createElement("div");
timerDiv.id = "timerDiv";
baseElementsDiv.appendChild(timerDiv);
interactionDiv.appendChild(baseElementsDiv)

var rightSideDiv = document.createElement("div");
rightSideDiv.id = "rightSideDiv";

var labelMoves = document.createElement("label");
labelMoves.id = "labelMoves";
labelMoves.innerHTML = "Moves:"
rightSideDiv.appendChild(labelMoves);

var countMoves = document.createElement("div");
countMoves.id = "countMoves";
countMoves.innerHTML = "0"
rightSideDiv.appendChild(countMoves);

interactionDiv.appendChild(rightSideDiv);

menuDiv.appendChild(interactionDiv)

var arena = document.createElement("div");
arena.id = "arena";
gameDiv.appendChild(arena);

var mp4Samurai = document.createElement("video");

document.body.appendChild(menuDiv);
document.body.appendChild(gameDiv);

cookieInstance.ReadCookie();