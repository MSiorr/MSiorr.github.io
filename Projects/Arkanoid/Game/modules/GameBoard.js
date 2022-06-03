import Brick from './Brick.js';
import Config from './Config.js';
import ContextMenu from './ContextMenu.js';
import Keyboard from './Keyboard.js';
import PlayerBall from './PlayerBall.js';
import PlayerPalette from './PlayerPalette.js';

export default class GameBoard {
    constructor(container, scale, boardW, boardH) {
        this.container = container;
        this.scale = scale;
        this.boardW = boardW;
        this.boardH = boardH;

        this.imgToLoadCount = 3;
        this.imgLoaded = 0;

        /**
         * @type {Brick[]}
         */
        this.bricksData = [];

        this.gameStart = false;

        this.div = document.createElement("div");
        this.div.id = "gameBoard";

        this.scene = document.createElement("canvas");
        this.scene.width = Config.backgroundStartW * this.scale;
        this.scene.height = Config.backgroundStartH * this.scale;
        this.div.appendChild(this.scene);

        this.container.appendChild(this.div);

        this.contextMenu = new ContextMenu(document.body, this);
        this.keyboard = new Keyboard(window);

        this.playerPosition = { x: ((Config.backgroundStartW * this.scale) / 2) - ((Config.playerPaletteWidth * this.scale) / 2), y: Config.playerPalettePositionY * this.scale }
        this.playerPalette = new PlayerPalette(this.playerPosition.x, this.playerPosition.y, this.scale, this.keyboard);

        this.playerBallStartX = this.playerPalette.posX + (this.playerPalette.endWidth * 0.6);
        this.playerBallStartY = Config.playerBallStartPositionY * this.scale;

        this.playerBall = new PlayerBall(this.playerBallStartX, this.playerBallStartY, this.scale, this.keyboard, this.playerPalette);

        // this.boardBackgroundID = 1;
        this.boardBackgroundID = Math.floor(Math.random() * Config.backgroundsCount);

        this.AddFunctionality();
        this.CreateCTXAndIMG();
    }

    AddFunctionality() {
        /**
         * @param {MouseEvent} e 
         */
        window.oncontextmenu = (e) => {
            if (this.gameStart == false) {
                e.preventDefault();
                this.contextMenu.CreateContextMenu(e.clientX, e.clientY);
                this.contextMenu.mainContextDiv.style.display = "block";
            }
        }

        window.onkeydown = (e) => {
            switch (e.code) {
                case 'Space': {
                    if (this.bricksData.length > 0 && this.playerBall && this.gameStart == false) {
                        this.gameStart = true;
                    } else if (this.playerBall == null && this.gameStart == false) {
                        this.playerBallStartX = this.playerPalette.posX + (this.playerPalette.endWidth * 0.6);
                        this.playerBallStartY = Config.playerBallStartPositionY * this.scale;
                        this.playerBall = new PlayerBall(this.playerBallStartX, this.playerBallStartY, this.scale, this.keyboard, this.playerPalette);
                    } else if (this.gameStart == true) {
                        this.DestroyPlayerBall();
                    }
                }
            }
        }
    }

    CreateCTXAndIMG() {
        this.ctx = this.scene.getContext("2d");
        //@ts-ignore
        this.ctx.webkitImageSmoothingEnabled = false;
        //@ts-ignore
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        this.bricksImg = document.createElement("img");
        this.bricksImg.src = Config.bricksImgLocation;
        this.bricksImg.onload = () => LoadImgStatus.bind(this)();

        this.backgroundImg = document.createElement("img");
        this.backgroundImg.src = Config.backgroundsImgLocation;
        this.backgroundImg.onload = () => LoadImgStatus.bind(this)();

        this.gameElementsImg = document.createElement("img");
        this.gameElementsImg.src = Config.gameElementsImgLocation;
        this.gameElementsImg.onload = () => LoadImgStatus.bind(this)();


        function LoadImgStatus() {
            this.imgLoaded++;
            if (this.imgLoaded == this.imgToLoadCount) {
                this.DrawCTX();
            }
        }
    }

    DestroyPlayerBall() {
        this.playerBall = null;
        this.gameStart = false;
    }

