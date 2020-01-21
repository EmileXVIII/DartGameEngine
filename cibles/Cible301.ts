import Icible from "./Icible";
import range from "../functions/range";

class Cible301 implements Icible{
    mapZone:{ [key: string]: any } ;
    constructor(){
        let number:number;
        this.mapZone={};
        for (number of range(1,21))
            this.mapZone[number]=(pos:number)=>this.getAplly(number,pos);
    }
    getAplly(value:number,pos:number){
        switch (pos) {
            case 0:
                return 50;
            case 2:
                return 2*value;
            case 4:
                return 3*value;
            default:
                return value;
        }
    }
}
export default Cible301;