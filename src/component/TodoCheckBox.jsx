import React from 'react'

const TodoCheckBox = ({item}) => {

    const checkBoxOnChange = () => {
        if(item.id && item.completed){
        item.completed = !item.completed;
          // console.log(item.completed = !item.completed);}
        }
      }

  return (
    <>
        <input type='checkbox' className='checkbox' checked={item.completed} onChange={checkBoxOnChange}></input>
    </>
  )
}

export default TodoCheckBox