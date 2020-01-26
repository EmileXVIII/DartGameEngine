"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var range_1 = require("../utils/functions/range");
var CoupleIJ = /** @class */ (function () {
    function CoupleIJ(i, j) {
        this.coordI = i;
        this.coordJ = j;
    }
    Object.defineProperty(CoupleIJ.prototype, "i", {
        get: function () {
            return this.coordI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoupleIJ.prototype, "j", {
        get: function () {
            return this.coordJ;
        },
        enumerable: true,
        configurable: true
    });
    return CoupleIJ;
}());
var MatrixCibleLogable = /** @class */ (function () {
    function MatrixCibleLogable() {
        this.stringZone = "zone";
        this.matrix = [];
        this.serie = range_1.default(1, 5).reverse();
        ;
        this.serie = this.serie.concat([0], this.serie.slice(0).reverse());
    }
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
        listePos.push(new CoupleIJ(0, 0));
        var i = 5;
        while (i != maxInd - 4) {
            listePos.push(new CoupleIJ(0, i++));
        }
        var listToIterate = listePos.slice(0);
        for (var _f = 0, listToIterate_1 = listToIterate; _f < listToIterate_1.length; _f++) {
            var coupleIJ = listToIterate_1[_f];
            listePos.push(new CoupleIJ(coupleIJ.j, maxInd - coupleIJ.i));
        }
        for (var _g = 0, listToIterate_2 = listToIterate; _g < listToIterate_2.length; _g++) {
            var coupleIJ = listToIterate_2[_g];
            listePos.push(new CoupleIJ(maxInd - coupleIJ.i, maxInd - coupleIJ.j));
        }
        for (var _h = 0, listToIterate_3 = listToIterate; _h < listToIterate_3.length; _h++) {
            var coupleIJ = listToIterate_3[_h];
            listePos.push(new CoupleIJ(maxInd - coupleIJ.j, coupleIJ.i));
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
    return MatrixCibleLogable;
}());
function intro() {
    /*
    console.log("An exemple of cible")
    let mat=[]
    for (let lignes of range(0,11)){
        mat.push([]);
        for(let collones of range(0,11)){
            mat[lignes][collones]="";
        }
    }
    mat[0][5]="zone1";
    mat[0][10]="zone3";
    mat[10][5]="zone5";
    mat[10][10]="zone8";
    mat[5][10]="zone10";
    mat[10][0]="zone13";
    mat[5][0]="zone15";
    mat[0][0]="zone18";
    let collone :any[]= range(1,5).reverse();;
    collone=collone.concat([0],collone.slice(0).reverse());
    for (let i of range(1,10)){
        mat[i][5]=collone[i-1];
        mat[5][i]=collone[i-1];
        mat[i][i]=collone[i-1];
        mat[10-i][i]=collone[i-1];
    }

    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 1\n?  Write zone position from center \: \n 3");
    mat[2][5]="X"
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 8\n?  Write zone position from center \: \n 1");
    mat[6][6]="X"
    console.log(toLogable(mat));
    console.log("? Write zone Shot \: \n 1\n?  Write zone position from center \: \n 0");
    mat[5][5]="X"
    console.log(toLogable(mat));
    */
    var matrix = new MatrixCibleLogable();
    matrix.createMatrix(20);
    matrix.logInConsole();
}
exports.default = intro;
//# sourceMappingURL=readMe.js.map