import Player from "./Player";
class MapPlayer{
    private map:{[key:number]:Player};
    private nbPlayers:number;
    private conditionAddPlayer:Function;
    constructor(conditionAddPlayer:Function){
        this.nbPlayers=0;
        this.map={};
        this.conditionAddPlayer=conditionAddPlayer;
    }
    addPlayer(player: Player){
        if(this.conditionAddPlayer()){
            player.id=++this.nbPlayers;
            this.map[this.nbPlayers]=player;
            return true
        }
        return false
    }
    addPlayers(players: Array<Player>){
        for (let player of players) this.addPlayer(player)
    }
    getLen(){
        return this.nbPlayers;
    }
    getMapKeys(){
        return Object.keys(this.map)
    }
    getPlayer(playerId: number){
        return  this.map[playerId]
    }
}
export default MapPlayer;