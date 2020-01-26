"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../utils/functions/range");
var Shot_1 = require("../game/Shot");
var MatrixCibleLogable_1 = require("../console/MatrixCibleLogable");
var Cible301 = /** @class */ (function () {
    function Cible301() {
        var toto;
        this.mapZone = {};
        this.matrixCible = new MatrixCibleLogable_1.default();
        this.matrixCible.createMatrix(20);
        var _loop_1 = function (zone) {
            this_1.mapZone[zone] = (function (pos) { return this.getShotResult(zone, pos); }).bind(this_1);
        };
        var this_1 = this;
        for (var _i = 0, _a = range_1.default(1, 21); _i < _a.length; _i++) {
            var zone = _a[_i];
            _loop_1(zone);
        }
    }
    Cible301.prototype.showCibleShot = function (shot) {
        var matrixCible301 = this.matrixCible.clone();
        matrixCible301.changeMessage(shot, "X");
        matrixCible301.logInConsole();
    };
    Cible301.prototype.getShotResult = function (shot) {
        var result;
        switch (Number(shot.getShotPosition())) {
            case 0:
                result = 50;
                break;
            case 2:
                result = 3 * shot.getShotValue();
                break;
            case 4:
                result = 2 * shot.getShotValue();
                break;
            default:
                result = shot.getShotValue();
                break;
        }
        //console.log(`xx:getShotResult(${value},${pos}) : ${shotResult}, typeOf ${typeof(pos)}`)
        return new Shot_1.default(shot.getShotPosition(), result);
    };
    return Cible301;
}());
exports.default = Cible301;
//# sourceMappingURL=Cible301.js.map