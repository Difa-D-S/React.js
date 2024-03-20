import React from 'react'
import Button from 'react-bootstrap/Button'

const EditBtn = ({startEditing}) => {
  return (
    <>
        <Button className="arr-click" variant="danger" onClick={startEditing}> Edit </Button>
    </>
  )
}

export default EditBtn