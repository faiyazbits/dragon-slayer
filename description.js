const chalk = require('chalk');
const log = console.log;

function generateDescription(rooms){
console.log(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`)
}

module.exports = generateDescription;
