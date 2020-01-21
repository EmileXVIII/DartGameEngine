import Game from "../../game/Game";
import Igame from "../../game/Igame";
import Cible301 from "../../cibles/Cible301";
import Source from "../../console/Source";

class Game301 extends Game implements Igame{
    cible:Cible301;
    maxShotNumber:number;
    currentShotNumber:number;
    constructor(name: string){
        super("301",name);
        this.cible=new Cible301();
        this.maxShotNumber=3;
        this.currentShotNumber=0;
        this.handleShot.bind(this);
        this.runGame.bind(this);
    }
    runGame(callbackWithReturnZoneAndPosFromCenterAsPromise){
        return super.runGame(callbackWithReturnZoneAndPosFromCenterAsPromise,this.handleShot)
    }
    
    handleShot(zone:number,posFromCenter:number) {
        return this.doIfStarted(
            ()=>{
                this.currentShotNumber++;
                let value=this.cible.mapZone[zone](posFromCenter);
                if (this.mapPlayerScore[this.currentPlayerId]<value){
                    this.scoreConsoleLog();
                }
                else 
                    this.mapPlayerScore[this.currentPlayerId]-=value
                if (this.mapPlayerScore[this.currentPlayerId]!==0 && this.currentShotNumber>this.maxShotNumber){
                    this.currentShotNumber=0;
                    this.nextPlayer();
                }
                if(this.mapPlayerScore[this.currentPlayerId]===0) this.deskWinner(this.currentPlayerId);
                else {
                    console.log(`${this.mapPlayer[this.currentPlayerId].name} will now play it's ${this.currentShotNumber} shot`)
                }
            },
            "handleShot"
        )
    }
    init(){
        super.init();
        for (let playerId in Object.keys(this.mapPlayer)){
            this.mapPlayerScore[playerId]=301;
        }
        this.status='started';
    }
}
export default Game301; //module.exports = Game301;