import React from 'react'
import EditIcon from './EditIcon'
import DeleteIcon from './DeleteIcon'

const EditDeleteBtn = ({item,startEditing, handleDelete}) => {
  return (
    <>
        <EditIcon item={item} startEditing={startEditing}/>
        <DeleteIcon item={item} handleDelete = {handleDelete}/>
    </>
  )
}

export default EditDeleteBtn