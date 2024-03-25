import React from 'react'
// import Button from 'react-bootstrap/Button'
import styled from 'styled-components'

const Buttonadd = styled.button`
  border:none;
  border-radius: 0px 5px 5px 0px;
  margin-left: -10px;
  margin-bottom: 10px;
  height: 37px;
  width: 80px;
  background-color: black;
  color:white;
  
  &:hover {
    background-color: gray;
    color:white;
  }`
                                    


const AddBtn = ({addTodoHandler}) => {
  return (
    <>
        <Buttonadd onClick={addTodoHandler}> Add </Buttonadd>
    </>
  )
}

export default AddBtn