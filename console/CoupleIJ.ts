class CoupleIJ{
    private coordI:number;
    private coordJ:number;
    public get i() : number {
        return this.coordI;
    }
    public get j() : number {
        return this.coordJ;
    }
    
    constructor(i,j){
        this.coordI=i;
        this.coordJ=j;
    }
}
export default CoupleIJ;