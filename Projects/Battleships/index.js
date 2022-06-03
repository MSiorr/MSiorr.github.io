var ships = [[1, 4], [2, 3], [3, 2], [4, 1]];  // [Count, Length]
var menuShipDiv;
var menuShip;
var playerShips = [];
var pcShips = [];
var pcShipsPosition = [];
var playerFieldList;
var pcFieldList;
var hitPcShips = [];
var targetFields = null;
var framedPCShips = 0;
var hitPlayerShips = [];
var sunkenPlayerShips = 0;
var arenaSize = 10;
var arena2DTable = [];
var playerArena2DTable = [];
var players = 2;
var selectedShip = [4, 1];
var preparation = true;

var buttonStart;
var playerTurn = true;
var pcTurn = false;
var pcMoves = 0;
var pcMovesList = [];
var endGame = false;
var pcShootTimeout;
var newTargetTable = [];
var shootIndex;
var direction;
var shipDirection;


var playerPlay = true;
var PCspeed = 1000;
var debugBool = false;


var difficulty;
var difficultyList;
var AiMediumHit = false;
var mediumAiShipDirect = 0;
var tempHitAiMedium = null;
var tempToCheckAiMedium = [];
var AiHardHit = false;
var hardAiShipDirect = 0;
var tempHitAiHard = null;
var tempToCheckAiHard = [];
var AiExtremeHit = false;
var extremeAiShipDirect = 0;
var tempHitAiExtreme = null;
var tempToCheckAiExtreme = [];
var AiDoOcenyHit = false;
var doOcenyAiShipDirect = 0;
var tempHitAiDoOceny = null;
var tempToCheckAiDoOceny = [];

var listHittedFields = [];
var showTemplateValue = false;
var showPCShips = false;
var fieldNeededToSunkShips = [];


var difi = "DoOceny"


var dynamicTempalteTable = []
var shipsToFindByPC = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
var shipsToFindByPlayer = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

var pcTempMove = 0;
var pcTempMoveList = [];
var gameDiv;
var mainArenaDiv;

var mainDiv = document.createElement("div")
mainDiv.id = "mainDiv"
document.body.appendChild(mainDiv)
mainDiv.addEventListener("contextmenu", function () {
    event.preventDefault();
})

function startOrRestartGame() {
    mainDiv.innerHTML = "";
    playerShips = [];
    pcShips = [];
    pcShipsPosition = [];
    hitPcShips = [];
    targetFields = null;
    framedPCShips = 0;
    hitPlayerShips = [];
    sunkenPlayerShips = 0;
    arena2DTable = [];
    playerArena2DTable = [];
    selectedShip = [4, 1];
    preparation = true;

    playerTurn = true;
    pcTurn = false;
    pcMoves = 0;
    endGame = false;
    newTargetTable = [];

    debugBool = false;


    AiMediumHit = false;
    mediumAiShipDirect = 0;
    tempHitAiMedium = null;
    AiHardHit = false;
    hardAiShipDirect = 0;
    tempHitAiHard = null;
    AiExtremeHit = false;
    extremeAiShipDirect = 0;
    tempHitAiExtreme = null;
    AiDoOcenyHit = false;
    doOcenyAiShipDirect = 0;
    tempHitAiDoOceny = null;

    showTemplateValue = false;
    showPCShips = false;
    fieldNeededToSunkShips = [];

    shipsToFindByPC = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    shipsToFindByPlayer = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];

    pcTempMove = 0;

    createMenuShips();
    createArenasTitle();
    createArenas();
    createStartGameButton();
    createButtonDisplayPCShips()
    createDifficultyList();
    fill2DTables();
    calculatePCShipsPositions();
    eventsListenerForPlayerFields();
}
startOrRestartGame();


// Add menu with player ships

function createMenuShips() {
    mainArenaDiv = document.createElement("div")
    mainArenaDiv.id = "mainArenaDiv";

    menuShipDiv = document.createElement("div");
    menuShipDiv.id = "menuShipDiv";

    menuShip = document.createElement("div")
    menuShip.id = "menuShip";
    for (let i = 0; i < ships.length; i++) {
        for (let j = 0; j < ships[i][0]; j++) {
            var shipDiv = document.createElement("div")
            shipDiv.classList.add("shipDiv");
            for (let k = 0; k < ships[i][1]; k++) {
                var shipBlock = document.createElement("div");
                shipBlock.classList.add("shipBlock");
                shipDiv.appendChild(shipBlock);
            }
            shipDiv.style.width = (shipDiv.children.length * 25) + 2 + "px"
            shipDiv.id = "Ship[" + shipDiv.children.length + "," + (j + 1) + "]";
            shipDiv.addEventListener("click", function () {
                if (selectedShip == null) {
                    selectedShip = eval((this.id).substr(4));
                    this.style.backgroundColor = "blue";
                } else {
                    if (this.id == "Ship[" + selectedShip.toString() + "]") {
                        selectedShip = null;
                        this.style.removeProperty("background-color");
                    } else {
                        if (selectedShip != null) {
                            document.getElementById("Ship[" + selectedShip.toString() + "]").style.removeProperty("background-color")
                            selectedShip = eval((this.id).substr(4));
                            this.style.backgroundColor = "blue";
                        }
                    }
                }
            })
            menuShip.appendChild(shipDiv);
        }
    }
    menuShipDiv.appendChild(menuShip);
    mainDiv.appendChild(menuShipDiv);

    menuShipDiv.style.height = menuShipDiv.offsetHeight + "px";
    menuShipDiv.style.width = menuShipDiv.offsetWidth + "px";
    menuShip.style.height = menuShip.offsetHeight + "px";
    menuShip.style.width = menuShip.offsetWidth + "px";

    document.getElementById("Ship[4,1]").style.backgroundColor = "blue";
}

//create arenas title

function createArenasTitle() {
    gameDiv = document.createElement("div");
    gameDiv.id = "gameDiv"
    mainDiv.appendChild(gameDiv);

    var arenasTitlesDiv = document.createElement("div")
    arenasTitlesDiv.id = "arenasTitlesDiv";

    var playerArenaTitle = document.createElement("span");
    playerArenaTitle.id = "playerArenaTitle";
    playerArenaTitle.innerText = "PLAYER";
    var pcArenaTitle = document.createElement("span");
    pcArenaTitle.id = "pcArenaTitle";
    pcArenaTitle.innerText = "COMPUTER";

    arenasTitlesDiv.appendChild(playerArenaTitle);
    arenasTitlesDiv.appendChild(pcArenaTitle);

    gameDiv.appendChild(arenasTitlesDiv);

}

//create arenas

function createArenas() {

    for (let a = 0; a < players; a++) {
        var arena = document.createElement("div")
        arena.classList.add("arena");
        if (a == 0) {
            arena.id = "playerArena";
        } else {
            arena.id = "pcArena";
        }
        for (let i = 0; i < arenaSize; i++) {
            var divRow = document.createElement("div")
            divRow.classList.add("divRow")
            for (let j = 0; j < arenaSize; j++) {
                var div = document.createElement("div")
                if (a == 0) {
                    div.id = "player[" + i + "," + j + "]"
                    div.classList.add("playerField")
                } else {
                    div.id = "pc[" + i + "," + j + "]"
                    div.classList.add("pcField")
                }
                div.style.width = 25 + "px";
                div.style.height = 25 + "px";
                divRow.appendChild(div)
            }
            arena.appendChild(divRow)
        }
        mainArenaDiv.appendChild(arena)
    }
    gameDiv.appendChild(mainArenaDiv)
}

// Add button start game

