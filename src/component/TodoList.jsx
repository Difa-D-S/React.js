import React from 'react'

import ListItem from './ListItem'

const TodoList = ({arr, handleEdit, handleDelete, checkBoxOnChange}) => {
  return (
    <>
        <ul className='del-list'>
      {arr.map((item) => (
        
      <ListItem item={item} handleEdit={handleEdit} handleDelete={handleDelete} checkBoxOnChange={checkBoxOnChange}/>

    ))}
    </ul>
    </>
  )
}

export default TodoList