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
var Game_1 = require("../game/Game");
var range_1 = require("../functions/range");
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket(name) {
        var _this = _super.call(this, "cricket", name) || this;
        _this.maxShotNumber = 3;
        return _this;
    }
    Cricket.prototype.runGame = function (callbackWithReturnZoneAndPosFromCenterAsPromise) {
        console.log("runGame", !!this);
        return _super.prototype.runGame.call(this, callbackWithReturnZoneAndPosFromCenterAsPromise, this.handleShot.bind(this));
    };
    Cricket.prototype.handleShot = function (zone, posFromCenter) {
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
                this.mapPlayerScore[this.currentPlayerId] += value;
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
    return Cricket;
}(Game_1.default));
exports.default = Cricket;
//# sourceMappingURL=Cricket.js.map