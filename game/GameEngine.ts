import Player from "../player/Player";
import Igame from "./Igame";
class ShotPosition{
    zone:number;
    posFromCenter:number;
}
interface IShotReader{
    askShot():Promise<ShotPosition>;
}

class GameEngine {
    private createdAt: string ;
    private currentPlayerId: number;
    private currentShotNumber: number;
    private game:Igame;
    private hasNotPlayListIds : Array<number>;
    private id: number;
    private mapPlayer : { [key: string]: Player };
    private mapPlayerScore : { [key: string]: number };
    private mode: string;
    private nbPlayers:  number;
    private name: string;
    private shotReader:IShotReader;
    private status: string;
    constructor(mode: string, name: string, game:Igame, shotReader:IShotReader) {
        this.currentShotNumber=0;
        this.game=game;
        this.name=name;
        this.mapPlayer={};
        this.mapPlayerScore={};
        this.mode=mode;
        this.nbPlayers=0;
        this.runGame.bind(this);
        this.shotReader=shotReader;
        this.status='draft';
    }
    addPlayer(player: Player){
        if(this.status='draft'){
            player.id=++this.nbPlayers;
            this.mapPlayer[this.nbPlayers]=player;
        }
        else
        console.warn(`You can't add a player on a ${this.status} game`)
    }
    addPlayers(players: Array<Player>){
        for (let player of players) this.addPlayer(player)
    }
    doIfStarted(callback,callbackName:string){
        console.log("doIfStarted",!!this);
        return this.hasStarted()
        ?callback()
        :this.warnNotAllowed(callbackName)
    }
    deskWinner(playerId:number){return this.doIfStarted(
        (()=>{
            console.log(`${this.mapPlayer[playerId].name} is the Winner`);
            this.status='ended' 
        }
        ).bind(this),
        "deskWinner");
    }
    getMode(){
        return this.mode;
    }
    getCurrentPlayer(){
        return this.mapPlayer[this.currentPlayerId]
    }
    hasStarted(){
        if (this.status='started')
        return true
        return false;
    }
    initAll(){
        this.initHasNotPlayListIds();
        this.initScore(0);
        this.status='started';
        this.nextPlayer();
    }
    initHasNotPlayListIds(){
        this.hasNotPlayListIds = <Array<number>><unknown> Object.keys(this.mapPlayer).slice(0)
    }
    initScore(value:number){
        for (let playerId of Object.keys(this.mapPlayer)){
            this.mapPlayerScore[playerId]=value;
        }
    }
    logTurn(){
        console.log(`${this.mapPlayer[this.currentPlayerId].name} will now play it's ${this.currentShotNumber+1} shot`)
    }
    nextPlayer(){return this.doIfStarted(
        (()=>{
            if (this.hasNotPlayListIds.length==0) this.initHasNotPlayListIds()
            this.currentPlayerId=this.hasNotPlayListIds.pop()
        }
        ).bind(this),
        "nextPlayer");
    }
    async runGame(){
        if(!(this.status==="started")) this.initAll();
        this.logTurn();
        while (this.status=="started"){
            let zone,posFromCenter;
            [zone,posFromCenter]= await this.shotReader.askShot().then(res=>[res.zone,res.posFromCenter]).catch((err)=>{console.error(err); return [null,null]})//source.readline.question("Write Shot : 'zone:number posFromCenter:number'",(zone:string ,posFromCenter:string)=>{
            console.log("zone",zone,"pos",posFromCenter);
            this.game.handleShot(zone,posFromCenter);
        }
    }
    scoreConsoleLog(){
        console.log(this.mapPlayer[this.currentPlayerId].name, `has now ${this.mapPlayerScore[this.currentPlayerId]} points`)
    }
    warnNotAllowed(operation:string){
        console.log(`${this.status} doesn't allow "${operation}"`)
    }
}
export default GameEngine;