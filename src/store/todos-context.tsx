import Todo from "../models/todo"
import React from 'react'
import { useState } from 'react'

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
}

type Props = {
    children?: React.ReactNode
};

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})
const TodosContextProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const onAddTodo = (text: string) => {
        const newTodo = new Todo(text);

        setTodos((prevState) => {
            return prevState.concat(newTodo);
            // never mutate the original state
        })
    }
    const deleteTodoHandler = (id: string): void => {
        setTodos((prevState) => {
            return (
                prevState.filter((todo) => todo.id !== id)
            );
        })
    }
    const contextValue: TodoContextObj = {
        items: todos,
        addTodo: onAddTodo,
        removeTodo: deleteTodoHandler
    }
    return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
}
export default TodosContextProvider;