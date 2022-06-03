import Brick from './Brick.js';
import Config from './Config.js'
import PlayerPalette from './PlayerPalette.js';
import Vector2 from './Vector2.js';

export default class PlayerBall {
    /**
     * @param {number} posX
     * @param {number} posY
     * @param {number} scale
     * @param {import("./Keyboard.js").default} keyboard
     * @param {import("./PlayerPalette.js").default} playerPalette
     */
    constructor(posX, posY, scale, keyboard, playerPalette) {
        this.posY = posY;
        this.posX = posX;
        this.scale = scale;
        this.keyboard = keyboard;
        this.playerPalette = playerPalette;

        this.srcX = Config.playerBallStartX;
        this.srcY = Config.playerBallStartY;
        this.startWidth = Config.playerBallWidth;
        this.startHeight = Config.playerBallHeight;

        this.endWidth = Config.playerBallWidth * this.scale;
        this.endHeight = Config.playerBallHeight * this.scale;

        this.radius = Math.max(((this.endWidth + 1) / 2), ((this.endHeight + 1) / 2));
        this.offsetXToCenter = this.endWidth / 2;
        this.offsetYToCenter = this.endHeight / 2

        this.shadowOffsetX = Config.playerBallShadowXOffset * this.scale;
        this.shadowOffsetY = Config.playerBallShadowYOffset * this.scale;

        this.arenaLeftBorder = Config.arenaLeftEnd * this.scale;
        this.arenaUpBorder = Config.arenaUpEnd * this.scale;
        this.arenaRightBorder = Config.arenaRightEnd * this.scale;
        this.arenaBottomBorder = Config.arenaBottomEnd * this.scale;

        this.timeToDestroy = false;

        this.angle = Math.PI / 4;
        // this.speed = 3000;
        this.speed = 500;

        this.vector = new Vector2();
        this.vector.setFromAngle(this.angle)
        this.vector.multiplyScalar(this.speed);
    }

