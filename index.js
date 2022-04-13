
const prompt = require('prompt-sync')();
const chalk = require('chalk');
const { yellow } = require('colors');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.red(name));



const rooms = {

    'GreatHall': {'East': 'Cellar','North': 'BedRoom', 'South': 'Exit', 'items': ['Crossbow', 'Shield'] },
    'BedRoom': {'South': 'GreatHall', 'items': ['Armory', 'Key']},
    'Cellar': {'West': 'GreatHall', 'items': ['ChestPlate']},
    'Exit': {'North':'GreatHall', 'items': []},
}
    
    
// log(rooms.GreatHall.items);
    // log(chalk.blue(rooms['Exit'].North));
    log(chalk.green(rooms.GreatHall.items));
    
const gameIntroduction = "You are in a small village under attack from a Dragon!Quick, enter the building and get your crossbow."

log(chalk.red(gameIntroduction));

const gameCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

log(chalk.yellow(gameCommands));


const inventories = `You can use inventory to view your items(ex: inventory)['sword']
You have the following items: ['sword']`
log(chalk.white(inventories));

const greatHallIntro = `You are located at: GreatHall -=- The great hall at the villages center. There is a weapon cache at the back
Objects:
armory`
log(chalk.grey(greatHallIntro));
