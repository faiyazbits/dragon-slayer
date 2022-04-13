
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.red(name));

const rooms = {
    'GreatHall': {'East': 'Cellar','North': 'BedRoom', 'South': 'Exit', 'items': ['Crossbow', 'Shield'] },
    'BedRoom': {'South': 'GreatHall', 'items': ['Armory', 'Key']},
    'Cellar': {'West': 'GreatHall', 'items': ['ChestPlate']},
    'Exit': {'North':'GreatHall', 'items': []},
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

const greatHallDescription = `You are located at: GreatHall -=- The great hall at the villages center. There is a weapon cache at the back
Objects:
armory`
log(chalk.rgb(145,141,141)(greatHallDescription))









