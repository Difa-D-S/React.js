import React from 'react'
import AddBtn from './AddBtn'
import EditBtn from './EditBtn'

const Buttoncomponent = ({show, addTodoHandler, startEditing}) => {
  return (
    <div>
        {show ? ( 
      <>
        <AddBtn addTodoHandler={addTodoHandler} />
      </> ) : (
        <>
        <EditBtn startEditing={startEditing} />
        </>
      ) }
    </div>
  )
}

export default Buttoncomponent