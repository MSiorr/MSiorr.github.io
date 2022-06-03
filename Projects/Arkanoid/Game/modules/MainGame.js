import GameBoard from "./GameBoard.js";

export default class MainGame {
    constructor(container) {
        this.container = container;

        this.gameBoard = new GameBoard(this.container, 6, 14, 9);

        this.startTime = Date.now();
        this.fps = 0;
        this.delta = 0;

        this.slowBallRender = false;

        this.slowBallFrames = 40;
        this.currentSlowFrames = 0;

        this.Render();
    }

    Render() {
        this.fps = Math.round(1000 / (Date.now() - this.startTime));
        this.startTime = Date.now();
        this.delta = 1 / this.fps;

        this.gameBoard.playerPalette.Update(this.delta);

        if (this.gameBoard.playerBall) {
            if (this.gameBoard.playerBall.timeToDestroy) {
                this.gameBoard.DestroyPlayerBall();
            } else {
                if (this.slowBallRender == false) {
                    this.gameBoard.playerBall.Update(this.delta, this.gameBoard.gameStart, this.gameBoard.bricksData);
                } else {
                    if (this.currentSlowFrames == 0) {
                        this.gameBoard.playerBall.Update(this.delta, this.gameBoard.gameStart, this.gameBoard.bricksData);
                        this.currentSlowFrames++
                    } else {
                        this.currentSlowFrames++
                    }
                    if (this.currentSlowFrames >= this.slowBallFrames) {
                        this.currentSlowFrames = 0;
                    }
                }
            }
        }

        this.gameBoard.DrawCTX();
        requestAnimationFrame(this.Render.bind(this));
    }
}