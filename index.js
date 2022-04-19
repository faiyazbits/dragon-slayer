 const showIntroduction = require('./introduction');
 const generateDescription = require('./description');

const prompt = require("prompt-sync")();
const chalk = require('chalk');
const log = console.log;


const rooms = {
  greatHall: {
    name: 'GreatHall',
    directions: { east: ["cellar"], north: ["bedRoom"], south: ["exit"] },
    description:
      "The great hall at the villages center. There is a weapon cache at the back",
    items: ["crossbow", "shield"],
  },
  bedRoom: {
    name: 'BedRoom',
    directions: { south: ["greatHall"] },
    description: "The chiefs room, although he is no where to be found",
    items: ["armory", "key"],
  },
  cellar: {
    name: 'Cellar',
    directions: { west: ["greatHall"] },
    description:
      "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.",
    items: ["chestplate"],
  },
  exit: {
    name: 'Exit',
    directions: { north: ["greatHall"] },
    description: "Goodbye! You can type leave to end the game.",
    items: [],
  },
};


showIntroduction()
const currentRoom = rooms.greatHall;
generateDescription(currentRoom.name, currentRoom.description, currentRoom.items);

// log(chalk.red(currentRoom)); 

// const nextMove = prompt("What's your next move? ");
// log(red("-=-", nextMove));

// function directionMove() {
//   if (nextMove == "walk east") {
//     console.log(
//       `You are located at:Cellar -=- ${rooms.cellar.description} items: ${rooms.cellar.items}`
//     );
//   } else if (nextMove == "walk north") {
//     console.log(
//       `You are located at:Bedroom -=- ${rooms.bedRoom.description} items: ${rooms.bedRoom.items} `
//     );
//   } else if (nextMove == "walk south") {
//     console.log(`You are located at:exit -=- ${rooms.exit.description}`);
//   } else {
//     console.log(
//       "Try again, your currently available exits are",
//       rooms.greatHall.directions
//     );
//   }
// }
// directionMove();

