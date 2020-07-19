import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ENTER_KEY } from "./const";

import { todosSelector } from "./redux/selectors";
import {
  editTodoAction,
  addTodoAction,
  toggleTodoAction,
  removeTodoAction,
} from "./redux/actions";

import TodoItem from "./components/TodoItem";

function App() {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  let main;

  const handleNewTodoKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const inputValue = input.trim();

    if (inputValue) {
      dispatch(addTodoAction(inputValue));
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
                onToggle={() => dispatch(toggleTodoAction(todo.id))}
                onDestroy={() => dispatch(removeTodoAction(todo.id))}
                onSave={(content: string) =>
                  dispatch(editTodoAction(todo.id, content))
                }
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
