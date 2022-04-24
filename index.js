const showIntroduction = require("./introduction");
const delayedLog = require("./delayed_log");
const rooms = require("./rooms");
const { logRoomDescription, logAvailableExits } = require("./logger");

const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

async function main() {
  await showIntroduction();
  let currentRoom = rooms.greatHall;
  logRoomDescription(currentRoom);

  const userInput = prompt("");
  const direction = captureDirection(userInput);

  currentRoom = navigate(currentRoom, direction);
  logRoomDescription(currentRoom);
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
main();
