import Player from "../player/Player";
import MapPlayer from "../player/MapPlayer";
import DoIfStartedExtention from "../utils/classes/DoIfStarted";

interface Igame extends DoIfStartedExtention{
    getStatus():"draft"|"ended"|"started";
    handleShot(value:number,pos:number):void;
    showAvancement(curentPlayerId:number):void;
    mapPlayer:MapPlayer;
}
export default Igame;