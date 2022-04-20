const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;
// const {currentLocation}= require('./description.js')
// console.log(currentLocation)
const { rooms } = require('./description.js')


const name = prompt("What is your name? ");
log(chalk.blue(name));

const { storyIntroduction } = require('./storyIntro.js')
storyIntroduction()

let currentRoom = rooms.GreatHall;
function currentLocation(room) {
    log(chalk.green(`You are located at: ${room.name} `))
}
currentLocation(currentRoom)

function roomDescription(room) {
    console.log(` ${room.description} 
        Objects:
        ${room.items}`)
}
roomDescription(currentRoom)



// function currentLocation() {
//     const currentLocation = `you are located at ${rooms['GreatHall'].name}`
//     log(chalk.yellow(currentLocation))
// }


// function roomInformation() {
//     const greatHallInformation = `${rooms['GreatHall'].description}
//     Objects:
//     ${rooms['GreatHall'].items} collect your items`
//     log(chalk.grey(greatHallInformation))
// }
// roomInformation()

log(chalk.rgb(105, 41, 224)("Start The Game"))


let firstMove = prompt("What's your first move? ");
log(chalk.red("-=-walk", firstMove));

let possibleDirection = Object.keys(currentRoom.direction);

function isDirectionAvailable() {
    const isDirectionAvailable = possibleDirection.includes(firstMove)
    if (!isDirectionAvailable) {
        console.log("Try again, your currently available directions are", currentRoom.direction)
        nextMove = prompt("What's your next move? ");
    }
}
isDirectionAvailable()




// function directionMove() {
//     if (nextMove == "walk east") {
//         log(chalk.green("Enter the cellar you are located at cellar : -=- ", (rooms['Cellar'].description), "Collect the items at cellar:", (rooms['Cellar'].items)))
//     }
//     else if (nextMove == "walk north") {
//         log("enter the bedroom")
//     }
//     else if (nextMove == "walk south") {
//         log("exit")
//     }
//     else {
//         log("Try again, your currently available exits are", (rooms['GreatHall'].direction.keys))
//     }
// }
// directionMove()




