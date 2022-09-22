import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css'
import Todo from './models/todo';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const onAddTodo = (text: string) => {
        const newTodo = new Todo(text);

        setTodos( (prevState) => {
            return prevState.concat(newTodo);
            // never mutate the original state
        })
    }
    const deleteTodoHandler = (id: string): void => {
        setTodos( (prevState) => {
            return(
                prevState.filter( (todo) => todo.id !== id)
            );
        })
    }
    
    return (
        <div className="App">
            <header className="App-header">
                <NewTodo onAddTodo={onAddTodo}/>
                <Todos items={todos} deleteTodoHandler={deleteTodoHandler} />
            </header>
        </div>
    );
}

export default App;
