import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
function getRandomNum(min, max) {
    return Math.random() * (max - min);
}

    export class Fish2 extends Actor {
    score
    constructor() {
        super({width:Resources.Fish2.width, height:Resources.Fish2.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Fish2.toSprite())
        this.pos = new Vector(1380, getRandomNum(0, 700))
        this.vel = new Vector(-180-(this.engine.currentScene.score*4), 0)
        this.on("exitviewport", (event) => this.exitView())
    }

    exitView(event){
        this.engine.currentScene.updateLives();
        this.kill()
    }
}
