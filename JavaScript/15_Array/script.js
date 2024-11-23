const words = [1, 9, 4, 5, 6];
// console.log(words.indexOf(4));

// not present then it return -1
// console.log(words.indexOf(40));
;
// Includes {Return True of False}
// console.log(words.includes(5));

// Push [Adds a new element & return new length]
// words.push("Shahzad");
// console.log(words);

// Unshift [Adds a new element in the beginning]
// words.unshift("Start");
// console.log(words);

// Pop [Remove the last element]
// words.pop()
// console.log(words);

// Shift [Remove the first element]
// words.shift()
// console.log(words);

// Sort [Arrange the elements in asscending order]
// words.sort()
// console.log(words);

// Slice [Select the part of an array and return the new array]
const subArray = words.slice(0, 3)
console.log(subArray);
