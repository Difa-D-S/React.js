import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { context } from '../Context'

const DeleteIcon = ({item}) => {

  const values = useContext(context)

  return (
    <>
        <Button className="del-icon" onClick={() => values.handleDelete(item.id)}> <FontAwesomeIcon icon={faTrash} /> </Button>
    </>
  )
}

export default DeleteIcon