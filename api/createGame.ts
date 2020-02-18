import Game from "../game/Game";
import Game301 from "../gamemodes/Game301";
import Player from "../player/Player";

const axios = require("axios")
const axiosLocal = axios.create(
    {
        baseURL: 'http://localhost:8080',
        headers: {'content-type': 'application/json'},
    }
)
function createGame(id:number):Game{
    let result = axiosLocal.get("/games/"+id);
    let game:Game;
    if(result.status==404) throw (new Error("404 gameNotFound"));
    switch(result.data.mode){
        case "301":
            game=new Game301(result.data.name)
            break;
        default:
            throw(new Error("500 game not implemented"))
    }
    if(result.data.status!=="started") throw(new Error("400 game not started"))
    result = axiosLocal.get("/games/"+id +"/players");
    if (result.data.length===0) throw(new Error("400 no players in game"))
    for(let apiPlayer of result.data){
        let player = new Player(apiPlayer.name,apiPlayer.email)
        game.addPlayer(player)
    }
    return game;
}
export default createGame;