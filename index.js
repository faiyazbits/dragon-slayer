const prompt = require('prompt-sync')();
const chalk = require('chalk');

const log = console.log;

const {storycommand} = require('./storyIntro.js')
storycommand()

const {inventories} = require('./storyIntro.js')
inventories()

const {currentLocation} = require('./description.js')
currentLocation()

log(chalk.rgb(105, 41, 224)("Start The Game"))

const {roomInformation} = require('./description.js')
roomInformation()

const name = prompt("What is your name? ");
log(chalk.blue(name));

const nextMove = prompt("whats your next move?");
log(chalk.blue(nextMove));


// const rooms = {
//     'GreatHall': {'name': 'Greathall',
//         'direction': { 'east': 'cellar', 'north': 'bedroom', 'south': 'exit' },
//         'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['Crossbow', 'Shield']
//     }
   
//     'BedRoom': {'name': 'BedRoom', 'direction': { 'south': 'GreatHall' }, 'description': "The chiefs room, although he is no where to be found", 'items': ['Armory', 'Key'] },
//     'Cellar': {'name': 'Cellar', 'direction': { 'west': 'GreatHall' }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['ChestPlate'] },
//     'Exit': {'name': 'Exit', 'direction': { 'north': 'GreatHall' }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
// }
// log(rooms['GreatHall'].name)
// log(rooms['Cellar'].direction.west)
// log(chalk.rgb(105, 41, 224)(rooms['BedRoom'].items))


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




// function  delayedLog(time){
//     let delay = setInterval(() => {console.log(time)}, 8000);
//     clearInterval(() =>{console.log(delay)},3000)

// }
// delayedLog()
