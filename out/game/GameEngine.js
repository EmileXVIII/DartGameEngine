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
var Shot_1 = require("./Shot");
var GameEngine = /** @class */ (function () {
    function GameEngine(game, shotReader, status) {
        this.status = status;
        this.game = game;
        this.runGame.bind(this);
        this.shotReader = shotReader;
    }
    GameEngine.prototype.deskWinner = function (playerId) {
        var _this = this;
        return this.game.doIfStarted((function () {
            console.log(_this.game.mapPlayer.getPlayer(playerId).name + " is the Winner");
            _this.game.setStatus('ended');
        }).bind(this), "deskWinner");
    };
    GameEngine.prototype.getCurrentPlayer = function () {
        return this.game.mapPlayer.getPlayer(this.currentPlayerId);
    };
    GameEngine.prototype.getCurrentPlayerId = function () { return this.game.getCurrentPlayerId(); };
    GameEngine.prototype.getThisId = function () {
        return this.status.getId();
    };
    GameEngine.prototype.getName = function () {
        return this.status.getName();
    };
    GameEngine.prototype.handleShot = function (shot) {
        console.log("handleShot", !!this);
        return this.game.doIfStarted((function () {
            console.log("anonymous", !!this);
            //console.log("cible",this.cible);
            this.game.currentShotNumber++;
            var shotResult = this.game.cible.getShotResult(shot); //this.cible.mapZone[zone](posFromCenter);
            this.game.score(shotResult, shot);
            this.game.showAvancement(this.getCurrentPlayerId());
            if (this.game.mapPlayerScore[this.getCurrentPlayerId()] !== 0 && this.game.currentShotNumber > this.game.maxShotNumber) {
                this.game.currentShotNumber = 1;
                this.nextPlayer();
            }
            if (this.game.mapPlayerScore[this.getCurrentPlayerId()] === 0)
                this.deskWinner(this.getCurrentPlayerId());
        }).bind(this), "handleShot");
    };
    GameEngine.prototype.initAll = function () {
        this.initHasNotPlayListIds();
        this.game.setStatus('started');
        this.nextPlayer();
    };
    GameEngine.prototype.initHasNotPlayListIds = function () {
        this.hasNotPlayListIds = this.game.mapPlayer.getMapKeys().slice(0);
    };
    GameEngine.prototype.logTurn = function () {
        this.game.showAvancement(this.getCurrentPlayerId());
        console.log(this.game.mapPlayer.getPlayer(this.getCurrentPlayerId()).name + " will now play it's " + this.game.currentShotNumber + " shot");
    };
    GameEngine.prototype.nextPlayer = function () {
        var _this = this;
        return this.game.doIfStarted((function () {
            if (_this.hasNotPlayListIds.length === 0)
                _this.initHasNotPlayListIds();
            _this.game.setCurrentPlayerId(_this.hasNotPlayListIds.pop());
        }).bind(this), "nextPlayer");
    };
    GameEngine.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var shot;
            return __generator(this, function (_a) {
                if (this.game.getPlayertCount() === 0) {
                    console.warn("Not enought Players");
                    return [2 /*return*/, "Not enought Players"];
                }
                if (!(this.game.hasStarted())) {
                    this.game.init();
                    this.initAll();
                    this.game.setStatus("started");
                }
                this.logTurn();
                while (this.game.hasStarted()) {
                    shot = new Shot_1.default(2, 20);
                    console.log("###zone", shot.getShotValue(), "pos", shot.getShotPosition());
                    this.handleShot(shot);
                    if (this.game.hasStarted())
                        this.logTurn();
                }
                return [2 /*return*/];
            });
        });
    };
    return GameEngine;
}());
exports.default = GameEngine;
//# sourceMappingURL=GameEngine.js.map