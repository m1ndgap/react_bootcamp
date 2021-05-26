import React from 'react'

function ToDoItem(props) {
    return (
        <li>
            <label htmlFor="">
                <input
                    type="checkbox"
                    checked={Boolean(+props.item.completed)}
                    onChange={() => props.handleChange(props.item.id)}
                />
                <span style={{color: !Boolean(+props.item.completed) && "#888888"}}>
                    {props.item.text}
                </span>
            </label>
        </li>
    )
}

export default ToDoItem
