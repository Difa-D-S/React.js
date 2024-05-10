import React, { useState } from 'react'

const Addtext = () => {

  const [todo, setTodo] = useState([]);
  const date = new Date();
  const [input, setInput] = useState({title: '', description: ''});

  const addHandler = () => {
    const arrtodo = {
      id: Math.random() * 2000,
      title: input.title,
      description: input.description,
      createdDate: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
    };
    setTodo([...todo, arrtodo]);
    setInput({title: '', description: ''});
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = todo.filter((task) => task.id !== taskId);
    setTodo(updatedTasks);
  };
  return (
    <>
      <div className='list-add'>
      <div className='list'>
        <input type="text" className="w-100 p-1" value={input.title} placeholder='Title'
          onChange={(e) => { setInput({...input, title: e.target.value}) }} />

        <input  className="w-100 my-3 p-1" style={{textAlign: "justify"}}
          type="text" value={input.description} placeholder='Description'
          onChange={(e) => {setInput({...input, description: e.target.value}) }} />

        <button className="bg-primary p-2 w-100 text-white border rounded-lg"
          onClick={addHandler} > ADD </button>

      {todo.map((task) => (
          <li key={task.id} style={{listStyle: 'none', marginTop:"10px", fontWeight: "bold"}}>
            
            {task.title}
           
            <p>{task.description}</p>
            
            <span>{task.createdDate}</span>
            
              <span className='d-flex'>
                <button className="bg-primary p-2 w-100 text-white me-3">
                    edit
                </button>

                <button onClick={() => handleRemoveTask(task.id)} className="bg-danger p-2 w-100 text-white">
                    delete
                </button>
              </span>
              <hr></hr>
          </li>
        ))}
      </div>
      </div>
    </>
  )
}

export default Addtext