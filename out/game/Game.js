"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game = /** @class */ (function () {
    function Game(mode, name) {
        this.name = name;
        this.currentShotNumber = 0;
        this.mode = mode;
        this.status = 'draft';
        this.nbPlayers = 0;
        this.mapPlayer = {};
        this.mapPlayerScore = {};
        this.runGame.bind(this);
    }
    Game.prototype.runGame = function (callbackWithReturnZoneAndPosFromCenterAsPromise, handleShot) {
        return __awaiter(this, void 0, void 0, function () {
            var check, zone, posFromCenter;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.status === "started"))
                            this.init();
                        this.logTurn();
                        _b.label = 1;
                    case 1:
                        if (!(this.status == "started")) return [3 /*break*/, 3];
                        check = true;
                        zone = void 0, posFromCenter = void 0;
                        return [4 /*yield*/, callbackWithReturnZoneAndPosFromCenterAsPromise().then(function (res) { return [res.zone, res.posFromCenter]; }).catch(function (err) { console.error(err); return [null, null]; })]; //source.readline.question("Write Shot : 'zone:number posFromCenter:number'",(zone:string ,posFromCenter:string)=>{
                    case 2:
                        _a = _b.sent(), zone = _a[0], posFromCenter = _a[1]; //source.readline.question("Write Shot : 'zone:number posFromCenter:number'",(zone:string ,posFromCenter:string)=>{
                        console.log("zone", zone, "pos", posFromCenter);
                        try {
                            zone;
                            posFromCenter;
                            check = true;
                        }
                        catch (_c) {
                            console.log("imput is not castable to number ");
                            check = false;
                        }
                        if (check)
                            handleShot(zone, posFromCenter);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.hasStarted = function () {
        if (this.status = 'started')
            return true;
        return false;
    };
    Game.prototype.doIfStarted = function (callback, callbackName) {
        console.log("doIfStarted", !!this);
        return this.hasStarted()
            ? callback()
            : this.warnNotAllowed(callbackName);
    };
    Game.prototype.addPlayer = function (player) {
        if (this.status = 'draft') {
            player.id = ++this.nbPlayers;
            this.mapPlayer[this.nbPlayers] = player;
        }
        else
            console.warn("You can't add a player on a " + this.status + " game");
    };
    Game.prototype.addPlayers = function (players) {
        for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
            var player = players_1[_i];
            this.addPlayer(player);
        }
    };
    Game.prototype.deskWinner = function (playerId) {
        var _this = this;
        return this.doIfStarted((function () {
            console.log(_this.mapPlayer[playerId].name + " is the Winner");
            _this.status = 'ended';
        }).bind(this), "deskWinner");
    };
    Game.prototype.getCurrentPlayer = function () {
        return this.mapPlayer[this.currentPlayerId];
    };
    Game.prototype.scoreConsoleLog = function () {
        console.log(this.mapPlayer[this.currentPlayerId].name, "has now " + this.mapPlayerScore[this.currentPlayerId] + " points");
    };
    Game.prototype.warnNotAllowed = function (operation) {
        console.log(this.status + " doesn't allow \"" + operation + "\"");
    };
    Game.prototype.nextPlayer = function () {
        var _this = this;
        return this.doIfStarted((function () {
            if (_this.hasNotPlayListIds.length == 0)
                _this.initHasNotPlayListIds();
            _this.currentPlayerId = _this.hasNotPlayListIds.pop();
        }).bind(this), "nextPlayer");
    };
    Game.prototype.initHasNotPlayListIds = function () {
        this.hasNotPlayListIds = Object.keys(this.mapPlayer).slice(0);
    };
    Game.prototype.logTurn = function () {
        console.log(this.mapPlayer[this.currentPlayerId].name + " will now play it's " + (this.currentShotNumber + 1) + " shot");
    };
    Game.prototype.initScore = function (value) {
        for (var _i = 0, _a = Object.keys(this.mapPlayer); _i < _a.length; _i++) {
            var playerId = _a[_i];
            this.mapPlayerScore[playerId] = value;
        }
    };
    Game.prototype.init = function () {
        this.initHasNotPlayListIds();
        this.initScore(0);
        this.status = 'started';
        this.nextPlayer();
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=Game.js.map