import "../TodoApp.css";
import Header from "./Header";
import Lists from "./Lists";
import Footer from "./Footer";
import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  let [count, setCount] = useState(0);

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="container_btn">
      <Header addTodo={addTodo} count={count} setCount={setCount} />
      <Lists todos={todos} setTodos={setTodos} setCount={setCount} />
      <Footer
        todos={todos}
        setTodos={setTodos}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default TodoApp;
