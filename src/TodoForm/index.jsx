import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  // Creo estado local para capturar el valor de textarea
  const [newTodoValue, setNewTodoValue] = useState("");

  // Guardo la info que esta escribindo el usuario
  const onchange = (event) => {
    setNewTodoValue(event.target.value);
  };

  /*el valor actualizado de newTodoValue se lo paso a la 
  funcion addTodo para guardarlo en localStorage*/
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <>
      <form className="TodoForm" onSubmit={onSubmit}>
        <label className="TodoTitle">
          Crear TODO
          <textarea
            className="NewTodo"
            type="text"
            name="name"
            placeholder="Escribe tu nuevo TODO"
            value={newTodoValue}
            onChange={onchange}
          ></textarea>
        </label>
        <div className="TodoForm-buttonContainer">
          <button
            className="TodoForm-button TodoForm-button--cancel"
            type="button"
            onClick={onCancel}
          >
            Cancelar
          </button>
          <button
            className="TodoForm-button TodoForm-button--add"
            type="submit"
          >
            Añadir
          </button>
        </div>
      </form>
    </>
  );
}
export default TodoForm;
