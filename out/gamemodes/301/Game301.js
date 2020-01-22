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
var Game_1 = require("../../game/Game");
var Cible301_1 = require("../../cibles/Cible301");
var range_1 = require("../../functions/range");
undefined;
var Game301 = /** @class */ (function (_super) {
    __extends(Game301, _super);
    function Game301(name) {
        var _this = _super.call(this, "301", name) || this;
        _this.cible = new Cible301_1.default();
        for (var _i = 0, _a = range_1.default(1, 21); _i < _a.length; _i++) {
            var i = _a[_i];
            console.log("cible", i, _this.cible.mapZone[i](3));
        }
        _this.maxShotNumber = 3;
        _this.doIfStarted.bind(_this);
        _this.handleShot.bind(_this);
        _this.runGame.bind(_this);
        return _this;
    }
    Game301.prototype.runGame = function (callbackWithReturnZoneAndPosFromCenterAsPromise) {
        console.log("runGame", !!this);
        return _super.prototype.runGame.call(this, callbackWithReturnZoneAndPosFromCenterAsPromise, this.handleShot.bind(this));
    };
    Game301.prototype.handleShot = function (zone, posFromCenter) {
        console.log("handleShot", !!this);
        return this.doIfStarted((function () {
            console.log("anonymous", !!this);
            console.log(this.mapPlayerScore);
            console.log("cible", this.cible);
            this.currentShotNumber++;
            var value = this.cible.getApply(zone, posFromCenter); //this.cible.mapZone[zone](posFromCenter);
            console.log("zone", zone);
            for (var _i = 0, _a = range_1.default(1, 21); _i < _a.length; _i++) {
                var i = _a[_i];
                console.log("points", i, this.cible.mapZone[i](3), value);
            }
            if (this.mapPlayerScore[this.currentPlayerId] > value)
                this.mapPlayerScore[this.currentPlayerId] -= value;
            this.scoreConsoleLog();
            if (this.mapPlayerScore[this.currentPlayerId] !== 0 && this.currentShotNumber > this.maxShotNumber) {
                this.currentShotNumber = 0;
                this.nextPlayer();
            }
            if (this.mapPlayerScore[this.currentPlayerId] === 0)
                this.deskWinner(this.currentPlayerId);
            else {
                this.logTurn();
            }
        }).bind(this), "handleShot");
    };
    Game301.prototype.init = function () {
        _super.prototype.init.call(this);
        this.initScore(301);
    };
    return Game301;
}(Game_1.default));
exports.default = Game301; //module.exports = Game301;
//# sourceMappingURL=Game301.js.map