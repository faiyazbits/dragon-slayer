const chalk = require('chalk');
const log = console.log;
// const {rooms} = require("./index.js");

exports.generateDescription= function generateDescription(name, description,items){
console.log(`You are located at: ${name} -=- ${description} 
Objects:
${items}`)
}