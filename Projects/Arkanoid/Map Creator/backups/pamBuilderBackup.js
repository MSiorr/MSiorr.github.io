import Config from './Config.js';

export default class MapBuilderArea {

    /**
     * @param {HTMLDivElement} container
     * @param {Number} areaW
     * @param {Number} areaH
     * @param {Number} scale
     * @param {Number} border
     * @param {number} padW
     * @param {number} padH
     */
    constructor(container, areaW, areaH, scale, border, padW, padH) {
        this.container = container;
        this.areaW = areaW;
        this.areaH = areaH;
        this.scale = scale;
        this.border = border;
        this.padW = padW;
        this.padH = padH;

        this.brickStartW = Config.brickStartW;
        this.brickStartH = Config.brickStartH;
        this.bricksColumns = Config.bricksColumns;
        this.bricksRows = Config.bricksRows;
        this.bricksImgLocation = Config.imgLocation;

        this.areaData = [];

        this.mouseoverPosition = { x: null, y: null };
        this.mouseClickPosition = [];

        this.selectDivPostions = { x1: null, y1: null, x2: null, y2: null };
        this.selectDivDisplay = false;

        this.div = document.createElement("div");
        this.div.id = "MapBuilderArea";
        // this.div.style.width = (areaW * ((scale * this.brickStartW) + (2 * border))) + "px";
        // this.div.style.height = (areaH * ((scale * this.brickStartH) + (2 * border))) + "px";
        // this.div.style.width = (areaW * ((scale * this.brickStartW) + (2 * border))) + (4 * padW) - 2 * border + "px";
        // this.div.style.height = (areaH * ((scale * this.brickStartH) + (2 * border))) + (4 * padH) - 2 * border + "px";
        this.container.appendChild(this.div);

        this.scene = document.createElement("canvas");
        this.scene.width = areaW * ((scale * this.brickStartW) + (2 * border));
        this.scene.height = areaH * ((scale * this.brickStartH) + (2 * border));

        this.div.appendChild(this.scene);

        // this.selectDiv = document.createElement("div");
        // this.selectDiv.id = "checkDiv";
        // this.selectDiv.style.display = "none";
        // this.div.appendChild(this.selectDiv);

        this.CreateArenaLayout();
    }

    CreateArenaLayout() {
        this.ctx = this.scene.getContext("2d");
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        this.bricksImg = document.createElement("img");
        this.bricksImg.src = this.bricksImgLocation;
        this.bricksImg.onload = () => {
            for (let i = 0; i < this.areaH; i++) {
                this.areaData[i] = [];
                for (let j = 0; j < this.areaW; j++) {
                    this.areaData[i][j] = null;
                }
            }
            this.AddAreaFunctionality();
            this.DrawCTX();
        }
    }

    AddAreaFunctionality() {
        this.scene.onmousemove = (e) => {
            let rect = this.scene.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let brickX = Math.max(0, Math.floor(x / (this.brickStartW * this.scale + this.border * 2)));
            let brickY = Math.max(0, Math.floor(y / (this.brickStartH * this.scale + this.border * 2)));
            this.mouseoverPosition.x = brickX;
            this.mouseoverPosition.y = brickY;

            this.selectDivPostions.x2 = x;
            this.selectDivPostions.y2 = y;
            this.SelectDivCalc();
        }

        this.scene.onmouseout = () => {
            this.mouseoverPosition.x = null;
            this.mouseoverPosition.y = null;
        }

        this.scene.onmousedown = (e) => {
            let rect = this.scene.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;

            this.selectDivPostions.x1 = x;
            this.selectDivPostions.y1 = y;
            this.selectDivDisplay = true;
            this.SelectDivCalc();
        }

        this.scene.onmouseup = (e) => {
            let rect = this.scene.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let brickX = Math.max(0, Math.floor(x / (this.brickStartW * this.scale + this.border * 2)));
            let brickY = Math.max(0, Math.floor(y / (this.brickStartH * this.scale + this.border * 2)));


            let itemIndex = this.mouseClickPosition.findIndex(e => e.x === brickX && e.y === brickY);

            if (itemIndex > -1) {
                this.mouseClickPosition.splice(itemIndex, 1)
            } else {
                this.mouseClickPosition.push({ x: brickX, y: brickY })
            }

            this.selectDivDisplay = false;
        }

        window.onmouseup = () => {
            this.selectDivDisplay = false;
        }

        // this.selectDiv.onmouseup = (e) => {
        //     let rect = this.scene.getBoundingClientRect();
        //     let x = e.clientX - rect.left;
        //     let y = e.clientY - rect.top;
        //     let brickX = Math.max(0, Math.floor(x / (this.brickStartW * this.scale + this.border * 2)));
        //     let brickY = Math.max(0, Math.floor(y / (this.brickStartH * this.scale + this.border * 2)));


        //     let itemIndex = this.mouseClickPosition.findIndex(e => e.x === brickX && e.y === brickY);

        //     if(itemIndex > -1){
        //         this.mouseClickPosition.splice(itemIndex, 1)
        //     } else {
        //         this.mouseClickPosition.push({x: brickX, y: brickY})
        //     }

        //     this.selectDiv.style.display = "none";
        // }

        // this.selectDiv.onmousemove = (e) => {
        //     let rect = this.scene.getBoundingClientRect();
        //     let x = e.clientX - rect.left;
        //     let y = e.clientY - rect.top;
        //     this.selectDivPostions.x2 = x;
        //     this.selectDivPostions.y2 = y;
        //     this.SelectDivCalc();
        // }

        // document.body.onmouseup = (e) => {
        //     console.log("UP")
        // }
    }

