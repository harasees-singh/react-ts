import React from 'react'
import Todo from '../models/todo'
import classes from './Todos.module.css'
import TodoItem from './TodoItem'
const Todos: React.FC<{ items: Todo[], deleteTodoHandler: (id: string) => void }> = (props) => {
    return (<ul className={classes.todos}>
        {props.items.map((item) => {
            return <TodoItem deleteTodoHandler={props.deleteTodoHandler} text={item.text} id={item.id}/>
        })}
    </ul>)
}
export default Todos