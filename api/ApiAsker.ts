import IShotReader from "../console/IShotReader";
import Shot from "../game/Shot";
import GameEngine from "../game/GameEngine";
import awaitXs from "../utils/functions/awaitXS";
import convertAPIshot from "../utils/functions/convertAPIshot";
import Igame from "../game/Igame";
import Player from "../player/Player";
const axios = require("axios")
const axiosLocal = axios.create(
    {
        baseURL: 'http://localhost:8080',
        headers: {'content-type': 'application/json','accept':'application/json'},
    }
)

class ApiShotAsker implements IShotReader{
    lastId:number;
    gameId:number;
    game:Igame;
    constructor(gameId:number,lastId:number,game:Igame){
        this.lastId=lastId;
        this.gameId=gameId;
        this.game=game;
    }
    async askShot() {
        let end:boolean=false;
        console.log("awaiting of a shot")
        do{
            await awaitXs(0.5);
            let i = 0;
            let currentPlayerId=this.game.getCurrentPlayerId();
            let currentPlayer:Player=this.game.getPlayerById(+currentPlayerId)
            let result = await axiosLocal.post("/shots?_method=get&hasBody=1",{"gameId":""+this.gameId,"playerId":""+currentPlayer.bddId})
            let countShot:number=result.data.length;
            while(countShot-i!==0&&!end){
                let idShot:number=result.data[i].id;
                if (idShot>this.lastId){
                    console.log("shot recieved")
                    end=true;
                    this.lastId=idShot;
                    return convertAPIshot.toShot(result.data[i])
                }
                else i++
            }
        }
        while(!end)
    }
}
export default ApiShotAsker;