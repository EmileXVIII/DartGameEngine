import Game from "../game/Game";
import IScorer from "../scorer/IScorer";
import GetCurrentPlayerId from "../utils/classes/IGetId";

class Game301 extends Game implements IScorer{
    constructor(name:string){
        super(name,"301");
    }
    score(value:number){
        let actualScore=this.getScore(this.getCurrentPlayerId.getId());
        if (actualScore > value)
        this.setScore(this.getCurrentPlayerId.getId(),actualScore-value);
    }
}
export default Game301;