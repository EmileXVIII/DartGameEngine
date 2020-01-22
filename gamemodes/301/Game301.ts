import Game from "../../game/Game";
import Igame from "../../game/Igame";
import Cible301 from "../../cibles/Cible301";
import range from "../../functions/range";
undefined
class Game301 extends Game implements Igame{
    cible:Cible301;
    maxShotNumber:number;
    currentShotNumber:number;
    constructor(name: string){
        super("301",name);
        this.cible=new Cible301();
        for(let i of range(1,21))
            console.log("cible",i,this.cible.mapZone[i](3))
        this.maxShotNumber=3;
        this.doIfStarted.bind(this);
        this.handleShot.bind(this);
        this.runGame.bind(this);
    }
    runGame(callbackWithReturnZoneAndPosFromCenterAsPromise){
        console.log("runGame",!!this);
        return super.runGame(callbackWithReturnZoneAndPosFromCenterAsPromise,this.handleShot.bind(this))
    }
    
    handleShot(zone:number,posFromCenter:number) {
        console.log("handleShot",!!this);
        return this.doIfStarted(
            (function(){
                console.log("anonymous",!!this);
                console.log(this.mapPlayerScore);
                console.log("cible",this.cible);
                this.currentShotNumber++;
                let value=this.cible.getShotResult(zone,posFromCenter);//this.cible.mapZone[zone](posFromCenter);
                console.log("zone",zone)
                for(let i of range(1,21))
                    console.log("points",i,this.cible.mapZone[i](3),value)
                if (this.mapPlayerScore[this.currentPlayerId]>value)
                    this.mapPlayerScore[this.currentPlayerId]-=value;
                this.scoreConsoleLog();
                if (this.mapPlayerScore[this.currentPlayerId]!==0 && this.currentShotNumber>this.maxShotNumber){
                    this.currentShotNumber=0;
                    this.nextPlayer();
                }
                if(this.mapPlayerScore[this.currentPlayerId]===0) this.deskWinner(this.currentPlayerId);
                else {
                    this.logTurn();
                }
            }).bind(this),
            "handleShot"
        )
    }
    init(){
        super.init();
        this.initScore(301);
    }
}
export default Game301; //module.exports = Game301;