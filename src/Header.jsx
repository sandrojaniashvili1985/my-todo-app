// eslint-disable-next-line react/prop-types
function Header({ addTodo, count, setCount }) {

  function handleKeyDown(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      setCount(count + 1)
      addTodo(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div>
      <h1>TO-DO APP</h1>
      <form action="#">
        <input type="text" placeholder="Add a new task" id="inputItem" 
        onKeyDown={handleKeyDown}/>
      </form>
    </div>
  )
}


export default Header