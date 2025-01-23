// this component is responsible for rendering the form to add a new todo item

import React, { useState } from 'react';


function TodoForm({addTodo}) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()){
            addTodo(input);
            setInput('');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Add a todo.' />
            <button style={{cursor: 'pointer'}}>Add</button>
        </form>

    )
}


export default TodoForm;