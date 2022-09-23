import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import './App.css'

function App() {
    
    
    return (
        <div className="App">
            <header className="App-header">
                <NewTodo />
                <Todos />
            </header>
        </div>
    );
}

export default App;
