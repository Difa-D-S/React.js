import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState({
    id:'',
    title:'',
  });
  const [arr, setArr] = useState([]);

  return (
    <>
    <div className='list'>
    <div className='flex'>
    <input className="todo-input" type="text" placeholder="Enter your todo" value = {todo.title}
      onChange = {(e) => setTodo({id: Math.random(), title: e.target.value})}

      onKeyDown={(event) => {
        if(event.key === "Enter") {

         setArr([...arr, todo]);

          <ul className='del-list'>
      {arr.map((item) => (
        
      <li key={item.id} className='list-value'> 
        <span> {item.title} </span>
        <Button className="del-icon"> <i className="fa-solid fa-trash"></i> </Button> 
      </li>
    ))}
    </ul>
        
        }
      }}></input>

    <Button className="arr-click" variant="danger" onClick={
      () => setArr([...arr, todo])}> Add todo </Button>
    </div>
                {/* <button 
                  onClick = {() => {
                    console.log(arr);
                    }}
                    > array </button> */}

    
    <ul className='del-list'>
      {arr.map((item) => (
        
      <li key={item.id} className='list-value'> 
        <span> {item.title} </span>
        <Button className="del-icon"> <i className="fa-solid fa-trash"></i> </Button> 
      </li>

    ))}
    </ul>
    </div>
    </>
  );
}

export default App;
