"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapPlayer = /** @class */ (function () {
    function MapPlayer(conditionAddPlayer) {
        this.nbPlayers = 0;
        this.map = {};
        this.conditionAddPlayer = conditionAddPlayer;
    }
    MapPlayer.prototype.addPlayer = function (player) {
        if (this.conditionAddPlayer()) {
            player.id = ++this.nbPlayers;
            this.map[this.nbPlayers] = player;
            return true;
        }
        return false;
    };
    MapPlayer.prototype.addPlayers = function (players) {
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            this.addPlayer(player);
        }
    };
    MapPlayer.prototype.getLen = function () {
        return this.nbPlayers;
    };
    MapPlayer.prototype.getMapKeys = function () {
        return Object.keys(this.map);
    };
    MapPlayer.prototype.getPlayer = function (playerId) {
        return this.map[playerId];
    };
    return MapPlayer;
}());
exports.default = MapPlayer;
//# sourceMappingURL=MapPlayer.js.map