import React from "react";
import "./LoadingTodos.css";

function LoadingTodos() {
  return (
    <>
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    </>
  );
}
export default LoadingTodos;
