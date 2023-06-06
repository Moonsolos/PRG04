import {Actor, Engine, Random, Timer, Vector, Label, Color, Font, FontUnit, Scene, Class, } from "excalibur";
import {Fish} from "./fish.js";
import {Fish2} from "./fish2.js";
import {Fish3} from "./fish3.js";
import {Background} from "./mapLoader.js";

export class gameScene extends Scene {
    constructor() {
        super();
    }
    i
    game
    engine
    score
    lives
    mylabel
    mylabel2

    onInitialize(Engine) {
        this.game = Engine
        this.timer = new Timer({
            fcn: () => this.spawn(Engine),
            interval: 1000,
            repeats: true
        })
        Engine.currentScene.add(this.timer)
        this.timer.start()

    }


    onActivate(ctx) {

        const backgroundLoop = new Background()
        this.add(backgroundLoop)
        const fish = new Fish();
        this.add(fish);
        this.score = 0
        this.i = 0
        this.lives = 3
        this.mylabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(100, 100),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.mylabel)

        this.mylabel2 = new Label({
            text: `Lives: ${this.lives}`,
            pos: new Vector(100, 150),
            font: new Font({
                family: 'impact',
                size: 40,
                unit: FontUnit.Px,
                color:Color.White
            }),
        })
        this.add(this.mylabel2)
    }
    updateLives(){
        this.lives--
        this.mylabel2.text = `Lives: ${this.lives}`
        if (this.lives <= 0){
            this.mylabel.kill()
            this.mylabel2.text = `You died`
            this.engine.goToScene("gameover", { score: this.score })
        }
    }
    updateScore(){
        this.score++
        this.mylabel.text = `Score: ${this.score}`
    }

    spawn(engine) {

        const fish2 = new Fish2(
            engine.random.integer(0, 700),
            engine.random.integer(0, 1399),
            this.i++,
        )
        this.add(fish2)
        if (this.engine.currentScene.i == 5){
            const fish3 = new Fish3(
                engine.random.integer(0, 700),
                engine.random.integer(0, 1399),
            )
            this.add(fish3)
            this.i = 0
        }

    }


}





