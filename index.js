const prompt = require('prompt-sync')();
const  rooms = require('./room.js')
const {currentRoomDescription, logAvailableExits} = require('./logger')
const delayedLog = require('./delayedlog')
const  storyIntroduction  = require('./storyIntro.js')



async function main() {
await storyIntroduction()

let currentRoom = rooms.greatHall;
currentRoomDescription(currentRoom)

const userInput = prompt("");
const direction = captureDirection(userInput);
    //  console.log(direction)
currentRoom=navigation(currentRoom,direction);
   currentRoomDescription(currentRoom)

}

function captureDirection(userInput){
    return userInput.split(' ').pop()
}
    
function navigation(currentRoom,direction){
    if(currentRoom.directions[direction]){
        const roomName = currentRoom.directions[direction]
        return rooms[roomName]
    }
    else {
        logAvailableExits(currentRoom)
        return currentRoom
         
    }
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







