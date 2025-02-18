export const random_Link_Generator_Function = (len:number)=>{
    let options = "abcdefghijklmnopqrstuvwxyz12345677890";
    let link = "";
    const length = options.length
    for(let x=0;x<len;x++){
        link += options[Math.floor((Math.random() * length))];
    }
    return link;
}