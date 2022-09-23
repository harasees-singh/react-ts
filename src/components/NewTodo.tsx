import React, { useRef } from 'react'
import classes from './NewTodo.module.css'
import { useContext } from 'react'
import { TodosContext } from '../store/todos-context'
const NewTodo: React.FC = () => {
    const todosCTX = useContext(TodosContext);

    const textInputRef = useRef<HTMLInputElement>(null);
    const onSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        // use ! if u r 100% sure that the property will definitely exist 
        // in our case submit handler will only be called after the ref has been bound to an
        // HTMLInputElement so it's cool
        // else use ? instead of !
        // in case u use ? enteredText will have a type string | undefined
        todosCTX.addTodo(enteredText);
    }
    return (
        <form onSubmit={onSubmitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type='text' id='text' ref={textInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;