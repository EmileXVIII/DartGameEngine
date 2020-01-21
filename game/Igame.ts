import Player from "../player/Player";

interface Igame{
    id: number;
    mode: string;
    name: string;
    currentPlayerId: string;
    status: string;
    createdAt: string;
    mapPlayerScore : object;
    mapPlayer : object;
    maxShotNumber:number;
    //enginePayload = {}; // Données facultatives de l'engine, principalement pour le cricket 
    handleShot(value:number,pos:number):void;
    hasStarted():boolean;
    deskWinner(winnerId:string):void;
    addPlayer(player:Player):void;
    addPlayers(players:Array<Player>):void;
    getCurrentPlayer():Player;
    nextPlayer():void;
}
export default Igame;