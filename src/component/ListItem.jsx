import React from 'react'
import TodoCheckBox from './TodoCheckBox'
import EditDeleteBtn from './EditDeleteBtn'

const ListItem = ({item, startEditing, handleDelete, checkBoxOnChange}) => {
  return (
    <>
        <li key={item.id} className='list-value'> 
            <div>
                <TodoCheckBox 
                  item={item} 
                  checkBoxOnChange={checkBoxOnChange}/> 
                  <span> {item.title} </span>
            </div>
            
            <div>
                <EditDeleteBtn 
                  item={item} 
                  startEditing={startEditing} 
                  handleDelete={handleDelete}
                  />
            </div>
        </li>
    </>
  )
}

export default ListItem