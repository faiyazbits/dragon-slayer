const showIntroduction = require("./introduction");
const generateDescription = require("./description");

const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

const rooms = {
  greatHall: {
    name: "GreatHall",
    directions: { east: ["cellar"], north: ["bedRoom"], south: ["exit"] },
    description:
      "The great hall at the villages center. There is a weapon cache at the back",
    items: ["crossbow", "shield"],
  },
  bedRoom: {
    name: "BedRoom",
    directions: { south: ["greatHall"] },
    description: "The chiefs room, although he is no where to be found",
    items: ["armory", "key"],
  },
  cellar: {
    name: "Cellar",
    directions: { west: ["greatHall"] },
    description:
      "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.",
    items: ["chestplate"],
  },
  exit: {
    name: "Exit",
    directions: { north: ["greatHall"] },
    description: "Goodbye! You can type leave to end the game.",
    items: [],
  },
};
module.exports = { rooms };

showIntroduction();
let currentRoom = rooms.greatHall;
generateDescription(currentRoom);

let nextMove = prompt("What's your next move? ");
log(chalk.white("-=-", nextMove));

let allowedDirections = Object.keys(currentRoom.directions);

function isAllowedDirections() {
 const isAllowedDirections = allowedDirections.includes(nextMove);
  if (!isAllowedDirections) {
    console.log(
      "Try again, Your current available exits are",
      currentRoom.directions
    );
    nextMove = prompt("What's your next move? ");
  } else {
    let otherRoom = currentRoom.directions[nextMove];
    let currentLocation = rooms[otherRoom];
    generateDescription(currentLocation);
    nextMove = prompt("What's your next move? ");
  }
}
isAllowedDirections();


const str = 'walk west';
const words = str.split(' ');
const word = words.pop()
console.log(word);//west

function canMove(){

}