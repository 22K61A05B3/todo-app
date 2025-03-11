import React from 'react';

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo._id, todo.completed)} 
      />
      {todo.title}
      <button onClick={() => removeTodo(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
