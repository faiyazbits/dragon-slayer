const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

const rooms = require('./rooms.js')
const { currentRoomDescription, logAvailableExits } = require('./loginformation')
const delayedLog = require('./delayedlog')
const storyIntroduction = require('./gameintroduction.js')

async function main() {
    await storyIntroduction()
    log(chalk.rgb(105, 41, 224)("Start The Game"))

    let gameOver = false;
    let currentRoom = rooms.greatHall;
    currentRoomDescription(currentRoom)

    while (!gameOver) {
        const userInput = prompt("");
        const direction = captureDirection(userInput);

        currentRoom = navigation(currentRoom, direction);
        if (currentRoom.name == "Exit") {
            gameOver = true;
        }
        currentRoomDescription(currentRoom)

    }

}

function captureDirection(userInput) {
    return userInput.split(' ').pop()
}

function navigation(currentRoom, direction) {
    if (currentRoom.directions[direction]) {
        const roomName = currentRoom.directions[direction]
        return rooms[roomName]
    }
    else {
        logAvailableExits(currentRoom)
        return currentRoom
    }
}

main()




