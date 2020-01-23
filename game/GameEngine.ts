import Player from "../player/Player";
import Igame from "./Igame";
import IStatus from "../utils/classes/IStatus";
import IShotReader from "../console/IShotReader";

class GameEngine {
    private currentPlayerId: number;
    private currentShotNumber: number;
    private game:Igame;
    private status:IStatus;
    private hasNotPlayListIds : Array<number>;
    private shotReader:IShotReader;
    constructor(game:Igame, shotReader:IShotReader, status:IStatus) {
        this.status=status;
        this.currentShotNumber=0;
        this.game=game;
        this.runGame.bind(this);
        this.shotReader=shotReader;
    }
    allowGetCurrentPlayerId(){this.game.getCurrentPlayerId.setContext(this)}
    deskWinner(playerId:number){return this.game.doIfStarted(
        (()=>{
            console.log(`${this.game.mapPlayer.getPlayer(playerId).name} is the Winner`);
            this.game.setStatus('ended'); 
        }
        ).bind(this),
        "deskWinner");
    }
    getCurrentPlayer(){
        return this.game.mapPlayer.getPlayer(this.currentPlayerId)
    }
    getCurrentPlayerId(){return this.currentPlayerId}
    getThisId(){
        return this.status.getId();
    }
    getName(){
        return this.status.getName();
    }
    private initAll(){
        this.initHasNotPlayListIds();
        this.game.setStatus('started');
        this.nextPlayer();
        this.allowGetCurrentPlayerId();
    }
    initHasNotPlayListIds(){
        this.hasNotPlayListIds = <Array<number>><unknown> this.game.mapPlayer.getMapKeys().slice(0)
    }
    logTurn(){
        console.log(`${this.game.mapPlayer.getPlayer(this.currentPlayerId).name} will now play it's ${this.currentShotNumber+1} shot`)
    }
    nextPlayer(){return this.game.doIfStarted(
        (()=>{
            if (this.hasNotPlayListIds.length==0) this.initHasNotPlayListIds()
            this.currentPlayerId=this.hasNotPlayListIds.pop()
        }
        ).bind(this),
        "nextPlayer");
    }
    async runGame(){
        if(this.game.getPlayertCount()===0){console.warn("Not enought Players");return "Not enought Players"}
        if(!(this.game.hasStarted())) {
            this.initAll();
            this.game.setStatus("started");
        }
        this.logTurn();
        while (this.game.hasStarted()){
            let zone,posFromCenter;
            [zone,posFromCenter]= await this.shotReader.askShot().then(res=>[res.zone,res.posFromCenter]).catch((err)=>{console.error(err); return [null,null]})//source.readline.question("Write Shot : 'zone:number posFromCenter:number'",(zone:string ,posFromCenter:string)=>{
            console.log("zone",zone,"pos",posFromCenter);
            this.game.handleShot(zone,posFromCenter);
            this.game.showAvancement(this.currentPlayerId);
        }
    }
}
export default GameEngine;