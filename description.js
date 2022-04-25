const chalk = require('chalk');
const log = console.log;

function generateDescription(rooms){
console.log(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`)
}

function isAvailableDirection(rooms){
console.log("Try again, your currently available exits are", rooms.directions)
}

module.exports = {generateDescription, isAvailableDirection};
