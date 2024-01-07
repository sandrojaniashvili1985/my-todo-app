/* eslint-disable react/prop-types */
import Item from "./Item";

function Lists({ todos, setTodos, setCount }) {
  return (
    <ul id="ul_task_list">
      {todos.map((todo) => (
        <Item
          key={todo.id}
          item={todo}
          todos={todos}
          setTodos={setTodos}
          setCount={setCount}
        />
      ))}
    </ul>
  );
}

export default Lists;
