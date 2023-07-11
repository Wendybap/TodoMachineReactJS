import React, { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { createModal } = useContext(TodoContext);
  return (
    <>
      <button id="CreateTodoButton" onClick={createModal}>
        +
      </button>
    </>
  );
}

export default CreateTodoButton;
