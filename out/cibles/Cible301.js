"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../utils/functions/range");
var Cible301 = /** @class */ (function () {
    function Cible301() {
        var toto;
        this.mapZone = {};
        var _loop_1 = function (zone) {
            this_1.mapZone[zone] = (function (pos) { return this.getShotResult(zone, pos); }).bind(this_1);
        };
        var this_1 = this;
        for (var _i = 0, _a = range_1.default(1, 21); _i < _a.length; _i++) {
            var zone = _a[_i];
            _loop_1(zone);
        }
    }
    Cible301.prototype.getShotResult = function (value, pos) {
        var shotResult;
        pos = Number(pos);
        switch (pos) {
            case 0:
                shotResult = 50;
                break;
            case 2:
                shotResult = 2 * value;
                break;
            case 4:
                shotResult = 3 * value;
                break;
            default:
                shotResult = value;
                break;
        }
        console.log("xx:getShotResult(" + value + "," + pos + ") : " + shotResult + ", typeOf " + typeof (pos));
        return shotResult;
    };
    return Cible301;
}());
exports.default = Cible301;
//# sourceMappingURL=Cible301.js.map