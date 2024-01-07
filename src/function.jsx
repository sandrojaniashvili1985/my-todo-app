// show all active items
function activeEvents(todos, count, setCount) {
  count = 0;
  todos.map((todo, index) => {
    document.getElementsByTagName("li")[index].style.display = "block";
    if (todo.completed) {
      document.getElementsByTagName("li")[index].style.display = "none";
      count++;
    }
  });
  setCount(todos.length - count);
}
// show all completed items
function completedEvents(todos, count, setCount) {
  count = 0;
  todos.map((todo, index) => {
    document.getElementsByTagName("li")[index].style.display = "block";
    if (todo.completed === false) {
      document.getElementsByTagName("li")[index].style.display = "none";
      count++;
    }
  });
  setCount(todos.length - count);
}
// show all items
function allEvents(todos, setCount) {
  todos.map((todo, index) => {
    document.getElementsByTagName("li")[index].style.display = "block";
  });
  setCount(todos.length);
}
// clear all completed items
function clearCompleted(todos, setTodos, setCount) {
  const newTodos = todos.filter((todo) => todo.completed === false);
  setTodos(newTodos);
  setCount(newTodos.length);
}

// delete single item
function handleDelete(e, todos, setTodos, setCount) {
  const newTodo = [...todos];
  todos.map((todo, index) => {
    if (e.target.id == todo.id) {
      newTodo.splice(index, 1);
    }
  });
  setTodos(newTodo);
  setCount(newTodo.length);
}
// mark single item as completed
const handleCompleted = (e, todos, setTodos, setCompleted, completed) => {
  todos.map((item, index) => {
    if (item.id == e.target.id) {
      setCompleted(!completed);
      setTodos((oldList) => {
        const newLists = [...oldList];
        newLists[index].completed = !completed;
        return newLists;
      });
    }
  });
};

export {
  activeEvents,
  completedEvents,
  allEvents,
  clearCompleted,
  handleDelete,
  handleCompleted,
};
