
const chalk = require('chalk');
const log = console.log;
const rooms = {
    'GreatHall': {'name': 'Greathall',
        'direction': { 'east': 'cellar', 'north': 'bedroom', 'south': 'exit' },
        'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['Crossbow', 'Shield']
    },
    'BedRoom': {'name': 'BedRoom', 'direction': { 'south': 'GreatHall' }, 'description': "The chiefs room, although he is no where to be found", 'items': ['Armory', 'Key'] },
    'Cellar': {'name': 'Cellar', 'direction': { 'west': 'GreatHall' }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['ChestPlate'] },
    'Exit': {'name': 'Exit', 'direction': { 'north': 'GreatHall' }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
}
exports.currentLocation = function currentLocation(){
const currentLocation= `you are located at ${rooms['GreatHall'].name}`
log(chalk.yellow(currentLocation))
}
exports.roomInformation = function roomInformation(){
const greatHallInformation = `You are located at: GreatHall -=- ${rooms['GreatHall'].description}
Objects:
${rooms['GreatHall'].items}`
log(chalk.grey(greatHallInformation))

const bedRoomInformation = `You are located at: BedRoom -=- ${rooms['BedRoom'].description}
Objects:
${rooms['BedRoom'].items}`
log(chalk.grey(bedRoomInformation))

const cellarInformation = `You are located at : Cellar -=- ${rooms['Cellar'].description}
Objects:
${rooms['Cellar'].items}`
log(chalk.grey(cellarInformation))

const exitInformation = `You are located at : Exit -=- ${rooms['Exit'].description}
Objects:
${rooms['Exit'].items}`
log(chalk.grey(exitInformation))
}