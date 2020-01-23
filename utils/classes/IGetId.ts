import IStatus from "./IStatus";
import GameEngine from "../../game/GameEngine";

interface IGetId{
    getId():number;
}
class GetCurrentPlayerId implements IGetId{
    context:GameEngine;
    constructor(){
        this.context=undefined;
    }
    setContext(context:GameEngine){
        this.context=context;
    }
    getId(){return this.context?this.context.getCurrentPlayerId():undefined}

}
export default GetCurrentPlayerId;