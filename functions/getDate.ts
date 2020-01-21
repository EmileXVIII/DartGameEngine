function getDate(){
    let date = new Date();
    return ""+date.getDate+date.getMonth+date.getUTCFullYear;
}

export default getDate;