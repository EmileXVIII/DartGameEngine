import Engine from "./engine/Engine";
import Game301 from "./gamemodes/301/Game301";
import Player from "./player/Player";
import Inquirer from "./console/Inquirer";
//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT="./tsconfig.json";
function main(){
    let engine= new Engine();
    let aaa= new Player("aaa","aaa@dartgame.fr");
    let bbb= new Player("bbb","bbb@dartgame.fr");
    let ccc= new Player("ccc","ccc@dartgame.fr");
    let game301a = new Game301("game301a");
    let inquirer = new Inquirer();
    game301a.addPlayers([aaa,bbb,ccc])
    engine.addGame(game301a);
    game301a.runGame(()=>inquirer.askShots());
}
main();