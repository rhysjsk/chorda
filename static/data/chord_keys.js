
function buildChord(){
	let availableKeys = getAvailableKeys()
	let availableModes = getAvailableModes()
	let availableChords = getAvailableChords()
	let key = availableKeys[Math.floor(Math.random() * availableKeys.length)]
	let chord = availableChords[Math.floor(Math.random() * availableChords.length)]
	let mode = availableModes[Math.floor(Math.random() * availableModes.length)]
	newChord = chords[key][chord][mode].inversion0
}

