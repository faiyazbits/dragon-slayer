const prompt = require("prompt-sync")();

function captureItem(userInput) {
  let capturedItems = userInput.split(" ").pop();
  return capturedItems;
}

function inventoryInfo() {
  const gameItems = prompt("collect -=-");
  const collectedItems = captureItem(gameItems);
  console.log(collectedItems, "has been added to your inventory");
}

function inventoryItems() {
  console.log("You have the following items:${collectedItems}");
}

module.exports = { inventoryInfo, inventoryItems };
