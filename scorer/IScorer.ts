import IShot from "../game/IShot";

interface IScorer{
    score(shot:IShot,originalShot:IShot):any;
}
export default IScorer;