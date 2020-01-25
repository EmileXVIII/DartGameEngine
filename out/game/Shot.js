"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shot = /** @class */ (function () {
    function Shot(position, value) {
        this.position = position;
        this.value = value;
    }
    Shot.prototype.getShotPosition = function () { return this.position; };
    ;
    Shot.prototype.getShotValue = function () { return this.value; };
    return Shot;
}());
exports.default = Shot;
//# sourceMappingURL=Shot.js.map