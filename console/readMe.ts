import range from "../utils/functions/range"
function formatLogable(stringValue:string, nbCaract:number=6){
    let bool=true;
    while(stringValue.length!=nbCaract){
        bool=!bool;
        if (bool){stringValue+=" "}
        else {stringValue=" "+stringValue}
    }
    return stringValue;
}
function toLogable(mat){
    let toLog="";
    for (let ligne in mat){
        for (let collone in mat[ligne]){
            let stringValue=formatLogable(mat[ligne][collone])
            toLog+=stringValue+"|";
        }
        toLog+="\n";
        mat.forEach(() => {toLog+="______"+"_"});
        toLog+="\n";
    }
    return toLog;
}
function intro(){
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
}
export default intro