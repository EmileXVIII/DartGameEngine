import Game from "../../game/Game";
import Igame from "../../game/Igame";
import Cible301 from "../../cibles/Cible301";

class Game301 extends Game implements Igame{
    cible:Cible301;
    maxShotNumber:number;
    currentShotNumber:number;
    constructor(name: string){
        super("301",name);
        this.cible=new Cible301();
        this.maxShotNumber=3;
        this.currentShotNumber=0;
    }
    runConsole(){
        if(!(this.status==="started"))this.init
        let source=new Source();
        async ()=>{
            while (this.status=="started"){
                let check=true;
                await source.readline.question("Write Shot : 'zone:number posFromCenter:number'",(zone ,posFromCenter)=>{
                    try{
                        <number><unknown>zone;
                        <number><unknown>posFromCenter;
                        check=true;
                    }
                    catch{
                        console.log("you try to imput a string non castable to ");
                        check=false;
                    }
                    if(check) this.handleShot(<number><unknown>zone,<number><unknown>posFromCenter)
                })
            }
        }
    }
    handleShot2(zone,posFromCenter){

    }
    handleShot(zone:number,posFromCenter:number) {return this.status==="started"
        ? (()=>{
            this.currentShotNumber++;
            let value=this.cible.mapZone[zone](posFromCenter);
            if (this.mapPlayerScore[this.currentPlayerId]<value){
                this.scoreConsoleLog();
            }
            else 
                this.mapPlayerScore[this.currentPlayerId]-=value
            if (this.mapPlayerScore[this.currentPlayerId]!==0 && this.currentShotNumber>this.maxShotNumber){
                this.currentShotNumber=0;
                this.nextPlayer();
            }
            if(this.mapPlayerScore[this.currentPlayerId]===0) this.deskWinner(this.currentPlayerId);
            else {
                console.log(`${this.mapPlayer[this.currentPlayerId].name} whill now play it's ${this.currentShotNumber} shot`)
            }
        })()
        : this.warnNotAllowed("handleShot");
    }
    init(){
        super.init();
        for (let playerId in Object.keys(this.mapPlayer)){
            this.mapPlayerScore[playerId]=301;
        }
        this.status='started';
    }
}
export default Game301; //module.exports = Game301;