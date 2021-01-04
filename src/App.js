import React from "react";

import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {
  const { todos } = useTodo();
  return (
    <div>
      <h2>Todo List</h2>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
