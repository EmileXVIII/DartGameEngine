"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MapPlayer_1 = require("../player/MapPlayer");
var DoIfStarted_1 = require("../utils/classes/DoIfStarted");
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(name, mode, maxShotNumber, initScoreValue, winScoreValue) {
        var _this = _super.call(this, name) || this;
        _this.mapPlayer = new MapPlayer_1.default(function () { return _this.getStatus() === "draft"; });
        _this.mapPlayerScore = {};
        _this.mode = mode;
        _this.maxShotNumber = maxShotNumber;
        _this.initScoreValue = initScoreValue;
        _this.winScoreValue = winScoreValue;
        return _this;
    }
    Game.prototype.addPlayer = function (player) {
        this.mapPlayer.addPlayer(player);
    };
    Game.prototype.addPlayers = function (players) {
        this.mapPlayer.addPlayers(players);
    };
    Game.prototype.getMode = function () {
        return this.mode;
    };
    Game.prototype.getCurrentPlayerId = function () { return this.currentPlayerId; };
    Game.prototype.getPlayertCount = function () { return this.mapPlayer.getLen(); };
    Game.prototype.getScore = function (playerId) {
        return this.mapPlayerScore[playerId];
    };
    Game.prototype.getWinScoreValue = function () { return this.winScoreValue; };
    Game.prototype.setScore = function (playerId, score) {
        this.mapPlayerScore[playerId] = score;
    };
    Game.prototype.initScore = function (value) {
        for (var _i = 0, _a = this.mapPlayer.getMapKeys(); _i < _a.length; _i++) {
            var playerId = _a[_i];
            this.mapPlayerScore[playerId] = value;
        }
    };
    Game.prototype.setCurrentPlayerId = function (playerId) { this.currentPlayerId = playerId; };
    Game.prototype.score = function (shotResult) { };
    Game.prototype.showAvancement = function (currentPlayerId) {
        console.log(this.mapPlayer.getPlayer(currentPlayerId).name, "has now " + this.mapPlayerScore[currentPlayerId] + " points");
    };
    Game.prototype.init = function () {
        this.initScore(this.initScoreValue);
        this.currentShotNumber = 1;
    };
    return Game;
}(DoIfStarted_1.default));
exports.default = Game; //module.exports = Game301;
//# sourceMappingURL=Game.js.map