"use client"
import { useReducer } from 'react';

// Define action types
type Action =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'REMOVE_TODO'; payload: number };

// Define state type
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface State {
    todos: Todo[];
}

// Define initial state
const initialState: State = {
    todos: [],
};

// Define reducer function
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos,
                    { id: state.todos.length + 1, text: action.payload, completed: false },
                ],
            };
        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map((todo) =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

// Define the custom hook
const useTodoReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addTodo = (text: string) => dispatch({ type: 'ADD_TODO', payload: text });
    const toggleTodo = (id: number) => dispatch({ type: 'TOGGLE_TODO', payload: id });
    const removeTodo = (id: number) => dispatch({ type: 'REMOVE_TODO', payload: id });

    return {
        todos: state.todos,
        addTodo,
        toggleTodo,
        removeTodo,
    };
};

export default useTodoReducer;