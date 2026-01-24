import { useState } from "react";

export function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = async ({ text, done }) => {
    setTodos([...todos, { text, done, uuid: crypto.randomUUID() }]);
  };

  const updateTodo = async ({ text, done, uuid }) => {
    setTodos([
      ...todos.map((todo) => (todo.uuid == uuid ? { text, done, uuid } : todo)),
    ]);
  };

  const deleteTodo = async ({ uuid }) => {
    setTodos(todos.filter((todo) => todo.uuid != uuid));
  };
  return { todos, addTodo, deleteTodo, updateTodo };
}
