"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShotPosition_1 = require("./ShotPosition");
var inquirer = require('inquirer');
var Inquirer = /** @class */ (function () {
    function Inquirer() {
        this.inquirer = require('inquirer');
    }
    Inquirer.prototype.askShot = function () {
        return this.inquirer.prompt([
            {
                message: "Write zone Shot :\n",
                name: "zone"
            },
            {
                message: "Write zone position from center :\n",
                name: "posFromCenter"
            }
        ]).then(function (answers) { console.log("#######################################answers", JSON.stringify(answers, null, '  ')); return new ShotPosition_1.default(answers.zone, answers.posFromCenter); });
    };
    return Inquirer;
}());
exports.default = Inquirer;
//# sourceMappingURL=Inquirer.js.map