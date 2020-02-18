import IShotReader from "../console/IShotReader";
import Shot from "../game/Shot";
import GameEngine from "../game/GameEngine";
import awaitXs from "../utils/functions/awaitXS";
import convertAPIshot from "../utils/functions/convertAPIshot";
import Game from "../game/Game";
const axios = require("axios")
const axiosLocal = axios.create(
    {
        baseURL: 'http://localhost:8080',
        headers: {'content-type': 'application/json'},
    }
)

class ApiShotAsker implements IShotReader{
    lastId:number;
    gameId:number;
    game:Game;
    constructor(gameId:number,lastId:number,game:Game){
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
            let result = await axiosLocal.post("/shots?_method=get&hasBody=1",{"gameId":this.gameId,"playerId":this.game.getCurrentPlayerId()})
            let countShot:number=result.data.length;
            while(countShot-i!==0&&!end){
                let idShot:number=result.data[i].id;
                if (idShot>this.lastId){
                    console.log("shot recieved")
                    end=true;
                    this.lastId=idShot;
                    return convertAPIshot.toShot(result.data)
                }
            }
        }
        while(!end)
    }
}
export default ApiShotAsker;