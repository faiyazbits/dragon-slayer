
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.red(name));



// rooms = {
//     'GreatHall' : { 'North' : 'Bedroom', 'South': 'exit', 'East' : 'Cellar','items' : [] },
//     'Bedroom' : { 'south' : 'GreatHall','items' : ['Armory','crosbow'] },
//     'Cellar' : { 'West' : 'GreatHall', 'items' : ['chestplease'] },
//     'exit' : { 'North' : 'GreatHall', 'items' : ['sheild','key'] }
//     }


const rooms = {
    'GreatHall': {'East': 'Cellar','North': 'BedRoom', 'South': 'Exit', 'items': ['Crossbow', 'Shield'] },
    'BedRoom': {'South': 'GreatHall', 'items': ['Armory', 'Key']},
    'Cellar': {'West': 'GreatHall', 'items': ['ChestPlate']},
    'Exit': {'North':'GreatHall', 'items': []},
    }
    
log(rooms['GreatHall'])
log(chalk.blue(rooms['Exit'].North))