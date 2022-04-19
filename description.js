const chalk = require('chalk');
const log = console.log;
// const {rooms} = require("./index.js");

exports.generateDescription = function generateDescription(rooms){
console.log(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`)
}