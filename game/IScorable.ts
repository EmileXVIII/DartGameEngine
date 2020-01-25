import GetCurrentPlayerId from "../utils/classes/IGetId";

interface IScorable{
    setScore(id:number,score:number);
    getScore(id:number);
    getCurrentPlayerId():number;
}
export default IScorable;