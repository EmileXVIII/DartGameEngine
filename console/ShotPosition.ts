class ShotPosition{
    public zone:number;
    public posFromCenter:number;
    constructor(zone:number,posFromCenter:number){
        this.zone=zone;
        this.posFromCenter=posFromCenter;
        console.log("#######################################shotPositions",JSON.stringify(this, null, '  '))
    }
}
export default ShotPosition;