import axios, { responseEncoding } from "axios"
import { Dispatch } from "redux"
import { ActionTypes } from "./types"

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodosAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}
// creating an interface to describe an action is very useful

const url = "https://jsonplaceholder.typicode.com/todos"

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)
    // the Todo[] tells typescript that inside of response data
    // we will have a Todo that satisfies the Todo interface.
    // Await suspends the execution until an asychoronous function return promise is fullfilled
    dispatch<FetchTodosAction>({
      //we add the generic type to ensure we are always passing in an object with the correct types
      type: ActionTypes.fetchTodos,
      payload: response.data,
    })
  }
}
