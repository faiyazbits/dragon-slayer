const rooms = {
    'GreatHall': {'name': 'Greathall',
        'direction': { 'east': 'cellar', 'north': 'bedroom', 'south': 'exit' },
        'description': 'The great hall at the villages center. There is a weapon cache at the back', 'items': ['Crossbow', 'Shield']
    },
    'BedRoom': {'name': 'BedRoom', 'direction': { 'south': 'GreatHall' }, 'description': "The chiefs room, although he is no where to be found", 'items': ['Armory', 'Key'] },
    'Cellar': {'name': 'Cellar', 'direction': { 'west': 'GreatHall' }, 'description': "It smells foul and damp in here. The cries of prisoners can be heard echoing on the cracked stone walls.", 'items': ['ChestPlate'] },
    'Exit': {'name': 'Exit', 'direction': { 'north': 'GreatHall' }, 'description': "Goodbye! You can type leave to end the game.", 'items': [] },
}

    

 
 

 module.exports = {rooms}