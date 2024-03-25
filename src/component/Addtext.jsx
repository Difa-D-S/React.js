import React, { useEffect, useRef } from 'react'

const Addtext = ({todo, setTodo, onKeyDown}) => {

  const inputOnChange = (e) => {
    setTodo({
      id: Math.random(), 
      title: e.target.value, 
      completed:false
    })}

  const addTodoInput = useRef(null);

  useEffect(()=>{
    addTodoInput.current.focus();
  })

  return (
    <>
        <input className="todo-input" type="text" placeholder="Enter your todo" value = {todo.title}
      onChange = {inputOnChange} onKeyDown={onKeyDown} ref={addTodoInput}></input>
    </>
  )
}

export default Addtext