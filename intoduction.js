const chalk = require('chalk');
const delayedLog = require('./delayedLog');

const gameIntro = "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"

const gameCommands = `You can use the following commands:
WALK- walk north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

const gameInventoryDescription = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`

async function storyIntro() {

    await delayedLog(`${chalk.red(gameIntro)}`)
    await delayedLog(`${chalk.rgb(235,235,137)(gameCommands)}`)
    await delayedLog(`${chalk.rgb(145,141,141)(gameInventoryDescription)}`)

}

module.exports = storyIntro;






