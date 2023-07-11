import React from "react";
import AppUI from "./AppUI";
import { TodoProvider } from "../TodoContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
