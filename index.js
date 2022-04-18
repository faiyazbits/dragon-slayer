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

storyIntro()




