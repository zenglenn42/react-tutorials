import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListColor from '@material-ui/core/colors/yellow';

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
}));

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
        <div>
            {todo.text}
        </div>        
    )
}

function TodoListStyled() {
    const [todos] = useState(initialToDos)
    const classes = useStyles();

    return (
        <div className={classes.todoList}>
            {todos.map((todo, index) => {
                return <Todo key={index} index={index} todo={todo} />
            })}
        </div>
    )
}

export default TodoListStyled
