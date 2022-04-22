const chalk = require('chalk');
const delayedLog = require('./delayedlog')

const gameIntro = "You are in a small Village under attack from a Dragon! Quick, enter the building and get your Crossbow"

const gameCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`
    
const inventoryCommand = `You can use inventory to view your items(ex: inventory)['Chestplate']
You have the following items: ['Chestplate']`




async function storyIntroduction(){
  
   await delayedLog(`${chalk.red(gameIntro)}`)
   await delayedLog(`${chalk.green(gameCommands)}`)
   await delayedLog(`${chalk.yellow(inventoryCommand)}`)
   await delayedLog(`${chalk.rgb(110, 41, 224)("Start The Game")}`)
}



module.exports = storyIntroduction

