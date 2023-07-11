import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  // Creación del estado para el contador de TODOS
  // sintaxis para renombrar las variables de un objeto es :
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  /* Estados derivados son variables, propiedades, cálculos
   qu se hacen a partir de un estado en este caso vamos 
   a usar el estado de Todos para calcular 
cual es el total de Todos y los Todos completados*/
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  // Estado para crear el modal (Crear TODO)
  const [openModal, setOpenModal] = useState(false);

  // Estado derivado para Mostrar modal y crear TODO
  const createModal = () => {
    setOpenModal(!openModal);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

  /*Estado derivado para actualizar los TODOS completados
    por medio de onClick
  */
  const toggleCompletedTodo = (text) => {
    const newTodos = [...todos];
    newTodos.map((todo) => {
      if (todo.text === text) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    saveTodos(newTodos);
  };

  // Estado derivado para eliminar TODO
  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  // Creación del estado para la búsqueda de TodoSearch
  const [valueSearch, setValueSearch] = useState("");

  // Estado derivado de la búsqueda valueSearch
  const searchTodo = todos.filter((todo) =>
    todo.text.toLowerCase().includes(valueSearch.toLowerCase())
  );

  return (
    <>
      <TodoContext.Provider
        value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          addTodo,
          toggleCompletedTodo,
          deleteTodo,
          setValueSearch,
          searchTodo,
          saveTodos,
          openModal,
          setOpenModal,
          createModal,
          todos,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}

export { TodoContext, TodoProvider };
