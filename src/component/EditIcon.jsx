import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { context } from '../Context'

const EditIcon = ({item}) => {

  const values = useContext(context)

  return (
    <>
        <Button className="del-icon" onClick={() => values.handleEditTodo(item.id, item.title)}> <FontAwesomeIcon icon={faEdit}/> </Button> 
    </>
  )
}

export default EditIcon