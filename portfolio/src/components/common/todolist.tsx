import React, { useState } from 'react';
import { Todo, ToggleTodo, AddTodo, DeleteTodo } from './todotest';
import { addTodo, toggleTodo, deleteTodo } from './todotest';

const TodoItem: React.FC<{ todo: Todo; toggleTodo: ToggleTodo; deleteTodo: DeleteTodo }> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => (
  <li>
    <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo)} />
      {todo.text}
    </label>
    <button onClick={() => deleteTodo(todo)}>Delete</button>
  </li>
);

const AdvancedTodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([{
    id: new Date().getTime(),
    text: "pp8960",
    completed: false,
  }]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo: AddTodo = (newTodo) => {
    if (!newTodo.trim()) return;
    setTodos(addTodo(todos, newTodo));
    setNewTodo('');
  };

  const handleToggleTodo: ToggleTodo = (selectedTodo) => {
    setTodos(toggleTodo(todos, selectedTodo));
  };

  const handleDeleteTodo: DeleteTodo = (selectedTodo) => {
    setTodos(deleteTodo(todos, selectedTodo));
  };

  return (
    <div className='top-20'>
      <input className='transition duration-100 ease-in-out
                    bg-card-post hover:bg-green-300 transform
                    hover:-translate-y-1 hover:scale-110
                    rounded-lg p-4 ' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => handleAddTodo(newTodo)}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={handleToggleTodo} deleteTodo={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
};

export default AdvancedTodoList;