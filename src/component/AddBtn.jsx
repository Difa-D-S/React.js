import React from 'react'
// import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const Buttonadd = styled.button`
  border-radius: 0 8px 8px 0 !important;
  margin-left: -10px;
  margin-bottom: 10px;
  height: 37px;
  
  &:hover {
    background-color: red;
  color:white;
  }`



const AddBtn = ({addTodoHandler}) => {
  return (
    <>
        <Buttonadd className="arr-click" variant="danger" onClick={addTodoHandler}> Add </Buttonadd>
    </>
  )
}

export default AddBtn