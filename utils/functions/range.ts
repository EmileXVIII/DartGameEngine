function range(start:number=0,end:number,step:number=1) {
    let result=[];
    let i=start;
    while(i<end){
        result.push(i)
        i+=step;
    }
    return result
}
export default range;