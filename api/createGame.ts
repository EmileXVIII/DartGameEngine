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
async function createGame(id:number):Promise<Game>{
    let result = await axiosLocal.get("/games/"+id);
    let game:Game;
    if(result.status==404) throw (new Error("404 gameNotFound"));
    switch(result.data.mode){
        case "301":
            game=new Game301(result.data.name)
            break;
        default:
            throw(new Error("500 game not implemented"))
    }
    game.setId(id)
    if(result.data.status!=="started") throw(new Error("400 game not started"))
    result = await axiosLocal.get("/games/"+id +"/players");
    if (result.data.length===0) throw(new Error("400 no players in game"))
    for(let apiPlayer of result.data){
        let player = new Player(apiPlayer.name,apiPlayer.email)
        player.setBddId(+apiPlayer.id)
        game.addPlayer(player)
    }
    return game;
}
export default createGame;