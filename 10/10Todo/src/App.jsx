import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  // creating functionalities
  const addTodo = (todo) => {
    setTodos((prevTodo) => [...prevTodo, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (todo, id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachVal) => (eachVal.id === id ? todo : eachVal))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((eachVal) => eachVal.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((eachVal) =>
        eachVal.id === id
          ? { ...eachVal, complete: !eachVal.complete }
          : eachVal
      )
    );
  };

  // getting values from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("storedTodos"));

    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("storedTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">
            Create & Manage Task
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
