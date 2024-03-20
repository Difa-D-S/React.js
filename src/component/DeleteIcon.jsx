import React from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const DeleteIcon = ({item, handleDelete}) => {
  return (
    <>
        <Button className="del-icon" onClick={() => handleDelete(item.id)}> <FontAwesomeIcon icon={faTrash} /> </Button>
    </>
  )
}

export default DeleteIcon