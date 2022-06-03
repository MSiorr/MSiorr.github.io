import Config from './Config.js';
import ContextMenu from './ContextMenu.js';

export default class MapBuilderArea {

    /**
     * @param {HTMLDivElement} container
     * @param {Number} areaW
     * @param {Number} areaH
     * @param {Number} scale
     * @param {Number} border
     * @param {import("./BricksPicker.js").default} brickPicker
     */
    constructor(container, brickPicker, areaW, areaH, scale, border) {
        this.container = container;
        this.brickPicker = brickPicker;
        this.areaW = areaW;
        this.areaH = areaH;
        this.scale = scale;
        this.border = border;

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

        this.selectedArea = [];

        this.ctrlModeActivate = false;

        this.div = document.createElement("div");
        this.div.id = "MapBuilderArea";
        this.container.appendChild(this.div);

        this.scene = document.createElement("canvas");
        this.scene.width = areaW * ((scale * this.brickStartW) + (2 * border));
        this.scene.height = areaH * ((scale * this.brickStartH) + (2 * border));

        this.div.appendChild(this.scene);

        this.contextMenu = new ContextMenu(document.body, this);

        this.ctrlButton = this.CheckSystemType();

        this.CreateArenaLayout();
    }

    /**
     * @returns {"Control" | "Meta"} 
     */
    CheckSystemType() {
        if (navigator.userAgent.indexOf("Windows") != -1) {
            return "Control";
        }
        else if (navigator.userAgent.indexOf("Mac") != -1) {
            return "Meta";
        }
    }

