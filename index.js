const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


// const name = prompt("What is your name? ");
// log(chalk.red(name));


const rooms = require('./information.js');
const showIntroduction = require('./introduction.js');
const generateDescription = require('./description')

showIntroduction(); 

const currentLocation = rooms.greatHall 

generateDescription(currentLocation.name,currentLocation.description,currentLocation.items)


const nextMove = prompt("What's your next move? ");//walk west
log(chalk.white("-=- walk", (nextMove)));




function canMove(){
    const activeDirections = Object.keys(currentLocation.directions)
    console.log(activeDirections)
    const isActiveDirections = activeDirections.includes(nextMove)
    if (!isActiveDirections){
        console.log("Try again, your currently available exits are", (currentLocation.directions))

        nextMove = prompt("What's your next move? ")
    }

}

canMove()