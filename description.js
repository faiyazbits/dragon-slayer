const chalk = require('chalk');
const log = console.log;

exports.generateDescription = function generateDescription(rooms){
console.log(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`)
}