function createStartGameButton() {
    var buttonDiv = document.createElement("div");
    buttonDiv.id = "buttonDiv";

    buttonStart = document.createElement("button");
    buttonStart.classList.add("btn");
    buttonStart.id = "buttonStart"
    buttonStart.textContent = "PLAY"
    buttonStart.style.display = "none"

    buttonStart.addEventListener("click", function () {
        pcFieldList = document.getElementsByClassName("pcField");
        preparation = false;
        this.style.display = "none";
        difficultyList.style.display = "none";
        difficultyInfo.style.display = "none";
        animateStartGame();
        setTimeout(function () {
            for (let i = 0; i < playerFieldList.length; i++) {
                playerFieldList[i].style.cursor = "pointer";
                pcFieldList[i].style.cursor = "pointer";
            }
            addHitStyle();
            difficulty = difficultyList.value;
            console.log("Difficulty: " + difficultyList.value)
            arenasBackgorundShadow("player");

            if (difficulty == "DoOceny" || difficulty == "Extreme") {
                var templateValuesButton = document.createElement("button");
                templateValuesButton.id = "templateValuesButton";
                templateValuesButton.innerText = "Show where the bot shoots"
                templateValuesButton.addEventListener("click", function () {
                    if (showTemplateValue == false) {
                        showTemplateValue = true;
                        bestFieldToShoot(shipsToFindByPC[0]);
                    } else {
                        showTemplateValue = false;
                        for (let i = 0; i < playerFieldList.length; i++) {
                            if (playerFieldList[i].classList.contains("shot") == false) {
                                playerFieldList[i].innerHTML = "";
                            }
                        }
                    }
                })
                gameDiv.appendChild(templateValuesButton)
            }
        }, 4002)
    })

    buttonDiv.appendChild(buttonStart);
    gameDiv.appendChild(buttonDiv);
}

//Create button to display PC ships

function createButtonDisplayPCShips() {
    var showPCShipsButton = document.createElement("button");
    showPCShipsButton.id = "showPCShipsButton"
    showPCShipsButton.innerHTML = "Show Bot Ships"
    showPCShipsButton.addEventListener("click", function () {
        if (showPCShips == false) {
            showPCShips = true;
            for (let i = 0; i < pcShipsPosition.length; i++) {
                pcShipsPosition[i].style.backgroundColor = "red"
            }
        } else {
            showPCShips = false;
            for (let i = 0; i < pcShipsPosition.length; i++) {
                if (pcShipsPosition[i].classList.contains("sunken") == false) {
                    pcShipsPosition[i].style.removeProperty("background-color");
                }
            }
        }
    })
    gameDiv.appendChild(showPCShipsButton)
}

// Animations on game start

function animateStartGame() {
    var playerArena = document.getElementById("playerArena");
    var pcArena = document.getElementById("pcArena");
    var menuShipPositionTop = menuShip.offsetTop;
    var menuShipPositionLeft = menuShip.offsetLeft;

    playerArena.style.transition = "width 2s, height 2s, box-shadow 0.4s";
    pcArena.style.transition = "width 2s, height 2s, box-shadow 0.4s";
    gameDiv.style.transition = "all 2s";
    menuShipDiv.style.transition = "all 2s";
    menuShip.style.transition = "all 2s";
    menuShip.style.position = "absolute";
    menuShip.style.top = menuShipPositionTop + "px";
    menuShip.style.left = menuShipPositionLeft + "px";
    pcArena.style.width = 254 + "px";
    pcArena.style.height = 254 + "px";
    playerArena.style.width = 254 + "px";
    playerArena.style.height = 254 + "px";

    setTimeout(function () {
        menuShip.style.left = -200 + "px";
        menuShipDiv.style.width = 0;
        gameDiv.style.width = 100 + "%";
    }, 1)

    setTimeout(function () {
        pcArena.style.width = 404 + "px";
        pcArena.style.height = 404 + "px";
        playerArena.style.width = 404 + "px";
        playerArena.style.height = 404 + "px";
        for (let i = 0; i < playerFieldList.length; i++) {
            playerFieldList[i].style.width = 40 + "px";
            playerFieldList[i].style.height = 40 + "px";
            pcFieldList[i].style.width = 40 + "px";
            pcFieldList[i].style.height = 40 + "px";
        }
        document.getElementById("playerArenaTitle").style.fontSize = "30px"
        document.getElementById("pcArenaTitle").style.fontSize = "30px"
    }, 2001)
}

// Create select with difficulty

function createDifficultyList() {
    var difficultyListDiv = document.createElement("div");
    difficultyListDiv.id = "difficultyListDiv";

    difficultyList = document.createElement("select");
    difficultyList.id = "difficultyList"
    difficultyList.style.display = "none";

    var difficultyEasyOption = document.createElement("option");
    difficultyEasyOption.value = "Easy";
    difficultyEasyOption.textContent = "Easy";

    var difficultyMediumOption = document.createElement("option");
    difficultyMediumOption.value = "Medium";
    difficultyMediumOption.textContent = "Medium";

    var difficultyHardOption = document.createElement("option");
    difficultyHardOption.value = "Hard";
    difficultyHardOption.textContent = "Hard";

    var difficultyExtremeOption = document.createElement("option");
    difficultyExtremeOption.value = "Extreme";
    difficultyExtremeOption.textContent = "Extreme";

    difficultyList.appendChild(difficultyEasyOption);
    difficultyList.appendChild(difficultyMediumOption);
    difficultyList.appendChild(difficultyHardOption);
    difficultyList.appendChild(difficultyExtremeOption);

    difficultyListDiv.appendChild(difficultyList);

    var difficultyInfo = document.createElement("div");
    difficultyInfo.id = "difficultyInfo";
    difficultyInfo.innerHTML = "&ifr;";
    difficultyInfo.style.display = "none";

    var blackScreen = document.createElement("div");
    blackScreen.id = "blackScreen";
    blackScreen.style.display = "none";

    document.body.appendChild(blackScreen);

    var infoDiv = document.createElement("div");
    infoDiv.id = "infoDiv";
    infoDiv.innerHTML += "<span class=\"titleInfo\"> Easy </span><p> - Computer shoots into random fields</p>"
    infoDiv.innerHTML += "<span class=\"titleInfo\"> Medium </span><p> - Computer shoots into random fields </p><br><p> - On hitting a ship, he checks the direction and starts to knock the ship down (he has to check that he has definitely knocked it down)</p>"
    infoDiv.innerHTML += "<span class=\"titleInfo\"> Hard </span><p> - Computer shoots into random fields </p><br><p> - On hitting a ship, he checks the direction and starts to knock the ship down (he has to check that he has definitely knocked it down) </p><br><p> - After a successful knockdown, it does not fire into the fields around the sunken ship</p>"
    infoDiv.innerHTML += "<span class=\"titleInfo\"> Extreme </span><p> - The computer does not shoot at random fields, but dynamically sows the board in search of the most optimal field where the longest to be found ship may be located </p><br><p> - On hitting a ship, it checks the direction and starts to knock the ship down (it receives information about the knockdown from the computer) </p><br><p> - After a successful knockdown, it does not shoot into the fields near the sunken ship</p>"
    infoDiv.style.display = "none";

    var closeInfoDivBtn = document.createElement("div");
    closeInfoDivBtn.id = "closeInfoDivBtn";
    closeInfoDivBtn.innerHTML = "&#10006;"

    closeInfoDivBtn.addEventListener("click", function () {
        infoDiv.style.display = "none";
        blackScreen.style.display = "none";
    })

    infoDiv.appendChild(closeInfoDivBtn);
    document.body.appendChild(infoDiv);

    difficultyInfo.addEventListener("click", function () {
        infoDiv.style.display = "flex";
        blackScreen.style.display = "block";
    })
    difficultyListDiv.appendChild(difficultyInfo);
    gameDiv.appendChild(difficultyListDiv);

}

//fill 2D Tables 

function fill2DTables() {
    for (let i = 0; i < arenaSize + 2; i++) {
        arena2DTable.push([])
        playerArena2DTable.push([])
        for (let j = 0; j < arenaSize + 2; j++) {
            arena2DTable[i][j] = 0
            playerArena2DTable[i][j] = 0
        }
    }
}

//place enemy ships

