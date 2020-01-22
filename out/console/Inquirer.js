"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer = require('inquirer');
var Inquirer = /** @class */ (function () {
    function Inquirer() {
        this.inquirer = require('inquirer');
    }
    Inquirer.prototype.askShots = function () {
        return this.inquirer.prompt([
            {
                message: "Write zone Shot :\n",
                name: "zone"
            },
            {
                message: "Write zone position from center :\n",
                name: "posFromCenter"
            }
        ]);
    };
    return Inquirer;
}());
exports.default = Inquirer;
//# sourceMappingURL=Inquirer.js.map