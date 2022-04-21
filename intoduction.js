const chalk = require('chalk');
const delayedLog = require('./delayedLog');
const log = console.log;

const gameIntro = "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"

const gameCommands = `You can use the following commands:
WALK- walk north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

const gameInventoryDescription = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`

function storyIntro(){
    delayedLog(gameIntro,()=> {
        delayedLog(gameCommands,()=> {
            delayedLog(gameInventoryDescription,()=> {
            })
        })
    })   
}

module.exports = storyIntro;






