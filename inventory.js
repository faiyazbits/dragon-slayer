const prompt = require("prompt-sync")();
const chalk = require("chalk");
const log = console.log;

function captureItem(userInput) {
    return userInput.split(" ").pop();
}

const userInput = prompt("");
log(chalk.grey("-=-", userInput));
const currentItem = captureItem(userInput);

function collectInventory(items) {
    const inventory = [];
    let currentRoom = rooms.greatHall;
  if(currentRoom.includes(items)){
    inventory.push(items);
    console.log(inventory);
  }
}


module.exports = {
  captureItem,
  collectInventory,
};
