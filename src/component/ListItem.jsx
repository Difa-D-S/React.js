import React, { useContext } from 'react'
import TodoCheckBox from './TodoCheckBox'
import EditDeleteBtn from './EditDeleteBtn'
import { context } from '../Context'

const ListItem = ({item}) => {

  const values = useContext(context);
  return (
    <>
        <li key={item.id} className='list-value'> 
            <div>

                <TodoCheckBox item={item} /> 
               
              {values.editId === item.id ? (
                <input
                  type='text'
                  // value={values.inputValue}
                  // onChange={(e) => values.setInputValue(e.target.value)}
                  // onBlur={() => handleSaveEdit(item.id)}
                />
              ) : (
                <span>{item.title}</span>
              )}
              
            </div>
            
            <div>
                <EditDeleteBtn item={item} />
            </div>
        </li>
    </>
  )
}

export default ListItem