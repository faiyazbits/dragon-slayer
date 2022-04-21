// const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

// const rooms = require('./information.js');
const delayedLog = require('./delayed_log');


const storyLine =
"You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow";
// log(chalk.red(storyLine));

const storyCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`;
// log(chalk.yellow(storyCommands));

const inventories = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`;
// log(chalk.whiteBright(inventories));


function showIntroduction() {
  delayedLog(storyLine, () => {
    delayedLog(storyCommands, () => {
      delayedLog(inventories, () => {});
    });
  });
}

module.exports = showIntroduction; 