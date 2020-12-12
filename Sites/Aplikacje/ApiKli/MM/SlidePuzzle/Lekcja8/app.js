"use strict"

var menuDiv = document.createElement("div");
menuDiv.id = "menuDiv";

var gameDiv = document.createElement("div");
gameDiv.id = "gameDiv";

var imgSlider = document.createElement("div");
imgSlider.id = "imgSlider";
imgSlider.innerHTML = "<span class='arrow'> &#129052;</span> <img style='width: 180px; height: 180px;' src='./img/image1.png' /> <span class='arrow'>&#129054;</span>"
menuDiv.appendChild(imgSlider);

var buttonsDiv = document.createElement("div");
buttonsDiv.id = "buttonsDiv";

var button3x3 = document.createElement("button");
button3x3.classList.add("btn");
button3x3.innerHTML = "3x3";
button3x3.addEventListener("click", () => {
    var puzzle = new PuzzleStructure(3)
    puzzle.CreatePuzzle();
});
buttonsDiv.appendChild(button3x3);

var button4x4 = document.createElement("button");
button4x4.classList.add("btn");
button4x4.innerHTML = "4x4";
button4x4.addEventListener("click", () => {
    var puzzle = new PuzzleStructure(4)
    puzzle.CreatePuzzle();
});
buttonsDiv.appendChild(button4x4);

var button5x5 = document.createElement("button");
button5x5.classList.add("btn");
button5x5.innerHTML = "5x5";
button5x5.addEventListener("click", () => {
    var puzzle = new PuzzleStructure(5)
    puzzle.CreatePuzzle();
});
buttonsDiv.appendChild(button5x5);

var button6x6 = document.createElement("button");
button6x6.classList.add("btn");
button6x6.innerHTML = "6x6";
button6x6.addEventListener("click", () => {
    var puzzle = new PuzzleStructure(6)
    puzzle.CreatePuzzle();
});
buttonsDiv.appendChild(button6x6);

menuDiv.appendChild(buttonsDiv)

var arena = document.createElement("div");
arena.id = "arena";
gameDiv.appendChild(arena);

document.body.appendChild(menuDiv);
document.body.appendChild(gameDiv);