class Game {

    constructor() {
        this.titleScreen = null;
        this.menu = null;
        this.mainDiv = null;
        this.arena = null;
        this.innerMagniferForImg = null;
        this.marioPlaceHolder = null;
        this.fieldList = [];
        this.pillsList = [];
        this.throwFieldList = [];
        this.dataThrowList = [];

        this.audioDiv = null;
        this.play = false;

        this.defaultFallSpeed = 400;
        this.throwFillSpeed = 15;
        this.gravitySpeed = 10;

        this.pressedSpace = false;
        this.preloadedImgTable = [];
        this.preloadedMusicTable = [];
        this.colorList = ["br", "bl", "yl"];
        this.backgroundColorList = ["#91163e", "#008454", "#ffb19c", "#837e85", "#0041ae"];
        this.magnifierVirusList = [];
        this.magnifierVirusTimeout = [null, null, null];
        this.lvl = 0;
        this.speed = 0;
        this.mmusic = 0;
        this.virusCount = (4 * this.lvl) + 4;
        this.id = 0;
        this.startPos = [[3, 1], [4, 1]];
        this.currentPosition = JSON.parse(JSON.stringify(this.startPos));
        this.fallSpeed = 500;
        this.fastFall = false;
        this.noPill = false;
        this.tableToDestroy = [];
        this.destroyAnimSpeed = 70;
        this.gravityFallSpeed = 45;
        this.firstFallAfterDestroy = true;
        this.virusCounterObject = { bl: 0, yl: 0, br: 0, all: 0 };
        this.end = false;
        this.winLose = { win: false, lose: false };
        this.topScore = 0;
        this.actualScore = 0;
        this.scoreImgObj = { topScoreImg: [], actualScoreImg: [] };
        this.playInfoImgObj = { lvl: [], virusAmount: [] };
        this.speedDiv = null;
        this.alert = null;
        this.canNextLvl = false;
        this.nextPillColor = [];
        this.marioArmPos = { start: [[11, 4], [11, 5], [11, 6]], middle: [[10, 5], [10, 6], [11, 5], [11, 6]], end: [[11, 6], [11, 7]] };
        this.marioArmGraph = { start: "up", middle: "middle", end: "down" }
        this.marioArmCurrentStatus = "start";
        this.speedNameList = ["low", "med", "hi"];
    }

    CreateAudio() {
        this.audioDiv = document.createElement("audio");
        this.audioDiv.autoplay = true;
        this.audioDiv.loop = true;
        this.audioDiv.volume = 0.02;
        this.audioDiv.src = "./music/Dr-Mario-TitleTheme.mp3";
        document.body.appendChild(this.audioDiv)
        document.body.addEventListener("click", () => {
            if (this.play == false) {
                this.play = true
                this.audioDiv.play();
            }
        })
    }

    TitleScreen() {
        this.PreloadData();
        this.CreateAudio();
        this.titleScreen = new TitleScreen();
        this.titleScreen.CreateTitleScreen();
    }

    StartMenu() {
        this.audioDiv.src = "./music/Dr-Mario-GameConfiguration.mp3";
        this.menu = new Menu();
        this.menu.CreateMenuInterface();
    }

    StartGameManager(level, speed, music) {
        this.lvl = level;
        this.virusCount = (4 * this.lvl) + 4;
        this.speed = speed;
        this.music = music
        switch (speed) {
            case 0: {
                this.defaultFallSpeed = 600;
                break;
            }
            case 1: {
                this.defaultFallSpeed = 400;
                break;
            }
            case 2: {
                this.defaultFallSpeed = 200;
                break;
            }
            default: {
                break;
            }
        }
        this.fallSpeed = this.defaultFallSpeed
        if (this.mainDiv == null) {
            this.CreateGUI()
        } else {
            this.speedDiv.style.backgroundImage = `url("./img/${this.speedNameList[this.speed]}.png")`
            this.CreatePillToThrow();
            this.StartGame();
        }
    }

    CreateGUI() {

        this.mainDiv = document.createElement("div");
        this.mainDiv.id = "mainDiv";

        this.arena = document.createElement("div");
        this.arena.id = "arena";

        let arenaGame = document.createElement("div");
        arenaGame.id = "arenaGame";
        arenaGame.style.backgroundImage = "url('./img/background.png')"

        let gameTable = document.createElement("div");
        gameTable.id = "gameTable";

        for (let i = 0; i < 8; i++) {
            let divColumn = document.createElement("div");
            divColumn.classList.add("divColumn");
            this.pillsList.push([]);
            this.fieldList.push([]);
            for (let j = 0; j < 17; j++) {
                let filed = document.createElement("div");
                filed.classList.add("field");
                divColumn.appendChild(filed)
                if (j == 0 && (i != 3 && i != 4)) {
                    this.pillsList[i].push(1)
                } else {
                    this.pillsList[i].push(0)
                }
                this.fieldList[i].push(filed)
            }
            gameTable.appendChild(divColumn)
        }
        arenaGame.appendChild(gameTable)

        let magnifierDiv = document.createElement("div");
        magnifierDiv.id = "magnifierDiv";

        this.innerMagniferForImg = document.createElement("div");
        this.innerMagniferForImg.id = "innerMagniferForImg";
        magnifierDiv.appendChild(this.innerMagniferForImg);

        this.arena.appendChild(magnifierDiv);

        this.marioPlaceHolder = document.createElement("img");
        this.marioPlaceHolder.id = "marioPlaceHolder";
        this.marioPlaceHolder.src = "./img/go_dr.png"

        let throwPillDiv = document.createElement("div");
        throwPillDiv.id = "throwPillDiv";

        for (let i = 0; i < 12; i++) {
            let throwPillColumn = document.createElement("div");
            throwPillColumn.classList.add("throwPillColumn");
            this.throwFieldList.push([]);
            this.dataThrowList.push([]);
            for (let j = 0; j < 8; j++) {
                let throwPillField = document.createElement("div");
                throwPillField.classList.add("throwPillField");
                throwPillColumn.appendChild(throwPillField);
                this.throwFieldList[i].push(throwPillField);
                this.dataThrowList[i].push(0);
            }
            throwPillDiv.appendChild(throwPillColumn);
        }
        this.arena.appendChild(throwPillDiv);

        this.arena.appendChild(arenaGame);
        this.mainDiv.appendChild(this.arena);
        document.body.appendChild(this.mainDiv);

        let topScoreDiv = document.createElement("div");
        topScoreDiv.id = "topScoreDiv";
        createDefaultImg(topScoreDiv, this.scoreImgObj.topScoreImg, 7)
        this.arena.appendChild(topScoreDiv);

        let actualScoreDiv = document.createElement("div");
        actualScoreDiv.id = "actualScoreDiv";
        createDefaultImg(actualScoreDiv, this.scoreImgObj.actualScoreImg, 7)
        this.arena.appendChild(actualScoreDiv);

        let levelDiv = document.createElement("div");
        levelDiv.id = "levelDiv";
        createDefaultImg(levelDiv, this.playInfoImgObj.lvl, 2);
        this.arena.appendChild(levelDiv);

        this.speedDiv = document.createElement("div");
        this.speedDiv.id = "speedDiv";
        this.speedDiv.style.backgroundImage = `url('./img/${this.speedNameList[this.speed]}.png')`
        this.arena.appendChild(this.speedDiv);

        let virusAmountDiv = document.createElement("div");
        virusAmountDiv.id = "virusAmountDiv";
        createDefaultImg(virusAmountDiv, this.playInfoImgObj.virusAmount, 2);
        this.arena.appendChild(virusAmountDiv);

        function createDefaultImg(targetDiv, targetList, count) {
            for (let i = 0; i < count; i++) {
                let img = document.createElement("img");
                img.src = "./img/cyfry/0.png";
                targetList.push(img);
                targetDiv.appendChild(img);
            }
        }

        this.Movement();
        this.CreatePillToThrow();
        this.StartGame();

    }

