import ShotPosition from "./ShotPosition";

interface IShotReader{
    askShot():Promise<ShotPosition>;
}
export default IShotReader;