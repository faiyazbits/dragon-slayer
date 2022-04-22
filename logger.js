const rooms =require('./room')
const chalk = require('chalk');
// const log = console.log;
function currentRoomDescription(room) {
    console.log(chalk.rgb(0, 247, 255)(`You are currently located at: ${room.name} -=- ${room.description} 
Objects:
${room.items}`))
}

function logAvailableExits(room){
    console.log("Try again, your currently available directions are", room.directions)
}
module.exports = {currentRoomDescription,
logAvailableExits
}