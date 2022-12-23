function generation(x, y) {
	if (x === 2 && y=== 'f'){
		return 'granddaughter'
	}
	else if (x === -3 && y ==='m'){
		return 'great grandfather'
	}

	else if (x === 1 && y === 'f'){
		return 'daughter'
	}
}
console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
