import { User, UserProps } from "../models/User"
import { View } from "./View"

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    // return an object that has a key which will be a string,
    // and the value for everything in the object will be a funciton that takes no argument
    return {
      //event on the left, html element on the right
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
    }
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input")

    if (input) {
      const name = input.value

      this.model.set({ name })
    }
  }

  onSaveClick = (): void => {
    this.model.save()
  }
  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `
  }
}
