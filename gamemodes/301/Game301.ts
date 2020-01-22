import Game from "../../game/Game";
import Igame from "../../game/Igame";
import Cible301 from "../../cibles/Cible301";
import range from "../../utils/functions/range";
import MapPlayer from "../../player/MapPlayer";
import DoIfStartedExtention from "../../utils/classes/DoIfStarted";
class Game301 extends DoIfStartedExtention implements Igame{
    private cible:Cible301;
    private createdAt: string ;
    private currentShotNumber:number;
    public mapPlayer : MapPlayer;
    private mapPlayerScore : { [key: string]: number };
    private maxShotNumber:number;
    private mode: string;
    private name: string;
    constructor(name: string){
        super();
        this.mapPlayer=new MapPlayer(this.hasStarted.bind(this));
        this.mapPlayerScore={};
        this.cible=new Cible301();
        this.maxShotNumber=3;
        this.handleShot.bind(this);
    }
    initScore(value:number){
        for (let playerId of this.mapPlayer.getMapKeys()){
            this.mapPlayerScore[playerId]=value;
        }
    }
    showAvancement(currentPlayerId){
        console.log(this.mapPlayer[currentPlayerId].name, `has now ${this.mapPlayerScore[currentPlayerId]} points`)
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
            }).bind(this),"handleShot"
        )
    }
    init(){
        this.initScore(301);
    }
}
export default Game301; //module.exports = Game301;