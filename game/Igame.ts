import Player from "../player/Player";

interface Igame{
    //enginePayload = {}; // Données facultatives de l'engine, principalement pour le cricket 
    handleShot(value:number,pos:number):void;
    hasStarted():boolean;
    addPlayer(player:Player):void;
    addPlayers(players:Array<Player>):void;
    type callbackWithReturnZoneAndPosFromCenterAsPromise = (number,number)=>Promise<number>;
    runGame(callbackWithReturnZoneAndPosFromCenterAsPromise:Function, handleShot:Function):Promise<void>;
}
export default Igame;