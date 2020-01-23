interface IDoIfStarted{
    doIfStarted(callbackBinded,callbackName:string)
    warnNotAllowed(operation:string)
    hasStarted():boolean;
}
export default IDoIfStarted;