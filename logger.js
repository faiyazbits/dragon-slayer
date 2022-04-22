const rooms =require('./room')

function currentLocation(rooms) {
    console.log(`You are located at: ${rooms.name} -=- ${rooms.description} 
Objects:
${rooms.items}`)
}
module.exports = currentLocation