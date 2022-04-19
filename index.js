const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;
//const {generateDescription} = require('./description.js')
const { rooms } = require('./description.js')

const name = prompt("What is your name? ");
log(chalk.blue(name));

const { storyIntroduction } = require('./storyIntro.js')
storyIntroduction()

function currentLocation() {
    const currentLocation = `you are located at ${rooms['GreatHall'].name}`
    log(chalk.yellow(currentLocation))
}
currentLocation()

function roomInformation(){
    const greatHallInformation =` ${rooms['GreatHall'].description}
    Objects:
    ${rooms['GreatHall'].items}`
    log(chalk.grey(greatHallInformation))
    }
    roomInformation()

log(chalk.rgb(105, 41, 224)("Start The Game"))

log(prompt("your first move?"))

const nextMove = prompt("whats your next move?");
log(chalk.blue(nextMove));




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




