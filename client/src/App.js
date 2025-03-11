import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';
const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const addTodo = async (title) => {
    const newTodo = await createTodo(title);
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = async (id, completed) => {
    const updatedTodo = await updateTodo(id, !completed);
    setTodos(todos.map(todo => todo._id === id ? updatedTodo : todo));
  };

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
