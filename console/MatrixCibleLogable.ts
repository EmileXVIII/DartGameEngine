import Shot from "../game/Shot";
import CoupleIJ from "./CoupleIJ";
import range from "../utils/functions/range";
import IShot from "../game/IShot";

class MatrixCibleLogable{
    private stringZone:string;
    private matrix:any[];
    private serie:number[];
    private nbZones:number;
    constructor(){
        this.stringZone="zone";
        this.matrix=[];
        this.serie = range(1,5).reverse();;
        this.serie=this.serie.concat([0],this.serie.slice(0).reverse());
    }
    public clone(){
        let cloneMatrix=new MatrixCibleLogable();
        let lengthMatrix=this.matrix.length;
        cloneMatrix.nbZones=this.nbZones;
        for (let line=0 ;line<lengthMatrix;line++){
            cloneMatrix.matrix.push([]);
            for (let column=0 ;column<lengthMatrix;column++){
                cloneMatrix.matrix[line].push(this.matrix[line][column]);
            }
        }
        return cloneMatrix;
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
        this.nbZones=nbZones;
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
    private getZoneDiag(value:number,nbZones:number){
        return ((nbZones/4)*value)+1
    }
    private setMessage(coupleIJ:CoupleIJ,message:string){
        this.matrix[coupleIJ.i][coupleIJ.j]=message;
    }
    private getStart(shema:string,maxInd:number,position:number){
        let i:number,j:number;
        switch (shema){
            case 'O':
                j=position
                break;
            case "N":
                i=position
                break;
            case "S":
                i=maxInd-position
                break;
            case "W":
                j=maxInd-position
                break;
        }
        return new CoupleIJ(i,j);
    }
    private ckeckOrder(x,shema,maxInd){
        if(shema==="S"||shema==="O"){//order decreasing
            x=maxInd-x;
        }
        return x;
    }
    private getCoupleIJ(shot:IShot,shema:"NO"|"N"|"NW"|"W"|"SW"|"S"|"SO"|"O",message:string,nbZones:number){
        let maxInd=this.matrix.length-1;
        let value=shot.getShotValue();
        value-=1*(1+Math.trunc((shot.getShotValue()-1)/((nbZones/4))));//do not count previous diagonals
        value-=1;//start with 0 to do modulo
        value%=((nbZones/4))-1
        value+=1;//unstart with 0
        let position=(4-shot.getShotPosition()+1)
        let coupleIJ1:CoupleIJ;
        let i:number,j:number;
        switch (shema.length){
            case 2:
                coupleIJ1=this.getStart(shema[0],maxInd,position);
                let coupleIJ2=this.getStart(shema[1],maxInd,position);
                i=coupleIJ1.i?coupleIJ1.i:coupleIJ2.i;
                j=coupleIJ1.j?coupleIJ1.j:coupleIJ2.j;
                break
            case 1:
                let x=4+value;
                if(shema==="O"||shema==="S"){
                    x=maxInd-x;
                }
                coupleIJ1=this.getStart(shema,maxInd,position);
                if(coupleIJ1.i){
                    i=coupleIJ1.i;
                    j=x;
                }
                else {
                    j=coupleIJ1.j;
                    i=x;
                }
                break
            default:
                return;
        }
        

        this.setMessage(new CoupleIJ(i,j),message)
    }

    public changeMessage(shot:IShot,message:string){
        if(shot.getShotValue()>this.nbZones||shot.getShotPosition()>4||shot.getShotPosition()<0) return;
        let nbZones=this.nbZones+this.nbZones%4;
        let shema:"NO"|"N"|"NW"|"W"|"SW"|"S"|"SO"|"O";
        switch(shot.getShotValue()){
            case this.getZoneDiag(0,nbZones):
                shema="NO";
                break;
            case this.getZoneDiag(1,nbZones):
                shema="NW";
                break;
            case this.getZoneDiag(2,nbZones):
                shema="SW";
                break;
            case this.getZoneDiag(3,nbZones):
                shema="SO";
                break;
            default :
                switch(Math.trunc((shot.getShotValue()-1)/(nbZones/4))){
                    case 0:
                        shema="N";
                        break;
                    case 1:
                        shema="W";
                        break;
                    case 2:
                        shema="S";
                        break;
                    case 3:
                        shema="O";
                        break;
                }
                break;
        }
        this.getCoupleIJ(shot,shema,message,nbZones)
    }
}
export default MatrixCibleLogable;