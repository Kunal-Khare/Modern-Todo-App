// this component  is used to display the user's profile information

import React from "react";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item flex items-center justify-center bg-gray-100 p-2 rounded-2xl  ">
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => toggleTodo(todo.id)}
            className="flex-1"
          >
            {todo.text}
          </span>

          <button style={{cursor:'pointer'}} onClick={() => deleteTodo(todo.id)}
            className="bg-red-400 hover:bg-red-200 text-white  px-4 py-2 rounded-3xl ml-4">Delete</button>
        </li>
      ))}
    </ul>
  );
}

export  default TodoList;

