import Igame from "./Igame";
import MapPlayer from "../player/MapPlayer";
import DoIfStartedExtention from "../utils/classes/DoIfStarted";
import IScorer from "../scorer/IScorer";
import IScorable from "./IScorable";
import Player from "../player/Player";
import IGameEngine from "./IGameEngine";
import ICible from "../cibles/ICible";
import IShot from "./IShot";
class Game extends DoIfStartedExtention implements IScorable,Igame{
    public cible:ICible;
    public currentShotNumber:number;
    private currentPlayerId;
    private initScoreValue:number;
    public mapPlayer : MapPlayer;
    private mapPlayerScore : { [key: string]: number };
    public maxShotNumber:number;
    private mode: string;
    private winScoreValue:number;
    constructor(name: string,mode:string,maxShotNumber:number,initScoreValue:number,winScoreValue:number){
        super(name);
        this.mapPlayer=new MapPlayer(()=>this.getStatus()==="draft");
        this.mapPlayerScore={};
        this.mode=mode;
        this.maxShotNumber=maxShotNumber;
        this.initScoreValue=initScoreValue;
        this.winScoreValue=winScoreValue;
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
    getCurrentPlayerId(){return this.currentPlayerId}
    getPlayerCount(){return this.mapPlayer.getLen()}
    getPlayerById(id:number){
        return this.mapPlayer.getPlayer(id);
    }
    getScore(playerId:number){
        return this.mapPlayerScore[playerId];
    }
    getWinScoreValue(){return this.winScoreValue}
    setScore(playerId:number,score:number){
        this.mapPlayerScore[playerId]=score;
    }
    initScore(value:number){
        for (let playerId of this.mapPlayer.getMapKeys()){
            this.mapPlayerScore[playerId]=value;
        }
    }
    setCurrentPlayerId(playerId:number){this.currentPlayerId=playerId}
    score(shotResult:IShot,originalShot:IShot){}
    showAvancement(currentPlayerId:number){
        console.log(this.mapPlayer.getPlayer(currentPlayerId).name, `has now ${this.mapPlayerScore[currentPlayerId]} points`)
    }
    init(){
        this.initScore(this.initScoreValue);
        this.currentShotNumber=1;
    }
}
export default Game; //module.exports = Game301;