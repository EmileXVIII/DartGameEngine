import IShot from "../game/IShot";

interface ICible {
    mapZone:object;
    getShotResult(shot:IShot):IShot;
    showCibleShot(shot:IShot);
}
export default ICible;