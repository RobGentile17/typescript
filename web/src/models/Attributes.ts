export class Attributes<T> {
  // T is a variable or an interface of UserProps
  // So essentially K can only be a name, age, or id
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    // key will now only be an name, age or id
    // The letter K represents type, it can be anything it doesn't have to be K (convention)
    // This sets up a constraint of what the value of K can be
    // It can only be one of the keys that T can be
    return this.data[key] // we are now returning either a name, age, or id from get
  }

  set(update: T): void {
    Object.assign(this.data, update)
    // This is a built in method in javascript that will take all the properties from update and copy paste them over data
  }

  getAll(): T {
    return this.data
    // this will return all the data from UserProps
    // because T specifies the interface structure of UserProps
  }
}

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 28,
//   name: "Rob",
// })

// const name = attrs.get("name") name is now a string
// const age = attrs.get("age") age is now a number
// const id = attrs.get("id") id is now a number
