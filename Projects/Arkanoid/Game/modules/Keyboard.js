const Keys = {
    "Left1": 'KeyA',
    "Left2": 'ArrowLeft',
    "Right1": 'KeyD',
    "Right2": 'ArrowRight',
}

export default class Keyboard {
    constructor(domElement){
        this.domElement = domElement;

        this.moveLeft = false;
        this.moveRight = false;

        this.domElement.addEventListener('keydown', event => this.OnKeyDown(event), false);
        this.domElement.addEventListener('keyup', event => this.OnKeyUp(event), false);
    }

    OnKeyDown(e){
        switch(e.code){
            case Keys.Left1:{
                this.moveLeft = true;
                break;
            }
            case Keys.Left2:{
                this.moveLeft = true;
                break;
            }
            case Keys.Right1:{
                this.moveRight = true;
                break;
            }
            case Keys.Right2:{
                this.moveRight = true;
                break;
            }
        }
    }

    OnKeyUp(e){
        switch(e.code){
            case Keys.Left1:{
                this.moveLeft = false;
                break;
            }
            case Keys.Left2:{
                this.moveLeft = false;
                break;
            }
            case Keys.Right1:{
                this.moveRight = false;
                break;
            }
            case Keys.Right2:{
                this.moveRight = false;
                break;
            }
        }
    }
}