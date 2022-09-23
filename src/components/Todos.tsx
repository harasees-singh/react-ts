import React from 'react'
import { useContext } from 'react'
import classes from './Todos.module.css'
import TodoItem from './TodoItem'
import { TodosContext } from '../store/todos-context'
const Todos: React.FC = () => {
    const todosCTX = useContext(TodosContext);
    return (<ul className={classes.todos}>
        {todosCTX.items.map((item) => {
            return <TodoItem deleteTodoHandler={todosCTX.removeTodo} text={item.text} id={item.id} />
        })}
    </ul>)
}
export default Todos