    DrawCTX() {
        this.ctx.clearRect(0, 0, this.scene.width, this.scene.height);

        // DRAW BACKGROUND
        this.DrawCTXBackground();

        // DRAW PIPES SHADOW
        this.DrawCTXPipesShadow();

        // DRAW BRICKS SHADOWS
        this.DrawCTXBricksShadows();

        // DRAW PLAYER BALL SHADOW
        this.DrawCTXPlayerBallShadow();

        // DRAW PLAYER PALETTE SHADOW
        this.DrawCTXPlayerPaletteShadow();

        // DRAW BRICKS
        this.DrawCTXBricks();

        // DRAW PLAYER BALL
        this.DrawCTXPlayerBall();

        // DRAW PLAYER PALETTE
        this.DrawCTXPlayerPalette();

        // DRAW PIPES BORDER
        this.DrawCTXPipesBorder();

        // DRAW SCORE
        this.DrawCTXScore();

        // DRAW HELPERS THINGS
        // this.DrawCTXHelpers();

    }

    DrawCTXBackground() {
        let sxBG = Config.backgroundStartW * (this.boardBackgroundID % Config.backgroundsColumns);
        let syBG = Config.backgroundStartH * Math.floor(this.boardBackgroundID / Config.backgroundsColumns);
        let sWidthBG = Config.backgroundStartW;
        let sHeightBG = Config.backgroundStartH;
        let dxBG = 0;
        let dyBG = 0;
        let dWidthBG = Config.backgroundStartW * this.scale;
        let dHeightBG = Config.backgroundStartH * this.scale;
        this.ctx.beginPath();
        this.ctx.drawImage(this.backgroundImg, sxBG, syBG, sWidthBG, sHeightBG, dxBG, dyBG, dWidthBG, dHeightBG);
        this.ctx.closePath();
    }

    DrawCTXPipesShadow() {
        let xPipeShadowTable = [Config.pipeShadowStartX * this.scale, (Config.pipeShadowStartX + Config.verticalPipeShadowWidth) * this.scale];
        let yPipeShadowTable = [Config.pipeShadowStartY * this.scale, Config.pipeShadowStartY * this.scale];
        let widthPipeShadowTable = [Config.verticalPipeShadowWidth * this.scale, Config.horizontalPipeShadowWidth * this.scale];
        let heightPipeShadowTable = [Config.verticalPipeShadowheight * this.scale, Config.horizontalPipeShadowheight * this.scale];

        for (let i = 0; i < 2; i++) {
            this.ctx.beginPath();
            this.ctx.globalAlpha = Config.shadowAlpha;
            this.ctx.fillStyle = "black";
            this.ctx.rect(xPipeShadowTable[i], yPipeShadowTable[i], widthPipeShadowTable[i], heightPipeShadowTable[i]);
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        }
    }

    DrawCTXBricksShadows() {
        this.bricksData.forEach(e => {
            let xShadowBrick = e.posX + (Config.bricksShadowXOffset * this.scale);
            let yShadowBrick = e.posY + (Config.bricksShadowYOffset * this.scale);
            let widthShadowBrick = e.endWidth;
            let heightShadowBrick = e.endHeight;

            this.ctx.beginPath();
            this.ctx.globalAlpha = Config.shadowAlpha;
            this.ctx.fillStyle = "black";
            this.ctx.rect(xShadowBrick, yShadowBrick, widthShadowBrick, heightShadowBrick);
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        })
    }

