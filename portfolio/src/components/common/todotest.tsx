export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
  
  export type ToggleTodo = (selectedTodo: Todo) => void;
  
  export type AddTodo = (newTodo: string) => void;
  
  export type DeleteTodo = (selectedTodo: Todo) => void;

export const addTodo = (todos: Todo[], newTodo: string): Todo[] => {
  const newTodoItem: Todo = {
    id: new Date().getTime(),
    text: newTodo,
    completed: false,
  };
  return [...todos, newTodoItem];
};

export const toggleTodo = (todos: Todo[], selectedTodo: Todo): Todo[] => {
  return todos.map((todo) =>
    todo.id === selectedTodo.id ? { ...todo, completed: !todo.completed } : todo
  );
};

export const deleteTodo = (todos: Todo[], selectedTodo: Todo): Todo[] => {
  return todos.filter((todo) => todo.id !== selectedTodo.id);
};