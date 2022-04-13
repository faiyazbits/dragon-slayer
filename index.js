
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.blue(name));

const rooms = {
    'GreatHall':{'North':'BedRoom','South':'Exit', 'East':'Cellar', 'items':['Crossbow','Shield'] },
    
    'BedRoom' :{'South':'GreatHall','items':['Armory', 'Key'] },

    'Cellar' : {'West':'GreatHall','items':['Chestplate'] },

    'Exit': {'North':'GreatHall','items':[]},
}
log(rooms['Cellar'].West)
log(chalk.yellow(rooms['BedRoom'].items))
