import Player from "./player/Player";
import Inquirer from "./console/Inquirer";
import Igame from "./game/Igame";
import GameEngine from "./game/GameEngine";
import Status from "./utils/classes/Status";
import Game301 from "./gamemodes/Game301";
import intro from "./console/readMe";
import IShotReader from "./console/IShotReader";
import ApiShotAsker from "./api/ApiAsker";
import Game from "./game/Game";
import assertNumber from "./utils/functions/assertNumber";
import createGame from "./api/createGame";
//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT="./tsconfig.json";
function main(){
    let mode=process.argv[2];
    let gameAPIid=process.argv[3];
    let inquirer:IShotReader;
    let game:Game;
    if(assertNumber(gameAPIid)){
        game=createGame(+gameAPIid)
    }
    else{
        mode='console'
        let aaa:Player = new Player("aaa","aaa@dartgame.fr");
        let bbb:Player = new Player("bbb","bbb@dartgame.fr");
        let ccc:Player = new Player("ccc","ccc@dartgame.fr");
        game = new Game301("game301a");
        game.addPlayers([aaa,bbb,ccc])
    }
    switch(mode){
        case('API'):
        case('api'):
            mode='api'
            inquirer=new ApiShotAsker(game.getId(),0,game)
            break;
        default:
            mode='console'
            inquirer = new Inquirer();
            intro();
            break;  
    }
    let gameEngine:GameEngine = new GameEngine(game,inquirer,new Status("FirstGameEngine"))
    gameEngine.runGame();
}
main();