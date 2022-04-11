let apples: number = 5;

let speed: string = "fast";

let hasName: boolean = true;

let nothingMuch: null = null;

let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Arrays

let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

//Classes

class Car {
  startDrivingProcess() {
    throw new Error("Method not implemented.");
  }
  drive() {
    throw new Error("Method not implemented.");
  }
  honk() {
    throw new Error("Method not implemented.");
  }
}
let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
//left of the equals is the annotation. telling typescript the value we are assigning
//everything to the right of the equals is the acutal function

// When to use annotation
// 1) a function that reutrns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
// everything to the left of the equal sign gives typescript what it needs
console.log(coordinates); // {x: 10, y: 20}
// any is a type, but this means Typescript doesn't know what it is
// and can't check for correct property references
// AVOID at all costs

// 2) When we declare a variable on one line
// and initialize it later

let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inffered correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
// numberAboveZero can be a boolean OR a number
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
