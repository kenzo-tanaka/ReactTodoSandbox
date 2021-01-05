import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useTodo from "./hooks/useTodo";

const App = () => {
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodo();
  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
