import React, { useContext } from 'react'
import { context } from '../Context'

const TodoCheckBox = ({item}) => {

  const values = useContext(context)

  return (
    <>
        <input type='checkbox' className='checkbox' checked={item.completed} onChange={() => values.checkBoxOnChange(item.id)}></input>
    </>
  )
}

export default TodoCheckBox