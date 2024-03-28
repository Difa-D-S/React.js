import React, {useEffect, useState} from 'react';
import './App.css';
import Addtext from './component/Addtext';
import Buttoncomponent from './component/Buttoncomponent';
import TodoList from './component/TodoList';
// import EditDeleteBtn from './component/EditDeleteBtn';
// import Button from 'react-bootstrap/Button'

// const todoReducer = (state, action) => {
//   if(action.type === 'ADD'){
//     return [...state, action.payload]
//   } else if(action.type === 'COMPLETE') {
// return state.map((item) => {
//       if(item.id === action.payload){
//         return {...item, completed: !item.completed}
//           // console.log(item.completed = !item.completed);
//         } else{
//           return item
//         }
//     })    
    
//   }
  
// }

const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
    completed:false
  });

  const [arr, setArr] = useState([...JSON.parse(localStorage.getItem('todos'))]);
 
  const [show, setShow] = useState(true);

  useEffect(() =>{ localStorage.setItem('todos', JSON.stringify(arr))
  }, [arr] );
 
  // const [todos, dispatch] = useReducer(todoReducer, []);
 
  const[editedTodo,setEditedTodo] = useState({})


  const addTodoHandler = () => {
    // dispatch({type: 'ADD', payload:todo})
    setArr([...arr, todo]);
    setTodo({id:'', title:'', completed: false});
  }

  const handleDelete = (id) => {
    const newArr = arr.filter((item) => (item.id !== id))
    setArr(newArr)
  }

  const handleEdit = (id) => {
    const updatedTodos =arr.map((todo) =>
      todo.id === id ?  { id: todo.id, title: todo.title, completed: todo.completed } : todo
    );
    setTodo(updatedTodos);
    setShow(true);
  };

  const startEditing = (id) => {
    const selected = arr.find((todo) => todo.id === id)
    setEditedTodo(selected);
    setShow(false);
  };

  const checkBoxOnChange = (id) => {
    // dispatch({type:'COMPLETE' , payload: id})
    const updatedTodos = arr.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setArr(updatedTodos);
  };
 
  return (
    <>
      <div className='list'>
        <div className='flex'> 
          <Addtext todo={todo} setTodo={setTodo} arr={arr} setArr={setArr} editedTodo={editedTodo} setEditedTodo={setEditedTodo}/>
          <Buttoncomponent 
            show={show} 
            item={arr} 
            handleEdit={handleEdit} 
            addTodoHandler={addTodoHandler} />
        </div>   
          <TodoList arr={arr} startEditing={startEditing} handleDelete={handleDelete} checkBoxOnChange={checkBoxOnChange}
            editedTodo={editedTodo} setEditedTodo={setEditedTodo}/>
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