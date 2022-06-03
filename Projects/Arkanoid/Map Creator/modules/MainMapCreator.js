import BricksPicker from "./BricksPicker.js";
import MapBuilderArea from "./MapBuilderArea.js";

export default class MainMapCreator{
    constructor(container){
        this.container = container;

        this.bricksPicker = new BricksPicker(this.container, 5, 10, 10, 2);
        this.mapBuilderArea = new MapBuilderArea(this.container, this.bricksPicker, 14, 9, 5, 2);

        this.Render();
    }

    Render(){

        this.bricksPicker.DrawCTX();
        this.mapBuilderArea.DrawCTX();

        requestAnimationFrame(this.Render.bind(this));
    }
}