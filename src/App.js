import React, { useState } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import useTodo from "./hooks/useTodo";

const App = () => {
  const { todos, toggleTodo, deleteTodo, addTodo } = useTodo();
  const [filter, setFilter] = useState("all");

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <TodoFilter selectedFilter={filter} handleFilter={handleFilter} />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
