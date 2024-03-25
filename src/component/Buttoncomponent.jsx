import React from 'react'
import AddBtn from './AddBtn'
import EditBtn from './EditBtn'


const Buttoncomponent = ({show, addTodoHandler, startEditing}) => {
  return (
    <>
        {show ? ( 
      <div>
        <AddBtn addTodoHandler={addTodoHandler} />
      </div> ) : (
        <div>
        <EditBtn startEditing={startEditing} />
        </div>
      ) }
    </>
  )
}

export default Buttoncomponent