    /**
     * @param {number} delta
     * @param {boolean} gameStart
     * @param {Brick[]} bricks
     */
    Update(delta, gameStart, bricks) {
        if (gameStart == false) {
            if (this.keyboard.moveLeft) {
                this.posX = this.playerPalette.posX + (this.playerPalette.endWidth * 0.6);
            } else if (this.keyboard.moveRight) {
                this.posX = this.playerPalette.posX + (this.playerPalette.endWidth * 0.6);
            }
        } else {
            /**
             * @type {{x: Number, y: Number, brickDestroyed: boolean, brick: Brick} | null}
             */
            let collideVal = this.CheckCollide(delta, [this.playerPalette, ...bricks]);

            if (collideVal == null) {
                this.posX += this.vector.x * delta;
                this.posY += this.vector.y * delta;

                if (this.posY + (this.endWidth / 2) > this.arenaBottomBorder) {
                    this.timeToDestroy = true;
                }
            } else {
                this.posX = collideVal.x;
                this.posY = collideVal.y;

                if (collideVal.brickDestroyed) {
                    for (let i = 0; i < bricks.length; i++) {
                        if (bricks[i].id == collideVal.brick.id) {
                            bricks.splice(i, 1);
                            if (bricks.length == 0) {
                                gameStart = false;
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * @param {Number} delta
     * @param {any[]} elements 
     */
    CheckCollide(delta, elements = null) {
        let futurePositions = { x: this.posX + this.vector.x * delta, y: this.posY + this.vector.y * delta };
        let collideBorder = { distance: Infinity, border: null, objBorders: null };

        let returnObject = { x: null, y: null, brickDestroyed: false, brick: null }

        // WALLS

        if (futurePositions.x + this.endWidth > this.arenaRightBorder || futurePositions.x < this.arenaLeftBorder) {

            this.vector.reverseX();

            if (futurePositions.x + this.endWidth > this.arenaRightBorder) {
                returnObject.x = this.ReflectionX(this.arenaRightBorder, futurePositions, this.endWidth, "right")

            } else {
                returnObject.x = this.ReflectionX(this.arenaLeftBorder, futurePositions, this.endWidth, "left")
            }
        }
        if (futurePositions.y < this.arenaUpBorder) {

            this.vector.reverseY();
            returnObject.y = this.ReflectionY(this.arenaUpBorder, futurePositions, this.endHeight, "up")
        }


        // ITEMS

        elements.forEach((e, index) => {
            if (e instanceof PlayerPalette) {                                 // PALETTE
                let objBorders = { left: e.posX, right: e.posX + e.endWidth, top: e.posY, bottom: e.posY + e.endHeight };

                if (futurePositions.x + this.endWidth > objBorders['left'] &&
                    futurePositions.x < objBorders['right'] &&
                    futurePositions.y + this.endHeight > objBorders['top'] &&
                    futurePositions.y < objBorders['bottom']) {

                    for (let i = 0; i < e.reflectionZones.length; i++) {
                        let futureCenter = futurePositions.x + this.offsetXToCenter;
                        if (futureCenter > e.posX + e.reflectionZones[i].fromX && futureCenter < e.posX + e.reflectionZones[i].toX) {
                            this.vector.setDirectionX(e.reflectionZones[i].direction);
                            this.angle = e.reflectionZones[i].angle;
                            this.vector.setFromAngle(this.angle);
                            this.vector.multiplyScalar(this.speed);
                            this.vector.setDirectionY(-1);
                            break;
                        }
                    }
                }
            } else if (e instanceof Brick) {                                    // BLOCKS
                let objBorders = {
                    left: { start: new Vector2(e.posX, e.posY), end: new Vector2(e.posX, e.posY + e.endHeight) },
                    right: { start: new Vector2(e.posX + e.endWidth, e.posY), end: new Vector2(e.posX + e.endWidth, e.posY + e.endHeight) },
                    top: { start: new Vector2(e.posX, e.posY), end: new Vector2(e.posX + e.endWidth, e.posY) },
                    bottom: { start: new Vector2(e.posX, e.posY + e.endHeight), end: new Vector2(e.posX + e.endWidth, e.posY + e.endHeight) }
                };
                let corners = {
                    leftUp: new Vector2(e.posX, e.posY),
                    leftDown: new Vector2(e.posX, e.posY + e.endHeight),
                    rightUp: new Vector2(e.posX + e.endWidth, e.posY),
                    rightDown: new Vector2(e.posX + e.endWidth, e.posY + e.endHeight)
                }
                let brickCenterX = e.posX + (e.endWidth / 2);
                let brickCenterY = e.posY + (e.endHeight / 2);

                if (futurePositions.x + this.endWidth > objBorders.left.start.x &&
                    futurePositions.x < objBorders.right.start.x &&
                    futurePositions.y + this.endHeight > objBorders.top.start.y &&
                    futurePositions.y < objBorders.bottom.start.y) {

                    let ballCenterX = this.posX + this.offsetXToCenter;
                    let ballCenterY = this.posY + this.offsetYToCenter;

                    let futureBallCenterX = futurePositions.x + this.offsetXToCenter;
                    let futureBallCenterY = futurePositions.y + this.offsetYToCenter;

                    if ((futureBallCenterX > objBorders.left.start.x && futureBallCenterX < objBorders.right.start.x) || (futureBallCenterY > objBorders.top.start.y && futureBallCenterY < objBorders.bottom.start.y)) {
                        for (let border in objBorders) {
                            let startPos = new Vector2(ballCenterX, ballCenterY);
                            let futurePos = new Vector2(brickCenterX, brickCenterY);

                            let borderDetect = this.DetectBorder(startPos, futurePos, objBorders[border].start, objBorders[border].end);

                            if (borderDetect != null && borderDetect.seg1 == true && borderDetect.seg2 == true) {
                                let distance = startPos.DistanceTo(new Vector2(borderDetect.x, borderDetect.y));
                                if (distance < collideBorder.distance) {
                                    collideBorder.distance = distance;
                                    collideBorder.border = border;
                                    collideBorder.objBorders = objBorders;
                                    collideBorder.brick = e;
                                }
                            }
                        }
                    } else {
                        let ballCollideWithCorner = false;
                        if (ballCenterX < e.posX) {
                            if (ballCenterY < e.posY) {
                                ballCollideWithCorner = this.CheckCollideBallWithCorner(new Vector2(futureBallCenterX, futureBallCenterY), corners.leftUp);
                            } else {
                                ballCollideWithCorner = this.CheckCollideBallWithCorner(new Vector2(futureBallCenterX, futureBallCenterY), corners.leftDown);
                            }
                        } else {
                            if (ballCenterY < e.posY) {
                                ballCollideWithCorner = this.CheckCollideBallWithCorner(new Vector2(futureBallCenterX, futureBallCenterY), corners.rightUp);
                            } else {
                                ballCollideWithCorner = this.CheckCollideBallWithCorner(new Vector2(futureBallCenterX, futureBallCenterY), corners.rightDown);
                            }
                        }

                        if (ballCollideWithCorner) {
                            for (let border in objBorders) {
                                let startPos = new Vector2(ballCenterX, ballCenterY);
                                let futurePos = new Vector2(brickCenterX, brickCenterY);

                                let borderDetect = this.DetectBorder(startPos, futurePos, objBorders[border].start, objBorders[border].end);

                                if (borderDetect != null && borderDetect.seg1 == true && borderDetect.seg2 == true) {
                                    let distance = startPos.DistanceTo(new Vector2(borderDetect.x, borderDetect.y));
                                    if (distance < collideBorder.distance) {
                                        collideBorder.distance = distance;
                                        collideBorder.border = border;
                                        collideBorder.objBorders = objBorders;
                                        collideBorder.brick = e;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        if (collideBorder.border != null) {
            switch (collideBorder.border) {
                case 'left': {
                    this.vector.reverseX();
                    returnObject.x = this.ReflectionX(collideBorder.objBorders.left.start.x, futurePositions, this.endWidth, "right");
                    break;
                }
                case 'right': {
                    this.vector.reverseX();
                    returnObject.x = this.ReflectionX(collideBorder.objBorders.right.start.x, futurePositions, this.endWidth, "left");
                    break;
                }
                case 'top': {
                    this.vector.reverseY();
                    returnObject.y = this.ReflectionY(collideBorder.objBorders.top.start.y, futurePositions, this.endHeight, "bottom");
                    break;
                }
                case 'bottom': {
                    this.vector.reverseY();
                    returnObject.y = this.ReflectionY(collideBorder.objBorders.bottom.start.y, futurePositions, this.endHeight, "up");
                    break;
                }
            }
            returnObject.brickDestroyed = true;
            returnObject.brick = collideBorder.brick;
        }


        if (returnObject.x == null && returnObject.y == null) {
            return null
        } else {
            if (returnObject.x == null) {
                returnObject.x = futurePositions.x;
            }
            if (returnObject.y == null) {
                returnObject.y = futurePositions.y;
            }
            return returnObject;
        }
    }

    /**
     * @param {number} reflectPointX
     * @param {{ x: number, y: number }} currentPos
     * @param {Number} width
     */
    ReflectionX(reflectPointX, currentPos, width, direction) {
        let correctlyPosX = null;
        if (direction == "right") {   // →
            let reflectDeep = currentPos.x - reflectPointX + width;
            correctlyPosX = reflectPointX - reflectDeep - width;
        } else {                            // ← 
            let reflectDeep = reflectPointX - currentPos.x;
            correctlyPosX = reflectPointX + reflectDeep;
        }
        return correctlyPosX;
    }

    /**
     * @param {number} reflectPointY
     * @param {{ x: number, y: number }} currentPos
     * @param {Number} height
     */
    ReflectionY(reflectPointY, currentPos, height, direction) {
        let correclyPosY = null;
        if (direction == "bottom") {   // ↓
            let reflectDeep = currentPos.y - reflectPointY + height;
            correclyPosY = reflectPointY - reflectDeep - height;
        } else {                            // ↑
            let reflectDeep = reflectPointY - currentPos.y;
            correclyPosY = reflectPointY + reflectDeep;
        }
        return correclyPosY;
    }

    /**
     * @param {Vector2} vectorStart
     * @param {Vector2} vectorEnd
     * @param {Vector2} borderStart
     * @param {Vector2} borderEnd
     */
    DetectBorder(vectorStart, vectorEnd, borderStart, borderEnd) {
        // https://stackoverflow.com/questions/13937782/calculating-the-point-of-intersection-of-two-lines

        let ua, ub, denom = (borderEnd.y - borderStart.y) * (vectorEnd.x - vectorStart.x) - (borderEnd.x - borderStart.x) * (vectorEnd.y - vectorStart.y);
        if (denom == 0) {
            return null;
        }
        ua = ((borderEnd.x - borderStart.x) * (vectorStart.y - borderStart.y) - (borderEnd.y - borderStart.y) * (vectorStart.x - borderStart.x)) / denom;
        ub = ((vectorEnd.x - vectorStart.x) * (vectorStart.y - borderStart.y) - (vectorEnd.y - vectorStart.y) * (vectorStart.x - borderStart.x)) / denom;
        return {
            x: vectorStart.x + ua * (vectorEnd.x - vectorStart.x),
            y: vectorStart.y + ua * (vectorEnd.y - vectorStart.y),
            seg1: ua >= 0 && ua <= 1,
            seg2: ub >= 0 && ub <= 1
        };
    }

    /**
     * @param {Vector2} ballCenter
     * @param {Vector2} corner
     */
    CheckCollideBallWithCorner(ballCenter, corner) {
        let distance = ballCenter.DistanceTo(corner);
        if (distance <= this.radius) {
            return true;
        } else {
            return false;
        }
    }
}