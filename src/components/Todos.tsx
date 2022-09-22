import React from 'react'
import Todo from '../models/todo'
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (<ul>
        {props.items.map((item) => {
            return (<li>{item.text}</li>)
        })}
    </ul>)
}
export default Todos