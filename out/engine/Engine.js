"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Engine = /** @class */ (function () {
    function Engine() {
        this.idsBDD = [];
        this.nbGames = 0;
        this.mapGames = {};
    }
    Engine.prototype.addGame = function (game) {
        game.id = ++this.nbGames;
        this.mapGames[game.id] = game;
        if (!this.idsBDD[game.id - 1])
            this.idsBDD.push(null);
    };
    return Engine;
}());
exports.default = Engine; //module.exports = Engine;
//# sourceMappingURL=Engine.js.map