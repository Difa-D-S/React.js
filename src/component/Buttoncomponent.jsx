import React from 'react'
import AddBtn from './AddBtn'
import EditBtn from './EditBtn'


const Buttoncomponent = ({show,item, addTodoHandler, handleEdit}) => {
  
  return (
    <>
        {show ? ( 
      <div>
        <AddBtn addTodoHandler={addTodoHandler} />
      </div> ) : (
        <div>
        <EditBtn handleEdit={handleEdit} item = {item}/>
        </div>
      ) }
    </>
  )
}

export default Buttoncomponent