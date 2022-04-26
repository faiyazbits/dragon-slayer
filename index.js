const delayedLog = require('./delayedLog')
const rooms = require('./rooms')
const storyIntro = require('./intoduction');
const { generateDescription, logAvailableDirection } = require('./description');
const inventoryDescription = require('./inventory');


const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

async function main() {
  await storyIntro();
  let currentRoom = rooms.greatHall;
  generateDescription(currentRoom)
  let gameOver = false;

  while (!gameOver) {

    inventoryDescription(currentRoom)

    const userInput = prompt("What's your next move? ");
    log(chalk.rgb(145, 141, 141)("-=-", userInput));
    const direction = currentLocation(userInput)

    currentRoom = navigateDirection(currentRoom, direction)

    if (currentRoom.name !== 'Exit') {
      generateDescription(currentRoom)
    }
    else {
      gameOver = true;
      generateDescription(currentRoom)
      console.log("you are in exit, Game End")
    }

    generateDescription(currentRoom)

  }
}

function currentLocation(userInput) {
  let currentOut = userInput.split(' ');
  return currentOut[1]
}

function navigateDirection(currentRoom, direction) {

  if (currentRoom.directions[direction]) {
    const roomName = currentRoom.directions[direction]
    return rooms[roomName]
  }
  else {
    logAvailableDirection(currentRoom)
    return currentRoom
  }
}

main()


