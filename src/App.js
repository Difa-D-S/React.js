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
      onChange = {(e) => setTodo({id: Math.random(), title: e.target.value})}></input>

    <Button variant="danger" onClick={() => setArr([...arr, todo])}> Add todo </Button>
    </div>
                {/* <button 
                  onClick = {() => {
                    console.log(arr);
                    }}
                    > array </button> */}

    <div>
      {arr.map((item) => (
      <p className='list-value' key={item.id}>{item.title}</p>
    ))}
    </div>
    </div>
    </>
  );
}

export default App;
