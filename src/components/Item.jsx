/* eslint-disable react/prop-types */
import { useState } from "react";
import { handleDelete, handleCompleted } from "../function";

function Item({ item, todos, setTodos, setCount }) {
  const [completed, setCompleted] = useState(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(item.title);

  function handleDbClick() {
    setEdit(!edit);
  }

  function handleExit(e) {
    if (e.key === "Enter") {
      setEdit(false);
    }
  }

  return (
    <li onDoubleClick={handleDbClick} onKeyDown={handleExit}>
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) =>
          handleCompleted(e, todos, setTodos, setCompleted, completed)
        }
        id={item.id}
      />
      <input
        id="inputAdd"
        className={!edit ? "hide" : ""}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className={edit ? "hide" : ""}>{title}</label>
      <button
        type="button"
        className="destroy"
        id={item.id}
        onClick={(e) => handleDelete(e, todos, setTodos, setCount)}
      ></button>
    </li>
  );
}

export default Item;
