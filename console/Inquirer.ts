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
        ]).then((answers:ShotPosition) => {console.log("#######################################answers",JSON.stringify(answers, null, '  '));return new ShotPosition(answers.zone,answers.posFromCenter)})
    }
}

export default Inquirer;