const chalk = require('chalk');
const log = console.log;

const storyLine = "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow"

const storyCommands = `You can use the following commands:
WALK- walk north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`

const inventories = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`

exports.storyIntro = function storyIntro(){
log(chalk.red(storyLine))
log(chalk.rgb(238, 238, 174)(storyCommands))
log(chalk.rgb(245, 245, 245)(inventories))
}



