/*import Game from "../game/Game";
import Igame from "../game/Igame";
import range from "../functions/range";
class Cricket extends Game implements Igame{
    maxShotNumber:number;
    constructor(name:string){
        super("cricket",name);
        this.maxShotNumber=3;

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
                let value=this.cible.getApply(zone,posFromCenter);//this.cible.mapZone[zone](posFromCenter);
                console.log("zone",zone)
                for(let i of range(1,21))
                    console.log("points",i,this.cible.mapZone[i](3),value)
                if (this.mapPlayerScore[this.currentPlayerId]>value)
                    this.mapPlayerScore[this.currentPlayerId]+=value;
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
}
export default Cricket;
*/