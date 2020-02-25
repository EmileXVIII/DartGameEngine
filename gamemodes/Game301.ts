import Game from "../game/Game";
import IScorer from "../scorer/IScorer";
import GetCurrentPlayerId from "../utils/classes/IGetId";
import Cible301 from "../cibles/Cible301";
import ICible from "../cibles/ICible";
import IShot from "../game/IShot";
import mainbis from "../mainbis";

class Game301 extends Game implements IScorer{
    constructor(name:string){
        super(name,"301",3,301,0);
        this.cible=new Cible301();
    }
    score(shot:IShot,originalShot:IShot){
        this.cible.showCibleShot(originalShot);
        let actualScore=this.getScore(this.getCurrentPlayerId());
        if ((actualScore > shot.getShotValue() && (actualScore-shot.getShotValue())!==1)||(actualScore-shot.getShotValue()===0&&shot.getShotPosition()===4)){
            let newScore=actualScore-shot.getShotValue();
            this.setScore(this.getCurrentPlayerId(),newScore);
            mainbis.winListener.emit("games/"+this.getId()+"/players",this.mapPlayer.getPlayer(this.getCurrentPlayerId()).bddId,newScore);
        }
    }
}
export default Game301;