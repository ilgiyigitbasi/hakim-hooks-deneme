"use client"
import React from 'react';
import useCounter from "@/app/kaan/hooks/custom/useCounter";
import useTodoReducer from "@/app/kaan/hooks/reducer/useTodoReducer";

const HomePage: React.FC = () => {
    const { count, increment, decrement, reset } = useCounter();
    const { todos, addTodo, toggleTodo, removeTodo } = useTodoReducer();

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

            <h2>Todos:</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                          {todo.text}
                        </span>
                        <button onClick={() => removeTodo(todo.id)}> Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add Todo"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo(e.currentTarget.value);
                        e.currentTarget.value = '';
                    }
                }}
            />
        </div>
    );
};

export default HomePage;