function calculatePCShipsPositions() {
    for (let i = 0; i < ships.length; i++) {
        var shipIndex = 1
        for (let j = 0; j < ships[i][0]; j++) {
            var shipPlaced = false;
            var pcShipsPositionsTable = [];
            while (!shipPlaced) {
                var canPlaceShip = true;
                direction = Math.round(Math.random());  // 0 - row ; 1 - column
                if (direction == 0) {
                    var x = Math.ceil(Math.random() * 10);
                    var y = Math.ceil(Math.random() * (10 - ships[i][1] + 1));
                } else {
                    var x = Math.ceil(Math.random() * (10 - ships[i][1] + 1));
                    var y = Math.ceil(Math.random() * 10);
                }
                if (x > 0 && y > 0) {
                    for (let k = 0; k < ships[i][1]; k++) {
                        if (direction == 0) {
                            if (arena2DTable[x][y + k] == 1 || arena2DTable[x][y + k] == 2) {
                                canPlaceShip = false;
                                break;
                            } else {
                                canPlaceShip = true;
                            }
                        } else {
                            if (arena2DTable[x + k][y] == 1 || arena2DTable[x + k][y] == 2) {
                                canPlaceShip = false;
                                break;
                            } else {
                                canPlaceShip = true;
                            }
                        }
                    }
                    if (canPlaceShip) {
                        for (let k = 0; k < ships[i][1]; k++) {
                            if (direction == 0) {
                                pcShipsPositionsTable.push([x - 1, y + k - 1])
                                pcShipsPosition.push(document.getElementById("pc[" + (x - 1) + "," + (y + k - 1) + "]"))
                            } else {
                                pcShipsPositionsTable.push([x + k - 1, y - 1])
                                pcShipsPosition.push(document.getElementById("pc[" + (x + k - 1) + "," + (y - 1) + "]"))
                            }
                        }

                        shipContour(x, y, ships[i][1], direction, arena2DTable)
                        pcShips.push({
                            name: "[" + ships[i][1].toString() + "," + shipIndex + "]",
                            len: ships[i][1],
                            x: x - 1,
                            y: y - 1,
                            direct: direction,
                            positions: pcShipsPositionsTable
                        });
                        shipIndex++;
                        shipPlaced = true;
                    }
                }
            }
        }
    }
}

// Draw 1 and 2 in 2DTable

function shipContour(x, y, shipLen, direction, table) {
    for (let i = 0; i < shipLen; i++) {
        if (direction == 0) {
            table[x][y + i] = 1
            if (i == 0) {
                table[x - 1][(y + i) - 1] = 2
                table[x][(y + i) - 1] = 2
                table[x + 1][(y + i) - 1] = 2
            }
            if (i == shipLen - 1) {
                table[x - 1][(y + i) + 1] = 2
                table[x][(y + i) + 1] = 2
                table[x + 1][(y + i) + 1] = 2
            }
            table[x - 1][y + i] = 2
            table[x + 1][y + i] = 2
        } else {
            table[x + i][y] = 1
            if (i == 0) {
                table[(x + i) - 1][y - 1] = 2
                table[(x + i) - 1][y] = 2
                table[(x + i) - 1][y + 1] = 2
            }
            if (i == shipLen - 1) {
                table[(x + i) + 1][y - 1] = 2
                table[(x + i) + 1][y] = 2
                table[(x + i) + 1][y + 1] = 2
            }
            table[x + i][y - 1] = 2
            table[x + i][y + 1] = 2
        }
    }
}

// Add events to player fields 

function eventsListenerForPlayerFields() {
    playerFieldList = document.getElementsByClassName("playerField")
    for (let i = 0; i < playerFieldList.length; i++) {
        shipDirection = 0;
        playerFieldList[i].addEventListener("mouseover", function (e) {
            if (selectedShip != null && preparation) {
                shipDisplay(this, e.type);
            }
        })
        playerFieldList[i].addEventListener("mouseout", function (e) {
            if (selectedShip != null && preparation) {
                shipDisplay(this, e.type);
            }
        })
        playerFieldList[i].addEventListener("contextmenu", function (event) {
            if (selectedShip != null && preparation) {
                event.preventDefault();
                shipDisplay(this, "mouseout");
                if (shipDirection == 0) {
                    shipDirection = 1;
                } else {
                    shipDirection = 0;
                }
                shipDisplay(this, "mouseover");
            }

        })
        playerFieldList[i].addEventListener("click", function () {
            if (preparation) {
                if (this.classList.contains("blueShip") && selectedShip == null) {
                    pickUpTheShip(this);
                } else if (selectedShip != null) {
                    placeShip(this)
                }
            } else if (playerTurn) {
                alert("Player turn")
            }
        })
    }
}

// display ship spirit on arena (green => can place; red = can't place)

function shipDisplay(element, event) {
    var shipLength = selectedShip[0];
    var offset = 0
    if (event == "mouseover") {
        element.style.cursor = "pointer";
        var displayColor = "green";
    } else {
        element.style.cursor = "default";
        var displayColor = "transparent";
    }
    var idEval = eval(element.id.substr(6))
    if (shipDirection == 0) {
        if (idEval[1] + shipLength - 1 >= 10) {
            offset = (idEval[1] + shipLength - 1) - 9
        }

        if (event == "mouseover") {
            for (let i = 0; i < shipLength; i++) {
                if (playerArena2DTable[idEval[0] + 1][idEval[1] + (i - offset) + 1] == 1 || playerArena2DTable[idEval[0] + 1][idEval[1] + (i - offset) + 1] == 2) {
                    displayColor = "red";
                    break;
                } else {
                    displayColor = "green";
                }

            }
        }

        for (let j = 0; j < shipLength; j++) {
            eID = idEval[0].toString() + (idEval[1] + (j - offset)).toString();
            playerFieldList[parseInt(eID)].style.backgroundColor = displayColor;
        }
    }

    else {
        if (idEval[0] + shipLength - 1 >= 10) {
            var offset = (idEval[0] + shipLength - 1) - 9
        }

        if (event == "mouseover") {
            for (let i = 0; i < shipLength; i++) {
                if (playerArena2DTable[idEval[0] + (i - offset) + 1][idEval[1] + 1] == 1 || playerArena2DTable[idEval[0] + (i - offset) + 1][idEval[1] + 1] == 2) {
                    displayColor = "red";
                    break;
                } else {
                    displayColor = "green";
                }

            }
        }

        for (let j = 0; j < shipLength; j++) {
            var eID = (idEval[0] + (j - offset)).toString() + idEval[1].toString();
            playerFieldList[parseInt(eID)].style.backgroundColor = displayColor;
        }
    }
    var blueShips = document.getElementsByClassName("blueShip");
    for (let i = 0; i < blueShips.length; i++) {
        if (event == "mouseout")
            blueShips[i].style.backgroundColor = "blue";
        blueShips[i].style.cursor = "pointer";
    }
}

// place ship on arena

function placeShip(element) {
    if (element.style.backgroundColor == "green" || debugBool == true) {
        var shipLength = selectedShip[0]
        var elementID = eval(element.id.substr(6));
        var offset = 0
        var conXY;
        var variables = [];
        if (shipDirection == 0) {
            conXY = elementID[0];

            if (elementID[1] + shipLength - 1 >= 10) {
                offset = (elementID[1] + shipLength - 1) - 9
            }

            for (let i = 0; i < shipLength; i++) {
                var eID = elementID[0].toString() + (elementID[1] + (i - offset)).toString()
                playerFieldList[parseInt(eID)].style.backgroundColor = "blue";
                playerFieldList[parseInt(eID)].style.cursor = "pointer"
                playerFieldList[parseInt(eID)].classList.add("blueShip");
                playerFieldList[parseInt(eID)].classList.add("placedShip[" + selectedShip[0] + "," + selectedShip[1] + "]");
                variables.push([elementID[0], elementID[1] + (i - offset)])
            }
            shipContour(conXY + 1, elementID[1] - offset + 1, shipLength, shipDirection, playerArena2DTable)
        } else {
            conXY = elementID[1];

            if (elementID[0] + shipLength - 1 >= 10) {
                offset = (elementID[0] + shipLength - 1) - 9
            }

            for (let i = 0; i < shipLength; i++) {
                var eID = (elementID[0] + (i - offset)).toString() + elementID[1].toString()
                playerFieldList[parseInt(eID)].style.backgroundColor = "blue";
                playerFieldList[parseInt(eID)].style.cursor = "pointer"
                playerFieldList[parseInt(eID)].classList.add("blueShip");
                playerFieldList[parseInt(eID)].classList.add("placedShip[" + selectedShip[0] + "," + selectedShip[1] + "]");
                variables.push([elementID[0] + (i - offset), elementID[1]])
            }
            shipContour(elementID[0] - offset + 1, conXY + 1, shipLength, shipDirection, playerArena2DTable)
        }
        playerShips.push({
            name: "placedShip[" + selectedShip[0] + "," + selectedShip[1] + "]",
            len: shipLength,
            direct: shipDirection,
            constXorY: conXY,
            positions: variables
        })

        document.getElementById("Ship[" + selectedShip[0] + "," + selectedShip[1] + "]").style.display = "none";
        selectedShip = null;
        shipDirection = 0;

        checkToDisplayButtonAndDifficultyList();
    }
}

