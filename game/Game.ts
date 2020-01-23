import Igame from "./Igame";
import Cible301 from "../cibles/Cible301";
import range from "../utils/functions/range";
import MapPlayer from "../player/MapPlayer";
import DoIfStartedExtention from "../utils/classes/DoIfStarted";
import Icible from "../cibles/ICible";
import IScorer from "../scorer/IScorer";
import IScorable from "./IScorable";
import IScorableGame from "./IScorableGame";
import IGetId from "../utils/classes/IGetId";
import GetCurrentPlayerId from "../utils/classes/IGetId";
import Player from "../player/Player";
class Game extends DoIfStartedExtention implements IScorableGame{
    public getCurrentPlayerId:GetCurrentPlayerId;
    private cible:Icible;
    private currentShotNumber:number;
    private currentPlayerId;
    public mapPlayer : MapPlayer;
    private mapPlayerScore : { [key: string]: number };
    private maxShotNumber:number;
    private mode: string;
    private scorer:IScorer;
    constructor(name: string){
        super(name);
        this.getCurrentPlayerId=new GetCurrentPlayerId();
        this.mapPlayer=new MapPlayer(()=>this.getStatus()==="draft");
        this.mapPlayerScore={};
        this.mode="301";
        this.cible=new Cible301();
        this.maxShotNumber=3;
        this.handleShot.bind(this);
    }
    addPlayer(player: Player){
        this.mapPlayer.addPlayer(player);
    }
    addPlayers(players: Array<Player>){
        this.mapPlayer.addPlayers(players);
    }
    getMode(){
        return this.mode;
    }
    getPlayertCount(){return this.mapPlayer.getLen()}
    getScore(playerId:number){
        return this.mapPlayerScore[playerId];
    }
    setScore(playerId:number,score:number){
        this.mapPlayerScore[playerId]=score;
    }
    initScore(value:number){
        for (let playerId of this.mapPlayer.getMapKeys()){
            this.mapPlayerScore[playerId]=value;
        }
    }
    score(value:number){}
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
                this.score(value);
                this.showAvancement(this.currentPlayerId);
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
        this.currentShotNumber=0;
    }
}
export default Game; //module.exports = Game301;