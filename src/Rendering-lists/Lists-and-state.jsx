import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState(["mela", "pera", "banana", "caffè"]);
    const [inputValue, setInputValue] = useState("");

    const addTodo = () => {
        setTodos([...todos, inputValue]);
        setInputValue("");
    };
    const removeAllTodos = () => {
        setTodos([]); 
    }

    return (
        <div>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={addTodo}>Aggiungi</button>
            <button onClick={removeAllTodos}>rimuovi</button>
        </div>
    );
};

export default TodoList;