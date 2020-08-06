/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'

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
        text: 'Drink beverage',
        isCompleted: false
    }
]

function Todo({ todo }) {
    return <div>{todo.text}</div>
}

function TodoListUnstyled() {
    const [todos] = useState(initialToDos)

    return (
        <div>
            {todos.map((todo, index) => {
                return <Todo key={index} todo={todo} />
            })}
        </div>
    )
}

export default TodoListUnstyled
