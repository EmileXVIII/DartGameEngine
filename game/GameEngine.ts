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
    private currentPlayerId: number;
    private currentShotNumber: number;
    private game:Igame;
    private hasNotPlayListIds : Array<number>;
    private id: number;
    private name: string;
    private shotReader:IShotReader;
    constructor(name: string, game:Igame, shotReader:IShotReader) {
        this.currentShotNumber=0;
        this.game=game;
        this.name=name;
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
    getThisId(){
        return this.id
    }
    getName(){
        return this.name;
    }
    initAll(){
        this.initHasNotPlayListIds();
        this.game.setStatus('started');
        this.nextPlayer();
    }
    initHasNotPlayListIds(){
        this.hasNotPlayListIds = <Array<number>><unknown> Object.keys(this.game.mapPlayer).slice(0)
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
        if(!(this.game.hasStarted())) this.initAll();
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