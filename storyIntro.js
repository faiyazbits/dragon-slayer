const chalk = require('chalk');
const log = console.log;
const delayedLog = require('./delayedlog')

const gameIntro = "You are in a small Village under attack from a Dragon! Quick, enter the building and get your Crossbow"

const gameCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`
    
const inventoryCommand = `You can use inventory to view your items(ex: inventory)['Chestplate']
You have the following items: ['Chestplate']`




function storyIntroduction(){
   return delayedLog(gameIntro)
   .then(() => {
       return delayedLog(gameCommands)
       .then(() => {
           return delayedLog(inventoryCommand)
       })
   })
}

// storyIntroduction()
// .then((a) => {
// return delayedLog(storyIntro)
// })

module.exports = storyIntroduction

