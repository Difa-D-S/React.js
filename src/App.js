import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import Addtext from './component/Addtext';
import Buttoncomponent from './component/Buttoncomponent';
import TodoList from './component/TodoList';
// import EditDeleteBtn from './component/EditDeleteBtn';
// import Button from 'react-bootstrap/Button'


const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'COMPLETE':
      return state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      );
    case 'EDIT':
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, title: action.payload.title } : item
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, JSON.parse(localStorage.getItem('todos')) || []);

  const [inputValue, setInputValue] = useState([])
 
  const [editId, setEditId] = useState(null);

  const [show, setShow] = useState(true);
  
  useEffect(() =>{ localStorage.setItem('todos', JSON.stringify(todos))}, [todos] );

  const addTodoHandler = () => {
    dispatch({type: 'ADD', payload: {id: Math.random() * 20000, title: [inputValue], completed:false }})
  }

  const handleDelete = (id) => {
    dispatch({type:"DELETE", payload: id})
  }
  
  const checkBoxOnChange = (id) => {
    dispatch({type:'COMPLETE' , payload: id})
  };

  const handleEditTodo = (id, title) => {
    setEditId(id);
    setInputValue(title);
    setShow(false)
  };

  const handleSaveEdit = (id) => {
    if (inputValue.trim() !== '') {
      dispatch({ type: 'EDIT', payload: { id, title: inputValue } });
      setInputValue('');
      setShow(true)
      setEditId(null);
    }
  };

  return (
    <>
      <div className='list'>
        <div className='flex'> 
          <Addtext 
            inputValue = {inputValue}
            setInputValue = {setInputValue}
            addTodoHandler = {addTodoHandler} />

          <Buttoncomponent 
            show={show} 
            item={todos} 
            handleEdit={handleSaveEdit} 
            addTodoHandler={addTodoHandler} />

        </div>   
          <TodoList 
            arr={todos} 
            editId={editId} 
            inputValue={inputValue} 
            setInputValue={setInputValue} 
            startEditing={handleEditTodo} 
            handleDelete={handleDelete} 
            checkBoxOnChange={checkBoxOnChange} />
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