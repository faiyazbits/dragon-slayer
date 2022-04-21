const delayedLog = require('./delayedLog')
const rooms = require('./rooms')
const storyIntro = require('./intoduction');
const generateDescription = require('./description');

const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

storyIntro()

// let currentRoom = rooms.greatHall;

// generateDescription(currentRoom);

// let nextMove = prompt("What's your next move? ");
// log(chalk.rgb(145, 141, 141)("-=-", nextMove));

//Split the words, and return the second word:
// let arr = nextMove.split(' ')// [walk, east]
// console.log(arr[1])// east

// function isAvailableDirection() {
//   let availableDirections = Object.keys(currentRoom.directions);
//   const isDirectionAvailable = availableDirections.includes(nextMove)
//  //const isDirectionAvailable = availableDirections.includes(arr[1])
//   if (!isDirectionAvailable) {
//     console.log("Try again, your currently available exits are", currentRoom.directions)
//     nextMove = prompt("What's your next move? ");
//     isAvailableDirection()  
//   }
//   else {
//     const nextRoom = currentRoom.directions[nextMove]
//     currentRoom = rooms[nextRoom]
//     generateDescription(currentRoom)

//     if(nextRoom !== 'exit'){
//       nextMove = prompt("What's your next move? ");
//       isAvailableDirection();
//     }
//     else{
//       console.log("you are in exit, Game End")
//     }

        
//   }
// }

// isAvailableDirection()





