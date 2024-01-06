/* eslint-disable react/prop-types */
import { useState } from "react"

function Item({item, todos, setTodos, setCount}) {

  const [completed, setCompleted] = useState(false)
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(item.title)

  function handleDelete(e) {
  const newTodo = [...todos]
  todos.map((todo, index) => {
    if(e.target.id == todo.id){
      newTodo.splice(index, 1)
    }
  })
  setTodos(newTodo)
  setCount(newTodo.length)
}

  const handleCompleted = (e) => {
    console.log('changed');
    todos.map((item, index) => {
      if(item.id == e.target.id){
        setCompleted(!completed)
        setTodos(oldList => {
          const newLists = [...oldList]
          newLists[index].completed = !completed
          return newLists
        }) 
      }
    })
}
 
  return (      
      <li ><input type="checkbox" 
        // checked={completed}
        // onChange={handleCompleted}
        id={item.id}/>
        <label>{title}</label>
        <button type="button" className="destroy" id={item.id} onClick={handleDelete}></button>
      </li>
  )
}

export default Item