
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.blue(name));

const fav = prompt("ur favorite food?");
 log(chalk.yellow(fav));
 
 const rooms = {
    'Great hall':{ 'South':'BedRoom', 'East': 'Exit','items':['Crossbow', 'Armory'] },
    
    'BedRoom' :{'North':'Great hall', 'East':'Cellar','items':['Chestplate', 'Key'] },

    'Cellar' : {'North':'Exit','West':'BedRoom','items':'Shield' },

    'Exit': {'South':'Cellar','West':'Great hall' },
    

}
log(rooms['Cellar'].North)
log(chalk.yellow(rooms['BedRoom'].items))