    SelectDivCalc() {
        let x1 = Math.min(this.selectDivPostions.x1, this.selectDivPostions.x2)
        let x2 = Math.max(this.selectDivPostions.x1, this.selectDivPostions.x2)
        let y1 = Math.min(this.selectDivPostions.y1, this.selectDivPostions.y2)
        let y2 = Math.max(this.selectDivPostions.y1, this.selectDivPostions.y2)

        // this.selectDiv.style.top = y1 + "px";
        // this.selectDiv.style.left = x1 + "px";
        // this.selectDiv.style.width = x2 - x1 + "px";
        // this.selectDiv.style.height = y2 - y1 + "px";

        // for(let i = x1; i < x2; i++){
        //     for(let j = y1; j < y2; j++){

        //         let itemIndex = this.mouseClickPosition.findIndex(e => e.x === i && e.y === j);

        //         if(itemIndex > -1){
        //             // this.mouseClickPosition.splice(itemIndex, 1)
        //         } else {
        //             this.mouseClickPosition.push({x: i, y: j})
        //         }

        //     }
        // }
    }

    DrawCTX() {
        this.ctx.clearRect(0, 0, this.scene.width, this.scene.height);
        // for (let i = this.areaH-1; i >= 0; i--) {
        //     for (let j = this.areaW-1; j >= 0; j--) {
        for (let i = 0; i < this.areaH; i++) {
            for (let j = 0; j < this.areaW; j++) {
                let recX = (this.brickStartW * this.scale * j) + (this.border * 2 * j) + this.border / 2;
                let recY = (this.brickStartH * this.scale * i) + (this.border * 2 * i) + this.border / 2;
                let recWidth = this.brickStartW * this.scale + this.border;
                let recHeight = this.brickStartH * this.scale + this.border;
                this.ctx.beginPath();
                this.ctx.lineWidth = this.border;
                if (this.mouseoverPosition.x == j && this.mouseoverPosition.y == i) {
                    this.ctx.strokeStyle = "orange";
                } else {
                    this.ctx.strokeStyle = "white";
                    for (let k = 0; k < this.mouseClickPosition.length; k++) {
                        if (this.mouseClickPosition[k].x == j && this.mouseClickPosition[k].y == i) {
                            this.ctx.strokeStyle = "red";
                            break;
                        }
                    }
                }


                this.ctx.setLineDash([this.border]);
                this.ctx.rect(recX, recY, recWidth, recHeight);
                this.ctx.stroke();
                this.ctx.closePath()

                if (i > 10) {
                    let sx = 2 + (2 * (j % this.bricksColumns)) + (this.brickStartW * (j % this.bricksColumns));
                    let sy = 2 + (i % this.bricksRows) + (this.brickStartH * (i % this.bricksRows));
                    let sWidth = this.brickStartW;
                    let sHeight = this.brickStartH;
                    let dx = this.border + (this.border * 2 * j) + (this.brickStartW * this.scale * j);
                    let dy = this.border + (this.border * 2 * i) + (this.brickStartH * this.scale * i);
                    let dWidth = this.brickStartW * this.scale;
                    let dHeight = this.brickStartH * this.scale;
                    this.ctx.beginPath();
                    this.ctx.drawImage(this.bricksImg, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                    this.ctx.closePath();

                }

                if(this.selectDivDisplay == true){
                    let x1 = Math.min(this.selectDivPostions.x1, this.selectDivPostions.x2)
                    let x2 = Math.max(this.selectDivPostions.x1, this.selectDivPostions.x2)
                    let y1 = Math.min(this.selectDivPostions.y1, this.selectDivPostions.y2)
                    let y2 = Math.max(this.selectDivPostions.y1, this.selectDivPostions.y2)

                    this.ctx.beginPath();
                    this.ctx.lineWidth = 1;
                    this.ctx.setLineDash([]);
                    this.ctx.strokeStyle = "rgb(255,153,0)"
                    this.ctx.fillStyle = "rgb(255,153,0)"
                    this.ctx.rect(x1, y1, x2-x1, y2-y1);
                    this.ctx.globalAlpha = 0.5;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 0.01;
                    this.ctx.fill();
                    this.ctx.closePath();
                    this.ctx.globalAlpha = 1;
                }
            }
        }
        requestAnimationFrame(this.DrawCTX.bind(this));
    }
}