class Vehicle {
  // color: string = "red"; // this will give the instance of vehicle the starting value for color to be red

  constructor(public color: string) {}
  //this initializes the color in the constructor method so you can pass a color as a string to the Vehicle instance
  protected honk(): void {
    console.log("beep")
  }
}
const vehicle = new Vehicle("orange")
console.log(vehicle.color)

class Cars extends Vehicle {
  // this syntax will bring in all of the methods that vehicle has into the Car class
  constructor(public wheels: number, color: string) {
    super(color)
  }
  private drive(): void {
    console.log("vroom")
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const carss = new Cars(4, "red")
// new keyword creates an instance of the class
cars.startDrivingProcess()

//Modifiers:
// public - this can be called any where, any time
// private - this can only be called by other methods in this class
// protected - this can be called by other methods in this class or by other methods in child classes
