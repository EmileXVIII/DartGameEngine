import Player from "../player/Player";
import Igame from "./Igame";
import IStatus from "../utils/classes/IStatus";
import IShotReader from "../console/IShotReader";
import ShotPosition from "../console/ShotPosition";
import IGameEngine from "./IGameEngine";
import IShot from "./IShot";
import Shot from "./Shot";

class GameEngine implements IGameEngine{
    private currentPlayerId: number;
    //private currentShotNumber: number;
    private game:Igame;
    private status:IStatus;
    private hasNotPlayListIds : Array<number>;
    private shotReader:IShotReader;
    constructor(game:Igame, shotReader:IShotReader, status:IStatus) {
        this.status=status;
        this.game=game;
        this.runGame.bind(this);
        this.shotReader=shotReader;
    }
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
    getCurrentPlayerId(){return this.game.getCurrentPlayerId()}
    getThisId(){
        return this.status.getId();
    }
    getName(){
        return this.status.getName();
    }
    handleShot(shot:IShot) {
        console.log("handleShot",!!this);
        return this.game.doIfStarted(
            (function(){
                console.log("anonymous",!!this);
                //console.log("cible",this.cible);
                this.game.currentShotNumber++;
                let shotResult =this.game.cible.getShotResult(shot);//this.cible.mapZone[zone](posFromCenter);
                this.game.score(shotResult,shot);
                this.game.showAvancement(this.getCurrentPlayerId());
                if (this.game.mapPlayerScore[this.getCurrentPlayerId()]!==0 && this.game.currentShotNumber>this.game.maxShotNumber){
                    this.game.currentShotNumber=1;
                    this.nextPlayer();
                }
                if(this.game.mapPlayerScore[this.getCurrentPlayerId()]===0) this.deskWinner(this.getCurrentPlayerId());
            }).bind(this),"handleShot"
        )
    }
    private initAll(){
        this.initHasNotPlayListIds();
        this.game.setStatus('started');
        this.nextPlayer();
    }
    initHasNotPlayListIds(){
        this.hasNotPlayListIds = <Array<number>><unknown> this.game.mapPlayer.getMapKeys().slice(0)
    }
    logTurn(){
        this.game.showAvancement(this.getCurrentPlayerId());
        console.log(`${this.game.mapPlayer.getPlayer(this.getCurrentPlayerId()).name} will now play it's ${this.game.currentShotNumber} shot`)
    }
    nextPlayer(){return this.game.doIfStarted(
        (()=>{
            if (this.hasNotPlayListIds.length===0) this.initHasNotPlayListIds()
            this.game.setCurrentPlayerId(this.hasNotPlayListIds.pop());
        }
        ).bind(this),
        "nextPlayer");
    }
    async runGame(){
        if(this.game.getPlayerCount()===0){console.warn("Not enought Players");return "Not enought Players"}
        if(!(this.game.hasStarted())) {
            this.game.init();
            this.initAll();
            this.game.setStatus("started");
        }
        this.logTurn();
        while (this.game.hasStarted()){
            let shot:IShot= await this.shotReader.askShot().catch((err)=>{console.error(err); return null})//source.readline.question("Write Shot : 'zone:number posFromCenter:number'",(zone:string ,posFromCenter:string)=>{
            //let shot:Shot = new Shot(2,20);
            console.log("###zone",shot.getShotValue(),"pos",shot.getShotPosition());
            this.handleShot(shot);
            if(this.game.hasStarted()) this.logTurn();
        }
    }
    setId(id:number){
        this.status.setId(id);
    }
}
export default GameEngine;