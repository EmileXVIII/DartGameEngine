import Player from "../player/Player";
import MapPlayer from "../player/MapPlayer";
import DoIfStartedExtention from "../utils/classes/DoIfStarted";
import GetCurrentPlayerId from "../utils/classes/IGetId";

interface Igame extends DoIfStartedExtention{
    getCurrentPlayerId:GetCurrentPlayerId;
    addPlayer(player:Player):any;
    addPlayers(players:Player[]);
    getMode():string;
    getPlayertCount():number;
    getStatus():"draft"|"ended"|"started";
    handleShot(value:number,pos:number):void;
    showAvancement(curentPlayerId:number):void;
    mapPlayer:MapPlayer;
}
export default Igame;