import Config from './Config.js';

export default class Brick {
    constructor(posX, posY, srcX, srcY, scale) {
        this.posX = (8 * scale) + (Config.brickStartW * scale * posX);
        this.posY = (33 * scale) + (Config.brickStartH * scale * posY);
        this.srcX = 2 + (2 * (srcX % Config.bricksColumns)) + (Config.brickStartW * (srcX % Config.bricksColumns));
        this.srcY = 2 + (srcY % Config.bricksRows) + (Config.brickStartH * (srcY % Config.bricksRows));
        this.scale = scale;
        this.id = posX * 10 + posY

        this.startWidth = Config.brickStartW;
        this.startHeight = Config.brickStartH;

        this.endWidth = this.startWidth * this.scale;
        this.endHeight = this.startHeight * this.scale;
    }
}