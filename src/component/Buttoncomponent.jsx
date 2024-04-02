import React, {useContext} from 'react'
import AddBtn from './AddBtn'
import EditBtn from './EditBtn'
import {context} from '../Context'


const Buttoncomponent = () => {

  const values = useContext(context)
  
  return (
    <>
      {values.show ? ( 
        <div>
          <AddBtn />
        </div> ) : (
          <div>
          <EditBtn />
        </div>
      ) }
    </>
  )
}

export default Buttoncomponent