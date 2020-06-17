import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListColor from '@material-ui/core/colors/yellow';
import { FaFileExcel } from 'react-icons/fa';

// Shooting for a postit-like color with subtle stripe effect to make more readable.
// See 'CSS Secrets #22: Zebra-Striped Text Lines'

const useStyles = makeStyles(() => ({
    todoList: {
        background: ListColor[200],
        backgroundOrigin: "content-box",
        backgroundImage: "linear-gradient(rgba(0,0,0,.0681) 50%, transparent 0)",
        backgroundSize: "auto 3em",
        lineHeight: "1.5",
        padding: ".5em",
    },
    todoInput: {
        width: "100%"
    },
    todo: {
        display: "flex",
    },
    growDiv: {
        flex: "1 1 auto"
    }
}));

const initialToDos = [
    {
        text: 'Learn about React hooks',
        isDone: false
    },
    {
        text: 'Go swimming',
        isDone: false
    },
    {
        text: 'Drink wine',
        isDone: false
    },
]

function Todo({todo, index, didTodo}) {
    const classes = useStyles()
    const textStyle = {textDecoration: todo.isDone && 'line-through'}
    return (
        <div className={classes.todo} style={textStyle}>
            {todo.text}
            <div className={classes.growDiv} />
            <div>
                <button onClick={() => didTodo(index)}>Done</button>
            </div>
        </div>
    )
}

function TodoForm({addTodo}) {
    const classes = useStyles()
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className={classes.todoInput}
                type="text" 
                placeholder="Add new todo ..." 
                onChange={e => setValue(e.target.value)}
                value={value}
            />
        </form>
    )
}

function TodoWithDone() {
    const classes = useStyles();
    const [todos, setTodos] = useState(initialToDos)

    const addTodo = (text) => {
        const newTodos = [...todos, {text}]
        setTodos(newTodos)
    }

    const didTodo = (index) => {
        const newTodos = [...todos]
        newTodos[index].isDone = true
        setTodos(newTodos)
    }

    return (
        <div className={classes.todoList}>
            {todos.map((todo, index) => {
                return <Todo key={index} index={index} todo={todo} didTodo={didTodo} />
            })}
            <TodoForm addTodo={addTodo} />
        </div>
    )
}

export default TodoWithDone
