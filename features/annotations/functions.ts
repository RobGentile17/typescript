const add = (a: number, b: number): number => {
  return a + b
}
// after the arguments this is saying that the function will return a number 

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function( a: number, b: number ): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

const throwError = (message: string): never => {
  throw new Error(message)
}
// very rare. never is only used when you want your function to return nothing 

const forecast = {
  date: new Date(),
  weather: "sunny"
}
const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
  console.log(date)
  console.log(weather)
}

logWeather(forecast)