    Movement() {
        let neededKeys = [
            { keys: ["KeyA", "ArrowLeft"], task: null, pressed: false, fun: () => { this.MovePillHorizontaly(-1) } },
            { keys: ["KeyD", "ArrowRight"], task: null, pressed: false, fun: () => { this.MovePillHorizontaly(1) } },
            { keys: ["KeyW", "ArrowUp"], task: null, pressed: false, fun: () => { this.RotatePill(-1) } },
            { keys: ["ShiftLeft", "ShiftRight"], task: null, pressed: false, fun: () => { this.RotatePill(1) } },
            { keys: ["KeyS", "ArrowDown"], task: null, pressed: false, fun: () => { this.FastPillFall() } }
        ]

        window.addEventListener("keydown", (e) => {
            if (this.menu.menuDisplay == false && this.titleScreen.displayTitle == false) {
                if (e.code.includes("Arrow") || e.code.includes("Space")) {
                    e.preventDefault();
                }
                if (e.code == "Space" && game.pressedSpace == false) {
                    this.pressedSpace = true;
                    this.LvlSelector();
                }
                neededKeys.forEach((element) => {
                    if (element.keys.includes(e.code)) {
                        if (element.pressed == false && element.task == null) {
                            element.pressed = true;
                            element.fun();
                            element.task = setInterval((fun) => {
                                fun();
                            }, 150, element.fun)
                        }
                    }
                })
            }
        })

        document.body.addEventListener("keyup", (e) => {
            if (this.menu.menuDisplay == false && this.titleScreen.displayTitle == false) {
                e.preventDefault();
                neededKeys.forEach((element) => {
                    if (element.keys.includes(e.code)) {
                        if (element.pressed == true) {
                            if (element.task != null) {
                                clearInterval(element.task);
                            }
                            element.task = null
                            element.pressed = false;
                        }
                    }
                })
            }
        })
    }

    PreloadData() {
        let singleNames = ["go_dr", "go", "sc", "background", "arrow", "menu/virusLevel", "menu/speed", "menu/music", "menu/music_off", "menu/music_fever", "menu/music_chill"]
        for (let i = 0; i < singleNames.length; i++) {
            let img = document.createElement("img");
            img.src = `./img/${singleNames[i]}.png`
            this.preloadedImgTable.push(img)
        }
        for (let i = 0; i < 10; i++) {
            let img = document.createElement("img");
            img.src = `./img/cyfry/${i}.png`
            this.preloadedImgTable.push(img);
        }
        let directions = ["dot", "down", "left", "up", "right", "o", "x"]
        for (let i = 0; i < this.colorList.length; i++) {
            for (let j = 0; j < directions.length; j++) {
                let img = document.createElement("img");
                img.src = `./img/${this.colorList[i]}_${directions[j]}.png`
                this.preloadedImgTable.push(img)
            }
        }
        for (let i = 0; i < this.colorList.length; i++) {
            let img = document.createElement("img");
            img.src = `./img/covid_${this.colorList[i]}.png`
            this.preloadedImgTable.push(img)
        }
        for (let i = 0; i < this.colorList.length; i++) {
            for (let j = 1; j <= 6; j++) {
                let img = document.createElement("img");
                img.src = `./img/lupa/${this.colorList[i]}/${j}.png`
                this.preloadedImgTable.push(img)
            }
        }
        let armDirect = { down: 2, middle: 4, up: 3 }
        for (let i = 0; i < Object.keys(armDirect).length; i++) {
            for (let j = 1; j <= armDirect[Object.keys(armDirect)[i]]; j++) {
                let img = document.createElement("img");
                img.src = `./img/hands/${Object.keys(armDirect)[i]}_${j}.png`
                this.preloadedImgTable.push(img)
            }
        }
        for (let i = 0; i < this.speedNameList.length; i++) {
            let img = document.createElement("img");
            img.src = `./img/${this.speedNameList[i]}.png`
            this.preloadedImgTable.push(img)
        }
        let musicTable = ["TitleTheme", "Chill", "Fever", "GameConfiguration", "GameOver", "StageComplete"]
        for (let i = 0; i < musicTable.length; i++) {
            let source = document.createElement("source");
            source.src = `./music/Dr-Mario-${musicTable[i]}.mp3`;
            this.preloadedMusicTable.push(source);
        }
    }

    StartGame() {
        switch (this.music) {
            case 0: {
                this.audioDiv.src = ""
                break;
            }
            case 1: {
                this.audioDiv.src = "./music/Dr-Mario-Fever.mp3"
                break;
            }
            case 2: {
                this.audioDiv.src = "./music/Dr-Mario-Chill.mp3"
                break;
            }
            default: {
                break;
            }
        }

        let emptyFieldsTable = [];
        for (let i = 0; i < this.fieldList.length; i++) {
            for (let j = 0; j < this.fieldList[i].length; j++) {
                if (j * this.fieldList.length + i >= 48) {
                    emptyFieldsTable.push(j * this.fieldList.length + i)
                }
            }
        }
        for (let i = 0; i < this.virusCount; i++) {
            let indexPos = Math.floor(Math.random() * emptyFieldsTable.length);
            let pos = [emptyFieldsTable[indexPos] % this.fieldList.length, (emptyFieldsTable[indexPos] - emptyFieldsTable[indexPos] % this.fieldList.length) / this.fieldList.length];
            let virus = new Virus(this.colorList[i % this.colorList.length], pos)
            this.virusCounterObject[this.colorList[i % this.colorList.length]]++;
            this.virusCounterObject.all++;
            virus.CreateAndBuildVirus();
            emptyFieldsTable.splice(indexPos, 1);
        }
        this.arena.style.backgroundColor = this.backgroundColorList[this.lvl % 5];
        if (window.localStorage.getItem("DrMarioTopScore") == null) {
            window.localStorage.setItem("DrMarioTopScore", JSON.stringify(this.topScore));
        } else {
            this.topScore = JSON.parse(window.localStorage.getItem("DrMarioTopScore"));
        }
        this.CreateMagnifierVirus();
        this.GUIDataChange(true);
        setTimeout(() => {
            this.ThrowPill(this.nextPillColor[0], this.nextPillColor[1]);
        }, 300)
    }

    BuildPill() {
        if (this.end == false) {
            let pill = new Pill(this.nextPillColor[0], this.nextPillColor[1], this.id, this.currentPosition);
            pill.CreatePill(this.fieldList, this.pillsList);
            this.id++;
            this.noPill = false;

            this.FallManager();
            this.CreatePillToThrow();
        }
    }

    FallManager(pos = this.currentPosition) {
        let startDate = Date.now();
        let fallingDown = setInterval(() => {
            let endDate = startDate + this.fallSpeed;
            if (Date.now() > endDate) {
                startDate = endDate;
                this.FallPill(pos);
                clearInterval(fallingDown);
            }
        }, 1)
    }

