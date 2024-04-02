import React from 'react'
import EditIcon from './EditIcon'
import DeleteIcon from './DeleteIcon'

const EditDeleteBtn = ({item}) => {
  return (
    <>
        <EditIcon item={item} />
        <DeleteIcon item={item} />
    </>
  )
}

export default EditDeleteBtn