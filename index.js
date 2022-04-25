const delayedLog = require('./delayedLog')
const rooms = require('./rooms')
const storyIntro = require('./intoduction');
const { generateDescription, isAvailableDirection } = require('./description');

const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

async function main() {
  await storyIntro();
  let currentRoom = rooms.greatHall;
  let gameOver = false;
  generateDescription(currentRoom)

  while (!gameOver) {
    const userInput = prompt("What's your next move? ");
    log(chalk.rgb(145, 141, 141)("-=-", userInput));
    const direction = currentLocation(userInput)

    currentRoom = navigateDirection(currentRoom, direction)
    if(currentRoom.name == "Exit"){
      gameOver = true;
    }

    generateDescription(currentRoom)
    console.log("you are in exit, Game End")

  }
}

function currentLocation(userInput) {
  let currentOut = userInput.split(' ');
  return currentOut[1]
}

function navigateDirection(currentRoom,direction){

  if(currentRoom.directions[direction]){
    const roomName = currentRoom.directions[direction]
    return rooms[roomName]  
   }
  else{
    isAvailableDirection(currentRoom)
    return currentRoom
  }
}


main()


