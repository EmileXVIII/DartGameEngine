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
    handleShot(value:number,pos:number);
    hasStarted();
    deskWinner(winnerId:string);
    addPlayer(player:Player);
    getCurrentPlayer();
    nextPlayer();
}
export default Igame;