import IShot from "../game/IShot";

interface IScorer{
    score(shot:IShot):any;
}
export default IScorer;