import Config from './Config.js';

export default class BricksPicker {
    /**
     * @param {HTMLDivElement} container
     * @param {number} scale
     * @param {number} padW
     * @param {number} padH
     */
    constructor(container, scale, padW, padH, border) {
        this.container = container;
        this.scale = scale;
        this.padW = padW;
        this.padH = padH;
        this.border = border;

        this.brickStartW = Config.brickStartW;
        this.brickStartH = Config.brickStartH;

        this.bricksColumns = Config.bricksColumns;
        this.bricksRows = Config.bricksRows;

        this.imageLocation = Config.imgLocation;

        this.mouseoverPosition = { x: null, y: null }

        this.selectedBrick = {x: null, y: null};


        this.div = document.createElement("div");
        this.div.id = "bricksPicker";
        this.div.style.width = (this.bricksColumns + 3) * padW + this.bricksColumns * (this.brickStartW * this.scale) + "px";
        this.div.style.height = (this.bricksRows + 3) * padH + this.bricksRows * (this.brickStartH * this.scale) + "px";
        this.container.appendChild(this.div);

        this.scene = document.createElement("canvas");
        this.scene.width = (this.bricksColumns + 1) * padW + this.bricksColumns * (this.brickStartW * this.scale);
        this.scene.height = (this.bricksRows + 1) * padH + this.bricksRows * (this.brickStartH * this.scale);
        this.div.appendChild(this.scene);

        this.createBricksLayout();
    }

    createBricksLayout() {
        this.ctx = this.scene.getContext("2d");
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        this.bricksImg = document.createElement("img");
        this.bricksImg.src = this.imageLocation;
        this.bricksImg.onload = () => {

            this.AddFunctionality();
            this.DrawCTX();
        }
    }

    AddFunctionality() {
        this.scene.onmousemove = (e) => {
            let rect = this.scene.getBoundingClientRect();
            let x = e.clientX - rect.left - this.padW / 2;
            let y = e.clientY - rect.top - this.padH / 2;
            let brickX = Math.max(0, Math.floor(x / (this.brickStartW * this.scale + this.padW)));
            let brickY = Math.max(0, Math.floor(y / (this.brickStartH * this.scale + this.padH)));
            if (brickX * (this.brickStartW * this.scale + this.padW) + (this.padW / 2) - this.border > x ||
                (brickX + 1) * (this.brickStartW * this.scale + this.padW) - (this.padW / 2) + this.border < x ||
                brickY * (this.brickStartH * this.scale + this.padH) + (this.padH / 2) - this.border > y ||
                (brickY + 1) * (this.brickStartH * this.scale + this.padH) - (this.padH / 2) + this.border < y ||
                brickX > this.bricksColumns - 1 || brickY > this.bricksRows - 1) {                    // Obliczanie przerw pomiędzy brickami 

                this.mouseoverPosition.x = null;
                this.mouseoverPosition.y = null;
                this.scene.style.cursor = "default";

            } else {
                this.mouseoverPosition.x = brickX;
                this.mouseoverPosition.y = brickY;
                this.scene.style.cursor = "pointer";
            }
        }

        this.scene.onmouseout = () => {
            this.mouseoverPosition.x = null;
            this.mouseoverPosition.y = null;
            this.scene.style.cursor = "default";
        }

        // this.scene.onmousedown = () => {
        //     this.selectedBrick.x = null;
        //     this.selectedBrick.y = null;
        // }

        this.scene.onmouseup = (e) => {
            let rect = this.scene.getBoundingClientRect();
            let x = e.clientX - rect.left - this.padW / 2;
            let y = e.clientY - rect.top - this.padH / 2;
            let brickX = Math.max(0, Math.floor(x / (this.brickStartW * this.scale + this.padW)));
            let brickY = Math.max(0, Math.floor(y / (this.brickStartH * this.scale + this.padH)));
            if (brickX * (this.brickStartW * this.scale + this.padW) + (this.padW / 2) - this.border > x ||
                (brickX + 1) * (this.brickStartW * this.scale + this.padW) - (this.padW / 2) + this.border < x ||
                brickY * (this.brickStartH * this.scale + this.padH) + (this.padH / 2) - this.border > y ||
                (brickY + 1) * (this.brickStartH * this.scale + this.padH) - (this.padH / 2) + this.border < y ||
                brickX > this.bricksColumns - 1 || brickY > this.bricksRows - 1) {                      // Obliczanie przerw pomiędzy brickami 
                this.scene.style.cursor = "default";

            } else {
                if(this.selectedBrick.x != brickX || this.selectedBrick.y != brickY){
                    this.selectedBrick.x = brickX;
                    this.selectedBrick.y = brickY;
                    this.scene.style.cursor = "pointer";
                } else {
                    this.selectedBrick.x = null;
                    this.selectedBrick.y = null;
                }
            }
        }
    }

    DrawCTX() {
        this.ctx.clearRect(0, 0, this.scene.width, this.scene.height);

        for (let i = 0; i < this.bricksColumns; i++) {
            for (let j = 0; j < this.bricksRows; j++) {
                let recX = this.padW + (this.padW * i) + (this.brickStartW * this.scale * i) - this.border / 2;
                let recY = this.padH + (this.padH * j) + (this.brickStartH * this.scale * j) - this.border / 2;
                // let recX = (this.brickStartW * this.scale * i) + (this.border * 2 * i) + this.border / 2 + this.padW + (this.padW * i);
                // let recY = (this.brickStartH * this.scale * j) + (this.border * 2 * j) + this.border / 2 + this.padH + (this.padH * j);
                let recWidth = this.brickStartW * this.scale + this.border;
                let recHeight = this.brickStartH * this.scale + this.border;

                let borderColor = "white";

                this.ctx.beginPath();
                this.ctx.lineWidth = this.border;
                this.ctx.globalAlpha = 1;

                this.ctx.strokeStyle = borderColor;
                this.ctx.setLineDash([this.border]);
                this.ctx.rect(recX, recY, recWidth, recHeight);
                this.ctx.stroke();
                this.ctx.closePath()

                if (i == this.mouseoverPosition.x && j == this.mouseoverPosition.y) {
                    this.ctx.globalAlpha = 1;
                } else {
                    this.ctx.globalAlpha = 0.3;
                }
                let sx = 2 + (2 * i) + (this.brickStartW * i);
                let sy = 2 + j + (this.brickStartH * j);
                let sWidth = this.brickStartW;
                let sHeight = this.brickStartH;
                let dx = this.padW + (this.padW * i) + (this.brickStartW * this.scale * i);
                let dy = this.padH + (this.padH * j) + (this.brickStartH * this.scale * j);
                let dWidth = this.brickStartW * this.scale;
                let dHeight = this.brickStartH * this.scale
                this.ctx.beginPath();
                this.ctx.drawImage(this.bricksImg, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                this.ctx.closePath();


            }
        }
    }


}