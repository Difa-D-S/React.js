import React from 'react'
import TodoCheckBox from './TodoCheckBox'
import EditDeleteBtn from './EditDeleteBtn'

const ListItem = ({item, handleEdit, handleDelete, checkBoxOnChange}) => {
  return (
    <div>
        <li key={item.id} className='list-value'> 
            <div>
                <TodoCheckBox item={item} checkBoxOnChange={checkBoxOnChange}/> <span> {item.title} </span>
            </div>

            <div>
                <EditDeleteBtn item={item} handleEdit={handleEdit} handleDelete={handleDelete}/>
            </div>
        </li>
    </div>
  )
}

export default ListItem