const chalk = require('chalk');
const log = console.log;

function generateDescription(rooms){
console.log(chalk.blue(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`))//chestplate, shield

}

function logAvailableDirection(rooms){
console.log("Try again, your currently available exits are", rooms.directions)
}

module.exports = {generateDescription, logAvailableDirection};
