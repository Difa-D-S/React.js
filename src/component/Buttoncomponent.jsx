import React from 'react'
import AddBtn from './AddBtn'
import EditBtn from './EditBtn'


const Buttoncomponent = ({show, addTodoHandler, startEditing}) => {
  return (
    <>
        {show ? ( 
      <>
        <AddBtn addTodoHandler={addTodoHandler} />
      </> ) : (
        <>
        <EditBtn startEditing={startEditing} />
        </>
      ) }
    </>
  )
}

export default Buttoncomponent