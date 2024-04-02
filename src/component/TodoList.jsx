import React from 'react'

import ListItem from './ListItem'

const TodoList = ({arr, startEditing,editedTodo, setEditedTodo, handleDelete, checkBoxOnChange, 
  editId, inputValue, setInputValue}) => {
  return (
    <>
        <ul className='del-list'>
      {arr.map((item) => (
        
      <ListItem item={item} editId={editId} inputValue={inputValue} setInputValue={setInputValue} startEditing={startEditing} handleDelete={handleDelete} checkBoxOnChange={checkBoxOnChange}
        editedTodo={editedTodo} setEditedTodo={setEditedTodo}/>

    ))}
    </ul>
    </>
  )
}

export default TodoList