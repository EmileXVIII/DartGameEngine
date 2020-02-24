import assertNumber from "../utils/functions/assertNumber";
import mainBis from "../mainbis";

let express = require("express");
const PORT =process.env.PORT||8081
const host="localhost:"+PORT;
const app=express();
app.listen(PORT, () => {
    console.log('Serveur sur port : ', PORT)
});
///run?mode=301&gameId=4
app.post("/run",(req,res,next)=>{
    let gameId = req.query.gameId,
    mode = req.query.mode;
    if(assertNumber(gameId)&&mode){
        res.statusCode=202;
        res.send();
        mainBis.mainbis("api",gameId).catch((err)=>console.error("engine crashed"+err))
    }
    else{
        res.statusCode=406;
        res.send()
    }
})
