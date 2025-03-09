// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

function solve(s) {
	//..
	let total = [];
	let num = 0;
	let upperCase = 0;
	let lowerCase = 0;
	let specialC = 0;
	for (const x of s) {
		if (x.charCodeAt() > 64 && x.charCodeAt() < 91) {
			upperCase += 1;
		}
		if (x.charCodeAt() > 96 && x.charCodeAt() < 123) {
			lowerCase += 1;
		}
		if (x.charCodeAt() > 47 && x.charCodeAt() < 58) {
			num += 1;
		}
		if (
			(x.charCodeAt() > 31 && x.charCodeAt() < 48) ||
			(x.charCodeAt() > 57 && x.charCodeAt() < 65) ||
			(x.charCodeAt() > 90 && x.charCodeAt() < 97) ||
			(x.charCodeAt() > 122 && x.charCodeAt() < 127)
		) {
			specialC += 1;
		}
	}
	total.push(upperCase);
	total.push(lowerCase);
	total.push(num);
	total.push(specialC);
	return total;
}
