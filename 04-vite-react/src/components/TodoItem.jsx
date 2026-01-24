import clsx from "clsx";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div
      className="flex cursor-pointer items-center justify-between rounded p-2 outline-none hover:bg-slate-100 focus:bg-slate-100"
      onKeyDown={(e) => {
        if (e.key == "Enter") {
          toggleTodo();
        } else if (e.key == "Delete" || e.key == "Backspace") {
          deleteTodo();
        }
      }}
      tabIndex={0}
      onClick={toggleTodo}
    >
      <div
        className={clsx(
          "cursor-pointer",
          todo.done && "text-slate-500 line-through",
        )}
      >
        {todo.text}
      </div>
      <div className="flex items-center gap-x-3">
        <input
          className="cursor-pointer accent-slate-500"
          type="checkbox"
          tabIndex={-1}
          checked={todo.done}
          onChange={toggleTodo}
          onClick={(e) => e.stopPropagation()}
        />
        <div
          // margin and padding to increase clickable area without affecting layout
          className="-m-2 cursor-pointer p-2 text-slate-500 after:content-['\00d7'] hover:text-red-600"
          onClick={(e) => {
            e.stopPropagation();
            deleteTodo();
          }}
        ></div>
      </div>
    </div>
  );
}

export default TodoItem;
