const prompt = require('prompt-sync')();
const chalk = require('chalk');
const log = console.log;

const  {rooms}  = require('./room.js')
const currentLocation = require('./logger')
const delayedLog = require('./delayedlog')
const  storyIntroduction  = require('./storyIntro.js')



 async function main (){
  await storyIntroduction()
log(chalk.rgb(105, 41, 224)("Start The Game"))
    let currentRoom = rooms.GreatHall;
currentLocation(currentRoom)

const userInput = prompt("hello")


const direction = captureDirection(userInput)
console.log(direction)


function captureDirection(userInput){
    return userInput.split(' ').pop()
     }



function navigation(nextRoom){
let navigateRoom = currentRoom.direction[direction]
    
console.log(navigateRoom)
 let room =currentLocation(navigateRoom)
 console.log(room)
}
navigation()
}

    




main()

  











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







