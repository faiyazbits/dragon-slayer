
function delayedLog(text){
    return new Promise(()=>{
        const characters = text.split("").concat(['\n']);
        let i=0;
        const interval = setInterval(() => {
            process.stdout.write(characters[i]);
            i++;
            if(i == characters.length){
                clearInterval(interval);
                
            }
        },50)
    })

}


module.exports = delayedLog;