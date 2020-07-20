import React from 'react'

function TodoItem(props) {
    const textStyle = props.item.done
        ? {
              textDecoration: 'line-through',
              display: 'inline',
              marginLeft: '1em',
          }
        : { display: 'inline', marginLeft: '1em' }
    return (
        <div className="todoItem" key={props.item.id}>
            <input
                type="checkbox"
                checked={props.item.done}
                onChange={() => props.handleTodoChange(props.item.id)}
            />
            <p style={textStyle}>{props.item.task}</p>
        </div>
    )
}

export default TodoItem
