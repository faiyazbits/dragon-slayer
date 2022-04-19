const chalk = require('chalk');
const log = console.log;

exports.storyIntroduction = function storyIntroduction() {
    const storyIntro = "You are in a small Village under attack from a Dragon! Quick, enter the building and get your Crossbow"
log(chalk.red(storyIntro))

    const storyCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`
    log(chalk.rgb(238, 238, 174)(storyCommands))

    const inventories = `You can use inventory to view your items(ex: inventory)['Chestplate']
You have the following items: ['Chestplate']`
log(chalk.white(inventories));
}



