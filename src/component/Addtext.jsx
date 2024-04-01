import React, { useContext, useEffect, useRef } from 'react'
// import {context} from '../Context'

const Addtext = ({todo, setTodo, arr, setArr}) => {

  // const values = useContext(context)

  const onchange = (e) => {
    setTodo({
      id: Math.random() * 20000,
      title: e.target.value,
      completed:false
    })  
    }

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
        <input className="todo-input" type="text" placeholder="Enter your todo" name='todo' value = {todo.title}
         onChange={onchange} onKeyDown={onkeyDown} ref={addTodoInput}></input>
    </>
  )
}

export default Addtext