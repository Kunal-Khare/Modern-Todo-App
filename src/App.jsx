import { useEffect } from "react";
import React, { useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Squares from "./components/Square";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated BG*/}
      <div className="fixed inset-0 -z-10">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="rgba(255,255,255,0.1)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
      </div>

      {/* Todo list content*/}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Todo List</h2>

          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