    DrawCTXBricks() {
        this.bricksData.forEach((e, i) => {
            let sx = e.srcX;
            let sy = e.srcY;
            let sWidth = e.startWidth;
            let sHeight = e.startHeight;
            let dx = e.posX;
            let dy = e.posY;
            let dWidth = e.endWidth;
            let dHeight = e.endHeight;
            this.ctx.beginPath();
            this.ctx.drawImage(this.bricksImg, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            // this.ctx.font = "16px Arial"
            // this.ctx.fillText(e.id.toString(), dx + (dWidth / 2) - 16, dy + (dHeight / 2) + 4)
            this.ctx.closePath();
        })
    }

    DrawCTXPlayerBallShadow() {
        if (this.playerBall) {
            let sxPlayer = this.playerBall.srcX;
            let syPlayer = this.playerBall.srcY;
            let sWidthPlayer = this.playerBall.startWidth;
            let sHeightPlayer = this.playerBall.startHeight;
            let dxPlayer = this.playerBall.posX + this.playerBall.shadowOffsetX;
            let dyPlayer = this.playerBall.posY + this.playerBall.shadowOffsetY;
            let dWidthPlayer = this.playerBall.endWidth;
            let dHeightPlayer = this.playerBall.endHeight;

            let fastCanvas = document.createElement("canvas");
            let fastCTX = fastCanvas.getContext("2d");
            //@ts-ignore
            fastCTX.webkitImageSmoothingEnabled = false;
            //@ts-ignore
            fastCTX.mozImageSmoothingEnabled = false;
            fastCTX.imageSmoothingEnabled = false;

            fastCTX.beginPath();
            fastCTX.fillStyle = "black";
            fastCTX.rect(0, 0, dWidthPlayer, dHeightPlayer);
            fastCTX.fill();
            fastCTX.globalCompositeOperation = "destination-in";
            fastCTX.globalAlpha = Config.shadowAlpha;
            fastCTX.drawImage(this.gameElementsImg, sxPlayer, syPlayer, sWidthPlayer, sHeightPlayer, 0, 0, dWidthPlayer, dHeightPlayer);
            fastCTX.closePath();

            this.ctx.beginPath();
            this.ctx.drawImage(fastCanvas, dxPlayer, dyPlayer);
            this.ctx.closePath();
        }
    }

    DrawCTXPlayerBall() {
        if (this.playerBall) {
            let sxPlayer = this.playerBall.srcX;
            let syPlayer = this.playerBall.srcY;
            let sWidthPlayer = this.playerBall.startWidth;
            let sHeightPlayer = this.playerBall.startHeight;
            let dxPlayer = this.playerBall.posX;
            let dyPlayer = this.playerBall.posY;
            let dWidthPlayer = this.playerBall.endWidth;
            let dHeightPlayer = this.playerBall.endHeight;

            this.ctx.beginPath();
            this.ctx.drawImage(this.gameElementsImg, sxPlayer, syPlayer, sWidthPlayer, sHeightPlayer, dxPlayer, dyPlayer, dWidthPlayer, dHeightPlayer);
            this.ctx.closePath();
        }
    }

    DrawCTXPlayerPaletteShadow() {
        let sxPlayer = this.playerPalette.srcX;
        let syPlayer = this.playerPalette.srcY;
        let sWidthPlayer = this.playerPalette.startWidth;
        let sHeightPlayer = this.playerPalette.startHeight;
        let dxPlayer = this.playerPalette.posX + this.playerPalette.shadowOffsetX;
        let dyPlayer = this.playerPalette.posY + this.playerPalette.shadowOffsetY;
        let dWidthPlayer = this.playerPalette.endWidth;
        let dHeightPlayer = this.playerPalette.endHeight;

        let fastCanvas = document.createElement("canvas");
        let fastCTX = fastCanvas.getContext("2d");
        //@ts-ignore
        fastCTX.webkitImageSmoothingEnabled = false;
        //@ts-ignore
        fastCTX.mozImageSmoothingEnabled = false;
        fastCTX.imageSmoothingEnabled = false;


        fastCTX.beginPath();
        fastCTX.fillStyle = "black";
        fastCTX.rect(0, 0, dWidthPlayer, dHeightPlayer);
        fastCTX.fill();
        fastCTX.globalCompositeOperation = "destination-in";
        fastCTX.globalAlpha = Config.shadowAlpha;
        fastCTX.drawImage(this.gameElementsImg, sxPlayer, syPlayer, sWidthPlayer, sHeightPlayer, 0, 0, dWidthPlayer, dHeightPlayer);
        fastCTX.closePath();

        this.ctx.beginPath();
        this.ctx.drawImage(fastCanvas, dxPlayer, dyPlayer);
        this.ctx.closePath();
    }


    DrawCTXPlayerPalette() {
        let sxPlayer = this.playerPalette.srcX;
        let syPlayer = this.playerPalette.srcY;
        let sWidthPlayer = this.playerPalette.startWidth;
        let sHeightPlayer = this.playerPalette.startHeight;
        let dxPlayer = this.playerPalette.posX;
        let dyPlayer = this.playerPalette.posY;
        let dWidthPlayer = this.playerPalette.endWidth;
        let dHeightPlayer = this.playerPalette.endHeight;

        this.ctx.beginPath();
        this.ctx.drawImage(this.gameElementsImg, sxPlayer, syPlayer, sWidthPlayer, sHeightPlayer, dxPlayer, dyPlayer, dWidthPlayer, dHeightPlayer);
        this.ctx.closePath();
    }

    DrawCTXPipesBorder() {
        let sxTable = [Config.pipeStartX, Config.pipeStartX + Config.verticalPipeWidth, Config.gameElementsStartW - Config.verticalPipeWidth];
        let syTable = [Config.pipeStartY, Config.pipeStartY, Config.pipeStartY];
        let sWidthTable = [Config.verticalPipeWidth, Config.horizontalPipeWidth, Config.verticalPipeWidth];
        let sHeightTable = [Config.verticalPipeHeight, Config.horizontalPipeHeight, Config.verticalPipeHeight];
        let dxTable = [Config.pipeStartX, (Config.pipeStartX + Config.verticalPipeWidth) * this.scale, (Config.gameElementsStartW - Config.verticalPipeWidth) * this.scale];
        let dyTable = [Config.pipeStartY * this.scale, Config.pipeStartY * this.scale, Config.pipeStartY * this.scale];
        let dWidthTable = [Config.verticalPipeWidth * this.scale, Config.horizontalPipeWidth * this.scale, Config.verticalPipeWidth * this.scale];
        let dHeightTable = [Config.verticalPipeHeight * this.scale, Config.horizontalPipeHeight * this.scale, Config.verticalPipeHeight * this.scale];

        for (let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            this.ctx.drawImage(this.gameElementsImg, sxTable[i], syTable[i], sWidthTable[i], sHeightTable[i], dxTable[i], dyTable[i], dWidthTable[i], dHeightTable[i]);
            this.ctx.closePath();
        }
    }

    DrawCTXScore() {
        let sxSCORE = 0;
        let sySCORE = 0;
        let sWidthSCORE = Config.gameElementsStartW;
        let sHeightSCORE = Config.scoreHeight;
        let dxSCORE = 0;
        let dySCORE = 0;
        let dWidthSCORE = Config.gameElementsStartW * this.scale;
        let dHeightSCORE = Config.scoreHeight * this.scale;
        this.ctx.beginPath();
        this.ctx.drawImage(this.gameElementsImg, sxSCORE, sySCORE, sWidthSCORE, sHeightSCORE, dxSCORE, dySCORE, dWidthSCORE, dHeightSCORE);
        this.ctx.closePath();
    }

    DrawCTXHelpers() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "green";
        this.ctx.rect(Config.arenaLeftEnd * this.scale, 0, 1, Config.arenaBottomEnd * this.scale);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.beginPath();
        this.ctx.strokeStyle = "green";
        this.ctx.rect(Config.arenaRightEnd * this.scale, 0, 1, Config.arenaBottomEnd * this.scale);
        this.ctx.stroke();
        this.ctx.closePath();

        if (this.playerBall) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "red";
            this.ctx.rect(this.playerBall.posX, this.playerBall.posY - 20, 1, this.playerBall.endHeight + 40);
            this.ctx.rect(this.playerBall.posX + this.playerBall.endWidth, this.playerBall.posY - 20, 1, this.playerBall.endHeight + 40);
            this.ctx.rect(this.playerBall.posX - 20, this.playerBall.posY, this.playerBall.endWidth + 40, 1);
            this.ctx.rect(this.playerBall.posX - 20, this.playerBall.posY + this.playerBall.endHeight, this.playerBall.endWidth + 40, 1);
            this.ctx.stroke();
            this.ctx.closePath();

            this.ctx.beginPath();
            this.ctx.strokeStyle = "blue";
            this.ctx.arc(this.playerBall.posX + (this.playerBall.endWidth / 2), this.playerBall.posY + (this.playerBall.endHeight / 2), this.playerBall.radius, 0, 2 * Math.PI);
            this.ctx.stroke();
            this.ctx.closePath();
        }

        if (this.playerPalette) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = "yellow";
            this.ctx.rect(this.playerPalette.posX, this.playerPalette.posY - 20, 1, 80);
            this.ctx.rect(this.playerPalette.posX + this.playerPalette.reflectionZones[1].fromX, this.playerPalette.posY - 20, 1, 80);
            this.ctx.rect(this.playerPalette.posX + this.playerPalette.reflectionZones[2].fromX, this.playerPalette.posY - 20, 1, 80);
            this.ctx.rect(this.playerPalette.posX + this.playerPalette.reflectionZones[3].fromX, this.playerPalette.posY - 20, 1, 80);
            this.ctx.rect(this.playerPalette.posX + this.playerPalette.reflectionZones[3].toX, this.playerPalette.posY - 20, 1, 80);
            this.ctx.stroke();
            this.ctx.closePath();
        }


    }
}