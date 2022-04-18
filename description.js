
// const greatHallDescription = `You are located at: ${rooms.greatHall.name} -=- ${rooms['greatHall'].description} 
// Objects:
// ${rooms['greatHall'].items}`//Crossbow, Shield
// log(chalk.rgb(145, 141, 141)(greatHallDescription))

// let nextMove = prompt("What's your next move? ");//walk west
// log(chalk.rgb(145, 141, 141)("-=- walk", (nextMove)));

// const bedRoomDescription = `You are located at: ${rooms.bedRoom.name} -=- ${rooms['bedRoom'].description} 
// Objects:
// ${rooms['bedRoom'].items}`

// const cellarDescription = `You are located at: ${rooms.cellar.name} -=- ${rooms['cellar'].description} 
// Objects:
// ${rooms['cellar'].items}`

// const exitDescription = `You are located at: ${rooms.exit.name} -=- ${rooms['exit'].description}`

function generateDescription(){
    console.log(`you are located at ${name}: -=- ${description}`)
}