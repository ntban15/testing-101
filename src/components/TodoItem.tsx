import React, { FunctionComponent, useState } from "react";
import cx from "classnames";

import { ENTER_KEY, ESCAPE_KEY } from "../const";

type Props = {
  todo: Todo;
  onToggle: () => any;
  onSave: (content: string) => any;
  onDestroy: () => any;
};

const TodoItem: FunctionComponent<Props> = ({
  todo,
  onToggle,
  onSave,
  onDestroy,
}) => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(todo.content);

  const handleSubmit = () => {
    setEditing(false);
    const val = input.trim();
    if (val) {
      onSave(val);
      setInput(val);
    } else {
      onDestroy();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.keyCode === ESCAPE_KEY) {
      setInput(todo.content);
      setEditing(false);
    } else if (event.keyCode === ENTER_KEY) {
      handleSubmit();
    }
  };

  return (
    <li
      className={cx({
        completed: todo.completed,
        editing,
      })}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={() => setEditing(true)}>{todo.content}</label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        className="edit"
        value={input}
        onBlur={() => handleSubmit()}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </li>
  );
};

export default TodoItem;
