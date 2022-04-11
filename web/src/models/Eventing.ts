type Callback = () => void // this callback type indicates that the type will be a function

export class Eventing {
  events: { [key: string]: Callback[] } = {}
  // the key represents future event names like 'click', 'hover' ...

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
    // this.events[eventName] might return undefined
    // if it does then we will assign an empty array to handlers
    // if it is defined then we will assign the array of callbacks to handlers
    // no matter what handlers will be an array
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      // if we don't have handlers or the length is 0
      return
    }

    handlers.forEach((callback) => {
      callback()
    })
  }
}
