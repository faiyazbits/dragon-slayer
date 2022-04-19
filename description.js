const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;
const rooms = require('./information.js');

// const greatHallDescription = `You are located at: GreatHall -=- ${rooms['greatHall'].description} 
// Objects:
// ${rooms['greatHall'].items}`//Crossbow, Shield
// log(chalk.rgb(145, 141, 141)(greatHallDescription))

// let nextMove = prompt("What's your next move? ");//walk west
// log(chalk.rgb(145, 141, 141)("-=-", (nextMove)));

// const bedRoomDescription = `You are located at: BedRoom -=- ${rooms['bedRoom'].description} 
// Objects:
// ${rooms['bedRoom'].items}`

// const cellarDescription = `You are located at: Cellar -=- ${rooms['cellar'].description} 
// Objects:
// ${rooms['cellar'].items}`

// const exitDescription = `You are located at: Exit -=- ${rooms['exit'].description}`



function generateDescription(name, description, items) {
  console.log(`you are located at ${name}: -=- ${description}
    Objects:
${items}`);
}

module.exports = generateDescription;