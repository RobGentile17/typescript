const carMakers = [ "ford", "toyota", "chevy" ]
const dates = [ new Date(), new Date() ]

const carsByMake = [
  ["f150"],
  ["corola"],
  ["camaro"]
]

// Help with inference when extracting vales 
const cars = carMakers[0]
const myCar = carMakers.pop() // .pop removes the last element in an array

// Prevent incompatible values 
carMakers.push(100) // tells that you can't put a number in an array of strings

// Help with map 
carMakers.map((car: string): string => {
  return car
})

//Flexible types 
const importantDates = [new Date(), "2030-10-10"]
//this is the same as const importantDates: (string | Date)[]
importantDates.push("2020-09-08")
importantDates.push(new Date())
