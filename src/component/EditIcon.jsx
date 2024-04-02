import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const EditIcon = ({item, startEditing}) => {
  return (
    <>
        <Button className="del-icon" onClick={() => startEditing(item.id, item.title)}> <FontAwesomeIcon icon={faEdit}/> </Button> 
    </>
  )
}

export default EditIcon