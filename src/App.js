import React from 'react';
import './App.css';
import Addtext from './component/Addtext';
import Buttoncomponent from './component/Buttoncomponent';
import TodoList from './component/TodoList';
// import EditDeleteBtn from './component/EditDeleteBtn';
// import Button from 'react-bootstrap/Button'

const App = () => {

  return (
    <>
      <div className='list'>
        <div className='flex'> 
          <Addtext />

          <Buttoncomponent />

        </div>   
          <TodoList />
      </div>
    </>
  );
}
  

export default App;

// const todoReducer = copy the code from w3


//const [todo, dispatch] = useReducer(todoReducer, initialvalue);

// const action= {
//   type:'',
//   payload: pass panura id ah kudukanum
// }