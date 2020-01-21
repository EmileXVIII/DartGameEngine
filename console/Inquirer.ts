let inquirer=require('inquirer');

class Inquirer{
    inquirer;
    constructor(){
        this.inquirer = require('inquirer');
    }
    askShots() {
        return this.inquirer.prompt([
            {
                message:"Write zone Shot :\n",
                name:"zone"
            },
            {
                message:"Write zone position from center :\n",
                name:"posFromCenter"
            }
        ])
    }
}

export default Inquirer;