import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'


const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
    completed:false
  });
  const [arr, setArr] = useState([]);

  // const [editing, setEditing] = useState(false);

  useEffect(() =>{ localStorage.setItem('todos', JSON.stringify(arr))
  }, [arr] );

  const storedArr = JSON.parse(localStorage.getItem('todos'));
  useEffect( () => {
    if(storedArr) {
      setArr(storedArr)
    }
  }, [])

  const addTodoHandler = () => {
    setArr([...arr, todo]);
    setTodo({id:'', title:''});
  }

  const handleDelete = (id) => {
    const newArr = arr.filter((item) => (item.id !== id))
    setArr(newArr)
  }

  const handleEdit = (id) => {
    const editing = arr.filter((item) => (item.id === id))
    const edited = editing.map((editing) => editing.title);
    setTodo({title: edited})
  }
  
  

//   const addref = useRef(null);

// useEffect(()=>{
//   addTodoHandler.current.focus(addref)
// })

  return (
    <>
    
    <div className='list'>
    <div className='flex'> 
    <input className="todo-input" type="text" placeholder="Enter your todo" value = {todo.title}
      onChange = {(e) => setTodo({id: Math.random(), title: e.target.value})}
      onKeyDown={(event) => {
        if(event.key === "Enter") {
          addTodoHandler()
        }
      }} ></input>

    <Button className="arr-click" variant="danger" onClick={addTodoHandler}> Add todo </Button>
    </div>
                {/* <button 
                  onClick = {() => {
                    console.log(arr);
                    }}
                    > array </button> */}

    <ul className='del-list'>
      {arr.map((item) => (
        
      <li key={item.id} className='list-value'> 
        <div>
          <input type='checkbox' className='checkbox' checked={item.completed} onChange={
            () => {
              if(item.id && item.completed){
              item.completed = !item.completed;
                // console.log(item.completed = !item.completed);}
              }
            }
            }
          ></input>
          <span> {item.title} </span>
        </div>
        <div>
          <Button className="del-icon" onClick={() => handleEdit(item.id)}> <FontAwesomeIcon icon={faEdit}/> </Button> 
          <Button className="del-icon" onClick={() => handleDelete(item.id)}> 
              <FontAwesomeIcon icon={faTrash} /> </Button> 
        </div>
        
      </li>

    ))}
    </ul>
    </div>
    </>
  );
}


export default App;
