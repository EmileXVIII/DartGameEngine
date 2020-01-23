import IStatus from "./IStatus";
import IDoIfStarted from "./IDoIfStarted";
import Status from "./Status";

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
class DoIfStartedExtention extends Status implements IDoIfStarted{
    doIfStarted(callbackBinded,callbackName:string){
        console.log("doIfStarted",!!this);
        return this.hasStarted()
        ?callbackBinded()
        :this.warnNotAllowed(callbackName)
    }
    warnNotAllowed(operation:string){
        console.log(`${this.getStatus()} doesn't allow "${operation}"`);
    }
    hasStarted(){
        return this.getStatus()==="started"
    }
}
export default DoIfStartedExtention;