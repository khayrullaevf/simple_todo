import './App.css';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";


function App() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-5'>
        <div className="App">
          <h1 className='text-success'>Redux Todo App</h1>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
