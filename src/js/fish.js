import {Actor, Vector, Input, Engine} from "excalibur";
import {ResourceLoader, Resources} from "./resources.js";
export class Fish extends Actor {

    constructor() {
        super({width:Resources.Fish.width, height:Resources.Fish.height})
    }

    onInitialize(engine) {
        this.engine = engine
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(200, 350)
        this.vel = new Vector(0, 0)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event)
    {event.other.kill();
        this.engine.currentScene.updateScore()
    }


    onPreUpdate(engine, _delta) {
        super.onPreUpdate(engine, _delta);
        let xspeed = 0
        let yspeed = 0
        if (engine.input.keyboard.isHeld(Input.Keys.W) || engine.input.keyboard.isHeld(Input.Keys.Up)) {yspeed = -400}
        if (engine.input.keyboard.isHeld(Input.Keys.S) || engine.input.keyboard.isHeld(Input.Keys.Down)) {yspeed = 400}
        this.vel = new Vector (xspeed, yspeed)
    }
    onPostUpdate(engine, _delta) {
        super.onPostUpdate(engine, _delta);
        if(this.pos.y < -50+Resources.Fish.width/2) {this.pos = new Vector(200,-50+Resources.Fish.width/2)}
        if(this.pos.y > 750-Resources.Fish.width/2) {this.pos = new Vector(200,750-Resources.Fish.width/2)}
    }


}





