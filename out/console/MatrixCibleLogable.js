"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CoupleIJ_1 = require("./CoupleIJ");
var range_1 = require("../utils/functions/range");
var MatrixCibleLogable = /** @class */ (function () {
    function MatrixCibleLogable() {
        this.stringZone = "zone";
        this.matrix = [];
        this.serie = range_1.default(1, 5).reverse();
        ;
        this.serie = this.serie.concat([0], this.serie.slice(0).reverse());
    }
    MatrixCibleLogable.prototype.clone = function () {
        var cloneMatrix = new MatrixCibleLogable();
        var lengthMatrix = this.matrix.length;
        cloneMatrix.nbZones = this.nbZones;
        for (var line = 0; line < lengthMatrix; line++) {
            cloneMatrix.matrix.push([]);
            for (var column = 0; column < lengthMatrix; column++) {
                cloneMatrix.matrix[line].push(this.matrix[line][column]);
            }
        }
        return cloneMatrix;
    };
    MatrixCibleLogable.prototype.formatLogable = function (stringValue, nbCaract) {
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
    };
    MatrixCibleLogable.prototype.toLogable = function () {
        var toLog = "";
        for (var ligne in this.matrix) {
            for (var collone in this.matrix[ligne]) {
                var stringValue = this.formatLogable(this.matrix[ligne][collone]);
                toLog += stringValue + "|";
            }
            toLog += "\n";
            this.matrix.forEach(function () { toLog += "______" + "_"; });
            toLog += "\n";
        }
        return toLog;
    };
    MatrixCibleLogable.prototype.logInConsole = function () {
        console.log(this.toLogable());
    };
    ;
    MatrixCibleLogable.prototype.createMatrix = function (nbZones) {
        var nbZonesToPlace = nbZones;
        this.nbZones = nbZones;
        //init Matrix
        for (var _i = 0, _a = range_1.default(0, 11); _i < _a.length; _i++) {
            var lignes = _a[_i];
            this.matrix.push([]);
            for (var _b = 0, _c = range_1.default(0, 11); _b < _c.length; _b++) {
                var collones = _c[_b];
                this.matrix[lignes][collones] = "";
            }
        }
        //place posFromCenter
        for (var _d = 0, _e = range_1.default(1, 10); _d < _e.length; _d++) {
            var i_1 = _e[_d];
            this.matrix[i_1][5] = this.serie[i_1 - 1];
            this.matrix[5][i_1] = this.serie[i_1 - 1];
            this.matrix[i_1][i_1] = this.serie[i_1 - 1];
            this.matrix[10 - i_1][i_1] = this.serie[i_1 - 1];
        }
        nbZonesToPlace -= 8;
        while (nbZonesToPlace > 0) {
            this.addLine();
            this.addCol();
            nbZonesToPlace -= 4;
        }
        var maxInd = this.matrix.length - 1;
        var listePos = [];
        listePos.push(new CoupleIJ_1.default(0, 0));
        var i = 5;
        while (i != maxInd - 4) {
            listePos.push(new CoupleIJ_1.default(0, i++));
        }
        var listToIterate = listePos.slice(0);
        for (var _f = 0, listToIterate_1 = listToIterate; _f < listToIterate_1.length; _f++) {
            var coupleIJ = listToIterate_1[_f];
            listePos.push(new CoupleIJ_1.default(coupleIJ.j, maxInd - coupleIJ.i));
        }
        for (var _g = 0, listToIterate_2 = listToIterate; _g < listToIterate_2.length; _g++) {
            var coupleIJ = listToIterate_2[_g];
            listePos.push(new CoupleIJ_1.default(maxInd - coupleIJ.i, maxInd - coupleIJ.j));
        }
        for (var _h = 0, listToIterate_3 = listToIterate; _h < listToIterate_3.length; _h++) {
            var coupleIJ = listToIterate_3[_h];
            listePos.push(new CoupleIJ_1.default(maxInd - coupleIJ.j, coupleIJ.i));
        }
        for (var _j = 0, _k = range_1.default(1, nbZones + 1); _j < _k.length; _j++) {
            var numZone = _k[_j];
            this.matrix[listePos[numZone - 1].i][listePos[numZone - 1].j]
                = this.stringZone + numZone;
        }
    };
    MatrixCibleLogable.prototype.newLine = function (lineMaxInd) {
        var newLine = [];
        this.matrix[0].forEach(function () { return newLine.push(0); });
        newLine[0] = "";
        newLine[lineMaxInd] = "";
        for (var i = 1, serieLen = (this.serie.length - 1) / 2; i <= serieLen; i++) {
            newLine[i] = this.serie[i - 1];
            newLine[lineMaxInd - i] = this.serie[i - 1];
        }
        return newLine;
    };
    MatrixCibleLogable.prototype.addLine = function () {
        var newLine = this.newLine(this.matrix[0].length - 1);
        this.matrix = this.matrix.slice(0, 5).concat([newLine], this.matrix.slice(5));
    };
    MatrixCibleLogable.prototype.addCol = function () {
        var colLen = this.matrix.length;
        var newLine = this.newLine(colLen - 1);
        for (var i = 0; i < colLen; i++) {
            this.matrix[i] =
                this.matrix[i].slice(0, 5).concat([newLine[i]], this.matrix[i].slice(5));
        }
    };
    MatrixCibleLogable.prototype.getZoneDiag = function (value, nbZones) {
        return ((nbZones / 4) * value) + 1;
    };
    MatrixCibleLogable.prototype.setMessage = function (coupleIJ, message) {
        this.matrix[coupleIJ.i][coupleIJ.j] = message;
    };
    MatrixCibleLogable.prototype.getStart = function (shema, maxInd, position) {
        var i, j;
        switch (shema) {
            case 'O':
                j = position;
                break;
            case "N":
                i = position;
                break;
            case "S":
                i = maxInd - position;
                break;
            case "W":
                j = maxInd - position;
                break;
        }
        return new CoupleIJ_1.default(i, j);
    };
    MatrixCibleLogable.prototype.ckeckOrder = function (x, shema, maxInd) {
        if (shema === "S" || shema === "O") { //order decreasing
            x = maxInd - x;
        }
        return x;
    };
    MatrixCibleLogable.prototype.getCoupleIJ = function (shot, shema, message, nbZones) {
        var maxInd = this.matrix.length - 1;
        var value = shot.getShotValue();
        value -= 1 * (1 + Math.trunc((shot.getShotValue() - 1) / ((nbZones / 4))));
        value -= 1;
        value %= ((nbZones / 4)) - 1;
        value += 1;
        var position = (4 - shot.getShotPosition() + 1);
        var coupleIJ1;
        var i, j;
        switch (shema.length) {
            case 2:
                coupleIJ1 = this.getStart(shema[0], maxInd, position);
                var coupleIJ2 = this.getStart(shema[1], maxInd, position);
                i = coupleIJ1.i ? coupleIJ1.i : coupleIJ2.i;
                j = coupleIJ1.j ? coupleIJ1.j : coupleIJ2.j;
                break;
            case 1:
                var x = 4 + value; //4: blanc 1;number on corner
                if (shema === "S" || shema === "W") {
                    x = maxInd - x;
                }
                x = this.ckeckOrder(x, shema, maxInd);
                coupleIJ1 = this.getStart(shema, maxInd, position);
                if (coupleIJ1.i) {
                    i = coupleIJ1.i;
                    j = x;
                }
                else {
                    j = coupleIJ1.j;
                    i = x;
                }
                break;
            default:
                return;
        }
        this.setMessage(new CoupleIJ_1.default(i, j), message);
    };
    MatrixCibleLogable.prototype.changeMessage = function (shot, message) {
        if (shot.getShotValue() > this.nbZones || shot.getShotPosition() > 4 || shot.getShotPosition() < 0)
            return;
        var nbZones = this.nbZones + this.nbZones % 4;
        var shema;
        switch (shot.getShotValue()) {
            case this.getZoneDiag(0, nbZones):
                shema = "NO";
                break;
            case this.getZoneDiag(1, nbZones):
                shema = "NW";
                break;
            case this.getZoneDiag(2, nbZones):
                shema = "SW";
                break;
            case this.getZoneDiag(3, nbZones):
                shema = "SO";
                break;
            default:
                switch (Math.trunc((shot.getShotValue() - 1) / (nbZones / 4))) {
                    case 0:
                        shema = "N";
                        break;
                    case 1:
                        shema = "W";
                        break;
                    case 2:
                        shema = "S";
                        break;
                    case 3:
                        shema = "O";
                        break;
                }
                break;
        }
        this.getCoupleIJ(shot, shema, message, nbZones);
    };
    return MatrixCibleLogable;
}());
exports.default = MatrixCibleLogable;
//# sourceMappingURL=MatrixCibleLogable.js.map