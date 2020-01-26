"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../utils/functions/range");
function formatLogable(stringValue, nbCaract) {
    if (nbCaract === void 0) { nbCaract = 6; }
    var bool = true;
    while (stringValue.length != nbCaract) {
        bool = !bool;
        if (bool) {
            stringValue += " ";
        }
        else {
            stringValue = " " + stringValue;
        }
    }
    return stringValue;
}
function toLogable(mat) {
    var toLog = "";
    for (var ligne in mat) {
        for (var collone in mat[ligne]) {
            var stringValue = formatLogable(mat[ligne][collone]);
            toLog += stringValue + "|";
        }
        toLog += "\n";
        mat.forEach(function () { toLog += "______" + "_"; });
        toLog += "\n";
    }
    return toLog;
}
function intro() {
    console.log("An exemple of cible");
    var mat = [];
    for (var _i = 0, _a = range_1.default(0, 11); _i < _a.length; _i++) {
        var lignes = _a[_i];
        mat.push([]);
        for (var _b = 0, _c = range_1.default(0, 11); _b < _c.length; _b++) {
            var collones = _c[_b];
            mat[lignes][collones] = "";
        }
    }
    mat[0][5] = "zone1";
    mat[0][10] = "zone3";
    mat[10][5] = "zone5";
    mat[10][10] = "zone8";
    mat[5][10] = "zone10";
    mat[10][0] = "zone13";
    mat[5][0] = "zone15";
    mat[0][0] = "zone18";
    var collone = range_1.default(1, 5).reverse();
    ;
    collone = collone.concat([0], collone.slice(0).reverse());
    for (var _d = 0, _e = range_1.default(1, 10); _d < _e.length; _d++) {
        var i = _e[_d];
        mat[i][5] = collone[i - 1];
        mat[5][i] = collone[i - 1];
        mat[i][i] = collone[i - 1];
        mat[10 - i][i] = collone[i - 1];
    }
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 1 ? Write zone position from center \: \n 3");
    mat[2][5] = "X";
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 8 ? Write zone position from center \: \n 1");
    mat[6][6] = "X";
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 1 ? Write zone position from center \: \n 0");
    mat[5][5] = "X";
    console.log(toLogable(mat));
}
exports.default = intro;
//# sourceMappingURL=readMe.js.map