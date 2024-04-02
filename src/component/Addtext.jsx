import React, { useContext, useEffect, useRef } from 'react'
// import {context} from '../Context'

const Addtext = ({inputValue, setInputValue, addTodoHandler}) => {

  // const values = useContext(context)

  const onkeyDown = (event) => {
    if(event.key === "Enter") {
      addTodoHandler();
    }
  }

  const addTodoInput = useRef(null);

  useEffect(()=>{
    addTodoInput.current.focus();
  })

  return (
    <>
        <input className="todo-input" type="text" placeholder="Enter your todo" value = {inputValue}
         onChange={(e) => setInputValue(e.target.value)} onKeyDown={onkeyDown} ref={addTodoInput}></input>
    </>
  )
}

export default Addtext