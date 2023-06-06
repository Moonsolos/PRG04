import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
import {Fish2} from "./fish2.js";
function getRandomNum(min, max) {
    return Math.random() * (max - min);
}

export class Fish3 extends Fish2 {
    score
    constructor() {
        super({width:Resources.Fish3.width, height:Resources.Fish3.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Fish3.toSprite())
        this.pos = new Vector(1380, getRandomNum(0, 700))
        this.vel = new Vector(-250-(this.engine.currentScene.score*4), 0)
        this.on("exitviewport", (event) => this.exitView())
        console.log('hi')
    }

    exitView(event){
        this.engine.currentScene.updateLives();
        this.kill()
    }

}