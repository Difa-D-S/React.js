import React from 'react'

const Addtext = ({todo, setTodo, addTodoHandler, addTodoInput, inputOnChange, onKeyDown}) => {
  return (
    <div>
        <input className="todo-input" type="text" placeholder="Enter your todo" value = {todo.title}
      onChange = {inputOnChange} onKeyDown={onKeyDown} ref={addTodoInput}></input>
    </div>
  )
}

export default Addtext