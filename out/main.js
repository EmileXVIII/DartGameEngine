"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("./player/Player");
var Inquirer_1 = require("./console/Inquirer");
var GameEngine_1 = require("./game/GameEngine");
var Status_1 = require("./utils/classes/Status");
var Game301_1 = require("./gamemodes/Game301");
//let Engine = require("./engine/Engine.ts");
//let Game301 = require("./gamemodes/301/Game301");
process.env.TS_NODE_PROJECT = "./tsconfig.json";
function main() {
    var aaa = new Player_1.default("aaa", "aaa@dartgame.fr");
    var bbb = new Player_1.default("bbb", "bbb@dartgame.fr");
    var ccc = new Player_1.default("ccc", "ccc@dartgame.fr");
    var game301a = new Game301_1.default("game301a");
    var inquirer = new Inquirer_1.default();
    var gameEngine = new GameEngine_1.default(game301a, inquirer, new Status_1.default("FirstGameEngine"));
    game301a.addPlayers([aaa, bbb, ccc]);
    gameEngine.runGame();
}
main();
//# sourceMappingURL=main.js.map