//Generics with classes

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

//Now to make this generic we add an argument
//We now only need one method to create an array of strings, or numbers,
//or anything else rather than multiple methods

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything<string>(["a", "b", "c"])
//typescript will assume that because we put in an
//array of strings that the variable arr is a type string

// Example of Generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

printAnything<string>(["a", "b", "c"])

// Generic Constraints

class newCar {
  print() {
    console.log("I am a car")
  }
}

class House {
  print() {
    console.log("I am a hosue")
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  //no matter what type T we add, it will contain whatever is in Printable
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

printHousesOrCars<House>([new House(), new House()])
