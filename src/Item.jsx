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
function dandleDbClick() {
  setEdit(!edit)
}

function handleExit(e) {
  if (e.key === 'Enter') {
  setEdit(false)
}
}
 
  return (      
      <li 
        onDoubleClick={dandleDbClick}
        onKeyDown={handleExit}
        ><input type="checkbox" 
        checked={completed}
        onChange={handleCompleted}
        id={item.id}/>
        <input id='inputAdd' className={!edit ? "hide" : ""} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label className={edit ? "hide" : ""}>{title}</label>
        <button type="button" className="destroy" id={item.id} onClick={handleDelete}></button>
      </li>
  )
}

export default Item