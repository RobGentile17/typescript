import axios, { Axios, AxiosPromise } from "axios"
import { User } from "./User"

interface HasId {
  id?: number
}

export class ApiSync<T extends HasId> {
  //Whatever type we use with class Sync will have a HasId property with an ID:number
  //We can only use class Sync with some type that has a HasId property with an ID: number
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    // everytime we call fetch we are going to return a
    // promise with some data that is customized to our data
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    const id = data.id

    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      return axios.post(`${this.rootUrl}`, data)
    }
  }
}
