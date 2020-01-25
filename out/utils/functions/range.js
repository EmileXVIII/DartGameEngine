"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function range(start, end, step) {
    if (start === void 0) { start = 0; }
    if (step === void 0) { step = 1; }
    var result = [];
    var i = start;
    while (i < end) {
        result.push(i);
        i += step;
    }
    return result;
}
exports.default = range;
//# sourceMappingURL=range.js.map