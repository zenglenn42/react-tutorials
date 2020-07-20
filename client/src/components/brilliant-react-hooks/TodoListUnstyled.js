import React, { useState } from 'react'

const initialToDos = [
    {
        text: 'Learn about React hooks',
        isCompleted: false,
    },
    {
        text: 'Go swimming',
        isCompleted: false,
    },
    {
        text: 'Drink wine',
        isCompleted: false,
    },
]

function Todo({ todo, index }) {
    return <div>{todo.text}</div>
}

function TodoListUnstyled() {
    const [todos] = useState(initialToDos)

    return (
        <div>
            {todos.map((todo, index) => {
                return <Todo key={index} index={index} todo={todo} />
            })}
        </div>
    )
}

export default TodoListUnstyled