// Pick up the ship on click when placed on arena

function pickUpTheShip(element) {
    var wholeShip;
    var toPick;
    var contours = [];
    for (let i = 0; i < element.classList.length; i++) {
        if (element.classList[i].substr(0, 10) == "placedShip") {
            wholeShip = document.getElementsByClassName(element.classList[i]);
            toPick = element.classList[i].substr(10);
            for (let j = 0; j < playerShips.length; j++) {
                if (playerShips[j].name == element.classList[i]) {
                    playerShips.splice(j, 1);
                }
            }
        }
    }
    var toDeleteLength = wholeShip.length;
    for (let i = 0; i < toDeleteLength; i++) {
        contours.push(eval(wholeShip[0].id.substr(6)))
        wholeShip[0].style.backgroundColor = "transparent";
        wholeShip[0].style.cursor = "default";
        wholeShip[0].classList.remove("blueShip");
        wholeShip[0].classList.remove("placedShip" + toPick);
    }
    document.getElementById("Ship" + toPick).style.display = "flex";
    selectedShip = eval(toPick);

    contours = contours.sort();

    deleteContour(contours, playerArena2DTable);
    shipDisplay(element, "mouseover");
    for (let i = 0; i < playerShips.length; i++) {
        if (playerShips[i].direct == 0) {
            shipContour(playerShips[i].constXorY + 1, playerShips[i].positions[0][1] + 1, playerShips[i].len, playerShips[i].direct, playerArena2DTable)
        } else {
            shipContour(playerShips[i].positions[0][0] + 1, playerShips[i].constXorY + 1, playerShips[i].len, playerShips[i].direct, playerArena2DTable)
        }
    }

    checkToDisplayButtonAndDifficultyList();
}

// Delete 1 and 2 on 2DTable while clicking and picking up the ship

function deleteContour(elements, table) {
    var contourDirection;
    if (elements[0][0] == elements[elements.length - 1][0]) {
        contourDirection = 0;
    } else {
        contourDirection = 1;
    }
    var startContour = elements[0];

    for (let i = 0; i < elements.length + 2; i++) {
        if (contourDirection == 0) {
            table[startContour[0]][startContour[1] + i] = 0;
            table[startContour[0] + 1][startContour[1] + i] = 0;
            table[startContour[0] + 2][startContour[1] + i] = 0;

        } else {
            table[startContour[0] + i][startContour[1]] = 0;
            table[startContour[0] + i][startContour[1] + 1] = 0;
            table[startContour[0] + i][startContour[1] + 2] = 0;
        }
    }
    shipDirection = contourDirection;
}

// checking the possibility of showing the button

function checkToDisplayButtonAndDifficultyList() {
    if (playerShips.length == 10) {
        buttonStart.style.display = "block";
        difficultyList.style.display = "block";
        difficultyInfo.style.display = "block";
    } else {
        buttonStart.style.display = "none";
        difficultyList.style.display = "none";
        difficultyInfo.style.display = "none";
    }
}

// Add click event to pcfields

function addHitStyle() {
    for (let i = 0; i < pcFieldList.length; i++) {
        pcFieldList[i].addEventListener("click", function () {
            if (!pcFieldList[i].classList.contains("shot") && playerTurn && endGame == false) {
                pcFieldList[i].classList.add("shot");
                for (let j = 0; j < pcShipsPosition.length; j++) {
                    if (pcFieldList[i].id == pcShipsPosition[j].id) {
                        pcFieldList[i].classList.add("hit");
                        pcFieldList[i].innerHTML = "&#10006;";
                        checkHitShip(pcFieldList[i], hitPcShips, pcShips);
                        break;
                    } else if (j == pcShipsPosition.length - 1) {
                        pcFieldList[i].innerHTML = "&middot;";
                        premissionToFrame(i, "MISS")
                        changeTurn();
                    }
                }
            } else if (pcTurn) {
                alert("Enemy turn")
            }
        })
    }
}

// Check the hit ship field

function checkHitShip(element, tableHit, tableSource) {
    if (tableSource == pcShips) {
        var eID = eval(element.id.substr(2));
    } else {
        var eID = eval(element.id.substr(6));
    }
    for (let i = 0; i < tableSource.length; i++) {
        for (let j = 0; j < tableSource[i].positions.length; j++) {
            if (JSON.stringify(tableSource[i].positions[j]) == JSON.stringify(eID)) {
                if (tableSource[i].len == 1) {
                    if (tableSource == playerShips) {
                        sunkenPlayerShips++;
                        frameShip([element], playerFieldList);
                        shipFrameRemove([eID], playerFieldList);
                    } else {
                        if (difficulty == "DoOceny") {
                            premissionToFrame([element], "HIT")
                        } else {
                            frameShip([element], pcFieldList)
                        }
                    }
                }
                var pushNewToHit = true;
                for (let k = 0; k < tableHit.length; k++) {
                    if (tableHit[k].name == tableSource[i].name) {
                        tableHit[k].tableXY.push(eID);
                        pushNewToHit = false
                        if (tableHit[k].tableXY.length == tableSource[i].positions.length && tableSource == pcShips) {
                            if (tableSource[i].len != 1) {
                                if (difficulty == "DoOceny") {
                                    premissionToFrame(tableHit[k].tableXY.sort(), "HIT")
                                } else {
                                    frameShip(tableHit[k].tableXY.sort(), pcFieldList);
                                }
                            }
                        }
                        if (tableHit[k].tableXY.length == tableSource[i].positions.length && tableSource == playerShips) {
                            sunkenPlayerShips++;
                            if (tableSource[i].len != 1) {
                                frameShip(tableHit[k].tableXY.sort(), playerFieldList);
                                shipFrameRemove(tableSource[i].positions.sort(), playerFieldList);
                            }
                            if (difficulty == "Extreme") {
                                shipsToFindByPC.splice(shipsToFindByPC.indexOf(tableSource[i].len), 1);
                            }
                        }
                    }
                }
                if (pushNewToHit) {
                    tableHit.push({
                        name: tableSource[i].name,
                        tableXY: [eID]
                    })
                }
                if (tableSource == playerShips && sunkenPlayerShips == 10) {
                    setTimeout(function () { winOrLose("Lose") }, 10);
                }
            }
        }
    }
}

// Player must check if he has sunk the ship

