import React from "react";
import "./EmptyTodos.css";

function EmptyTodos({ show, message }) {
  return (
    <>
      {show ? (
        <div className="EmptyTodos-container">
          <p className="EmptyTodos-text">{message}</p>
        </div>
      ) : null}
    </>
  );
}
export default EmptyTodos;
