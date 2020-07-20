import React from 'react'
import TodoItem from './TodoItem'
import todoData from './api/TodoData'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoData,
        }
        this.handleTodoChange = this.handleTodoChange.bind(this)
    }

    handleTodoChange(id) {
        this.setState((prevState) => {
            const mutatedData = prevState.todos.map((todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            })
            return { todos: mutatedData }
        })
    }

    render() {
        return this.state.todos.map((todo) => (
            <TodoItem handleTodoChange={this.handleTodoChange} item={todo} />
        ))
    }
}

export default TodoList
