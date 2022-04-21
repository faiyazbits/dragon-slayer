const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

const { rooms } = require('./room.js')
const delayedLog = require('./delayedlog')
const  storyIntroduction  = require('./storyIntro.js')


//delayedLog("hello world")

 storyIntroduction()




// function currentLocation(room) {
//     log(chalk.green(`You are located at: ${room.name} `))
// }
// let currentRoom = rooms.GreatHall;
// currentLocation(currentRoom)




// function roomDescription(room) {
//     console.log(` ${room.description} 
//         Objects:
//         ${room.items}`)
// }
// roomDescription(currentRoom)


//available(currentRoom)


// function currentLocation() {
//     const currentLocation = `you are located at ${rooms['GreatHall'].name}`
//     log(chalk.yellow(currentLocation))
// }


// function roomInformation() {
//     const greatHallInformation = `${rooms['GreatHall'].description}
//     Objects:
//     ${rooms['GreatHall'].items} collect your items`
//     log(chalk.grey(greatHallInformation))
// }
// roomInformation()

// log(chalk.rgb(105, 41, 224)("Start The Game"))


// let firstMove = prompt("What's your first move? ");
// log(chalk.red("-=-walk", firstMove));
//let nextMove = prompt("What's your next move? ");


// let possibleDirection = Object.keys(currentRoom.direction);

// function isDirectionAvailable() {
    // if(firstMove.includes(directions)){
    //     return false;}
    //    else{
//     const isDirectionAvailable = possibleDirection.includes(firstMove)
    
//     if (!isDirectionAvailable) {
//         console.log("Try again, your currently available directions are", currentRoom.direction)
//    let nextMove = prompt("What's your next move? ");
//    console.log(nextMove)
//     } else   {
//         const nextRoom = currentRoom.direction[firstMove]
//         currentRoom = rooms[nextRoom]
       // currentLocation(currentRoom)
        // isDirectionAvailable()

        // console.log("go to room")
        // const nextRoom = currentRoom.direction[firstMove]
        // currentRoom = rooms[nextRoom]
        // roomDescription(currentRoom)
    
        // nextMove = prompt("What's your next move? ");
//       }

// }
// isDirectionAvailable()







