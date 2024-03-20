import React from 'react'

import ListItem from './ListItem'

const TodoList = ({arr, handleEdit, handleDelete}) => {
  return (
    <div>
        <ul className='del-list'>
      {arr.map((item) => (
        
      <ListItem item={item} handleEdit={handleEdit} handleDelete={handleDelete}/>

    ))}
    </ul>
    </div>
  )
}

export default TodoList