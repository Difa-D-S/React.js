import React from 'react'

import ListItem from './ListItem'

const TodoList = ({arr, startEditing,editedTodo, setEditedTodo, handleDelete, checkBoxOnChange}) => {
  return (
    <>
        <ul className='del-list'>
      {arr.map((item) => (
        
      <ListItem item={item} startEditing={startEditing} handleDelete={handleDelete} checkBoxOnChange={checkBoxOnChange}
        editedTodo={editedTodo} setEditedTodo={setEditedTodo}/>

    ))}
    </ul>
    </>
  )
}

export default TodoList