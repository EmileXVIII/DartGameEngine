import range from "../utils/functions/range"
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
class MatrixCibleLogable{
    private stringZone:string;
    private matrix:any[];
    private serie:number[];
    constructor(){
        this.stringZone="zone";
        this.matrix=[];
        this.serie = range(1,5).reverse();;
        this.serie=this.serie.concat([0],this.serie.slice(0).reverse());
    }
    private formatLogable(stringValue:string, nbCaract:number=6){
        let bool=true;
        while(stringValue.length!=nbCaract){
            bool=!bool;
            if (bool){stringValue+=" "}
            else {stringValue=" "+stringValue}
        }
        return stringValue;
    }
    private toLogable(){
        let toLog="";
        for (let ligne in this.matrix){
            for (let collone in this.matrix[ligne]){
                let stringValue=this.formatLogable(this.matrix[ligne][collone])
                toLog+=stringValue+"|";
            }
            toLog+="\n";
            this.matrix.forEach(() => {toLog+="______"+"_"});
            toLog+="\n";
        }
        return toLog;
    }
    public logInConsole(){
        console.log(this.toLogable())
    };
    
    public createMatrix(nbZones:number){
        let nbZonesToPlace= nbZones;
        //init Matrix
        for (let lignes of range(0,11)){
            this.matrix.push([]);
            for(let collones of range(0,11)){
                this.matrix[lignes][collones]="";
            }
        }
        //place posFromCenter
        for (let i of range(1,10)){
            this.matrix[i][5]=this.serie[i-1];
            this.matrix[5][i]=this.serie[i-1];
            this.matrix[i][i]=this.serie[i-1];
            this.matrix[10-i][i]=this.serie[i-1];
        }
        nbZonesToPlace-=8;
        while(nbZonesToPlace>0){
            this.addLine();
            this.addCol();
            nbZonesToPlace-=4;
        }
        let maxInd=this.matrix.length-1;
        let listePos:Array<CoupleIJ>=[];
        listePos.push(new CoupleIJ(0,0))
        let i=5;
        while(i!=maxInd-4){
            listePos.push(new CoupleIJ(0,i++))
        }
        let listToIterate=listePos.slice(0);
        for(let coupleIJ of listToIterate){
            listePos.push(new CoupleIJ(coupleIJ.j,maxInd-coupleIJ.i))
        }
        for(let coupleIJ of listToIterate){
            listePos.push(new CoupleIJ(maxInd-coupleIJ.i,maxInd-coupleIJ.j))
        }
        for(let coupleIJ of listToIterate){
            listePos.push(new CoupleIJ(maxInd-coupleIJ.j,coupleIJ.i))
        }

        for(let numZone of range(1,nbZones+1)){
            this.matrix[listePos[numZone-1].i][listePos[numZone-1].j]
                =this.stringZone+numZone;
        }
    }
    private newLine(lineMaxInd){
        let newLine=[];
        this.matrix[0].forEach(()=>newLine.push(0));
        newLine[0]="";
        newLine[lineMaxInd]="";
        for(let i=1,serieLen=(this.serie.length-1)/2;i<=serieLen;i++){
            newLine[i]=this.serie[i-1];
            newLine[lineMaxInd-i]=this.serie[i-1];
        }
        return newLine;
    }
    private addLine(){
        let newLine=this.newLine(this.matrix[0].length-1)
        this.matrix=this.matrix.slice(0,5).concat([newLine],this.matrix.slice(5));
    }
    private addCol(){
        let colLen=this.matrix.length;
        let newLine=this.newLine(colLen-1);
        for (let i=0;i<colLen;i++){
            this.matrix[i]=
                this.matrix[i].slice(0,5).concat([newLine[i]],this.matrix[i].slice(5));
        }
    }
}
function intro(){
    /*
    console.log("An exemple of cible")
    let mat=[]
    for (let lignes of range(0,11)){
        mat.push([]);
        for(let collones of range(0,11)){
            mat[lignes][collones]="";
        }
    }
    mat[0][5]="zone1";
    mat[0][10]="zone3";
    mat[10][5]="zone5";
    mat[10][10]="zone8";
    mat[5][10]="zone10";
    mat[10][0]="zone13";
    mat[5][0]="zone15";
    mat[0][0]="zone18";
    let collone :any[]= range(1,5).reverse();;
    collone=collone.concat([0],collone.slice(0).reverse());
    for (let i of range(1,10)){
        mat[i][5]=collone[i-1];
        mat[5][i]=collone[i-1];
        mat[i][i]=collone[i-1];
        mat[10-i][i]=collone[i-1];
    }

    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 1\n?  Write zone position from center \: \n 3");
    mat[2][5]="X"
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 8\n?  Write zone position from center \: \n 1");
    mat[6][6]="X"
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 1\n?  Write zone position from center \: \n 0");
    mat[5][5]="X"
    console.log(toLogable(mat));
    */
   let matrix=new MatrixCibleLogable();
   matrix.createMatrix(20);
   matrix.logInConsole();
}
export default intro