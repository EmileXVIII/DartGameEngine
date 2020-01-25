import IShot from "../game/IShot";

interface ICible {
    mapZone:object;
    getShotResult(shot:IShot):IShot;
}
export default ICible;