function premissionToFrame(elements, status) {
    if (status == "HIT") {
        var neededFields = []
        if (elements.length == shipsToFindByPlayer[0]) {
            shipsToFindByPlayer.splice(0, 1)
            frameShip(elements, pcFieldList);
            shipFrameRemove(elements, pcFieldList);
            for (let i = fieldNeededToSunkShips.length - 1; i >= 0; i--) {
                if (fieldNeededToSunkShips.length != 0) {
                    if (fieldNeededToSunkShips[i].elm.length == shipsToFindByPlayer[0]) {
                        var tempElm = fieldNeededToSunkShips[i].elm
                        fieldNeededToSunkShips.splice(i, 1)
                        premissionToFrame(tempElm, "HIT")
                    }
                }
            }
        } else {
            if (elements.length == 1) {
                var evalElement = eval(elements[0].id.substr(2))
                var eID = evalElement[0] * 10 + evalElement[1]
                if (evalElement[1] > 0) {
                    if (pcFieldList[eID - 1].classList.contains("shot") == false && pcFieldList[eID - 1].classList.contains("frameRemove") == false) {
                        neededFields.push(eID - 1)
                    }
                }
                if (evalElement[1] < 9) {
                    if (pcFieldList[eID + 1].classList.contains("shot") == false && pcFieldList[eID + 1].classList.contains("frameRemove") == false) {
                        neededFields.push(eID + 1)
                    }
                }
                if (evalElement[0] > 0) {
                    if (pcFieldList[eID - 10].classList.contains("shot") == false && pcFieldList[eID - 10].classList.contains("frameRemove") == false) {
                        neededFields.push(eID - 10)
                    }
                }
                if (evalElement[0] < 9) {
                    if (pcFieldList[eID + 10].classList.contains("shot") == false && pcFieldList[eID + 10].classList.contains("frameRemove") == false) {
                        neededFields.push(eID + 10)
                    }
                }
            } else {
                if (elements[0][0] == elements[1][0]) {
                    var shipDirect = 0
                } else {
                    var shipDirect = 1
                }
                if (shipDirect == 0) {
                    if (elements[0][1] > 0) {
                        var eID = elements[0][0] * 10 + elements[0][1] - 1
                        if (pcFieldList[eID].classList.contains("shot") == false && pcFieldList[eID].classList.contains("frameRemove") == false) {
                            neededFields.push(eID)
                        }
                    }
                    if (elements[elements.length - 1][1] < 9) {
                        var eID = elements[elements.length - 1][0] * 10 + elements[elements.length - 1][1] + 1
                        if (pcFieldList[eID].classList.contains("shot") == false && pcFieldList[eID].classList.contains("frameRemove") == false) {
                            neededFields.push(eID)
                        }
                    }
                } else {
                    if (elements[0][0] > 0) {
                        var eID = elements[0][0] * 10 + elements[0][1] - 10
                        if (pcFieldList[eID].classList.contains("shot") == false && pcFieldList[eID].classList.contains("frameRemove") == false) {
                            neededFields.push(eID)
                        }
                    }
                    if (elements[elements.length - 1][0] < 9) {
                        var eID = elements[elements.length - 1][0] * 10 + elements[elements.length - 1][1] + 10
                        if (pcFieldList[eID].classList.contains("shot") == false && pcFieldList[eID].classList.contains("frameRemove") == false) {
                            neededFields.push(eID)
                        }
                    }
                }
            }
            if (neededFields.length == 0) {
                frameShip(elements, pcFieldList);
                shipFrameRemove(elements, pcFieldList);
                shipsToFindByPlayer.splice(shipsToFindByPlayer.indexOf(elements.length), 1)
            } else {
                fieldNeededToSunkShips.push({ elm: elements, neededFld: neededFields })
            }
        }
    } else {
        checkToSunk(elements);
    }
}

// To sunk Player must hit specified fields around ship

function checkToSunk(element) {
    for (let i = 0; i < fieldNeededToSunkShips.length; i++) {
        for (let j = 0; j < fieldNeededToSunkShips[i].neededFld.length; j++) {
            if (element == fieldNeededToSunkShips[i].neededFld[j] || pcFieldList[fieldNeededToSunkShips[i].neededFld[j]].classList.contains("frameRemove")) {
                fieldNeededToSunkShips[i].neededFld.splice(j, 1);
                if (fieldNeededToSunkShips[i].neededFld.length == 0) {
                    frameShip(fieldNeededToSunkShips[i].elm, pcFieldList);
                    var tempVal = Array.from(fieldNeededToSunkShips[i].elm);
                    shipsToFindByPlayer.splice(shipsToFindByPlayer.indexOf(fieldNeededToSunkShips[i].elm.length), 1)
                    fieldNeededToSunkShips.splice(i, 1);
                    if (tempVal.length == 1) {
                        shipFrameRemove([eval(tempVal[0].id.substr(2))], pcFieldList);
                    } else {
                        shipFrameRemove(tempVal, pcFieldList);
                    }
                    break;
                }
            }
        }
    }
}

// Frame sunk ship

function frameShip(elements, targetTable) {
    if (targetTable == pcFieldList) {
        var backColor = "red";
        var borderColor = "rgb(0, 255, 255)";
    } else {
        var backColor = "blue"
        var borderColor = "red";
    }
    if (elements.length == 1) {
        elements[0].classList.add("sunken");
        elements[0].style.border = "2px solid " + borderColor;
        elements[0].style.backgroundColor = backColor;
    } else {
        if (elements[0][0] == elements[1][0]) {
            var frameDirect = 0
        } else {
            var frameDirect = 1
        }
        for (let i = 0; i < elements.length; i++) {
            if (frameDirect == 0) {
                var eID = elements[i][0].toString() + elements[i][1].toString()
                targetTable[parseInt(eID)].style.border = "none";
                targetTable[parseInt(eID)].classList.add("sunken");
                targetTable[parseInt(eID)].style.backgroundColor = backColor;
                if (i == 0) {
                    targetTable[parseInt(eID)].style.borderLeft = "2px solid " + borderColor;
                }
                if (i == elements.length - 1) {
                    targetTable[parseInt(eID)].style.borderRight = "2px solid " + borderColor;
                }
                targetTable[parseInt(eID)].style.borderTop = "2px solid " + borderColor;
                targetTable[parseInt(eID)].style.borderBottom = "2px solid " + borderColor;
            } else {
                var eID = elements[i][0].toString() + elements[i][1].toString()
                targetTable[parseInt(eID)].style.border = "none";
                targetTable[parseInt(eID)].classList.add("sunken");
                targetTable[parseInt(eID)].style.backgroundColor = backColor;
                if (i == 0) {
                    targetTable[parseInt(eID)].style.borderTop = "2px solid " + borderColor;
                }
                if (i == elements.length - 1) {
                    targetTable[parseInt(eID)].style.borderBottom = "2px solid " + borderColor;
                }
                targetTable[parseInt(eID)].style.borderLeft = "2px solid " + borderColor;
                targetTable[parseInt(eID)].style.borderRight = "2px solid " + borderColor;
            }
        }
    }
    if (targetTable == pcFieldList) {
        framedPCShips += 1;
        if (framedPCShips == 10) {
            setTimeout(function () {
                winOrLose("Win")
            }, 10)
        }
    }
}

// Who shooting now

function shooting() {
    if (playerTurn) {
        arenasBackgorundShadow("player");
    } else {
        arenasBackgorundShadow("pc");
        pcShootTimeout = setTimeout(function () {
            if (!endGame) {
                aiShooting();
                pcMoves++;
            }
        }, PCspeed)
    }
}

//Add colored shadow behind arena

function arenasBackgorundShadow(element) {
    if (element == "player") {
        document.getElementById("pcArena").style.boxShadow = "0 0 80px 15px #ff3c33";
        document.getElementById("playerArena").style.boxShadow = "";
    } else {
        document.getElementById("playerArena").style.boxShadow = "0 0 80px 15px #3386ff";
        document.getElementById("pcArena").style.boxShadow = "";
    }
}

// Base menu for AI shooting menu

function aiShooting() {
    if (difficulty != "Extreme" && difficulty != "DoOceny") {
        if (targetFields == null) {
            targetFields = Array.from(playerFieldList);
        }
        if (difficulty == "Hard") {
            var frameRemove = document.getElementsByClassName("frameRemove");
            for (let i = 0; i < frameRemove.length; i++) {
                if (targetFields.includes(frameRemove[i])) {
                    targetFields.splice(targetFields.indexOf(frameRemove[i]), 1);
                }
            }
        }
        if (difficulty == "Easy") {
            difficultyAiEasy(targetFields);
        } else if (difficulty == "Medium") {
            difficultyAiMedium(targetFields);
        } else if (difficulty == "Hard") {
            difficultyAiHard(targetFields);
        }
    } else {
        bestFieldToShoot(shipsToFindByPC[0])
        var highestValue = 0
        targetFields = []
        for (let i = 0; i < dynamicTempalteTable.length; i++) {
            if (dynamicTempalteTable[i] > highestValue) {
                highestValue = dynamicTempalteTable[i]
            }
        }
        for (let i = 0; i < dynamicTempalteTable.length; i++) {
            if (dynamicTempalteTable[i] == highestValue) {
                targetFields.push(playerFieldList[i])
            }
        }
        if (difficulty == "Extreme") {
            difficultyAiExtreme(targetFields)
        } else if (difficulty == "DoOceny") {
            difficultyAiDoOceny(targetFields)
        }
        bestFieldToShoot(shipsToFindByPC[0])
    }
}

