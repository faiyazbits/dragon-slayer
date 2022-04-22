const showIntroduction = require("./introduction");
const delayedLog = require("./delayed_log");
const rooms = require("./rooms");
const generateDescription = require("./description");

const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

async function main() {
  await showIntroduction();
  let currentRoom = rooms.greatHall;
  generateDescription(currentRoom);

  const userInput = prompt("");
  console.log(userInput);
}
main();
