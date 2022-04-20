const { storyIntro } = require('./intoduction.js');
const { generateDescription } = require('./description.js');


const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

const rooms = {
  'greatHall': {
    name: 'GreatHall',
    'directions': { 'east': 'cellar', 'north': 'bedRoom', 'south': 'exit' },
    'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['crossbow', 'shield']
  },
  'bedRoom': { name: 'BedRoom', 'directions': { 'south': ['greatHall'] }, 'description': "The chiefs room, although he is no where to be found", 'items': ['armory', 'key'] },
  'cellar': { name: 'Cellar', 'directions': { 'west': ['greatHall'] }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['chestplate'] },
  'exit': { name: 'Exit', 'directions': { 'north': ['greatHall'] }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
}
exports.rooms = { rooms }

storyIntro()

let currentRoom = rooms.greatHall;

generateDescription(currentRoom);

let nextMove = prompt("What's your next move? ");
log(chalk.rgb(145, 141, 141)("-=-", nextMove));
// let arr = nextMove.split(' ')
// console.log(arr[1])

function isAvailableDirection() {
  let availableDirections = Object.keys(currentRoom.directions);
  console.log(availableDirections)
  const isDirectionAvailable = availableDirections.includes(nextMove)
  // const isDirectionAvailable = availableDirections.includes(arr[1])
  if (!isDirectionAvailable) {
    console.log("Try again, your currently available exits are", currentRoom.directions)
    nextMove = prompt("What's your next move? ");
  }
  else {
    const nextRoom = currentRoom.directions[nextMove]
    currentRoom = rooms[nextRoom]
    generateDescription(currentRoom)

    nextMove = prompt("What's your next move? ");
  }
}

isAvailableDirection()



