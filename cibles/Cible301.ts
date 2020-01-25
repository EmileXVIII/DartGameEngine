import Icible from "./ICible";
import range from "../utils/functions/range";

class Cible301 implements Icible{
    mapZone:{ [key: string]: any } ;
    constructor(){
        let toto:number;
        this.mapZone={};
        for (let zone of range(1,21))
            this.mapZone[zone]=(function(pos:number){return this.getShotResult(zone,pos)}).bind(this);
    }
    getShotResult(value:number,pos:number){
        let shotResult:number;
        pos=Number(pos);

        switch (pos) {
            case 0:
                shotResult = 50;
                break;
            case 2:
                shotResult = 2*value;
                break;
            case 4:
                shotResult = 3*value;
                break;
            default:
                shotResult = value;
                break;
        }
        console.log(`xx:getShotResult(${value},${pos}) : ${shotResult}, typeOf ${typeof(pos)}`)
        return shotResult;
    }
}
export default Cible301;