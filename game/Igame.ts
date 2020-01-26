import Player from "../player/Player";
import MapPlayer from "../player/MapPlayer";
import DoIfStartedExtention from "../utils/classes/DoIfStarted";
import GetCurrentPlayerId from "../utils/classes/IGetId";
import IGameEngine from "./IGameEngine";
import IShot from "./IShot";

interface Igame extends DoIfStartedExtention{
    addPlayer(player:Player):any;
    addPlayers(players:Player[]);
    currentShotNumber:number;
    getCurrentPlayerId():number;
    setCurrentPlayerId(playerId:number):void;
    getMode():string;
    getPlayertCount():number;
    getStatus():"draft"|"ended"|"started";
    //handleShot(value:number,pos:number):void;
    //setGameEngine(gameEngine:IGameEngine):void;
    showAvancement(curentPlayerId:number):void;
    score(shotResult:IShot,originalShot:IShot):any;
    
    init():void
    mapPlayer:MapPlayer;

}
export default Igame;