import React, { useContext } from 'react'
import { context } from '../Context'

const TodoCheckBox = ({item}) => {

  const {checkBoxOnChange} = useContext(context)

  return (
    <>
        <input type='checkbox' className='checkbox' checked={item.completed} onChange={() => checkBoxOnChange(item.id)}></input>
    </>
  )
}

export default TodoCheckBox