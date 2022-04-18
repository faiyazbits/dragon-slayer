
const prompt = require('prompt-sync')();
const chalk = require('chalk');


const log = console.log;


const name = prompt("What is your name? ");
log(chalk.blue(name));


const rooms = {
    'GreatHall': {
        'direction': { 'east': 'cellar', 'north': 'bedroom', 'south': 'exit' },
        'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['Crossbow', 'Shield']
    },
    'BedRoom': { 'direction': { 'south': 'GreatHall' }, 'description': "The chiefs room, although he is no where to be found", 'items': ['Armory', 'Key'] },
    'Cellar': { 'direction': { 'west': 'GreatHall' }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['ChestPlate'] },
    'Exit': { 'direction': { 'north': 'GreatHall' }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
}

log(rooms['Cellar'].direction.west)
log(chalk.rgb(105, 41, 224)(rooms['BedRoom'].items))

const storyIntro = "You are in a small Village under attack from a Dragon! Quick, enter the building and get your Crossbow"
log(chalk.red(storyIntro))

const storyCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`
log(chalk.rgb(238, 238, 174)(storyCommands))

const inventories = `You can use inventory to view your items(ex: inventory)['Chestplate']
You have the following items: ['Chestplate']`
log(chalk.white(inventories));

const greatHallInformation = `You are located at: GreatHall -=- ${rooms['GreatHall'].description}
Objects:
${rooms['GreatHall'].items}`
log(chalk.grey(greatHallInformation))

const nextMove = prompt("whats your next move?");
log(chalk.blue(nextMove));

function directionMove() {
    if (nextMove == "walk east") {
        log(chalk.green("enter the cellar you are located at :cellar -=-", (rooms['Cellar'].description), "Collect the items at cellar:", (rooms['Cellar'].items)))
    }
    else if (nextMove == "walk north") {
        log("enter the bedroom")
    }
    else if (nextMove == "walk south") {
        log("exit")
    }
    else {
        log("Try again, your currently available exits are", (rooms['GreatHall'].direction))
    }
}
directionMove()

const bedRoomInformation = `You are located at: BedRoom -=- ${rooms['BedRoom'].description}
Objects:
${rooms['BedRoom'].items}`
log(chalk.grey(bedRoomInformation))



// function  delayedLog(time){
//     let delay = setInterval(() => {console.log(time)}, 8000);
//     clearInterval(() =>{console.log(delay)},3000)

// }
// delayedLog()
