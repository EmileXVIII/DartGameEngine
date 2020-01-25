import Game from "../game/Game";
import IScorer from "../scorer/IScorer";
import GetCurrentPlayerId from "../utils/classes/IGetId";
import Cible301 from "../cibles/Cible301";
import ICible from "../cibles/ICible";

class Game301 extends Game implements IScorer{
    constructor(name:string){
        super(name,"301",3,301,0);
        this.cible=new Cible301();
    }
    score(value:number){
        let actualScore=this.getScore(this.getCurrentPlayerId());
        if (actualScore >= value && (actualScore-value)!==1)
        this.setScore(this.getCurrentPlayerId(),actualScore-value);
    }
}
export default Game301;