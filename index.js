const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

const  {rooms}  = require('./room.js')
const delayedLog = require('./delayedlog')
const  storyIntroduction  = require('./storyIntro.js')


//delayedLog("hello world")

 storyIntroduction()

function currentLocation(rooms) {
    console.log(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`)
}
let currentRoom = rooms.GreatHall;
currentLocation(currentRoom)

log(chalk.rgb(105, 41, 224)("Start The Game"))


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







