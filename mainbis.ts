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
const MyEventListener= require('./utils/classes/MyEventListener');
let winListener = new MyEventListener();
const axios = require("axios")
const axiosLocal = axios.create(
    {
        baseURL: 'http://localhost:8080',
        headers: {'content-type': 'application/json','accept':'application/json'},
    }
)
async function mainBis(mode,gameAPIid){
    let inquirer:IShotReader;
    let game:Igame;
    if(assertNumber(gameAPIid)){
        game=await createGame(+gameAPIid)
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
            winListener.on("games/"+game.getId(),(nameWinner)=>{
                axiosLocal.patch("games/"+game.getId(),{winBy:nameWinner})
                axiosLocal.patch("games/"+game.getId(),{status:"ended"})
                winListener.off("games/"+game.getId(),(nameWinner)=>{
                    axiosLocal.patch("games/"+game.getId(),{winBy:nameWinner})
                    axiosLocal.patch("games/"+game.getId(),{status:"ended"})
                })
            })
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
export default {mainbis:mainBis,winListener:winListener};