import React, { useState } from "react";

import { ENTER_KEY } from "./const";

import TodoItem from "./components/TodoItem";

function App() {
  const [input, setInput] = useState<string>("");

  // TODO: add selector
  const todos: Todo[] = [];

  // TODO: add dispatch functions
  const handleAddTodo = (content: string) => {};
  const handleToggleTodo = (id: string) => {};
  const handleRemoveTodo = (id: string) => {};
  const handleEditTodo = (id: string, content: string) => {};

  let main;

  const handleNewTodoKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const inputValue = input.trim();

    if (inputValue) {
      handleAddTodo(inputValue);
      setInput("");
    }
  };

  if (todos.length > 0) {
    main = (
      <section className="main">
        <ul className="todo-list">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => handleToggleTodo(todo.id)}
                onDestroy={() => handleRemoveTodo(todo.id)}
                onSave={(content) => handleEditTodo(todo.id, content)}
              />
            );
          })}
        </ul>
      </section>
    );
  }

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleNewTodoKeyDown(e)}
          autoFocus={true}
        />
      </header>
      {main}
    </div>
  );
}

export default App;
