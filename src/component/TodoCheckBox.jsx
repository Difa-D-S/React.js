import React from 'react'

const TodoCheckBox = ({item, checkBoxOnChange}) => {

  return (
    <>
        <input type='checkbox' className='checkbox' checked={item.completed} onChange={() => checkBoxOnChange(item.id)}></input>
    </>
  )
}

export default TodoCheckBox