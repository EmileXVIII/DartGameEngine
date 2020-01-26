import range from "../utils/functions/range"
import Shot from "../game/Shot";
import MatrixCibleLogable from "./MatrixCibleLogable";

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
    console.log(toLogable(mat));
    */
   let matrix=new MatrixCibleLogable();
   matrix.createMatrix(20);
   matrix.logInConsole();
   console.log("? Write zone Shot \: \n 6\n?  Write zone position from center \: \n 3");
   matrix.changeMessage(new Shot(3,6),'X')
   matrix.logInConsole();
}
export default intro