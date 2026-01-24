import { useState } from "react";
import ButtonAdd from "./components/ButtonAdd";
import InputQuery from "./components/InputQuery";
import TodoItem from "./components/TodoItem";
import { useTodos } from "./hooks/useTodos";

function App() {
  const [query, setQuery] = useState("");
  const { todos, addTodo, deleteTodo, updateTodo } = useTodos();

  const handleChange = (query) => {
    setQuery(query);
  };

  const handleAddTodo = () => {
    if (!query.trim()) return;
    addTodo({ text: query, done: false });
    setQuery("");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-4 p-4">
      <h1 className="text-xl font-bold">Todo App</h1>
      <div className="controls flex gap-x-4">
        <InputQuery
          query={query}
          onChange={handleChange}
          onEnter={handleAddTodo}
        />
        <ButtonAdd onClick={handleAddTodo} />
      </div>
      <div className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            toggleTodo={() => updateTodo({ ...todo, done: !todo.done })}
            deleteTodo={() => deleteTodo(todo)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
