import Icible from "./Icible";
import range from "../functions/range";

class Cible301 implements Icible{
    mapZone:{ [key: string]: any } ;
    constructor(){
        let toto:number;
        this.mapZone={};
        for (let zone of range(1,21))
            this.mapZone[zone]=(function(pos:number){return this.getAplly(zone,pos)}).bind(this);
        for (toto of range(1,21))
            console.log("crea",toto,this.mapZone[toto](3));
    }
    getShotResult(value:number,pos:number){
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