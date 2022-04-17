
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


// const name = prompt("What is your name? ");
// log(chalk.red(name));


const rooms = {
    'greatHall': {
      'directions': { 'east': ['cellar'], 'north': ['bedRoom'], 'south': ['exit']},
      'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['crossbow', 'shield']
    },
    'bedRoom': { 'directions': { 'south': ['greatHall'] }, 'description': "The chiefs room, although he is no where to be found", 'items': ['armory', 'key'] },
    'cellar': { 'directions': { 'west': ['greatHall'] }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['chestplate'] },
    'exit': { 'directions': { 'north': ['greatHall'] }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
  }


const storyLine = "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"
log(chalk.red(storyLine))

const storyCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

log(chalk.yellow(storyCommands))

const inventories = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`
log(chalk.white(inventories))

const greatHallDescription = `You are located at: GreatHall -=- ${rooms['greatHall'].description} 
Objects:
${rooms['greatHall'].items}`
log(chalk.grey(greatHallDescription))



const nextMove = prompt("What's your next move? ");//walk west
log(chalk.white("-=-", (nextMove)));

function directionMove() {
  if (nextMove == "walk east") {
    console.log("Enter The Cellar")
  }
  else if (nextMove == "walk north") {
    console.log("enter the bedroom")
  }
  else if (nextMove == "walk south") {
    console.log("exit")
  }
  else {
    console.log("Try again, your currently available exits are", (rooms['greatHall'].directions))
  }
}
directionMove()

