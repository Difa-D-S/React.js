import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const EditIcon = ({item, handleEdit}) => {
  return (
    <>
        <Button className="del-icon" onClick={() => handleEdit(item.id)}> <FontAwesomeIcon icon={faEdit}/> </Button> 
    </>
  )
}

export default EditIcon