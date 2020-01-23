import IStatus from "./IStatus";
import getDate from "../functions/getDate";

class Status implements IStatus{
    private name:string;
    private createdAt:string;
    private id:number;
    private status:"draft"|"ended"|"started";
    constructor(name:string){
        this.name=name;
        this.status="draft"
        this.createdAt=getDate();
    }
    getId(){return this.id;}
    getCreatedAt(){return this.createdAt}
    setId(id:number){this.id=id;}
    getName(){return this.name}
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
export default Status;