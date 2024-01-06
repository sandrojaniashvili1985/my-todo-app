/* eslint-disable react/prop-types */

function Footer({todos, setTodos, count, setCount}) {

  function activeEvents() {
    count = 0
    todos.map((todo, index) => {
      document.getElementsByTagName('li')[index].style.display = 'block'
      if(todo.completed) {
        document.getElementsByTagName('li')[index].style.display = 'none'
        count++
      }
    })
    setCount(todos.length - count)
  }

  function completedEvents() {
    count = 0
    todos.map((todo, index) => {
      document.getElementsByTagName('li')[index].style.display = 'block'
      if(todo.completed === false) {
        document.getElementsByTagName('li')[index].style.display = 'none'
        count++
      }
    })
    setCount(todos.length - count)
  }

  function allEvents() {
    todos.map((todo, index) => {
      document.getElementsByTagName('li')[index].style.display = 'block'
    })
    setCount(todos.length)
  }

  function clearCompleted() {
    const newTodos = todos.filter((todo) => todo.completed === false)
    setTodos(newTodos)
    setCount(newTodos.length)
  }

  return (
    <div className="container_btn">
      <span><strong id="items">{count}</strong>items left</span>
      <button id="btnShowAll" onClick={allEvents}>All</button>
      <button id="btnActive" onClick={activeEvents}>Active</button>
      <button id="btnCompleted" onClick={completedEvents}>Completed</button>
      <button id="btnClearCompleted" onClick={clearCompleted}>Clear Completed</button>
    </div>
  )
}


export default Footer