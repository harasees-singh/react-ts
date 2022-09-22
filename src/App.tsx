import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
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
    
    return (
        <div className="App">
            <header className="App-header">
                <NewTodo onAddTodo={onAddTodo}/>
                <Todos items={todos} />
            </header>
        </div>
    );
}

export default App;
