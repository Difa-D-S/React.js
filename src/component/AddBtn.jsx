import React from 'react'
import Button from 'react-bootstrap/Button'

const AddBtn = ({addTodoHandler}) => {
  return (
    <>
        <Button className="arr-click" variant="danger" onClick={addTodoHandler}> Add </Button>
    </>
  )
}

export default AddBtn