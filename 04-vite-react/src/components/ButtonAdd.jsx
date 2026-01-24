function ButtonAdd({ onClick }) {
  return (
    <button
      className="rounded bg-slate-200 p-2 hover:cursor-pointer hover:bg-blue-400 hover:text-white"
      onClick={onClick}
      tabIndex={-1}
    >
      Add
    </button>
  );
}

export default ButtonAdd;
