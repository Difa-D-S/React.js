import React, { useEffect, useRef } from 'react'

const Addtext = ({todo, setTodo, arr, setArr, editedTodo, setEditedTodo}) => {

  const inputOnChange = (e) => {
    setTodo({
      id: Math.random(), 
      title: e.target.value, 
      completed:false
    })}

  const onkeyDown = (event) => {
    if(event.key === "Enter") {
      setArr([...arr, todo]);
      setTodo({id:'', title:'', completed: false});
    }
  }

  const addTodoInput = useRef(null);

  useEffect(()=>{
    addTodoInput.current.focus();
  })

  return (
    <>
        <input className="todo-input" type="text" placeholder="Enter your todo" name='todo' value = {editedTodo.title}
      onChange = {inputOnChange} onKeyDown={onkeyDown} ref={addTodoInput}></input>
    </>
  )
}

export default Addtext