import Game301 from "./game/Game";
import Player from "./player/Player";
import Inquirer from "./console/Inquirer";
import Igame from "./game/Igame";
import GameEngine from "./game/GameEngine";
import Status from "./utils/classes/Status";
//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT="./tsconfig.json";
function main(){
    let aaa= new Player("aaa","aaa@dartgame.fr");
    let bbb= new Player("bbb","bbb@dartgame.fr");
    let ccc= new Player("ccc","ccc@dartgame.fr");
    let game301a = new Game301("game301a");
    let inquirer = new Inquirer();
    let gameEngine = new GameEngine(game301a,inquirer,new Status("FirstGameEngine"))
    game301a.addPlayers([aaa,bbb,ccc])
    gameEngine.runGame();
}
main();