
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


// const name = prompt("What is your name? ");
// log(chalk.red(name));


const rooms = require('./information.js');
const showIntroduction = require('./introduction.js');

showIntroduction(); 

const currentLocation = rooms.greatHall 

const nextMove = prompt("What's your next move? ");//walk west
log(chalk.white("-=-", (nextMove)));

function generateDescription(){
    
}

generateDescription(rooms)




