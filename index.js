const showIntroduction = require("./introduction");
const delayedLog = require("./delayed_log");
const rooms = require("./rooms");
const {
  logRoomDescription,
  logAvailableExits,
  logItemCollected,
  getLogStatementForInventory,
} = require("./logger");
const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

async function main() {
  // await showIntroduction();
  let gameOver = false;
  let currentRoom = rooms.greatHall;
  let playerInventory = [];
  logRoomDescription(currentRoom);

  while (!gameOver) {
    const userInput = prompt("");
    const command = captureCommand(userInput);
    if (command === "walk") {
      const direction = captureDirectionOrInventoryItem(userInput);
      currentRoom = navigate(currentRoom, direction);
      if (currentRoom.name == "Exit") {
        gameOver = true;
      }
      logRoomDescription(currentRoom);
    }

    if (command === "collect") {
      const itemInCommand = captureDirectionOrInventoryItem(userInput);
      const item = currentRoom.items.find((item) => item === itemInCommand);
      if (item) {
        playerInventory.push(item);
        logItemCollected(item);
      }
    }

    if (command === "inventory") {
      const inventoryMessage = getLogStatementForInventory(playerInventory);
      await delayedLog(inventoryMessage);
    }
  }

  function captureDirectionOrInventoryItem(userInput) {
    return userInput.split(" ").pop();
  }

  function captureCommand(userInput) {
    return userInput.split(" ").shift();
  }

  function navigate(currentRoom, direction) {
    if (currentRoom.directions[direction]) {
      const roomName = currentRoom.directions[direction];
      return rooms[roomName];
    } else {
      logAvailableExits(currentRoom);
      return currentRoom;
    }
  }
}
main();
