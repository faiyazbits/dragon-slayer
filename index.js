import { showIntroduction} from 'introduction.js';

const prompt = require("prompt-sync")();
const chalk = require("chalk");
const { yellow } = require("colors");

const log = console.log;

const name = prompt("What is your name? ");
log(chalk.red(name));

const rooms = {
  greatHall: {
    directions: { east: ["cellar"], north: ["bedRoom"], south: ["exit"] },
    description:
      "The great hall at the villages center. There is a weapon cache at the back",
    items: ["crossbow", "shield"],
  },
  bedRoom: {
    directions: { south: ["greatHall"] },
    description: "The chiefs room, although he is no where to be found",
    items: ["armory", "key"],
  },
  cellar: {
    directions: { west: ["greatHall"] },
    description:
      "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.",
    items: ["chestplate"],
  },
  exit: {
    directions: { north: ["greatHall"] },
    description: "Goodbye! You can type leave to end the game.",
    items: [],
  },
};

showIntroduction(gameIntro)

const gameCommands = `You can use the following commands:
WALK- move north, south, east, west(ex:walk south)
MOVE- move an entity (ex: move sword)
COLLECT- collect an entity (ex: collect key)`;

log(chalk.yellow(gameCommands));

const inventories = `You can use inventory to view your items(ex: inventory)['sword']
You have the following items: ['sword']`;
log(chalk.white(inventories));

const greatHallIntro = `You are located at: GreatHall -=- ${rooms.greatHall.description}
Objects:
${rooms.greatHall.items}`; //Crossbow, Shield
log(chalk.grey(greatHallIntro));

 const currentRoom = rooms.greatHall.directions;
log(chalk.red(currentRoom)); 

const nextMove = prompt("What's your next move? ");
log(chalk.red("-=-", nextMove));

function directionMove() {
  if (nextMove == "walk east") {
    console.log(
      `You are located at:Cellar -=- ${rooms.cellar.description} items: ${rooms.cellar.items}`
    );
  } else if (nextMove == "walk north") {
    console.log(
      `You are located at:Bedroom -=- ${rooms.bedRoom.description} items: ${rooms.bedRoom.items} `
    );
  } else if (nextMove == "walk south") {
    console.log(`You are located at:exit -=- ${rooms.exit.description}`);
  } else {
    console.log(
      "Try again, your currently available exits are",
      rooms.greatHall.directions
    );
  }
}
directionMove();