// Looking for the most optimal fields to hit

function bestFieldToShoot(longShip) {
    dynamicTempalteTable = []
    for (let i = 0; i < 100; i++) {
        dynamicTempalteTable.push(0)
    }
    for (let i = 0; i < playerFieldList.length; i++) {
        if (playerFieldList[i].classList.contains("shot") || playerFieldList[i].classList.contains("frameRemove")) {
            dynamicTempalteTable[i] = 0
        } else {
            var horizontalAccept = true
            var verticalAccept = true
            for (let j = 1; j < longShip; j++) {
                if (i % 10 < 10 - (longShip - 1)) {
                    // Horizontal
                    if (playerFieldList[i + j].classList.contains("shot") || playerFieldList[i + j].classList.contains("frameRemove")) {
                        horizontalAccept = false
                    }
                } else {
                    horizontalAccept = false
                }

                if (i < 100 - ((longShip - 1) * 10)) {
                    // Vertical
                    if (playerFieldList[i + (j * 10)].classList.contains("shot") || playerFieldList[i + (j * 10)].classList.contains("frameRemove")) {
                        verticalAccept = false
                    }
                } else {
                    verticalAccept = false
                }
            }
            if (horizontalAccept) {
                for (let j = 0; j < longShip; j++) {
                    dynamicTempalteTable[i + j] += 1
                }
            }
            if (verticalAccept) {
                for (let j = 0; j < longShip; j++) {
                    dynamicTempalteTable[i + (j * 10)] += 1
                }
            }
        }
    }
    if (showTemplateValue) {
        var highestValue = 0
        for (let i = 0; i < dynamicTempalteTable.length; i++) {
            if (dynamicTempalteTable[i] > highestValue) {
                highestValue = dynamicTempalteTable[i]
            }
        }
        for (let i = 0; i < pcFieldList.length; i++) {
            if (!playerFieldList[i].classList.contains("shot")) {
                if (shipsToFindByPC[0] == 1 && dynamicTempalteTable[i] == 2) {
                    playerFieldList[i].innerHTML = "<span style='opacity: 0.5;  color: red;'>1</span>"
                } else {
                    if (dynamicTempalteTable[i] == highestValue) {
                        playerFieldList[i].innerHTML = "<span style='opacity: 0.5;  color: red;'>" + dynamicTempalteTable[i] + "</span>"
                    } else {
                        playerFieldList[i].innerHTML = "<span style='opacity: 0.5; '>" + dynamicTempalteTable[i] + "</span>"
                    }
                }
            }
        }
    }
}

// AI Difficulty - Easy
//#region 

function difficultyAiEasy(table) {
    var shootIndex = Math.floor(Math.random() * table.length);
    var evalIndex = eval(table[shootIndex].id.substr(6));
    var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
    playerFieldList[outIndex].classList.add("shot");
    if (playerFieldList[outIndex].classList.contains("blueShip")) {
        playerFieldList[outIndex].innerHTML = "&#10006;";
        checkHitShip(playerFieldList[outIndex], hitPlayerShips, playerShips);
        shooting();
    } else {
        playerFieldList[outIndex].innerHTML = "&middot;";
        changeTurn();
    }

    targetFields.splice(shootIndex, 1);
}
//#endregion

// AI Difficulty - Medium
//#region 
function difficultyAiMedium(table) {
    if (!AiMediumHit) {
        var shootIndex = Math.floor(Math.random() * table.length);
        var evalIndex = eval(table[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        targetFields.splice(shootIndex, 1);
    } else {
        var shootIndex = Math.floor(Math.random() * newTargetTable.length);
        var evalIndex = eval(newTargetTable[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        newTargetTable.splice(shootIndex, 1);
        targetFields.splice(targetFields.indexOf(playerFieldList[outIndex]), 1);
    }
    playerFieldList[outIndex].classList.add("shot");
    if (playerFieldList[outIndex].classList.contains("blueShip")) {
        playerFieldList[outIndex].innerHTML = "&#10006;";

        checkHitShip(playerFieldList[outIndex], hitPlayerShips, playerShips);
        AiMediumHit = true;

        if (newTargetTable.length == 0 && tempHitAiMedium == null) {
            tempHitAiMedium = [];
            tempHitAiMedium.push(evalIndex, outIndex);
            newTargetTable = [];
            if (outIndex % 10 > 0) {
                if (!playerFieldList[outIndex - 1].classList.contains("shot")) {
                    newTargetTable.push(playerFieldList[outIndex - 1]);
                }
            }
            if (outIndex % 10 < 9) {
                if (!playerFieldList[outIndex + 1].classList.contains("shot")) {
                    newTargetTable.push(playerFieldList[outIndex + 1]);
                }
            }
            if (outIndex > 9) {
                if (!playerFieldList[outIndex - 10].classList.contains("shot")) {
                    newTargetTable.push(playerFieldList[outIndex - 10]);
                }
            }
            if (outIndex < 90) {
                if (!playerFieldList[outIndex + 10].classList.contains("shot")) {
                    newTargetTable.push(playerFieldList[outIndex + 10]);
                }
            }
        } else {
            if (evalIndex[0] == tempHitAiMedium[0][0]) {
                mediumAiShipDirect = 0;
            } else {
                mediumAiShipDirect = 1;
            }
            if (mediumAiShipDirect == 0) {
                if (newTargetTable.indexOf(playerFieldList[tempHitAiMedium[1] - 1]) > -1) {
                    tempToCheckAiMedium.push(playerFieldList[tempHitAiMedium[1] - 1])
                }
                if (newTargetTable.indexOf(playerFieldList[tempHitAiMedium[1] + 1]) > -1) {
                    tempToCheckAiMedium.push(playerFieldList[tempHitAiMedium[1] + 1])
                }

                newTargetTable = [];
                if (outIndex % 10 > 0) {
                    if (!playerFieldList[outIndex - 1].classList.contains("shot")) {
                        newTargetTable.push(playerFieldList[outIndex - 1]);
                    }
                }
                if (outIndex % 10 < 9) {
                    if (!playerFieldList[outIndex + 1].classList.contains("shot")) {
                        newTargetTable.push(playerFieldList[outIndex + 1]);
                    }
                }

            } else {
                if (newTargetTable.indexOf(playerFieldList[tempHitAiMedium[1] - 10]) > -1) {
                    tempToCheckAiMedium.push(playerFieldList[tempHitAiMedium[1] - 10])
                }
                if (newTargetTable.indexOf(playerFieldList[tempHitAiMedium[1] + 10]) > -1) {
                    tempToCheckAiMedium.push(playerFieldList[tempHitAiMedium[1] + 10])
                }

                newTargetTable = [];
                if (outIndex > 9) {
                    if (!playerFieldList[outIndex - 10].classList.contains("shot")) {
                        newTargetTable.push(playerFieldList[outIndex - 10]);
                    }
                }
                if (outIndex < 90) {
                    if (!playerFieldList[outIndex + 10].classList.contains("shot")) {
                        newTargetTable.push(playerFieldList[outIndex + 10]);
                    }
                }
            }
        }
        shooting();
    } else {
        playerFieldList[outIndex].innerHTML = "&middot;";
        changeTurn();
    }
    if (newTargetTable.length == 0) {
        if (tempToCheckAiMedium.length == 0) {
            AiMediumHit = false;
            tempHitAiMedium = null;
        } else {
            newTargetTable.push(tempToCheckAiMedium[0])
            tempToCheckAiMedium.splice(0, 1);
        }
    }
}
//#endregion

// AI Difficulty - Hard
//#region 

function difficultyAiHard(table) {
    if (!AiHardHit) {
        shootIndex = Math.floor(Math.random() * table.length);
        var evalIndex = eval(table[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        targetFields.splice(shootIndex, 1);
    } else {
        shootIndex = Math.floor(Math.random() * newTargetTable.length);
        var evalIndex = eval(newTargetTable[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        newTargetTable.splice(shootIndex, 1);
    }
    playerFieldList[outIndex].classList.add("shot");
    if (playerFieldList[outIndex].classList.contains("blueShip")) {
        playerFieldList[outIndex].innerHTML = "&#10006;";

        AiHardHit = true;

        if (newTargetTable.length == 0 && tempHitAiHard == null) {
            tempHitAiHard = [];
            tempHitAiHard.push(evalIndex, outIndex);
            newTargetTable = [];
            if (outIndex % 10 > 0) {
                if (!playerFieldList[outIndex - 1].classList.contains("shot") && !playerFieldList[outIndex - 1].classList.contains("frameRemove")) {
                    newTargetTable.push(playerFieldList[outIndex - 1]);
                }
            }
            if (outIndex % 10 < 9) {
                if (!playerFieldList[outIndex + 1].classList.contains("shot") && !playerFieldList[outIndex + 1].classList.contains("frameRemove")) {
                    newTargetTable.push(playerFieldList[outIndex + 1]);
                }
            }
            if (outIndex > 9) {
                if (!playerFieldList[outIndex - 10].classList.contains("shot") && !playerFieldList[outIndex - 10].classList.contains("frameRemove")) {
                    newTargetTable.push(playerFieldList[outIndex - 10]);
                }
            }
            if (outIndex < 90) {
                if (!playerFieldList[outIndex + 10].classList.contains("shot") && !playerFieldList[outIndex + 10].classList.contains("frameRemove")) {
                    newTargetTable.push(playerFieldList[outIndex + 10]);
                }
            }
        } else {
            if (evalIndex[0] == tempHitAiHard[0][0]) {
                hardAiShipDirect = 0;
            } else {
                hardAiShipDirect = 1;
            }
            if (hardAiShipDirect == 0) {
                if (newTargetTable.indexOf(playerFieldList[tempHitAiHard[1] - 1]) > -1) {
                    tempToCheckAiHard.push(playerFieldList[tempHitAiHard[1] - 1])
                }
                if (newTargetTable.indexOf(playerFieldList[tempHitAiHard[1] + 1]) > -1) {
                    tempToCheckAiHard.push(playerFieldList[tempHitAiHard[1] + 1])
                }

                newTargetTable = [];
                if (outIndex % 10 > 0) {
                    if (!playerFieldList[outIndex - 1].classList.contains("shot") && !playerFieldList[outIndex - 1].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex - 1]);
                    }
                }
                if (outIndex % 10 < 9) {
                    if (!playerFieldList[outIndex + 1].classList.contains("shot") && !playerFieldList[outIndex + 1].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex + 1]);
                    }
                }

            } else {
                if (newTargetTable.indexOf(playerFieldList[tempHitAiHard[1] - 10]) > -1) {
                    tempToCheckAiHard.push(playerFieldList[tempHitAiHard[1] - 10])
                }
                if (newTargetTable.indexOf(playerFieldList[tempHitAiHard[1] + 10]) > -1) {
                    tempToCheckAiHard.push(playerFieldList[tempHitAiHard[1] + 10])
                }

                newTargetTable = [];
                if (outIndex > 9) {
                    if (!playerFieldList[outIndex - 10].classList.contains("shot") && !playerFieldList[outIndex - 10].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex - 10]);
                    }
                }
                if (outIndex < 90) {
                    if (!playerFieldList[outIndex + 10].classList.contains("shot") && !playerFieldList[outIndex + 10].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex + 10]);
                    }
                }
            }
        }
        checkHitShip(playerFieldList[outIndex], hitPlayerShips, playerShips);
        shooting();
    } else {
        playerFieldList[outIndex].innerHTML = "&middot;";
        changeTurn();
    }
    if (newTargetTable.length == 0) {
        if (tempToCheckAiHard.length == 0) {
            AiHardHit = false;
            tempHitAiHard = null;
        } else {
            newTargetTable.push(tempToCheckAiHard[0])
            tempToCheckAiHard.splice(0, 1);
        }
    }
}
//#endregion

