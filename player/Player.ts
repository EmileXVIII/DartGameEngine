class Player {
    id: number;
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
}
export default Player;