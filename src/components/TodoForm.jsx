// this component is responsible for rendering the form to add a new todo item

import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo."
        className="border-2 p-2 mr-4 rounded"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl placeholder-color"
        style={{ cursor: "pointer" }}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
