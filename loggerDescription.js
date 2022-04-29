const chalk = require('chalk');

function generateDescription(rooms) {
    console.log(chalk.blue(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`))
}

function logAvailableDirection(rooms) {
    console.log("Try again, your currently available exits are", rooms.directions)
}

function logItemCollected(item) {
    console.log(chalk.grey(`${item} has been added to your inventory`))
}

function getLogStatementForInventory(inventory) {
    return `You have the following items: ${inventory}`
}

module.exports = { generateDescription, logAvailableDirection, logItemCollected, getLogStatementForInventory };
