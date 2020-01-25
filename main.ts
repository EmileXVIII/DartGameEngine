import Player from "./player/Player";
import Inquirer from "./console/Inquirer";
import Igame from "./game/Igame";
import GameEngine from "./game/GameEngine";
import Status from "./utils/classes/Status";
import Game301 from "./gamemodes/Game301";
//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT="./tsconfig.json";
function main(){
    let aaa:Player = new Player("aaa","aaa@dartgame.fr");
    let bbb:Player = new Player("bbb","bbb@dartgame.fr");
    let ccc:Player = new Player("ccc","ccc@dartgame.fr");
    let game301a:Igame = new Game301("game301a");
    let inquirer:Inquirer = new Inquirer();
    let gameEngine:GameEngine = new GameEngine(game301a,inquirer,new Status("FirstGameEngine"))
    game301a.addPlayers([aaa,bbb,ccc])
    gameEngine.runGame();
}
main();