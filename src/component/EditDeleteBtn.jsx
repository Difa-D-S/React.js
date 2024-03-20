import React from 'react'
import EditIcon from './EditIcon'
import DeleteIcon from './DeleteIcon'

const EditDeleteBtn = ({item, handleEdit, handleDelete}) => {
  return (
    <>
        <EditIcon item={item} handleEdit = {handleEdit}/>
        <DeleteIcon item={item} handleDelete = {handleDelete}/>
    </>
  )
}

export default EditDeleteBtn