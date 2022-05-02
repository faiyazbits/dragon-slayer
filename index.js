const delayedLog = require('./delayedLog')
const rooms = require('./rooms')
const storyIntro = require('./intoduction');
const { generateDescription, logAvailableDirection, logItemCollected, getLogStatementForInventory, repeatedInventoryItems } = require('./loggerDescription');

const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

async function main() {
  //await storyIntro();
  let currentRoom = rooms.greatHall;
  generateDescription(currentRoom)
  let gameOver = false;
  let playerInventory = [];

  while (!gameOver) {

    const userInput = prompt("");
    log(chalk.rgb(145, 141, 141)("-=-", userInput));

    const command = captureCommand(userInput);
    if (command === 'walk') {

      const direction = captureDirectionOrInventoryItem(userInput);
      currentRoom = navigateDirection(currentRoom, direction)

      if (currentRoom.name !== 'Exit') {
        generateDescription(currentRoom)
      }
      else {
        gameOver = true;
        generateDescription(currentRoom)
        console.log("you are in exit, Game End")
      }
    }


    if (command === 'collect') {
      const itemInCommand = captureDirectionOrInventoryItem(userInput);
      const item = currentRoom.items.find((i) => i === itemInCommand);

      if (command === 'collect') {
        const itemInCommand = captureDirectionOrInventoryItem(userInput);
        const item = currentRoom.items.find((i) => i === itemInCommand);
        if (item && !playerInventory.includes(item)) {
          playerInventory.push(item);
          logItemCollected(item);
        }

        else {
          repeatedInventoryItems()
        }
      }
    }

    if (command === 'inventory') {
      const inventoryMessage = getLogStatementForInventory(playerInventory);
      await delayedLog(inventoryMessage);
    }
  }
}

function captureDirectionOrInventoryItem(userInput) {
  let currentOut = userInput.split(' ');
  return currentOut[1]
}

// this is to check if the command is walk or collect
function captureCommand(userInput) {
  return userInput.split(" ").shift();
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


