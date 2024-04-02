import React, { useContext } from 'react'

import ListItem from './ListItem'
import { context } from '../Context'

const TodoList = () => {
  const values = useContext(context)
  return (
    <>
        <ul className='del-list'>
      {values.todos.map((item) => (
        
      <ListItem item={item} />

    ))}
    </ul>
    </>
  )
}

export default TodoList