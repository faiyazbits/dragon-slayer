
const chalk = require('chalk');
const log = console.log;

// const greatHallDescription = `You are located at: ${rooms.greatHall.name} -=- ${rooms['greatHall'].description} 
// Objects:
// ${rooms['greatHall'].items}`//Crossbow, Shield

// const bedRoomDescription = `You are located at: ${rooms.bedRoom.name} -=- ${rooms['bedRoom'].description} 
// Objects:
// ${rooms['bedRoom'].items}`

// const cellarDescription = `You are located at: ${rooms.cellar.name} -=- ${rooms['cellar'].description} 
// Objects:
// ${rooms['cellar'].items}`

// const exitDescription = `You are located at: ${rooms.exit.name} -=- ${rooms['exit'].description}`


function generateDescription(rooms){
    log(chalk.grey(`You are located at: ${rooms.name}: -=- ${rooms.description}
    Objects:
    ${rooms.items}`));
}

module.exports = generateDescription;
