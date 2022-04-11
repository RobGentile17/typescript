@classDecorator
class Boat {
  @testDecorator
  color: string = "red"

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @logError("ERROR!")
  // @testDecorator // the key is whatever is under the decorator: in this example
  // the key is pilot. if it was above formattedColor then the key would be formattedColor
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("swish")
    } else {
      console.log("nothing")
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor)
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index)
}

function testDecorator(target: any, key: string) {
  console.log(key)
}

function logError(errorMessage: string) {
  return function (
    target: any,
    key: string,
    desc: PropertyDescriptor // available globally in typescript: an object that is meant to configure a property on another object
  ): void {
    const method = desc.value // now method will be a reference to pilot()

    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
  }
}

// VERY IMPORTANT: the decorator is only applied one single time,
// when we first define the calss

// A Property Descriptor for meethods will have properties:
// writable
// enumerable
// value
// configurable
