
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
log(chalk.rgb(105, 41, 224)(rooms['BedRoom'].items))

const storyIntro = "You are in a small Village under attack from a Dragon! Quick, enter the building and get your Crossbow"
setTimeout(() => {log(chalk.red(storyIntro)); }, 3000); 


const storyCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`
setTimeout(() => {log(chalk.rgb(238,238,174)(storyCommands));}, 5000);

const inventories = `You can use inventory to view your items(ex: inventory)['Chestplate']
You have the following items: ['Chestplate']`
setTimeout(() => {log(chalk.white(inventories)); }, 7000); 

