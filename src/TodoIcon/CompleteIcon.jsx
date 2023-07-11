import React from "react";
import TodoIcon from "./";

function CompleteIcon({ completed, onCompleteTodo }) {
  return (
    <>
      <TodoIcon
        type="check"
        color={completed ? "green" : "gray"}
        onClick={onCompleteTodo}
      />
    </>
  );
}

export default CompleteIcon;
