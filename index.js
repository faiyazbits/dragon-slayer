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

generateDescription(currentLocation)


const nextMove = prompt("What's your next move? ");//walk west
const splitedArray = nextMove.split(" ")
const lastName = splitedArray[splitedArray.length-1]
log(chalk.rgb(145, 141, 141)("-=-", (nextMove)));
console.log(lastName)





function isActiveDirections(){
    const possibleWay = Object.keys(currentLocation.directions)
    console.log(possibleWay)
    const isPossibleWay = possibleWay.includes(nextMove)
    console.log(isPossibleWay)
    if (!isPossibleWay){
        console.log("Try again, your currently available exits are", (currentLocation.directions))

    }

}

isActiveDirections(lastName)



function canMove(){

}
canMove()


