import Shot from "../../game/Shot";
class ConvertorAPIshot{
    constructor(){};
    toShot(shotAPI){
        let shot:Shot
        let posFromCenter:number;
        let zone:number;
        switch(+shotAPI.multiplicator){
            case 2:
                posFromCenter=4;
                break;
            case 3:
                posFromCenter=2
                break;
            default:
                posFromCenter=1;
                break;
        }
        switch (shotAPI.sector){
            case 25:
                posFromCenter=0;
                zone=1;
                break;
            case 0:
                posFromCenter=20;
                zone=1;
                break;
            default:
                zone=shotAPI.sector;
        }
        return new Shot(posFromCenter,zone);
    }
}
export default new ConvertorAPIshot();