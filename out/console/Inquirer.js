"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shot_1 = require("../game/Shot");
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
        ]).then(function (answers) { console.log("#######################################answers", JSON.stringify(answers, null, '  ')); return new Shot_1.default(answers.posFromCenter, answers.zone); });
    };
    return Inquirer;
}());
exports.default = Inquirer;
//# sourceMappingURL=Inquirer.js.map