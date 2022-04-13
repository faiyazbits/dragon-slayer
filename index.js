
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


log (chalk.red("you are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"))
log (chalk.yellow("you can use the following commands:"))
log (chalk.yellow("WALK - move north, south, east, west (ex: walk south)"))
log (chalk.yellow("move an entity (ex: move sword)"))
log (chalk.yellow("collect an entity (ex: collect key)"))
log (chalk.white("you can use inventory to view your items (ex: inventory) ['flashlight']"))
log (chalk.white("you have the following items: ['flashlight']"))
log (chalk.white("you are located at: GreatHall -=- The greathall  at the villages center.there is a weapon cache at the back"))
log (chalk.white("Objects:"))
log (chalk.white("armory"))
log (chalk.white("-=-"))