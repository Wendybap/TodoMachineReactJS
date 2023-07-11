import React from "react";
import CompleteIcon from "../TodoIcon/CompleteIcon";
import DeleteIcon from "../TodoIcon/DeleteIcon";
import "./TodoItem.css";

function TodoItem({ text, completed, onCompleteTodo, onDeleteTodo }) {
  return (
    <>
      <li className="TodoItem">
        <CompleteIcon completed={completed} onCompleteTodo={onCompleteTodo} />
        <p className={`TodoItem-p ${completed && "TodoItem-p--completed"}`}>
          {text}
        </p>
        <DeleteIcon onDeleteTodo={onDeleteTodo} />
      </li>
    </>
  );
}
export default TodoItem;
