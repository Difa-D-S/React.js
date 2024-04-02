import React, { useContext, useEffect, useRef } from 'react'
import {context} from '../Context'

const Addtext = () => {

  const values = useContext(context)

  const onkeyDown = (event) => {
    if(event.key === "Enter") {
      values.addTodoHandler();
    }
  }

  const addTodoInput = useRef(null);

  useEffect(()=>{
    addTodoInput.current.focus();
  })

  return (
    <>
        <input className="todo-input" type="text" placeholder="Enter your todo" value = {values.inputValue}
         onChange={(e) => values.setInputValue(e.target.value)} onKeyDown={onkeyDown} ref={addTodoInput}></input>
    </>
  )
}

export default Addtext