const chalk = require("chalk");
const log = console.log;
const delayedLog = require("./delayed_log");

const gameIntro =
  "You are in a small village under attack from a dragon! Quick, enter the building and get your crossbow";

const gameCommands = `You can use the following commands:
WALK- walk north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`;

const inventoryCommand = `You can use inventory to view your items(ex: inventory)['shield']
You have the following items: ['shield']`;

// function showIntroduction() {
//   return delayedLog(gameIntro)
//     .then(() => {
//       return delayedLog(gameCommands);
//     })
//     .then(() => {
//       return delayedLog(inventoryCommand);
//     });
// }
async function showIntroduction(){
  await delayedLog(chalk.red(gameIntro));
  await delayedLog(chalk.yellow(gameCommands));
  await delayedLog(chalk.grey(inventoryCommand));
}

module.exports = showIntroduction;
