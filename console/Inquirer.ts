import IShotReader from "./IShotReader";
import ShotPosition from "./ShotPosition";

let inquirer=require('inquirer');

class Inquirer implements IShotReader{
    inquirer;
    constructor(){
        this.inquirer = require('inquirer');
    }
    askShot() {
        return this.inquirer.prompt([
            {
                message:"Write zone Shot :\n",
                name:"zone"
            },
            {
                message:"Write zone position from center :\n",
                name:"posFromCenter"
            }
        ]).then(res => new ShotPosition(res.zone,res.posFromCenter))
    }
}

export default Inquirer;