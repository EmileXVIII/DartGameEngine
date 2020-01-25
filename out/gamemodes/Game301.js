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
var Cible301_1 = require("../cibles/Cible301");
var Game301 = /** @class */ (function (_super) {
    __extends(Game301, _super);
    function Game301(name) {
        var _this = _super.call(this, name, "301", 3, 301, 0) || this;
        _this.cible = new Cible301_1.default();
        return _this;
    }
    Game301.prototype.score = function (shot) {
        var actualScore = this.getScore(this.getCurrentPlayerId());
        if ((actualScore > shot.getShotValue() && (actualScore - shot.getShotValue()) !== 1) || (actualScore - shot.getShotValue() === 0 && shot.getShotPosition() === 4))
            this.setScore(this.getCurrentPlayerId(), actualScore - shot.getShotValue());
    };
    return Game301;
}(Game_1.default));
exports.default = Game301;
//# sourceMappingURL=Game301.js.map