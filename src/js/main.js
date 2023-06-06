import {Actor, Engine, Input, Random, Vector, } from "excalibur"
import {Resources, ResourceLoader } from './resources.js'
import {gameScene} from "./gameScene.js";
import {gameover} from "./gameover.js"
import {startMenu} from "./startMenu.js";

ResourceLoader.suppressPlayButton = true

export class Game extends Engine {

    constructor() {
        super({width: 1400, height: 700});
        this.start(ResourceLoader).then(() => this.startGame());
        this.random = new Random(1337)

    }

    startGame(engine) {

        this.engine = engine
        this.add("gameScene", new gameScene(this.engine))
        this.add("gameover", new gameover(this.engine))
        this.add("startMenu", new startMenu(this.engine))
        this.goToScene("startMenu")



    }

}
new Game()