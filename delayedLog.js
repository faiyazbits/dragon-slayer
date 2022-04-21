function delayedLog(string,cb){
    const chars = string.split("").join("").concat("\n");
    let i = 0;
    const delayedInterval = setInterval(()=>{
        process.stdout.write(chars[i])
        i++;
        if(i == chars.length){
            clearInterval(delayedInterval)
            cb()
        }
    },50)
}

module.exports = delayedLog;