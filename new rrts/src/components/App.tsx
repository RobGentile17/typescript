import React from 'react'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from '../actions'
import { StoreState } from '../reducers'

interface AppProps {
  todos: Todo[],
  fetchTodos(): any,

}

// we want to export the connected version of App not the class version 
class _App extends React.Component<AppProps> {
  componentDidMount() {
  this.props.fetchTodos()
  }
  render() {
    console.log(this.props.todos)
    return <div>Hello World</div>
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App)