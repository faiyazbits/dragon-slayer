const chalk = require("chalk");
const log = console.log;


function logRoomDescription(room){
    log(chalk.grey(`You are located at: ${room.name}: -=- ${room.description}
    Objects:${room.items}`));
}


function logAvailableExits(room){
    console.log("Try again, your currently available directions are", room.directions)
 }

module.exports = {
    logRoomDescription,
    logAvailableExits
}