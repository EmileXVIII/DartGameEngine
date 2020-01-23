interface IStatus {
    getName():string;
    getStatus():any;
    getCreatedAt(): string ;
    setStatus(status);
    getId():number;
    setId(id);
}
export default IStatus;