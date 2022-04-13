
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.red(name));

const rooms = {
    'Great Hall': {'East': 'Crossbow','West':undefined, 'North': 'BedRoom', 'South': 'Cellar', 'items': 'ChestPlate' },
    'BedRoom': {'East': undefined,'West':undefined, 'North': undefined, 'South': 'Great Hall', 'items': 'Armory'},
    'Cellar': {'East': undefined,'West':undefined, 'North': 'Great Hall', 'South': undefined, 'items': 'Key'},
    'Exit': {'East': undefined,'West':'Great Hall', 'North': undefined, 'South': undefined, 'items': ['Crossbow', 'Shield']},
}
 log(officeRooms['Great Hall'])
 log(chalk.blue(officeRooms['Exit'].items))



