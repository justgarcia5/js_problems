
// Function that returns the largest number in an array
var numbers = [11, 2, 1, 44, 32, 1023, 67, 2, 54, 5, 39, 9, 3, 200, 2];
var largest = numbers[0];

function highestNum(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// console.log(highestNum(numbers));


// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

function changeEnough(change, amountDue) {
	let quarters = change[0] * 0.25
	let nickels = change[1] * 0.10
	let dimes = change[2] * 0.5
	let pennies = change[3] * 0.01
  change = quarters + nickels + dimes + pennies;
  if (change >= amountDue) {
    return true
  } else {
    return false
  }
}
// console.log(changeEnough(2555,3,4,7, 1111111.02));



// Function that returns the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.
var array2 = [];
var array = [-3, 0, 8, -6];

function indexMultiplier (arr) {
  let newArr = [];
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      mult = arr[i] * i;
      newArr.push(mult);
      sum = newArr.reduce((a, b) => a + b, 0);
    }
    return sum;
  } else {
    sum = 0;
    return sum;
  }
}

// console.log(indexMultiplier(array));
// console.log(indexMultiplier(array2));


// Create a function that returns true if an asterisk * is inside a box.
let box = [
  "###",
  "# #",
  "###",
];
let box1 = [
  "####",
  "#  #",
  "####"
];
let box2 = [
  "####",
  "#* #",
  "#  #",
  "####"
];
let box3 = [
  "#####",
  "#   #",
  "#   #",
  "#*  #",
  "#####",
];

function inBox(arr) {
  response = false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("*")) {
      return true;
    }
  }
  return false;
}

// console.log(inBox(box));
// console.log(inBox(box1));
// console.log(inBox(box2));
// console.log(inBox(box3));


// Create a function that takes an array and returns the first element.

let numArr = [2,44,2,666,700,188];

function getFirstValue(arr) {
  return arr[0];
}

// console.log(getFirstValue(numArr));



// Create a function that takes two numbers and a mathematical operator + - / * and will perform a calculation with the given numbers.
function calculator(num1, operator, num2) {
	if (operator === "/" && num2 === 0) {
		return "Can't divide by 0!";
	} else if (operator === "+") {
    return num1 + num2;
	} else if (operator === "-") {
    return num1 - num2;
	} else if (operator === "*") {
    return num1 * num2;
	} else if (operator === "/") {
    return num1 / num2;
	}
}

// console.log(calculator(2.3, "+", 2));
// console.log(calculator(200.44, "*", 233.45));


function checkEquals(arr1, arr2) {
  let sum1 = arr1.reduce((a, b) => a + b, 0);
  let sum2 = arr2.reduce((a, b) => a + b, 0);

	if (sum1 === sum2) {
  	return true;
  } else {
  	return false;
  }
}

// console.log(checkEquals([1,2], [1,5]));

let jackpot = ["$$", "$$", "$$", "$$"];
let greet = ["Hello,", "hello", "Hello"];
let nums = [2,2,2,2];

function testJackpot(result) {
  return [...new Set(result)].length == 1 ? true : false;
}

// console.log(testJackpot(jackpot));
// console.log(testJackpot(greet));
// console.log(testJackpot(nums));


// Create a function that takes a number (step) as an argument and returns the amount of boxes in that step of the sequence.
// Step 0: Start with 0
// Step 1: Add 3
// Step 2: Subtract 1
// Repeat Step 1 & 2 ...


function boxSeq(step) {
  if (step === 0) {
    squares = 0
  } else if (step % 2 === 1) {
    squares = 0 + 3
  } else {
    squares = 3 - 1
  }
  return squares
}
// console.log(boxSeq(0))
// console.log(boxSeq(1))
// console.log(boxSeq(2))
// console.log(boxSeq(3))
// console.log(boxSeq(4))


class Rectangle {
  constructor(sideA,sideB){
    this.sideA = sideA;
    this.sideB = sideB;
  }
  getArea(){return this.sideA * this.sideB};
  getPerimeter(){return (this.sideA + this.sideB) * 2};
}


class Circle {
	constructor(radius){
		this.radius = radius;
	}
	getArea(){
    return  Math.PI * Math.pow((this.radius), 2)
	}
	getPerimeter() {
		return 2 * Math.PI * this.radius
	}
}

//unquote and use run to test these cases
let q = new Circle(4.44);
// console.log(q.getArea());
// console.log(q.getPerimeter());



let str = "Helo"

function doubleLetters(word) {
  let newWord = word.toLowerCase().split('')
  console.log(newWord)
  for (let i = 0; i < newWord.length; i++) {
    console.log(newWord[i])
  }
}

console.log(doubleLetters(str))
