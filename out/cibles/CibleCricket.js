"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../functions/range");
var CibleCricket = /** @class */ (function () {
    function CibleCricket() {
        var _this = this;
        var number;
        this.mapZone = {};
        this.mapPlayerClose = {};
        this.mapCloseZone = {};
        for (var _i = 0, _a = range_1.default(15, 21).concat([-1]); _i < _a.length; _i++) {
            number = _a[_i];
            this.mapZone[number] = (function (pos, id) { return _this.getAplly(number, pos, id); }).bind(this);
        }
        this.mapPlayerClose[number] = {};
        this.mapCloseZone[number] = false;
        for (var _b = 0, _c = (range_1.default(1, 21).concat(range_1.default(1, 21))); _b < _c.length; _b++) {
            number = _c[_b];
            console.log("crea", number, this.mapZone[number](3));
        }
    }
    CibleCricket.prototype.getAplly = function (value, pos, idPlayer) {
        switch (pos) {
            case 0:
                return this.closeOrScore(-1, idPlayer, 50);
            case 2:
                return this.closeOrScore(value, idPlayer, value) + this.getAplly(value, -1, idPlayer);
            case 4:
                return this.closeOrScore(value, idPlayer, value) + this.getAplly(value, 2, idPlayer);
            default:
                return this.closeOrScore(value, idPlayer, value);
        }
    };
    CibleCricket.prototype.closeOrScore = function (zone, idPlayer, value) {
        if (this.mapCloseZone[zone] === true)
            return 0;
        else {
            if (this.mapPlayerClose[zone][idPlayer] < 3) {
                if (++this.mapPlayerClose[zone][idPlayer] === 3)
                    this.closeZone(zone);
            }
            else
                return value;
        }
    };
    CibleCricket.prototype.closeZone = function (zone) {
        var close = true;
        for (var _i = 0, _a = Object.keys(this.mapPlayerClose[zone]); _i < _a.length; _i++) {
            var idPlayer = _a[_i];
            if (this.mapPlayerClose[zone][idPlayer] < 3) {
                close = false;
                break;
            }
        }
        if (close)
            this.mapCloseZone[zone] = true;
    };
    return CibleCricket;
}());
exports.default = CibleCricket;
//# sourceMappingURL=CibleCricket.js.map