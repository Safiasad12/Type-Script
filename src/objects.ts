let employee : {
    readonly id : number,
    namee : string,
    DOB : (date : Date)=> void
} = {
    id:1,
    namee:"safi",
    DOB : (date: Date)=>{
        console.log(date);
    }
};