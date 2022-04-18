const {storyIntro} = require('./intoduction.js');

const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

const name = prompt("What is your name? ");
log(chalk.red(name));

const rooms = {
  'greatHall': { name: 'GreatHall',
    'directions': { 'east': ['cellar'], 'north': ['bedRoom'], 'south': ['exit']},
    'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['crossbow', 'shield']
  },
  'bedRoom': {name: 'BedRoom', 'directions': { 'south': ['greatHall'] }, 'description': "The chiefs room, although he is no where to be found", 'items': ['armory', 'key'] },
  'cellar': {name: 'Cellar', 'directions': { 'west': ['greatHall'] }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['chestplate'] },
  'exit': {name: 'Exit', 'directions': { 'north': ['greatHall'] }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
}

<<<<<<< HEAD
storyIntro()

// const greatHallDescription = `You are located at: ${rooms.greatHall.name} -=- ${rooms['greatHall'].description} 
// Objects:
// ${rooms['greatHall'].items}`//Crossbow, Shield
// log(chalk.rgb(145, 141, 141)(greatHallDescription))

// let nextMove = prompt("What's your next move? ");//walk west
// log(chalk.rgb(145, 141, 141)("-=- walk", (nextMove)));

// const bedRoomDescription = `You are located at: ${rooms.bedRoom.name} -=- ${rooms['bedRoom'].description} 
// Objects:
// ${rooms['bedRoom'].items}`

// const cellarDescription = `You are located at: ${rooms.cellar.name} -=- ${rooms['cellar'].description} 
// Objects:
// ${rooms['cellar'].items}`

// const exitDescription = `You are located at: ${rooms.exit.name} -=- ${rooms['exit'].description}`

// function directionMove() {
//   if (nextMove == "walk east") {
//     console.log(cellarDescription)
//   }
//   else if (nextMove == "walk north") {
//     console.log(bedRoomDescription)
//   }
//   else if (nextMove == "walk south") {
//     console.log(exitDescription)
//   }
//   else {
//     console.log("Try again, your currently available exits are", (rooms['greatHall'].directions))
//   }
// }
// directionMove()

// nextMove = prompt("What's your next move? ");
// log(chalk.rgb(145, 141, 141)("-=- walk", (nextMove)));

// log(chalk.green(bedRoomDescription))

// console.log("-=- collect armory")
// console.log("armory has been added to your inventory")

// console.log("-=- collect key")
// console.log("key has been added to your inventory")

// nextMove = prompt("What's your next move? ");
// log(chalk.rgb(145, 141, 141)("-=- walk", (nextMove)));

// log(chalk.green(cellarDescription))

// console.log("-=- collect chestplate")
// console.log("chestplate has been added to your inventory")

// nextMove = prompt("What's your next move? ");
// log(chalk.rgb(145, 141, 141)("-=- walk", (nextMove)));

// log(chalk.green(exitDescription))




=======
const storyLine = "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"
log(chalk.red(storyLine))

const storyCommands = `You can use the following commands:
WALK- walk north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

log(chalk.rgb(238, 238, 174)(storyCommands))

const inventories = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`
log(chalk.rgb(245, 245, 245)(inventories))

const greatHallDescription = `You are located at: GreatHall -=- ${rooms['greatHall'].description} 
Objects:
${rooms['greatHall'].items}`//Crossbow, Shield
log(chalk.rgb(145, 141, 141)(greatHallDescription))

let nextMove = prompt("What's your next move? ");//walk west
log(chalk.rgb(145, 141, 141)("-=-", (nextMove)));

const bedRoomDescription = `You are located at: BedRoom -=- ${rooms['bedRoom'].description} 
Objects:
${rooms['bedRoom'].items}`

const cellarDescription = `You are located at: Cellar -=- ${rooms['cellar'].description} 
Objects:
${rooms['cellar'].items}`

const exitDescription = `You are located at: Exit -=- ${rooms['exit'].description}`

function directionMove() {
  if (nextMove == "walk east") {
    console.log(cellarDescription)
  }
  else if (nextMove == "walk north") {
    console.log(bedRoomDescription)
  }
  else if (nextMove == "walk south") {
    console.log(exitDescription)
  }
  else {
    console.log("Try again, your currently available exits are", (rooms['greatHall'].directions))
  }
}
directionMove()

nextMove = prompt("What's your next move? ");
log(chalk.rgb(145, 141, 141)("-=- walk", (nextMove)));

log(chalk.green(bedRoomDescription))
>>>>>>> 5706fdd064718c129498427899f893b98be95878






















