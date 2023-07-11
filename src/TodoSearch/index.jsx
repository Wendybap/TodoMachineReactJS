import { React, useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { valueSearch, setValueSearch } = useContext(TodoContext);

  return (
    <>
      <input
        placeholder="Buscar Todos"
        className="TodoSearch"
        value={valueSearch}
        onChange={(event) => {
          setValueSearch(event.target.value);
        }}
      />
    </>
  );
}
export default TodoSearch;
