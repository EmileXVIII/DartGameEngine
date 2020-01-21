import Game from "../game/Game";

class Engine{
    nbGames:number;
    mapGames:{ [key: string]: Game } ;
    idsBDD:Array<number>
    constructor(){
        this.idsBDD=[];
        this.nbGames=0;
        this.mapGames= {};
    }
    addGame(game:Game){
        game.id=++this.nbGames;
        this.mapGames[game.id]=game;
        if(!this.idsBDD[game.id-1]) this.idsBDD.push(null);
    }
}
export default Engine; //module.exports = Engine;