class Player {
    id: number;
    bddId:number;
    name: string;
    email: string;
    gameWin: number;
    gameLost: number;
    createdAt: string;
    constructor(name:string, email:string){
        this.name=name;
        this.email=email;
        this.gameWin=0;
        this.gameLost=0;
    }
    public setBddId(bddId:number){
        this.bddId=bddId;
    }
}
export default Player;