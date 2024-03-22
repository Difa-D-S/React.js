import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Addtext from './component/Addtext';
import Buttoncomponent from './component/Buttoncomponent';
import TodoList from './component/TodoList';
// import Button from 'react-bootstrap/Button'


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

  const addTodoHandler = () => {
    setArr([...arr, todo]);
    setTodo({id:'', title:'', completed: false});
  }

  const handleDelete = (id) => {
    const newArr = arr.filter((item) => (item.id !== id))
    setArr(newArr)
  }

  const handleEdit = (id) => { 
    const findTodo = arr.find((todo) => todo.id === id);
    setTodo(findTodo);
    setShow(false);
  }

  const startEditing = () => {
    addTodoHandler();
  }

  const addTodoInput = useRef(null);

  useEffect(()=>{
    addTodoInput.current.focus();
  })
  
  const inputOnChange = (e) => {
    setTodo({
      id: Math.random(), 
      title: e.target.value, 
      completed:false
    })}

  const onKeyDown = (event) => {
    if(event.key === "Enter") {
      addTodoHandler()
    }
  }
  

  // const update = (id, title) => {
  //   setArr(arr.map( (todo) => todo.id === id ? {...arr, title: title} : arr))
  // }

    // console.log(setEditing(...editing, arr, todo));

            // const editing = arr.filter((item) => item.id === id);
            // const edited = editing.map((editing) => editing.title);
            // setTodo({title: edited})
  
  // const storedArr = JSON.parse(localStorage.getItem('todos'));
  // useEffect( () => {
  //   if(storedArr) {
  //     setArr(storedArr)
  //   }
  // }, [])


  // useEffect( () => {
  //   if(editing) {
  //     setTodo(setEditing.title);
  //   }
  //   else{
  //     setTodo('');
  //   }
  // }, [setTodo, editing])

 
  return (
    <>
      <div className='list'>
        <div className='flex'> 
          <Addtext todo={todo} setTodo={setTodo} inputOnChange={inputOnChange} addTodoHandler={addTodoHandler} addTodoInput={addTodoInput} onKeyDown={onKeyDown}/>
          <Buttoncomponent show={show} startEditing={startEditing} addTodoHandler={addTodoHandler}/>
        </div>   
          <TodoList arr={arr} handleEdit={handleEdit} handleDelete={handleDelete}/>
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