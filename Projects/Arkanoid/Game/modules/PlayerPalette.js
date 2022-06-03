import Config from './Config.js'

export default class PlayerPalette{
    constructor(posX, posY, scale, keyboard){
        this.posY = posY;
        this.posX = posX;
        this.scale = scale;
        this.keyboard = keyboard;

        this.srcX = Config.playerPaletteStartX;
        this.srcY = Config.playerPaletteStartY;
        this.startWidth = Config.playerPaletteWidth;
        this.startHeight = Config.playerPaletteHeight;

        this.endWidth = this.startWidth * this.scale;
        this.endHeight = this.startHeight * this.scale;

        this.shadowOffsetX = Config.playerPaletteShadowXOffset * this.scale;
        this.shadowOffsetY = Config.playerPaletteShadowYOffset * this.scale;

        this.speed = 100;

        // this.reflectionZones = [
        //     {fromX: 0, toX: 0.5 * this.endWidth, direction: -1, angle: Math.PI / 4},
        //     {fromX: 0.5 * this.endWidth, toX: this.endWidth, direction: 1, angle: Math.PI / 4},
        // ]

        this.lengthTo30Degree = 0.25

        this.reflectionZones = [
            {fromX: 0, toX: this.lengthTo30Degree * this.endWidth, direction: -1, angle: Math.PI / 6},
            {fromX: this.lengthTo30Degree * this.endWidth, toX: 0.5 * this.endWidth, direction: -1, angle: Math.PI / 4},
            {fromX: 0.5 * this.endWidth, toX: (1 - this.lengthTo30Degree) * this.endWidth, direction: 1, angle: Math.PI / 4},
            {fromX: (1 - this.lengthTo30Degree) * this.endWidth, toX: this.endWidth, direction: 1, angle: Math.PI / 6},
        ]
    }

    Update(delta){
        if(this.keyboard.moveLeft){
            if(this.posX - (this.speed * this.scale * delta) < Config.playerPaletteMinX * this.scale){
                this.posX = Config.playerPaletteMinX * this.scale;
            } else {
                this.posX = this.posX - (this.speed * this.scale * delta);
            }

            // if(this.gameStart == false){
            //     this.posX = this.posX + (Config.playerPaletteWidth * this.scale * 0.6);
            // }
        } else if(this.keyboard.moveRight) {
            if(this.posX + (this.speed * this.scale * delta) > Config.playerPaletteMaxX * this.scale){
                this.posX = Config.playerPaletteMaxX * this.scale;
            } else {
                this.posX = this.posX + (this.speed * this.scale * delta);
            }

            // if(this.gameStart == false){
            //     this.playerBallPosition.x = this.playerPosition.x + (Config.playerPaletteWidth * this.scale * 0.6);
            // }
        }
    }
}