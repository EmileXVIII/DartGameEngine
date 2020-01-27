import IShot from "../game/IShot";

interface IShotReader{
    askShot():Promise<IShot>;
}
export default IShotReader;