import { UserList } from "./views/UserList"
import { Collection } from "./models/Collection"
import { User, UserProps } from "./models/User"

const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json)
  }
)
users.on("change", () => {
  const root = document.getElementById("root")

  if (root) {
    new UserList(root, users).render()
  }
})

users.fetch()

// Reminder on how 'this' works in javascript

// const colors = {
//   color: "red",
//   printColor() {
//     console.log(this.color)
//     // this is equal to whatever is to the left of the method being called
//     // so this is replaced with colors in this instance
//     // colors.printColor()
//   },
// }
