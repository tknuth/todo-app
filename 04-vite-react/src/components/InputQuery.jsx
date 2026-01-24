function QueryInput({ query, onChange, onEnter, onShiftEnter }) {
  return (
    <input
      type="text"
      value={query}
      autoFocus
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key == "Enter" && e.shiftKey) {
          onShiftEnter(query);
        } else if (e.key == "Enter") {
          onEnter(query);
        }
      }}
      className="flex-1 rounded bg-slate-100 p-2 outline-none"
    />
  );
}

export default QueryInput;
