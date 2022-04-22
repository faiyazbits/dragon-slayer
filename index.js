const delayedLog = require('./delayedLog')
const rooms = require('./rooms')
const storyIntro = require('./intoduction');
const generateDescription = require('./description');

const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

async function main(){
await storyIntro()
let currentRoom = rooms.greatHall;
generateDescription(currentRoom)
}

main()

