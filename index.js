const showIntroduction = require("./introduction");
const delayedLog = require("./delayed_log");
const rooms = require("./rooms");
// const generateDescription = require('./description');

const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

showIntroduction();
// let currentRoom = rooms.greatHall;
// generateDescription(currentRoom);

// let nextMove = prompt("What's your next move? ");
// log(chalk.white("-=-", nextMove));

// let allowedDirections = Object.keys(currentRoom.directions);

// function isAllowedDirections() {
//   const isAllowedDirections = allowedDirections.includes(nextMove);
//   if (!isAllowedDirections) {
//     console.log(
//       "Try again, Your current available exits are",
//       currentRoom.directions
//     );
//     nextMove = prompt("What's your next move? ");
//   } else {
//     let otherRoom = currentRoom.directions[nextMove];
//     let currentLocation = rooms[otherRoom];
//     generateDescription(currentLocation);
//     nextMove = prompt("What's your next move? ");
//   }
// }
// isAllowedDirections();
