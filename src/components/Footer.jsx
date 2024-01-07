/* eslint-disable react/prop-types */
import {
  activeEvents,
  completedEvents,
  allEvents,
  clearCompleted,
} from "../function";

function Footer({ todos, setTodos, count, setCount }) {
  return (
    <div className="container_btn">
      <span>
        <strong id="items">{count}</strong>items left
      </span>
      <button id="btnShowAll" onClick={() => allEvents(todos, setCount)}>
        All
      </button>
      <button
        id="btnActive"
        onClick={() => activeEvents(todos, count, setCount)}
      >
        Active
      </button>
      <button
        id="btnCompleted"
        onClick={() => completedEvents(todos, count, setCount)}
      >
        Completed
      </button>
      <button
        id="btnClearCompleted"
        onClick={() => clearCompleted(todos, setTodos, setCount)}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Footer;