    FallPill(position) {
        let dataBackup = [this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]], this.pillsList[this.currentPosition[1][0]][this.currentPosition[1][1]]];
        let move = false;
        if (position[0][1] + 1 < 17 && position[1][1] + 1 < 17 && this.end == false) {
            if (this.pillsList[position[0][0]][position[0][1] + 1] != 0 || this.pillsList[position[1][0]][position[1][1] + 1] != 0) {
                if (this.pillsList[position[0][0]][position[0][1]].horizontal == false) {
                    let index = 0;
                    if (position[0][1] < position[1][1]) {
                        index = 1
                    }
                    if (this.pillsList[position[index][0]][position[index][1] + 1] == 0) {
                        move = true;
                    }
                }
            } else {
                move = true
            }
        }
        if (move == true) {
            position[0][1] = position[0][1] + 1
            position[1][1] = position[1][1] + 1
            this.fieldList[position[0][0]][position[0][1] - 1].style.removeProperty("background-image");
            this.fieldList[position[1][0]][position[1][1] - 1].style.removeProperty("background-image");
            this.pillsList[position[0][0]][position[0][1] - 1] = 0;
            this.pillsList[position[1][0]][position[1][1] - 1] = 0;
            this.pillsList[position[0][0]][position[0][1]] = dataBackup[0];
            this.pillsList[position[1][0]][position[1][1]] = dataBackup[1];
            this.fieldList[position[0][0]][position[0][1]].style.backgroundImage = `url(./img/${this.pillsList[position[0][0]][position[0][1]].color}_${this.pillsList[position[0][0]][position[0][1]].direct}.png)`;
            this.fieldList[position[1][0]][position[1][1]].style.backgroundImage = `url(./img/${this.pillsList[position[1][0]][position[1][1]].color}_${this.pillsList[position[1][0]][position[1][1]].direct}.png)`;
            this.FallManager();
        } else {
            if (this.fastFall == true) {
                this.fastFall = false;
            }
            this.noPill = true;
            this.pillsList[position[0][0]][position[0][1]].position = this.currentPosition;
            this.pillsList[position[1][0]][position[1][1]].position = this.currentPosition;
            this.currentPosition = JSON.parse(JSON.stringify(this.startPos));
            this.fallSpeed = this.defaultFallSpeed;
            this.CheckToEleminateColor();
        }
    }

    MovePillHorizontaly(direct) {     // -1 => LEFT  ;  1 => RIGHT
        if (this.fastFall == false && this.end == false && this.noPill == false) {
            let move = false;
            if (this.currentPosition[0][0] + direct >= 0 && this.currentPosition[1][0] + direct >= 0 && this.currentPosition[0][0] + direct < 8 && this.currentPosition[1][0] + direct < 8) {
                if (this.pillsList[this.currentPosition[0][0] + direct][this.currentPosition[0][1]] == 0 && this.pillsList[this.currentPosition[1][0] + direct][this.currentPosition[1][1]] == 0) {
                    move = true;
                } else {
                    if (this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]].horizontal == true) {
                        if (direct == -1) {
                            if (this.pillsList[this.currentPosition[0][0] + direct][this.currentPosition[0][1]] == 0) {
                                move = true;
                            }
                        } else {
                            if (this.pillsList[this.currentPosition[1][0] + direct][this.currentPosition[1][1]] == 0) {
                                move = true;
                            }
                        }
                    }
                }
            }
            if (move == true) {
                let dataBackup = [this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]], this.pillsList[this.currentPosition[1][0]][this.currentPosition[1][1]]];
                this.currentPosition[0][0] = this.currentPosition[0][0] + direct;
                this.currentPosition[1][0] = this.currentPosition[1][0] + direct;
                this.fieldList[this.currentPosition[0][0] - direct][this.currentPosition[0][1]].style.removeProperty("background-image");
                this.fieldList[this.currentPosition[1][0] - direct][this.currentPosition[1][1]].style.removeProperty("background-image");
                this.pillsList[this.currentPosition[0][0] - direct][this.currentPosition[0][1]] = 0;
                this.pillsList[this.currentPosition[1][0] - direct][this.currentPosition[1][1]] = 0;
                this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]] = dataBackup[0];
                this.pillsList[this.currentPosition[1][0]][this.currentPosition[1][1]] = dataBackup[1];
                this.fieldList[this.currentPosition[0][0]][this.currentPosition[0][1]].style.backgroundImage = `url(./img/${this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]].color}_${this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]].direct}.png)`;
                this.fieldList[this.currentPosition[1][0]][this.currentPosition[1][1]].style.backgroundImage = `url(./img/${this.pillsList[this.currentPosition[1][0]][this.currentPosition[1][1]].color}_${this.pillsList[this.currentPosition[1][0]][this.currentPosition[1][1]].direct}.png)`;
            }
        }
    }

    FastPillFall() {
        if (this.noPill == false) {
            this.fallSpeed = 25;
            this.fastFall = true;
        }
    }

    RotatePill(direct) {     // -1 => LEWO   ;  1 => PRAWO
        let rotate = false;
        let positionsStart = [this.currentPosition[0], this.currentPosition[1]]
        let positionsNew;
        let newDirections;
        let newHorizontalBool;
        let changeColor = false;
        if (this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]].horizontal == true) {
            if (this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1] - 1] == 0) {
                rotate = true;
                if (direct == -1) {
                    positionsNew = [this.currentPosition[0], [this.currentPosition[0][0], this.currentPosition[0][1] - 1]]
                    newHorizontalBool = false;
                } else {
                    positionsNew = [this.currentPosition[0], [this.currentPosition[0][0], this.currentPosition[0][1] - 1]]
                    newHorizontalBool = false;
                    changeColor = true;
                }
                newDirections = ["down", "up"]
            }
        } else {
            let offset = 0;
            if (this.currentPosition[0][0] == 7) {
                offset = 1;
            }
            if (this.pillsList[this.currentPosition[0][0] + 1 - offset][this.currentPosition[0][1]] == 0 || this.pillsList[this.currentPosition[0][0] + 1 - offset][this.currentPosition[0][1]] == this.pillsList[this.currentPosition[0][0]][this.currentPosition[0][1]]) {
                if (offset == 1) {
                    if (this.pillsList[this.currentPosition[0][0] - 1][this.currentPosition[0][1]] == 0) {
                        rotate = true;
                    }
                } else {
                    rotate = true;
                }
                if (direct == -1) {
                    positionsNew = [[this.currentPosition[0][0] - offset, this.currentPosition[0][1]], [this.currentPosition[0][0] + 1 - offset, this.currentPosition[0][1]]]
                    newHorizontalBool = true;
                    changeColor = true;
                } else {
                    positionsNew = [[this.currentPosition[0][0] - offset, this.currentPosition[0][1]], [this.currentPosition[0][0] + 1 - offset, this.currentPosition[0][1]]]
                    newHorizontalBool = true;
                }
                newDirections = ["left", "right"]
            }
        }

        if (rotate == true && this.fastFall == false && this.end == false && this.noPill == false) {
            let dataBackup = [this.pillsList[positionsStart[0][0]][positionsStart[0][1]], this.pillsList[positionsStart[1][0]][positionsStart[1][1]]]
            this.pillsList[positionsStart[1][0]][positionsStart[1][1]] = 0;
            this.pillsList[positionsStart[0][0]][positionsStart[0][1]] = 0;
            if (changeColor == false) {
                this.pillsList[positionsNew[0][0]][positionsNew[0][1]] = dataBackup[0];
                this.pillsList[positionsNew[1][0]][positionsNew[1][1]] = dataBackup[1];
            } else {
                this.pillsList[positionsNew[0][0]][positionsNew[0][1]] = dataBackup[1];
                this.pillsList[positionsNew[1][0]][positionsNew[1][1]] = dataBackup[0];
            }
            this.pillsList[positionsNew[0][0]][positionsNew[0][1]].direct = newDirections[0];
            this.pillsList[positionsNew[1][0]][positionsNew[1][1]].direct = newDirections[1];
            this.pillsList[positionsNew[0][0]][positionsNew[0][1]].horizontal = newHorizontalBool;
            this.pillsList[positionsNew[1][0]][positionsNew[1][1]].horizontal = newHorizontalBool;
            this.fieldList[positionsStart[0][0]][positionsStart[0][1]].style.removeProperty("background-image");
            this.fieldList[positionsStart[1][0]][positionsStart[1][1]].style.removeProperty("background-image");
            this.fieldList[positionsNew[0][0]][positionsNew[0][1]].style.backgroundImage = `url(./img/${this.pillsList[positionsNew[0][0]][positionsNew[0][1]].color}_${this.pillsList[positionsNew[0][0]][positionsNew[0][1]].direct}.png)`;
            this.fieldList[positionsNew[1][0]][positionsNew[1][1]].style.backgroundImage = `url(./img/${this.pillsList[positionsNew[1][0]][positionsNew[1][1]].color}_${this.pillsList[positionsNew[1][0]][positionsNew[1][1]].direct}.png)`;
            this.currentPosition[0] = positionsNew[0];
            this.currentPosition[1] = positionsNew[1];
        }
    }

    CheckToEleminateColor() {
        this.tableToDestroy = [];
        let dataTable = [];
        let colorCounter = 0;
        let pillFound = false;
        for (let i = this.pillsList[0].length - 1; i >= 0; i--) {
            dataTable = [];
            colorCounter = 0;
            pillFound = false;
            for (let j = 0; j < this.pillsList.length; j++) {
                if (this.pillsList[j][i] != 0) {
                    if (this.pillsList[j][i].type == "pill") {
                        pillFound = true;
                    }
                    if (j == 0) {
                        colorCounter++;
                        dataTable.push([j, i]);
                    } else {
                        if (this.pillsList[j][i].color == this.pillsList[j - 1][i].color) {
                            colorCounter++;
                            dataTable.push([j, i])
                        } else {
                            if (colorCounter >= 4 && pillFound) {
                                addToMainDestroyTable(dataTable, this.tableToDestroy)
                            }
                            if (this.pillsList[j][i].type == "pill") {
                                pillFound = true;
                            } else {
                                pillFound = false;
                            }
                            colorCounter = 1;
                            dataTable = [[j, i]];
                        }
                    }
                } else {
                    if (colorCounter >= 4 && pillFound) {
                        addToMainDestroyTable(dataTable, this.tableToDestroy)
                    }
                    pillFound = false;
                    colorCounter = 0;
                    dataTable = [];
                }
                if (j == 7) {
                    if (colorCounter >= 4 && pillFound) {
                        addToMainDestroyTable(dataTable, this.tableToDestroy)
                    }
                }
            }
        }
        for (let i = 0; i < this.pillsList.length; i++) {
            dataTable = [];
            colorCounter = 0;
            pillFound = false;
            for (let j = this.pillsList[0].length - 1; j >= 0; j--) {
                if (this.pillsList[i][j] != 0) {
                    if (this.pillsList[i][j].type == "pill") {
                        pillFound = true;
                    }
                    if (j == this.pillsList[0].length - 1) {
                        colorCounter++;
                        dataTable.push([i, j]);
                    } else {
                        if (this.pillsList[i][j].color == this.pillsList[i][j + 1].color) {
                            colorCounter++;
                            dataTable.push([i, j])
                        } else {
                            if (colorCounter >= 4 && pillFound) {
                                addToMainDestroyTable(dataTable, this.tableToDestroy)
                            }
                            if (this.pillsList[i][j].type == "pill") {
                                pillFound = true;
                            } else {
                                pillFound = false;
                            }
                            colorCounter = 1;
                            dataTable = [[i, j]];
                        }
                    }
                } else {
                    if (colorCounter >= 4 && pillFound) {
                        addToMainDestroyTable(dataTable, this.tableToDestroy)
                    }
                    pillFound = false;
                    colorCounter = 0;
                    dataTable = [];
                }
                if (j == 0) {
                    if (colorCounter >= 4 && pillFound) {
                        addToMainDestroyTable(dataTable, this.tableToDestroy)
                    }
                }
            }
        }
        function addToMainDestroyTable(data, mainTable) {
            data.forEach(e => {
                if (JSON.stringify(mainTable).includes(JSON.stringify(e)) == false) {
                    mainTable.push(e)
                }
            })
        }
        this.DestroyPillsAndVirus();
    }

    DestroyPillsAndVirus() {
        let idList = []
        if (this.tableToDestroy.length > 0) {
            for (let i = 0; i < this.tableToDestroy.length; i++) {
                let indexes = [this.tableToDestroy[i][0], this.tableToDestroy[i][1]];
                if (idList.includes(this.pillsList[indexes[0]][indexes[1]].id) == false && this.pillsList[indexes[0]][indexes[1]].type == "pill") {
                    idList.push(this.pillsList[indexes[0]][indexes[1]].id)
                } else {
                    if (this.pillsList[indexes[0]][indexes[1]].id != undefined) {
                        idList.splice(idList.indexOf(this.pillsList[indexes[0]][indexes[1]].id), 1)
                    }
                }
                if (this.pillsList[indexes[0]][indexes[1]].type == "pill") {
                    this.fieldList[indexes[0]][indexes[1]].style.backgroundImage = `url("./img/${this.pillsList[indexes[0]][indexes[1]].color}_o.png")`;
                } else {
                    this.virusCounterObject.all--;
                    this.virusCounterObject[this.pillsList[indexes[0]][indexes[1]].color]--;
                    this.actualScore = this.actualScore + 100;
                    this.magnifierVirusList.forEach((e, i) => {
                        e.move = false
                        if (e.color == this.pillsList[indexes[0]][indexes[1]].color) {
                            e.dedAnimFrames = 10;
                            let remove = false;
                            if (this.virusCounterObject[e.color] == 0) {
                                remove = true;
                            }
                            setTimeout(() => {
                                // @ts-ignore
                                if (remove == true && Object.values(this.innerMagniferForImg.children).includes(e.ref)) {
                                    clearInterval(e.tasks.changeImg)
                                    this.innerMagniferForImg.removeChild(e.ref);
                                    this.magnifierVirusList.splice(i, 1);
                                }
                            }, 3000)
                        }
                        if (this.magnifierVirusTimeout[i] != null) {
                            clearTimeout(this.magnifierVirusTimeout[i]);
                        }
                        this.magnifierVirusTimeout[i] = setTimeout(() => {
                            e.imgIndex = 2;
                            e.imgIndexIncreasing = true;
                            e.move = true
                            this.magnifierVirusTimeout[i] = null
                        }, 3000)
                    })
                    this.fieldList[indexes[0]][indexes[1]].style.backgroundImage = `url("./img/${this.pillsList[indexes[0]][indexes[1]].color}_x.png")`;
                }
                this.pillsList[indexes[0]][indexes[1]] = 0;
                this.firstFallAfterDestroy = true;
                setTimeout(() => {
                    this.fieldList[indexes[0]][indexes[1]].style.removeProperty("background-image");
                }, this.destroyAnimSpeed)
            }
            idList.sort(function (a, b) {
                return a - b;
            });
            for (let i = 0; i < this.pillsList.length; i++) {
                for (let j = 0; j < this.pillsList[i].length; j++) {
                    if (this.pillsList[i][j] != 0) {
                        if (idList.includes(this.pillsList[i][j].id)) {
                            this.pillsList[i][j].direct = "dot";
                            this.pillsList[i][j].position = [[i, j]]
                            this.fieldList[i][j].style.backgroundImage = `url("./img/${this.pillsList[i][j].color}_dot.png")`;
                            idList.splice(idList.indexOf(this.pillsList[i][j].id), 1);
                        }
                    }
                }
            }
            this.tableToDestroy = [];
            if (this.firstFallAfterDestroy == true) {
                setTimeout(() => {
                    this.firstFallAfterDestroy = false;
                    this.GravityDetect();
                }, this.destroyAnimSpeed)
            } else {
                this.GravityDetect();
            }
        } else {
            this.GUIDataChange();
            setTimeout(() => {
                this.ThrowPill(this.nextPillColor[0], this.nextPillColor[1]);
            }, 500)
        }
    }

    GravityDetect() {
        let singleToFall = [];
        let duoToFall = []
        let tempPos = [];
        for (let i = this.fieldList[0].length - 2; i >= 0; i--) {
            for (let j = 0; j < this.fieldList.length; j++) {
                if (this.pillsList[j][i] != 0) {
                    if (this.pillsList[j][i].type == "pill") {
                        if (this.pillsList[j][i + 1] == 0 || JSON.stringify(singleToFall).includes(JSON.stringify([j, i + 1])) || JSON.stringify(duoToFall).includes(JSON.stringify([j, i + 1])) || (this.pillsList[j][i].horizontal == false && JSON.stringify(tempPos).includes(this.pillsList[j][i].position[0]))) {
                            if (this.pillsList[j][i].direct == "dot") {
                                singleToFall.push([[j, i]]);
                            } else {
                                if (JSON.stringify(this.pillsList[j][i].position[0]) == JSON.stringify([j, i])) {
                                    tempPos.push([j, i])
                                } else {
                                    if (JSON.stringify(tempPos).includes(JSON.stringify(this.pillsList[j][i].position[0]))) {
                                        duoToFall.push(this.pillsList[j][i].position);
                                        tempPos.splice(JSON.stringify(tempPos).indexOf(JSON.stringify(this.pillsList[j][i].position[0])), 1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (singleToFall.length > 0 || duoToFall.length > 0) {
            this.GravityFall(singleToFall, duoToFall);
        } else {
            this.firstFallAfterDestroy = true;
            this.CheckToEleminateColor();
        }
    }

    GravityFall(singleList, duoList) {
        singleList.forEach((e, i) => {
            if (i == singleList.length - 1) {
                GravityFall(e, this.gravityFallSpeed, true);
            } else {
                GravityFall(e, this.gravityFallSpeed);
            }
        })
        duoList.forEach((e, i) => {
            if (singleList.length == 0 && i == duoList.length - 1) {
                GravityFall(e, this.gravityFallSpeed, true);
            } else {
                GravityFall(e, this.gravityFallSpeed);
            }
        })
        let gravityAgain = () => {
            if (this.fallSpeed < 5000) {
                this.GravityDetect();
            }
        }

        function GravityFall(position, speed, last = false) {
            let startDate = Date.now();
            let gravityF = setInterval(() => {
                if (Date.now() >= startDate + speed) {
                    startDate = startDate + speed;
                    let dataBackup;
                    let move = false;
                    if (position.length > 1) {
                        dataBackup = [game.pillsList[position[0][0]][position[0][1]], game.pillsList[position[1][0]][position[1][1]]];
                    } else {
                        dataBackup = [game.pillsList[position[0][0]][position[0][1]]]
                    }
                    if (position[0][1] + 1 < 17) {
                        if (position.length > 1) {
                            if (game.pillsList[position[0][0]][position[0][1] + 1] != 0 || game.pillsList[position[1][0]][position[1][1] + 1] != 0) {
                                if (game.pillsList[position[0][0]][position[0][1]].horizontal == false) {
                                    let index = 0;
                                    if (position[0][1] < position[1][1]) {
                                        index = 1
                                    }
                                    if (game.pillsList[position[index][0]][position[index][1] + 1] == 0) {
                                        move = true;
                                    }
                                }
                            } else {
                                move = true
                            }
                        } else {
                            if (game.pillsList[position[0][0]][position[0][1] + 1] == 0) {
                                move = true;
                            }
                        }
                    }
                    if (move == true) {
                        position[0][1] = position[0][1] + 1
                        game.fieldList[position[0][0]][position[0][1] - 1].style.removeProperty("background-image");
                        game.pillsList[position[0][0]][position[0][1] - 1] = 0;
                        game.pillsList[position[0][0]][position[0][1]] = dataBackup[0];
                        if (game.pillsList[position[0][0]][position[0][1]].color != undefined) {
                            game.fieldList[position[0][0]][position[0][1]].style.backgroundImage = `url(./img/${game.pillsList[position[0][0]][position[0][1]].color}_${game.pillsList[position[0][0]][position[0][1]].direct}.png)`;
                        }
                        if (position.length > 1) {
                            position[1][1] = position[1][1] + 1
                            game.fieldList[position[1][0]][position[1][1] - 1].style.removeProperty("background-image");
                            game.pillsList[position[1][0]][position[1][1] - 1] = 0;
                            game.pillsList[position[1][0]][position[1][1]] = dataBackup[1];
                            if (game.pillsList[position[1][0]][position[1][1]].color != undefined) {
                                game.fieldList[position[1][0]][position[1][1]].style.backgroundImage = `url(./img/${game.pillsList[position[1][0]][position[1][1]].color}_${game.pillsList[position[1][0]][position[1][1]].direct}.png)`;
                            }
                        }
                        if (position.length > 1) {
                            if (game.pillsList[position[1][0]][position[1][1]] != 0) game.pillsList[position[1][0]][position[1][1]].position = position;
                            if (game.pillsList[position[0][0]][position[0][1]] != 0) game.pillsList[position[0][0]][position[0][1]].position = position;
                        } else {
                            if (game.pillsList[position[0][0]][position[0][1]] != 0) {
                                game.pillsList[position[0][0]][position[0][1]].position = [position[0]];
                            }
                        }
                    } else {
                        clearInterval(gravityF);
                        if (last == true) {
                            gravityAgain();
                        }
                    }
                }
            }, game.gravitySpeed)
        }
    }

    GUIDataChange(first = false) {
        let updateImg = (value, imgList, len) => {
            let offset = len - JSON.stringify(value).length;
            for (let i = 0; i < len; i++) {
                if (i < offset) {
                    imgList[i].src = "./img/cyfry/0.png";
                } else {
                    imgList[i].src = `./img/cyfry/${JSON.stringify(value)[i - offset]}.png`
                }
            }
        }
        let creteAlert = (status) => {
            let bonus = 0
            if (status == "sc") {
                bonus = 2;
            }
            let width = 14 + (2 * bonus);
            let left = 14 - bonus;
            this.alert = document.createElement("div");
            this.alert.id = "alertBackground";
            this.alert.style.backgroundColor = this.backgroundColorList[this.lvl % 5];
            this.alert.style.width = width * 24 + "px";
            this.alert.style.left = left * 24 + "px";

            let statusImg = document.createElement("img");
            statusImg.id = "statusImg";
            statusImg.src = `./img/${status}.png`

            this.alert.appendChild(statusImg);
            this.arena.appendChild(this.alert);
        }

        if (first == true) {
            updateImg(this.topScore, this.scoreImgObj.topScoreImg, 7);
            updateImg(this.lvl, this.playInfoImgObj.lvl, 2);
        }

        updateImg(this.actualScore, this.scoreImgObj.actualScoreImg, 7);
        updateImg(this.virusCounterObject.all, this.playInfoImgObj.virusAmount, 2);
        if (this.virusCounterObject.all == 0) {
            this.end = true;
            this.winLose.win = true;
            this.magnifierVirusList.forEach((e) => {
                e.move = false;
            })
            this.magnifierVirusList.forEach((e, i) => {
                if (e.dedAnimFrames == 0) {
                    e.dedAnimFrames = 10;
                    setTimeout(() => {
                        // @ts-ignore
                        if (Object.values(this.innerMagniferForImg.children).includes(e.ref)) {
                            clearInterval(e.tasks.changeImg)
                            this.innerMagniferForImg.removeChild(e.ref);
                            this.magnifierVirusList.splice(i, 1);
                        }
                    }, 3000)
                }
            })
            setTimeout(() => {
                if (this.music != 0) {
                    this.audioDiv.src = "./music/Dr-Mario-StageComplete.mp3"
                }
                creteAlert("sc")
                this
                this.canNextLvl = true;
            }, 1000)
        } else if (this.end == true && this.winLose.lose == true) {
            if (this.topScore < this.actualScore) {
                window.localStorage.setItem("DrMarioTopScore", JSON.stringify(this.actualScore));
                updateImg(this.topScore, this.scoreImgObj.topScoreImg, 7);
            }
            this.actualScore = 0;
            setTimeout(() => {
                if (this.music != 0) {
                    this.audioDiv.src = "./music/Dr-Mario-GameOver.mp3"
                }
                creteAlert("go")
                this.arena.appendChild(this.marioPlaceHolder);
                this.canNextLvl = true;
                this.magnifierVirusList.forEach((e) => {
                    e.lose = true;
                })
            }, 1000)
        }
    }

    LvlSelector() {
        if (this.end == true && this.canNextLvl == true) {
            if (this.winLose.lose == true) {
                this.lvl = 0;
            } else if (this.winLose.win == true) {
                if (this.lvl < 99) {
                    this.lvl++;
                }
            }
            this.firstFallAfterDestroy = true;
            this.virusCounterObject = { bl: 0, yl: 0, br: 0, all: 0 };
            this.end = false;
            this.id = 0;
            this.canNextLvl = false;
            if (this.lvl <= 20) {
                this.virusCount = (4 * this.lvl) + 4;
            } else {
                this.virusCount = 84;
            }
            for (let i = 0; i < this.pillsList.length; i++) {
                for (let j = 0; j < this.pillsList[i].length; j++) {
                    if (this.pillsList[i][j] != 0 && this.pillsList[i][j] != 1) {
                        this.pillsList[i][j] = 0;
                        this.fieldList[i][j].style.removeProperty("background-image");
                    }
                }
            }
            for (let i = 0; i < this.magnifierVirusList.length; i++) {
                // @ts-ignore
                if (Object.values(this.innerMagniferForImg.children).includes(this.magnifierVirusList[i].ref)) {
                    this.innerMagniferForImg.removeChild(this.magnifierVirusList[i].ref)
                }
            }
            this.magnifierVirusList = [];
            // @ts-ignore
            if (Object.values(this.arena.children).includes(this.alert)) {
                this.arena.removeChild(this.alert);
            }
            if (this.winLose.lose == true) {
                this.arena.removeChild(this.marioPlaceHolder);
            }
            if (this.winLose.lose == true) {
                this.winLose = { win: false, lose: false };
                this.titleScreen.displayTitle = true;
                this.titleScreen.mainDivTitleScreen.style.display = "block";
                this.titleScreen.InfoRoulette(this.titleScreen.roulettImg)
                this.mainDiv.style.display = "none";
                this.audioDiv.src = "./music/Dr-Mario-TitleTheme.mp3"
            } else {
                this.winLose = { win: false, lose: false };
                this.StartGame();
            }
        }
    }

    CreateMagnifierVirus() {
        for (let i = 0; i < 3; i++) {
            let magVirus = new MagnifierVirus(this.colorList[i], i)
            let virus = magVirus.CreateAndBuildMagnifierVirus();
            this.magnifierVirusList.push(virus)
        }
        let baseImgIndex = 0;
    }

    CreatePillToThrow() {
        let startPosThrowPill = [[10, 3], [11, 3]]
        if (this.end == false) {
            let color1 = this.colorList[Math.floor(Math.random() * this.colorList.length)];
            let color2 = this.colorList[Math.floor(Math.random() * this.colorList.length)];
            this.nextPillColor = [color1, color2];
            let pill = new Pill(color1, color2, this.id, startPosThrowPill);
            pill.CreatePill(this.throwFieldList, this.dataThrowList);
        }
        for (let i = 0; i < this.marioArmPos[this.marioArmCurrentStatus].length; i++) {
            this.throwFieldList[this.marioArmPos[this.marioArmCurrentStatus][i][0]][this.marioArmPos[this.marioArmCurrentStatus][i][1]].style.backgroundImage = `url("./img/hands/${this.marioArmGraph[this.marioArmCurrentStatus]}_${i + 1}.png")`
        }
    }

    ThrowPill(color1, color2) {
        let animPos = [[10, 3], [9, 2], [8, 1], [7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 2], [0, 2], [0, 3], [0, 4], [0, 5]];
        let animIndex = 0;
        let animHorizontal = true;
        let position = animPos[0];
        let graphics = ["left", "right", "down", "up"]

        if (this.pillsList[this.startPos[0][0]][this.startPos[0][1]] == 0 && this.pillsList[this.startPos[1][0]][this.startPos[1][1]] == 0) {
            if (this.end == false) {
                let throwAnim = setInterval(() => {
                    let indexes = [0, 1];
                    if (animHorizontal == false) {
                        indexes = [2, 3]
                    }
                    this.throwFieldList[position[0]][position[1]].style.removeProperty("background-image");
                    if (animHorizontal == false || position[0] == 0) {
                        this.throwFieldList[position[0] + 1][position[1]].style.removeProperty("background-image");
                    } else {
                        this.throwFieldList[position[0]][position[1] - 1].style.removeProperty("background-image");
                    }
                    if (animIndex == 14) {
                        animIndex = 0;
                        for (let i = 0; i < this.marioArmPos[this.marioArmCurrentStatus].length; i++) {
                            this.throwFieldList[this.marioArmPos[this.marioArmCurrentStatus][i][0]][this.marioArmPos[this.marioArmCurrentStatus][i][1]].style.removeProperty("background-image");
                        }
                        this.marioArmCurrentStatus = "start";
                        this.BuildPill();
                        clearInterval(throwAnim);
                    } else {
                        position = animPos[animIndex];
                        this.throwFieldList[position[0]][position[1]].style.backgroundImage = `url("./img/${color1}_${graphics[indexes[0]]}.png")`
                        if (animHorizontal == true) {
                            this.throwFieldList[position[0] + 1][position[1]].style.backgroundImage = `url("./img/${color2}_${graphics[indexes[1]]}.png")`
                        } else {
                            this.throwFieldList[position[0]][position[1] - 1].style.backgroundImage = `url("./img/${color2}_${graphics[indexes[1]]}.png")`
                        }
                        if (position[0] > 0) {
                            if (animHorizontal == true) {
                                animHorizontal = false;
                            } else {
                                animHorizontal = true;
                                animIndex++;
                            }
                        } else {
                            animHorizontal = true;
                            animIndex++;
                        }
                    }
                    if (animIndex == 2) {
                        for (let i = 0; i < this.marioArmPos[this.marioArmCurrentStatus].length; i++) {
                            this.throwFieldList[this.marioArmPos[this.marioArmCurrentStatus][i][0]][this.marioArmPos[this.marioArmCurrentStatus][i][1]].style.removeProperty("background-image");
                        }
                        this.marioArmCurrentStatus = "middle";
                    } else if (animIndex == 4) {
                        for (let i = 0; i < this.marioArmPos[this.marioArmCurrentStatus].length; i++) {
                            this.throwFieldList[this.marioArmPos[this.marioArmCurrentStatus][i][0]][this.marioArmPos[this.marioArmCurrentStatus][i][1]].style.removeProperty("background-image");
                        }
                        this.marioArmCurrentStatus = "end";
                    }
                    for (let i = 0; i < this.marioArmPos[this.marioArmCurrentStatus].length; i++) {
                        this.throwFieldList[this.marioArmPos[this.marioArmCurrentStatus][i][0]][this.marioArmPos[this.marioArmCurrentStatus][i][1]].style.backgroundImage = `url("./img/hands/${this.marioArmGraph[this.marioArmCurrentStatus]}_${i + 1}.png")`
                    }
                }, this.throwFillSpeed)
            }
        } else {
            this.end = true;
            this.winLose.lose = true;
            this.GUIDataChange();
        }
    }
}

class Pill {

    constructor(firstColor, secondColor, id, position) {
        this.firstColor = firstColor;
        this.secondColor = secondColor;
        this.id = id;
        this.position = position;
        this.horizontal = true;
    }

    CreatePill(divList, dataList) {
        divList[this.position[0][0]][this.position[0][1]].style.backgroundImage = `url('./img/${this.firstColor}_left.png')`;
        divList[this.position[1][0]][this.position[1][1]].style.backgroundImage = `url('./img/${this.secondColor}_right.png')`;
        dataList[this.position[0][0]][this.position[0][1]] = { type: "pill", id: this.id, color: this.firstColor, horizontal: this.horizontal, direct: "left", position: "start" };
        dataList[this.position[1][0]][this.position[1][1]] = { type: "pill", id: this.id, color: this.secondColor, horizontal: this.horizontal, direct: "right", position: "start" };
    }
}

class Virus {

    constructor(color, position) {
        this.color = color;
        this.position = position;
        this.animId = 1;
    }

    CreateAndBuildVirus() {
        game.fieldList[this.position[0]][this.position[1]].style.backgroundImage = `url('./img/covid_${this.color}.png')`;
        game.pillsList[this.position[0]][this.position[1]] = { type: "virus", color: this.color, alive: true };
    }
}

class MagnifierVirus {

    constructor(color, startIndex) {
        this.color = color;
        this.startIndex = startIndex;
        this.indexes = [0, 6, 12]
        this.magnifierVirusPosition = [[0, 3], [0, 4], [1, 5], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 5], [6, 4], [6, 3], [6, 2], [5, 1], [4, 1], [3, 1], [2, 1], [1, 2], [0, 3]];
    }

    CreateAndBuildMagnifierVirus() {
        let magnifierVirus = document.createElement("img");
        magnifierVirus.classList.add("magnifierVirus");
        let virusMagObj = {
            ref: magnifierVirus,
            color: this.color,
            index: this.indexes[this.startIndex],
            staticImgIndex: 0,
            imgIndex: 0,
            imgIndexIncreasing: true,
            move: true,
            lose: false,
            dedAnimFrames: 0,
            tasks: { changePosition: null, changeImg: null },
            pos: this.magnifierVirusPosition[this.indexes[this.startIndex]]
        };
        game.innerMagniferForImg.appendChild(magnifierVirus);
        magnifierVirus.style.left = this.magnifierVirusPosition[this.indexes[this.startIndex]][0] * 24 + "px";
        magnifierVirus.style.top = this.magnifierVirusPosition[this.indexes[this.startIndex]][1] * 24 + "px";
        changeVirusPos(virusMagObj, this.magnifierVirusPosition);
        changeVirusImg(virusMagObj);
        return virusMagObj;

        function changeVirusPos(virusObj, positionList, lose) {
            virusObj.tasks.changePosition = setInterval(() => {
                if (virusObj.move == true && virusObj.lose == false) {
                    virusObj.index++;
                    if (virusObj.index > 17) {
                        virusObj.index = 0;
                    }
                    virusObj.ref.style.left = positionList[virusObj.index][0] * 24 + "px";
                    virusObj.ref.style.top = positionList[virusObj.index][1] * 24 + "px";
                    virusObj.pos = positionList[virusObj.index];
                }
            }, 1200)
        }

        function changeVirusImg(virusObj) {
            virusObj.tasks.changeImg = setInterval(() => {
                if (virusObj.imgIndexIncreasing == true) {
                    virusObj.staticImgIndex++;
                } else {
                    virusObj.staticImgIndex--;
                }
                if (virusObj.staticImgIndex == 3) {
                    virusObj.imgIndexIncreasing = false;
                } else if (virusObj.staticImgIndex == 1) {
                    virusObj.imgIndexIncreasing = true;
                } else if (virusObj.staticImgIndex > 3) {
                    virusObj.staticImgIndex = 1;
                    virusObj.imgIndexIncreasing = true;
                }
                if (virusObj.lose == false && virusObj.dedAnimFrames == 0) {
                    virusObj.imgIndex = virusObj.staticImgIndex;
                } else if (virusObj.dedAnimFrames > 0) {
                    if (virusObj.imgIndex == 5) {
                        virusObj.imgIndex = 6;
                    } else {
                        virusObj.imgIndex = 5
                    }
                    virusObj.dedAnimFrames--;
                } else if (virusObj.lose == true) {
                    if (virusObj.imgIndex == 2) {
                        virusObj.imgIndex = 4;
                    } else {
                        virusObj.imgIndex = 2
                    }
                }
                virusObj.ref.src = `./img/lupa/${virusObj.color}/${virusObj.imgIndex}.png`
            }, 300)
        }
    }
}

class Menu {

    constructor() {
        this.menuDisplay = true
        this.mainDivMenu = null
        this.level = 0;
        this.speed = 0;
        this.music = 0;

        this.section = 0;
        this.sectionsList = [];
    }


    CreateMenuInterface() {
        this.mainDivMenu = document.createElement("div");
        this.mainDivMenu.id = "mainDivMenu";

        let menuBack = document.createElement("div");
        menuBack.id = "menuBack";

        let menuMain = document.createElement("div");
        menuMain.style.backgroundImage = "url('./img/menu/background.png')"
        menuMain.id = "menuMain";

        let virusLevelSection = document.createElement("div");
        virusLevelSection.id = "virusLevelSection";
        menuMain.append(virusLevelSection);

        let lvlSelectArrow = document.createElement("div");
        lvlSelectArrow.id = "lvlSelectArrow";
        lvlSelectArrow.style.top = 24 * 6 + "px";
        lvlSelectArrow.style.left = 24 * 10 + "px";
        menuMain.append(lvlSelectArrow);

        let lvlValue = document.createElement("div");
        lvlValue.id = "lvlValue";

        let lvlImgTable = [];
        for (let i = 0; i < 2; i++) {
            let numDiv = document.createElement("div")
            numDiv.classList.add("numDiv");
            numDiv.style.backgroundImage = "url('./img/cyfry/0.png')"
            lvlImgTable.push(numDiv);
            lvlValue.append(numDiv)
        }
        menuMain.append(lvlValue);

        let speedSection = document.createElement("div");
        speedSection.id = "speedSection";
        speedSection.style.display = "none";
        menuMain.append(speedSection);

        let speedSelectArrow = document.createElement("div");
        speedSelectArrow.id = "speedSelectArrow";
        speedSelectArrow.style.top = 24 * 12 + "px";
        speedSelectArrow.style.left = 24 * 14 + "px";
        menuMain.append(speedSelectArrow)

        let musicSection = document.createElement("div");
        musicSection.id = "musicSection";
        musicSection.style.display = "none";
        menuMain.append(musicSection)

        let musicOff = document.createElement("div");
        musicOff.id = "musicOff"
        let musicFever = document.createElement("div");
        musicFever.id = "musicFever"
        musicFever.style.display = "none";
        let musicChill = document.createElement("div");
        musicChill.id = "musicChill"
        musicChill.style.display = "none";

        menuMain.append(musicOff)
        menuMain.append(musicFever)
        menuMain.append(musicChill)

        menuBack.append(menuMain);
        this.mainDivMenu.append(menuBack);
        document.body.append(this.mainDivMenu);

        this.sectionsList = [
            { divImg: virusLevelSection, items: { arrow: lvlSelectArrow, list: lvlImgTable } },
            { divImg: speedSection, items: speedSelectArrow },
            { divImg: musicSection, items: [musicOff, musicFever, musicChill] }
        ]

        this.Functionality();
    }

    Functionality() {
        let neededKeys = [
            { keys: ["KeyA", "ArrowLeft"], task: null, pressed: false, fun: () => { this.MoveInSectionHorizontally(-1) } },
            { keys: ["KeyD", "ArrowRight"], task: null, pressed: false, fun: () => { this.MoveInSectionHorizontally(1) } },
            { keys: ["KeyW", "ArrowUp"], task: null, pressed: false, fun: () => { this.MoveInMenuVertically(-1) } },
            { keys: ["KeyS", "ArrowDown"], task: null, pressed: false, fun: () => { this.MoveInMenuVertically(1) } }
        ]

        window.addEventListener("keydown", (e) => {
            if (this.menuDisplay) {
                if (e.code.includes("Arrow") || e.code.includes("Space")) {
                    e.preventDefault();
                }
                if (e.code == "Space" && game.pressedSpace == false) {
                    game.pressedSpace = true;
                    this.StartGame();
                }
                neededKeys.forEach((element) => {
                    if (element.keys.includes(e.code)) {
                        if (element.pressed == false && element.task == null) {
                            element.pressed = true;
                            element.fun();
                            element.task = setInterval((fun) => {
                                fun();
                            }, 150, element.fun)
                        }
                    }
                })
            }
        })

        document.body.addEventListener("keyup", (e) => {
            if (this.menuDisplay) {
                e.preventDefault();
                neededKeys.forEach((element) => {
                    if (element.keys.includes(e.code)) {
                        if (element.pressed == true) {
                            if (element.task != null) {
                                clearInterval(element.task);
                            }
                            element.task = null
                            element.pressed = false;
                        }
                    }
                })
            }
        })
    }

    MoveInSectionHorizontally(direct) {
        if (this.section == 0) {
            if (this.level + direct > -1 && this.level + direct < 21) {
                this.level = this.level + direct;
            }
            this.sectionsList[this.section].items.arrow.style.left = 24 * (10 + this.level) + "px"

            this.sectionsList[this.section].items.list[0].style.backgroundImage = `url("./img/cyfry/${Math.floor(this.level / 10)}.png")`
            this.sectionsList[this.section].items.list[1].style.backgroundImage = `url("./img/cyfry/${this.level % 10}.png")`

        } else if (this.section == 1) {
            if (this.speed + direct > -1 && this.speed + direct < 3) {
                this.speed = this.speed + direct;
            }
            this.sectionsList[this.section].items.style.left = 24 * (14 + (this.speed * 6)) + "px"
        } else if (this.section == 2) {
            if (this.music + direct > -1 && this.music + direct < 3) {
                this.sectionsList[this.section].items[this.music].style.display = "none";
                this.music = this.music + direct;
                this.sectionsList[this.section].items[this.music].style.display = "block";
            }
        }
    }

    MoveInMenuVertically(direct) {
        if (this.section + direct > -1 && this.section + direct < 3) {
            this.sectionsList[this.section].divImg.style.display = "none";
            this.section = this.section + direct;
            this.sectionsList[this.section].divImg.style.display = "block";
        }
    }

    StartGame() {
        this.menuDisplay = false
        this.mainDivMenu.style.display = "none";
        if (game.mainDiv != null) {
            game.mainDiv.style.display = "block";
        }
        game.StartGameManager(this.level, this.speed, this.music)
    }
}

class TitleScreen {

    constructor() {
        this.roulettImg = null;
        this.displayTitle = true;
        this.mainDivTitleScreen = null;
    }


    CreateTitleScreen() {
        this.mainDivTitleScreen = document.createElement("div");
        this.mainDivTitleScreen.id = "mainDivTitleScreen";

        let titleBack = document.createElement("div");
        titleBack.id = "titleBack";

        let titleMain = document.createElement("div");
        titleMain.style.backgroundImage = "url('./img/titleScreen/background.png')"
        titleMain.id = "titleMain";

        let titleArrow = document.createElement("div");
        titleArrow.id = "titleArrow";
        titleArrow.style.left = 11 * 24 + "px";
        titleArrow.style.bottom = 7 * 24 + "px";
        titleMain.appendChild(titleArrow);

        let dancingVirus = document.createElement("img");
        dancingVirus.id = "dancingVirus";
        dancingVirus.src = "./img/titleScreen/virus.png"
        titleMain.appendChild(dancingVirus);

        let infoRouletteMain = document.createElement("div");
        infoRouletteMain.id = "infoRouletteMain";

        this.roulettImg = document.createElement("div");
        for (let i = 0; i < 7; i++) {
            let img = document.createElement("img");
            img.src = `./img/titleScreen/roulette_${i}.png`
            this.roulettImg.appendChild(img);
            if (i == 6) {
                let img = document.createElement("img");
                img.src = `./img/titleScreen/roulette_0.png`
                this.roulettImg.appendChild(img);
            }
        }
        this.InfoRoulette(this.roulettImg);
        this.roulettImg.id = "infoRouletteImg";

        infoRouletteMain.appendChild(this.roulettImg);
        titleMain.appendChild(infoRouletteMain);

        titleBack.appendChild(titleMain);
        this.mainDivTitleScreen.appendChild(titleBack);
        document.body.appendChild(this.mainDivTitleScreen);

        window.addEventListener("keydown", (e) => {
            if (this.displayTitle) {
                if (e.code.includes("Arrow") || e.code.includes("Space")) {
                    e.preventDefault();
                }
                if (e.code == "Space" && game.pressedSpace == false) {
                    game.pressedSpace = true;
                    this.GoToConfiguration();
                }
            }
        })
        window.addEventListener("keyup", (e) => {
            if (e.code == "Space") {
                game.play = true
                game.pressedSpace = false;
            }
        })
    }

    InfoRoulette(element) {
        element.style.left = -16 * 24 * 0 + "px";
        let roll = (currentImg) => {
            setTimeout(() => {
                let rollIndex = 0;
                let rollInterval = setInterval(() => {
                    if (rollIndex < 20) {
                        element.style.left = element.offsetLeft - 19 + "px";
                        rollIndex++;
                    } else {
                        element.style.left = -16 * 24 * currentImg + "px";
                        if (currentImg == 7) {
                            element.style.left = -16 * 24 * 0 + "px";
                        }
                        clearInterval(rollInterval)
                    }
                }, 50)
            }, 2000)
        }
        roll(1);
        let imgIndex = 1;
        let rouletteInterval = setInterval(() => {
            if (this.displayTitle == true) {
                if (imgIndex == 7) {
                    imgIndex = 0
                }
                imgIndex++;
                roll(imgIndex);
            } else {
                clearInterval(rouletteInterval);
            }
        }, 3000)
    }

    GoToConfiguration() {
        this.displayTitle = false;
        this.mainDivTitleScreen.style.display = "none";
        if (game.menu != null) {
            game.menu.mainDivMenu.style.display = "block";
            game.menu.menuDisplay = true;
            game.menu.section = 0;
            game.menu.sectionsList.forEach((e, i) => {
                if (i != 0) {
                    e.divImg.style.display = "none"
                } else {
                    e.divImg.style.display = "block"
                }
            })
            game.audioDiv.src = "./music/Dr-Mario-GameConfiguration.mp3";
        } else {
            game.StartMenu();
        }
    }
}