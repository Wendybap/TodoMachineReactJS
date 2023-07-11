import { React, useContext } from "react";
import TodoCounter from "../TodoCounter";
import TodoSearch from "../TodoSearch";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButton from "../CreateTodoButton";
import LoadingTodos from "../LoadingTodos";
import ErrorTodos from "../ErrorTodos";
import EmptyTodos from "../EmptyTodos";
import Modal from "../Modal";
import TodoForm from "../TodoForm";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const {
    loading,
    error,
    searchTodo,
    toggleCompletedTodo,
    deleteTodo,
    openModal,
    todos,
  } = useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <LoadingTodos />
            <LoadingTodos />
            <LoadingTodos />
          </>
        )}
        {error && <ErrorTodos />}
        {todos.length > 0 ? (
          searchTodo.length === 0 ? (
            <EmptyTodos
              show={!loading && searchTodo.length === 0}
              message="¡Búsqueda no encontrada, vuelve a intentar!"
            />
          ) : (
            searchTodo.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleteTodo={() => toggleCompletedTodo(todo.text)}
                onDeleteTodo={() => deleteTodo(todo.text)}
              />
            ))
          )
        ) : (
          <EmptyTodos
            show={!loading && todos.length === 0}
            message="¡Es momento de crear tu primer TODO 😉!"
          />
        )}
      </TodoList>
      <CreateTodoButton />
      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}
export default AppUI;
