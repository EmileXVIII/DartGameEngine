import IShot from "./IShot";

class Shot implements IShot{
    private position:number;
    private value:number;
    constructor(position:number,value:number){
        this.position=position;
        this.value=value;
    }
    getShotPosition(){return this.position};
    getShotValue(){return this.value}
}
export default Shot;