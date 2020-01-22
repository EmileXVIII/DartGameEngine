"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine_1 = require("./engine/Engine");
var Game301_1 = require("./gamemodes/301/Game301");
var Player_1 = require("./player/Player");
var Inquirer_1 = require("./console/Inquirer");
//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT = "./tsconfig.json";
function main() {
    var engine = new Engine_1.default();
    var aaa = new Player_1.default("aaa", "aaa@dartgame.fr");
    var bbb = new Player_1.default("bbb", "bbb@dartgame.fr");
    var ccc = new Player_1.default("ccc", "ccc@dartgame.fr");
    var game301a = new Game301_1.default("game301a");
    var inquirer = new Inquirer_1.default();
    game301a.addPlayers([aaa, bbb, ccc]);
    engine.addGame(game301a);
    game301a.runGame(function () { return inquirer.askShots(); });
}
main();
//# sourceMappingURL=main.js.map