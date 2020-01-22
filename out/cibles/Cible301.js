"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../functions/range");
var Cible301 = /** @class */ (function () {
    function Cible301() {
        var zone;
        var toto;
        this.mapZone = {};
        for (var _i = 0, _a = range_1.default(1, 21); _i < _a.length; _i++) {
            zone = _a[_i];
            this.mapZone[zone] = (function (pos) { return this.getAplly(zone, pos); }).bind(this);
        }
        for (var _b = 0, _c = range_1.default(1, 21); _b < _c.length; _b++) {
            toto = _c[_b];
            console.log("crea", toto, this.mapZone[toto](3));
        }
    }
    Cible301.prototype.getAplly = function (value, pos) {
        switch (pos) {
            case 0:
                return 50;
            case 2:
                return 2 * value;
            case 4:
                return 3 * value;
            default:
                return value;
        }
    };
    return Cible301;
}());
exports.default = Cible301;
//# sourceMappingURL=Cible301.js.map