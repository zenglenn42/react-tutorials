import React, { useState } from 'react'
import './style.css'

const initialToDos = [
    {
        text: 'Learn about React hooks',
        isCompleted: false
    },
    {
        text: 'Go swimming',
        isCompleted: false
    },
    {
        text: 'Drink wine',
        isCompleted: false
    },
]

function Todo({todo, index}) {
    return (
        <div className="todo">
            {todo.text}
        </div>        
    )
}

function TodoListStyled() {
    const [todos, setTodos] = useState(initialToDos)

    return (
        <div className="todo-list">
            {todos.map((todo, index) => {
                return <Todo key={index} index={index} todo={todo} />
            })}
        </div>
    )
}

export default TodoListStyled
