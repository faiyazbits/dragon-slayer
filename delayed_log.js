
function delayedLog(string){
    return new Promise((resolve) => {
        const chars = string.split("").concat(['\n']);
        let i = 0;
        const interval = setInterval(() => {
            process.stdout.write(chars[i]);
            i++;
            if(i == chars.length){
                clearInterval(interval);
                resolve();
            }
        },50)
    });
    
}


module.exports = delayedLog;