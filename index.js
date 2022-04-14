const prompt = require("prompt-sync")();
const chalk = require("chalk");
const { yellow } = require("colors");

const log = console.log;

const name = prompt("What is your name? ");
log(chalk.red(name));

const rooms = {
  GreatHall: {
    East: "Cellar",
    North: "BedRoom",
    South: "Exit",
    items: ["Crossbow", "Shield"],
  },
  BedRoom: { South: "GreatHall", items: ["Armory", "Key"] },
  Cellar: { West: "GreatHall", items: ["ChestPlate"] },
  Exit: { North: "GreatHall", items: [] },
};

// Dictionary of main rooms and their corresponding descriptions
main_rooms = {
  "GreatHall":
    "The great hall at the villages center. There is a weapon cache at the back",
  Bedroom: "The chiefs room, although he is no where to be found",
  Cellar:
    "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.",
  Exit: "Goodbye! You can type leave to end the game.",
};

// setTimeout(function () {
//   const gameIntroduction =
//     "You are in a small village under attack from a Dragon!Quick, enter the building and get your crossbow.";
//   log(chalk.red(gameIntroduction));
// }, 500);

const gameCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`;

log(chalk.yellow(gameCommands));

const inventories = `You can use inventory to view your items(ex: inventory)['sword']
You have the following items: ['sword']`;
log(chalk.white(inventories));

const greatHallIntro = `You are located at: GreatHall -=- ${main_rooms.GreatHall}
Objects:
${rooms.GreatHall.items}`//Crossbow, Shield
log(chalk.grey(greatHallIntro));

const playerCurrentLocation = rooms.GreatHall.East;
log(chalk.red(playerCurrentLocation));//Cellar

if(playerCurrentLocation == rooms.GreatHall.East){
  log(chalk.red(`You are located at:Cellar -=- ${main_rooms.Cellar} items: ${rooms.Cellar.items}`));
}