    CreateArenaLayout() {
        this.ctx = this.scene.getContext("2d");
        //@ts-ignore
        this.ctx.webkitImageSmoothingEnabled = false;
        //@ts-ignore
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        this.bricksImg = document.createElement("img");
        this.bricksImg.src = this.bricksImgLocation;
        this.bricksImg.onload = () => {
            for (let i = 0; i < this.areaW; i++) {
                this.areaData[i] = [];
                for (let j = 0; j < this.areaH; j++) {
                    this.areaData[i][j] = null;
                }
            }
            this.contextMenu.areaMemory[0] = JSON.stringify(this.areaData);
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
        }

        this.scene.onmouseout = () => {
            this.mouseoverPosition.x = null;
            this.mouseoverPosition.y = null;
        }

        this.scene.onmousedown = (e) => {
            if (e.button == 0) {
                let rect = this.scene.getBoundingClientRect();
                let x = e.clientX - rect.left;
                let y = e.clientY - rect.top;

                this.selectDivPostions.x1 = x;
                this.selectDivPostions.y1 = y;
                this.selectDivDisplay = true;
                if (this.ctrlModeActivate == false) {
                    this.mouseClickPosition = [];
                }
            }
        }

        /**
         * @param {MouseEvent} e 
         */
        window.onmousemove = (e) => {
            let rect = this.scene.getBoundingClientRect();

            let areaX = Math.max(0, Math.min(e.clientX - rect.left, rect.right - rect.left));
            let areaY = Math.max(0, Math.min(e.clientY - rect.top, rect.bottom - rect.top));

            this.selectDivPostions.x2 = areaX;
            this.selectDivPostions.y2 = areaY;
        }

        window.onmouseup = () => {
            if (this.selectDivDisplay == true) {
                this.selectDivDisplay = false;
                let selectX1 = Math.min(this.selectDivPostions.x1, this.selectDivPostions.x2)
                let selectX2 = Math.max(this.selectDivPostions.x1, this.selectDivPostions.x2)
                let selectY1 = Math.min(this.selectDivPostions.y1, this.selectDivPostions.y2)
                let selectY2 = Math.max(this.selectDivPostions.y1, this.selectDivPostions.y2)
                let selectBrickX1 = Math.max(0, Math.floor(selectX1 / (this.brickStartW * this.scale + this.border * 2)));
                let selectBrickX2 = Math.max(0, Math.floor(selectX2 / (this.brickStartW * this.scale + this.border * 2)));
                let selectBrickY1 = Math.max(0, Math.floor(selectY1 / (this.brickStartH * this.scale + this.border * 2)));
                let selectBrickY2 = Math.max(0, Math.floor(selectY2 / (this.brickStartH * this.scale + this.border * 2)));

                for (let i = selectBrickX1; i <= selectBrickX2; i++) {
                    for (let j = selectBrickY1; j <= selectBrickY2; j++) {
                        if (i < this.areaW && j < this.areaH) {
                            let itemIndex = this.mouseClickPosition.findIndex(e => e.x === i && e.y === j);

                            if (itemIndex > -1) {
                                this.mouseClickPosition.splice(itemIndex, 1)
                            } else {
                                this.mouseClickPosition.push({ x: i, y: j })
                            }
                        }
                    }
                }
            }
        }

        /**
         * @param {KeyboardEvent} e 
         */
        window.onkeydown = (e) => {
            switch (e.code) {
                case 'Delete':
                    e.preventDefault();
                    e.stopPropagation();
                    this.contextMenu.DeleteData();
                    break;
                case 'KeyZ':
                    if (this.ctrlModeActivate == true) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.contextMenu.UndoData();
                    }
                    break;
                case 'KeyY':
                    if (this.ctrlModeActivate == true) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.contextMenu.RedoData();
                    }
                    break;
                case 'KeyS':
                    if (this.ctrlModeActivate == true) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.contextMenu.SaveData();
                    }
                    break;
                case 'KeyL':
                    if (this.ctrlModeActivate == true) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.contextMenu.LoadData();
                    }
                    break;
            }

            switch (e.key) {
                case this.ctrlButton: {
                    this.ctrlModeActivate = true;
                    break;
                }
            }
        }

        window.onkeyup = (e) => {
            if (e.code == "ControlLeft") {
                this.ctrlModeActivate = false;
            }
        }

        /**
         * @param {MouseEvent} e 
         */
        window.oncontextmenu = (e) => {
            e.preventDefault();
            // e.stopPropagation();
            this.contextMenu.CreateContextMenu(e.clientX, e.clientY);
            this.contextMenu.mainContextDiv.style.display = "block";
        }
    }

    DrawCTX() {
        this.ctx.clearRect(0, 0, this.scene.width, this.scene.height);

        let selectX1 = Math.min(this.selectDivPostions.x1, this.selectDivPostions.x2)
        let selectX2 = Math.max(this.selectDivPostions.x1, this.selectDivPostions.x2)
        let selectY1 = Math.min(this.selectDivPostions.y1, this.selectDivPostions.y2)
        let selectY2 = Math.max(this.selectDivPostions.y1, this.selectDivPostions.y2)


        for (let i = 0; i < this.areaW; i++) {
            for (let j = 0; j < this.areaH; j++) {
                let recX = (this.brickStartW * this.scale * i) + (this.border * 2 * i) + this.border / 2;
                let recY = (this.brickStartH * this.scale * j) + (this.border * 2 * j) + this.border / 2;
                let recWidth = this.brickStartW * this.scale + this.border;
                let recHeight = this.brickStartH * this.scale + this.border;

                let borderColor = "white";

                this.ctx.beginPath();
                this.ctx.lineWidth = this.border;

                if (this.mouseoverPosition.x == i && this.mouseoverPosition.y == j && this.selectDivDisplay == false) {
                    borderColor = "orange"
                } else {
                    for (let k = 0; k < this.mouseClickPosition.length; k++) {
                        if (this.mouseClickPosition[k].x == i && this.mouseClickPosition[k].y == j) {
                            borderColor = "red";
                        }
                    }
                    if (this.selectDivDisplay == true) {
                        let selectBrickX1 = Math.floor(selectX1 / (this.brickStartW * this.scale + this.border * 2));
                        let selectBrickX2 = Math.floor(selectX2 / (this.brickStartW * this.scale + this.border * 2));
                        let selectBrickY1 = Math.floor(selectY1 / (this.brickStartH * this.scale + this.border * 2));
                        let selectBrickY2 = Math.floor(selectY2 / (this.brickStartH * this.scale + this.border * 2));

                        if (i >= selectBrickX1 && i <= selectBrickX2 && j >= selectBrickY1 && j <= selectBrickY2) {
                            if (borderColor == "white") {
                                borderColor = "red";
                            } else {
                                borderColor = "white";
                            }
                        }
                    }
                }

                this.ctx.strokeStyle = borderColor;
                // this.ctx.setLineDash([this.border]);
                this.ctx.rect(recX, recY, recWidth, recHeight);
                this.ctx.stroke();
                this.ctx.closePath()
            }
        }

        if (this.brickPicker.selectedBrick.x != null && this.brickPicker.selectedBrick.y != null && this.mouseClickPosition.length > 0) {
            let selectedX = this.brickPicker.selectedBrick.x;
            let selectedY = this.brickPicker.selectedBrick.y;

            this.mouseClickPosition.forEach(e => {
                this.areaData[e.x][e.y] = { x: selectedX, y: selectedY };
            })

            this.mouseClickPosition = [];
            this.contextMenu.areaMemory.splice(this.contextMenu.memoryIndex + 1);

            this.contextMenu.areaMemory.push(JSON.stringify(this.areaData));
            this.contextMenu.memoryIndex++;
        }

        this.areaData.forEach((x, i) => {
            x.forEach((y, j) => {
                if (y != null) {

                    let sx = 2 + (2 * (y.x % this.bricksColumns)) + (this.brickStartW * (y.x % this.bricksColumns));
                    let sy = 2 + (y.y % this.bricksRows) + (this.brickStartH * (y.y % this.bricksRows));
                    let sWidth = this.brickStartW;
                    let sHeight = this.brickStartH;
                    let dx = this.border + (this.border * 2 * i) + (this.brickStartW * this.scale * i);
                    let dy = this.border + (this.border * 2 * j) + (this.brickStartH * this.scale * j);
                    let dWidth = this.brickStartW * this.scale;
                    let dHeight = this.brickStartH * this.scale;
                    this.ctx.beginPath();
                    this.ctx.drawImage(this.bricksImg, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
                    this.ctx.closePath();
                }
            })
        })

        if (this.selectDivDisplay == true) {
            this.ctx.beginPath();
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([]);
            this.ctx.strokeStyle = "rgb(255,153,0)"
            this.ctx.fillStyle = "rgb(255,153,0)"
            this.ctx.rect(selectX1, selectY1, selectX2 - selectX1, selectY2 - selectY1);
            this.ctx.globalAlpha = 0.9;
            this.ctx.stroke();
            this.ctx.globalAlpha = 0.5;
            this.ctx.fill();
            this.ctx.closePath();
            this.ctx.globalAlpha = 1;
        }

        this.brickPicker.selectedBrick.x = null;
        this.brickPicker.selectedBrick.y = null;
    }
}