// AI Difficulty - Extreme
//#region 
function difficultyAiExtreme(table) {
    if (!AiExtremeHit) {
        shootIndex = Math.floor(Math.random() * table.length);
        var evalIndex = eval(table[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        targetFields.splice(shootIndex, 1);
    } else {
        shootIndex = Math.floor(Math.random() * newTargetTable.length);
        var evalIndex = eval(newTargetTable[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        newTargetTable.splice(shootIndex, 1);
    }
    playerFieldList[outIndex].classList.add("shot");
    if (playerFieldList[outIndex].classList.contains("blueShip")) {
        playerFieldList[outIndex].innerHTML = "&#10006;";
        var tempSunk = sunkenPlayerShips;

        AiExtremeHit = true;
        checkHitShip(playerFieldList[outIndex], hitPlayerShips, playerShips);
        if (tempSunk != sunkenPlayerShips) {
            tempToCheckAiExtreme = [];
            newTargetTable = [];
            AiExtremeHit = false;
        } else {

            if (newTargetTable.length == 0 && tempHitAiExtreme == null) {
                tempHitAiExtreme = [];
                tempHitAiExtreme.push(evalIndex, outIndex);
                newTargetTable = [];
                if (outIndex % 10 > 0) {
                    if (!playerFieldList[outIndex - 1].classList.contains("shot") && !playerFieldList[outIndex - 1].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex - 1]);
                    }
                }
                if (outIndex % 10 < 9) {
                    if (!playerFieldList[outIndex + 1].classList.contains("shot") && !playerFieldList[outIndex + 1].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex + 1]);
                    }
                }
                if (outIndex > 9) {
                    if (!playerFieldList[outIndex - 10].classList.contains("shot") && !playerFieldList[outIndex - 10].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex - 10]);
                    }
                }
                if (outIndex < 90) {
                    if (!playerFieldList[outIndex + 10].classList.contains("shot") && !playerFieldList[outIndex + 10].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex + 10]);
                    }
                }
            } else if (tempHitAiExtreme != null) {
                if (evalIndex[0] == tempHitAiExtreme[0][0]) {
                    extremeAiShipDirect = 0;
                } else {
                    extremeAiShipDirect = 1;
                }
                if (extremeAiShipDirect == 0) {
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiExtreme[1] - 1]) > -1) {
                        tempToCheckAiExtreme.push(playerFieldList[tempHitAiExtreme[1] - 1])
                    }
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiExtreme[1] + 1]) > -1) {
                        tempToCheckAiExtreme.push(playerFieldList[tempHitAiExtreme[1] + 1])
                    }

                    newTargetTable = [];
                    if (outIndex % 10 > 0) {
                        if (!playerFieldList[outIndex - 1].classList.contains("shot") && !playerFieldList[outIndex - 1].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex - 1]);
                        }
                    }
                    if (outIndex % 10 < 9) {
                        if (!playerFieldList[outIndex + 1].classList.contains("shot") && !playerFieldList[outIndex + 1].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex + 1]);
                        }
                    }

                } else {
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiExtreme[1] - 10]) > -1) {
                        tempToCheckAiExtreme.push(playerFieldList[tempHitAiExtreme[1] - 10])
                    }
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiExtreme[1] + 10]) > -1) {
                        tempToCheckAiExtreme.push(playerFieldList[tempHitAiExtreme[1] + 10])
                    }

                    newTargetTable = [];
                    if (outIndex > 9) {
                        if (!playerFieldList[outIndex - 10].classList.contains("shot") && !playerFieldList[outIndex - 10].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex - 10]);
                        }
                    }
                    if (outIndex < 90) {
                        if (!playerFieldList[outIndex + 10].classList.contains("shot") && !playerFieldList[outIndex + 10].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex + 10]);
                        }
                    }
                }
            }
        }
        shooting();
    } else {
        playerFieldList[outIndex].innerHTML = "&middot;";
        changeTurn();
    }
    pcTempMove++;
    if (newTargetTable.length == 0) {
        if (tempToCheckAiExtreme.length == 0) {
            AiExtremeHit = false;
            tempHitAiExtreme = null;
        } else {
            newTargetTable.push(tempToCheckAiExtreme[0])
            tempToCheckAiExtreme.splice(0, 1);
        }
    }
}
//#endregion

