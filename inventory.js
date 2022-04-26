const prompt = require('prompt-sync')();

function currentInventory(userInput) {
    let currentItems = userInput.split(' ');
    return currentItems[1];
}

function inventoryDescription() {
    const gameInventoryItems = prompt("Collect your items -=-");
    const inventory = currentInventory(gameInventoryItems);
    console.log(inventory, "has been added to your inventory")
}

module.exports = inventoryDescription;


