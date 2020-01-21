abstract class Game {
    id: number;
    mode: string;
    name: string;
    currentPlayerId: string;
    status: string;
    createdAt: string;
    nbPlayers: number;
    mapPlayer : object;
    mapPlayerScore : object;
    hasNotPlayListIds : Array<string>;
    constructor(mode: string, name: string) {
        this.name=name;
        this.mode=mode;
        this.status='draft';
        this.nbPlayers=0;
        this.mapPlayer={};
    }
    hasStarted(){
        if (this.status='started')
            return true
        return false;
    }
    addPlayer(player: Player){
        if(this.status='draft'){
            player.id=++this.nbPlayers;
            this.mapPlayer[this.nbPlayers]=player;
        }
        else
            console.warn(`You can't add a player on a ${this.status} game`)
    }
    deskWinner(playerId:string){return this.status==="started"
        ? (()=>{
            console.log(`${this.mapPlayer[playerId].name} is the Winner`);
            this.status='ended' 
            }
        )()
        : this.warnNotAllowed("deskWinner");
    }
    getCurrentPlayer(){
        return this.mapPlayer[this.currentPlayerId]
    }
    scoreConsoleLog(){
        console.log(this.mapPlayer[this.currentPlayerId].name, `has now ${this.mapPlayerScore[this.currentPlayerId]} points`)
    }
    warnNotAllowed(operation:string){
        console.log(`${this.status} doesn't allow "${operation}"`)
    }
    nextPlayer(){return this.status==="started"
        ? (()=>{
                if (this.hasNotPlayListIds.length==0) this.initHasNotPlayListIds()
                this.currentPlayerId=this.hasNotPlayListIds.pop()
            }
        )()
        : this.warnNotAllowed("nextPlayer");
    }
    initHasNotPlayListIds(){
        this.hasNotPlayListIds = Object.keys(this.mapPlayer).slice(0)
    }
    init(){
        this.initHasNotPlayListIds();
        for (let playerId in Object.keys(this.mapPlayer)){
            this.mapPlayerScore[playerId]=0;
        }
        this.status='started';
    }
}
export default Game;