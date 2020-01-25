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
var Status_1 = require("./Status");
/*
class DoIfStarted{
    private valueIfStarted:any;
    private log:boolean;
    constructor(valueIfStarted:any,ref valueToTest:any,log:boolean){
        this.valueIfStarted=valueIfStarted;
        this.log=log;
    }
    doIfStarted(callbackBindedIf:Function,argsArrayIf:any[]=[],callbackBindedElse:Function=()=>null,argsArrayElse:any[]=[]){
        if (valueToTest===valueIfStarted){
            callbackBindedIf(...argsArrayIf);
            return true;
        }

        callbackBindedElse(...argsArrayElse);
        return false;
    }
}
*/
var DoIfStartedExtention = /** @class */ (function (_super) {
    __extends(DoIfStartedExtention, _super);
    function DoIfStartedExtention() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoIfStartedExtention.prototype.doIfStarted = function (callbackBinded, callbackName) {
        console.log("doIfStarted", !!this);
        return this.hasStarted()
            ? callbackBinded()
            : this.warnNotAllowed(callbackName);
    };
    DoIfStartedExtention.prototype.warnNotAllowed = function (operation) {
        console.log(this.getStatus() + " doesn't allow \"" + operation + "\"");
    };
    DoIfStartedExtention.prototype.hasStarted = function () {
        return this.getStatus() === "started";
    };
    return DoIfStartedExtention;
}(Status_1.default));
exports.default = DoIfStartedExtention;
//# sourceMappingURL=DoIfStarted.js.map