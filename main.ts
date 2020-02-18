import mainBis from "./mainbis";

//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT="./tsconfig.json";
function main(){
    let mode=process.argv[2];
    let gameAPIid=process.argv[3];
    mainBis(mode,gameAPIid)
}
main();