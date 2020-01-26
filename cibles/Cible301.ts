import Icible from "./ICible";
import range from "../utils/functions/range";
import IShot from "../game/IShot";
import Shot from "../game/Shot";
import MatrixCibleLogable from "../console/MatrixCibleLogable";

class Cible301 implements Icible{
    mapZone:{ [key: string]: any } ;
    matrixCible:MatrixCibleLogable;
    constructor(){
        let toto:number;
        this.mapZone={};
        this.matrixCible = new MatrixCibleLogable();
        this.matrixCible.createMatrix(20);
        for (let zone of range(1,21))
            this.mapZone[zone]=(function(pos:number){return this.getShotResult(zone,pos)}).bind(this);
    }
    showCibleShot(shot:IShot){
        let matrixCible301=this.matrixCible.clone();
        matrixCible301.changeMessage(shot,"X");
        matrixCible301.logInConsole();
    }
    getShotResult(shot:IShot){
        let result:number;
        switch (Number(shot.getShotPosition())) {
            case 0:
                result = 50;
                break;
            case 2:
                result = 3*shot.getShotValue();
                break;
            case 4:
                result = 2*shot.getShotValue();
                break;
            default:
                result = shot.getShotValue();
                break;
        }
        //console.log(`xx:getShotResult(${value},${pos}) : ${shotResult}, typeOf ${typeof(pos)}`)
        return new Shot(shot.getShotPosition(),result);
    }
}
export default Cible301;