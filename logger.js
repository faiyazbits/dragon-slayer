
const delayedLog = require('./delayed_log');
const chalk = require('chalk');

 function logRoomDescription(room){
    console.log(chalk.grey(`You are located at: ${room.name}: -=- ${room.description}
    Objects: ${room.items}`));
}


function logAvailableExits(room){
    console.log("Try again, your currently available exits are", (room.directions))
}

function logItemCollected(item){
    console.log(chalk.grey(`${item} has been added to your inventory`))
}

function getLogStatementForInventory(inventory){
    return `You have the following items: ${inventory}`
}

module.exports = {
    logRoomDescription,
    logAvailableExits,
    logItemCollected,
    getLogStatementForInventory
}