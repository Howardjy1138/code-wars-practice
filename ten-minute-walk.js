// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the
// opportunity to go for a short walk. The city provides its citizens with a Walk
// Generating App on their phones -- everytime you press the button it sends you an
// array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You know it takes you one minute to traverse one city block, so create a function that
// will return true if the walk the app gives you a path that will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting
// point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of
// direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty
// array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
	if (walk.length !== 10) {
		console.log('Invalid -- walk is too short or too long.');
		return false;
	} else if (walk.length === 0) {
		console.log('Valid walk, but you didn\'t walk anywhere.')
		return false;
	}

	var walkCount = 0;
	for (var i=0; i<walk.length; i++) {
		if (walk[i] === 'n' || walk[i] === 'e') {
			walkCount = walkCount - 1;
		} else if (walk[i] === 's' || walk[i] === 'w') {
			walkCount = walkCount + 1;
		} else {
			console.log('Invalid walk -- contains element other than s,n,e,w');
			return false;
		}
	}

	if (walkCount === 0) {
		console.log('Valid walk')
		return true;
	} else {
		console.log('Invalid walk -- doesn\'t return to starting point.')
		return false;
	}
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true "valid walk"
console.log(isValidWalk(['n','e','n','e','s','s','w','s','w','n'])); // true "valid walk"
console.log(isValidWalk(['w'])); // false "Invalid -- walk is too short or too long."
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // false "doesn't return to starting point"