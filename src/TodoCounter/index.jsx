import { React, useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  const colors = ["#FF0000", "#007F00", " #0000FF", "#FFFF00"];

  const renderColoredText = (text) => {
    const words = text.split(" ");

    const coloredWords = words.map((word, index) => {
      const letters = [...word];
      const coloredLetters = letters.map((letter, index) => (
        <span
          key={index}
          style={{
            color: colors[index % colors.length],
          }}
        >
          {letter}
        </span>
      ));
      return (
        <span key={index} className={`word-${index}`}>
          {coloredLetters}
        </span>
      );
    });

    return coloredWords;
  };
  return (
    <>
      <h1 className="TodoCounter">
        <div id="Title">
          <span className="word-0">{renderColoredText("TODO")}</span>
          <span className="word-1">{renderColoredText("MACHINE")}</span>
        </div>
        <div className="Subtitle">
          {totalTodos > 0 && (
            <>
              {completedTodos !== totalTodos ? (
                <>
                  Has completado <span> {completedTodos} </span> de
                  <span> {totalTodos} </span>
                  TODOS
                </>
              ) : (
                <span>"🎉FELICITACIONES has completado todos los TODOS🎉"</span>
              )}
            </>
          )}
        </div>
      </h1>
    </>
  );
}

export default TodoCounter;
