import Icible from "./Icible";
import range from "../functions/range";

class CibleCricket implements Icible{
    mapZone:{ [key: number]: any } ;
    mapPlayerClose:{ [key: number]: {[key: number]:number} }
    /*
    {zone:
        {
            idPlayer:nbClosing
        }
    }
    */
    mapCloseZone:{ [key: number]: boolean }
    constructor(){
        let number:number;
        this.mapZone={};
        this.mapPlayerClose={};
        this.mapCloseZone={};
        for (number of range(15,21).concat([-1]))
            this.mapZone[number]=((pos:number,id:number)=>this.getAplly(number,pos,id)).bind(this);
            this.mapPlayerClose[number]={};
            this.mapCloseZone[number]=false;
        for (number of (range(1,21).concat(range(1,21))))
            console.log("crea",number,this.mapZone[number](3));
    }
    getAplly(value:number,pos:number,idPlayer:number){
        switch (pos) {
            case 0:
                return this.closeOrScore(-1,idPlayer,50);
            case 2:
                return this.closeOrScore(value,idPlayer,value)+this.getAplly(value,-1,idPlayer);
            case 4:
                return this.closeOrScore(value,idPlayer,value)+this.getAplly(value,2,idPlayer);
            default:
                return this.closeOrScore(value,idPlayer,value);
        }
    }
    closeOrScore(zone:number,idPlayer:number,value:number){
        if (this.mapCloseZone[zone]===true) return 0;
        else{
            if (this.mapPlayerClose[zone][idPlayer]<3) {
                if (++this.mapPlayerClose[zone][idPlayer]===3)
                    this.closeZone(zone);
            }
            else return value
        }
    }
    closeZone(zone:number){
        let close:boolean = true;
        for (let idPlayer of Object.keys(this.mapPlayerClose[zone])){
            if (this.mapPlayerClose[zone][idPlayer]<3){
                close=false;
                break;
            }
        }
        if (close) this.mapCloseZone[zone]=true;
    }
}
export default CibleCricket;