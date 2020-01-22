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
class DoIfStartedExtention{
    private status:"draft"|"ended"|"started";
    doIfStarted(callbackBinded,callbackName:string){
        console.log("doIfStarted",!!this);
        return this.hasStarted()
        ?callbackBinded()
        :this.warnNotAllowed(callbackName)
    }
    warnNotAllowed(operation:string){
        console.log(`${this.status} doesn't allow "${operation}"`)
    }
    hasStarted(){
        return this.status==="started"
    }
    setStatus(status:"draft"|"ended"|"started"){
        switch (status){
            case "draft":
            case "ended":
            case "started":
                this.status=status;
                break
            default:
                console.warn("setStatus: illegalArgument")
        }
    }
    getStatus(){return this.status}
}
export default DoIfStartedExtention;