// AI Difficulty - DoOceny
//#region 
function difficultyAiDoOceny(table) {
    if (!AiDoOcenyHit) {
        shootIndex = Math.floor(Math.random() * table.length);
        var evalIndex = eval(table[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        targetFields.splice(shootIndex, 1);
    } else {
        shootIndex = Math.floor(Math.random() * newTargetTable.length);
        var evalIndex = eval(newTargetTable[shootIndex].id.substr(6));
        var outIndex = parseInt(evalIndex[0].toString() + evalIndex[1].toString());
        newTargetTable.splice(shootIndex, 1);
    }
    playerFieldList[outIndex].classList.add("shot");
    if (playerFieldList[outIndex].classList.contains("blueShip")) {
        playerFieldList[outIndex].innerHTML = "&#10006;";
        var tempSunk = sunkenPlayerShips;

        AiDoOcenyHit = true;
        listHittedFields.push(playerFieldList[outIndex]);
        if (listHittedFields.length == shipsToFindByPC[0]) {
            for (let i = 0; i < listHittedFields.length; i++) {
                checkHitShip(listHittedFields[i], hitPlayerShips, playerShips)
            }
            shipsToFindByPC.splice(0, 1)
            listHittedFields = []
        }
        if (tempSunk != sunkenPlayerShips) {
            tempToCheckAiDoOceny = [];
            newTargetTable = [];
            AiDoOcenyHit = false;
        } else {

            if (newTargetTable.length == 0 && tempHitAiDoOceny == null) {
                tempHitAiDoOceny = [];
                tempHitAiDoOceny.push(evalIndex, outIndex);
                newTargetTable = [];
                if (outIndex % 10 > 0) {
                    if (!playerFieldList[outIndex - 1].classList.contains("shot") && !playerFieldList[outIndex - 1].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex - 1]);
                    }
                }
                if (outIndex % 10 < 9) {
                    if (!playerFieldList[outIndex + 1].classList.contains("shot") && !playerFieldList[outIndex + 1].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex + 1]);
                    }
                }
                if (outIndex > 9) {
                    if (!playerFieldList[outIndex - 10].classList.contains("shot") && !playerFieldList[outIndex - 10].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex - 10]);
                    }
                }
                if (outIndex < 90) {
                    if (!playerFieldList[outIndex + 10].classList.contains("shot") && !playerFieldList[outIndex + 10].classList.contains("frameRemove")) {
                        newTargetTable.push(playerFieldList[outIndex + 10]);
                    }
                }
            } else if (tempHitAiDoOceny != null) {
                if (evalIndex[0] == tempHitAiDoOceny[0][0]) {
                    doOcenyAiShipDirect = 0;
                } else {
                    doOcenyAiShipDirect = 1;
                }
                if (doOcenyAiShipDirect == 0) {
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiDoOceny[1] - 1]) > -1) {
                        tempToCheckAiDoOceny.push(playerFieldList[tempHitAiDoOceny[1] - 1])
                    }
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiDoOceny[1] + 1]) > -1) {
                        tempToCheckAiDoOceny.push(playerFieldList[tempHitAiDoOceny[1] + 1])
                    }

                    newTargetTable = [];
                    if (outIndex % 10 > 0) {
                        if (!playerFieldList[outIndex - 1].classList.contains("shot") && !playerFieldList[outIndex - 1].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex - 1]);
                        }
                    }
                    if (outIndex % 10 < 9) {
                        if (!playerFieldList[outIndex + 1].classList.contains("shot") && !playerFieldList[outIndex + 1].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex + 1]);
                        }
                    }

                } else {
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiDoOceny[1] - 10]) > -1) {
                        tempToCheckAiDoOceny.push(playerFieldList[tempHitAiDoOceny[1] - 10])
                    }
                    if (newTargetTable.indexOf(playerFieldList[tempHitAiDoOceny[1] + 10]) > -1) {
                        tempToCheckAiDoOceny.push(playerFieldList[tempHitAiDoOceny[1] + 10])
                    }

                    newTargetTable = [];
                    if (outIndex > 9) {
                        if (!playerFieldList[outIndex - 10].classList.contains("shot") && !playerFieldList[outIndex - 10].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex - 10]);
                        }
                    }
                    if (outIndex < 90) {
                        if (!playerFieldList[outIndex + 10].classList.contains("shot") && !playerFieldList[outIndex + 10].classList.contains("frameRemove")) {
                            newTargetTable.push(playerFieldList[outIndex + 10]);
                        }
                    }
                }
            }
        }
        shooting();
    } else {
        playerFieldList[outIndex].innerHTML = "&middot;";
        changeTurn();
    }
    pcTempMove++;
    if (newTargetTable.length == 0) {
        if (tempToCheckAiDoOceny.length == 0) {
            if (listHittedFields.length > 0) {
                for (let i = 0; i < listHittedFields.length; i++) {
                    checkHitShip(listHittedFields[i], hitPlayerShips, playerShips)
                }
                shipsToFindByPC.splice(shipsToFindByPC.indexOf(listHittedFields.length), 1)
                listHittedFields = []
            }
            AiDoOcenyHit = false;
            tempHitAiDoOceny = null;
        } else {
            newTargetTable.push(tempToCheckAiDoOceny[0])
            tempToCheckAiDoOceny.splice(0, 1);
        }
    }
}

//Remove fields around sunken ship

function shipFrameRemove(elements, targetTable) {
    if (elements.length == 1 || elements[0][0] == elements[1][0]) {
        var frameRemoveDirection = 0
    } else {
        var frameRemoveDirection = 1
    }
    if (frameRemoveDirection == 0) {
        for (let i = 0; i < elements.length + 2; i++) {
            for (let j = 0; j < 3; j++) {
                if ((elements[0][1] == 0 && i == 0) || (elements[elements.length - 1][1] == 9 && i == elements.length + 1)) {
                    break;
                } else {
                    var eID = parseInt((elements[0][0] - 1 + j).toString() + (elements[0][1] - 1 + i).toString())
                    if (targetTable[eID] != undefined) {
                        targetTable[eID].classList.add("frameRemove");
                    }
                }
            }
        }
    } else {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < elements.length + 2; j++) {
                if ((elements[0][1] == 0 && i == 0) || (elements[elements.length - 1][1] == 9 && i == 2)) {
                    break;
                } else {
                    var eID = parseInt((elements[0][0] - 1 + j).toString() + (elements[0][1] - 1 + i).toString())
                    if (targetTable[eID] != undefined) {
                        targetTable[eID].classList.add("frameRemove");
                    }
                }
            }
        }
    }
    if (targetTable == pcFieldList && difficulty == "DoOceny") {
        checkToSunk(null)
    }
}

//#endregion

// Change turn

function changeTurn() {
    if (!endGame) {
        if (playerTurn) {
            playerTurn = false;
            pcTurn = true;
        } else {
            if (playerPlay) {
                playerTurn = true;
                pcTurn = false;
            }
        }
        shooting();
    }
}

// When Player lose, display PC ships

function displayPcShips() {
    for (let i = 0; i < pcShipsPosition.length; i++) {
        if (!pcShipsPosition[i].classList.contains("sunken")) {
            pcShipsPosition[i].style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        }
    }
}

// function showing alerts and restarting the game

function winOrLose(event) {
    if (event == "Win") {
        endGame = true;
        clearTimeout(pcShootTimeout);
        var revenge = confirm("Player Won!!! A rematch?");
        if (revenge == true) {
            startOrRestartGame();
        }
    } else {
        endGame = true;
        clearTimeout(pcShootTimeout);
        alert("Computer Wins!!!");
        displayPcShips();
        pcMovesList.push(pcMoves);
        pcMoves = 0;
        pcTempMoveList.push(pcTempMove);
        pcTempMove = 0;
        setTimeout(function () {
            startOrRestartGame();
        }, 10000)
    }
}