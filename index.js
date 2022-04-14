
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const { textChangeRangeIsUnchanged } = require('typescript');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.red(name));

const rooms = {
    'GreatHall': {'East': 'Cellar','North': 'BedRoom', 'South': 'Exit', 'items': ['Crossbow', 'Shield'] },
    'BedRoom': {'South': 'GreatHall', 'items': ['Armory', 'Key']},
    'Cellar': {'West': 'GreatHall', 'items': ['ChestPlate']},
    'Exit': {'North':'GreatHall', 'items': []},
}
//Dictionary of main rooms and their corresponding descriptions
const main_rooms= {
  "GreatHall":"The great hall at the villages center. There is a weapon cache at the back",
  "Bedroom":"The chiefs room, although he is no where to be found",
  "Cellar":"It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.",
  "Exit":"Goodbye! You can type leave to end the game."
}

const storyLine = "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"
log(chalk.red(storyLine))

const storyCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

log(chalk.rgb(238,238,174)(storyCommands))

const inventories = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`
log(chalk.rgb(245,245,245)(inventories))

const greatHallDescription = `You are located at: GreatHall -=- ${main_rooms['GreatHall']} 
Objects:
${rooms['GreatHall'].items}`//Crossbow, Shield
log(chalk.rgb(145,141,141)(greatHallDescription))

// to display a text using setInterval method
function delayedLog() {
strings = [];
for (var i = 1; i <= storyLine.length; i++)
  strings.push (storyLine.substring (0, i));
 var position = 0;
setInterval (() => {
  console.log (strings [position++]);
  if (position == strings.length) position = 0;
}, 500);
}
//delayedLog()
// function myStopFunction() {
//     clearInterval(out);
//   }
//  myStopFunction()

 
    
  
 










