const showIntroduction = require("./introduction");
const delayedLog = require("./delayed_log");
const rooms = require("./rooms");
const { logRoomDescription, logAvailableExits } = require("./logger");
const { inventoryInfo, inventoryItems } = require("./inventory");
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

async function main() {
  // await showIntroduction();
  let gameOver = false;
  let currentRoom = rooms.greatHall;
  logRoomDescription(currentRoom);

  while (!gameOver) {
    inventoryInfo(currentRoom);
    inventoryUpdate(currentRoom);
  
    const userInput = prompt("-=-");
    log(chalk.grey(userInput));
    const direction = captureDirection(userInput);

    currentRoom = navigate(currentRoom, direction);
    if (currentRoom.name == "Exit") {
      gameOver = true;
    }
    logRoomDescription(currentRoom);
  }
}

function captureDirection(userInput) {
  return userInput.split(" ").pop();
}

function navigate(currentRoom, direction) {
  if (currentRoom.directions[direction]) {
    roomName = currentRoom.directions[direction];
    return rooms[roomName];
  } else {
    logAvailableExits(currentRoom);
    return currentRoom;
  }
}
function inventoryUpdate() {
  const inventory = [];
  let currentRoom = rooms.greatHall;
  let currentItem = currentRoom.items;
  if (currentRoom.items > 1) {
    console.log(currentItem, "has been added to your inventory");
  } else {
  }
  inventory.push(currentItem);
}

main();
