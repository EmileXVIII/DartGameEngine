"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getDate_1 = require("../functions/getDate");
var Status = /** @class */ (function () {
    function Status(name) {
        this.name = name;
        this.status = "draft";
        this.createdAt = getDate_1.default();
    }
    Status.prototype.getId = function () { return this.id; };
    Status.prototype.getCreatedAt = function () { return this.createdAt; };
    Status.prototype.setId = function (id) { this.id = id; };
    Status.prototype.getName = function () { return this.name; };
    Status.prototype.setStatus = function (status) {
        switch (status) {
            case "draft":
            case "ended":
            case "started":
                this.status = status;
                break;
            default:
                console.warn("setStatus: illegalArgument");
        }
    };
    Status.prototype.getStatus = function () { return this.status; };
    return Status;
}());
exports.default = Status;
//# sourceMappingURL=Status.js.map