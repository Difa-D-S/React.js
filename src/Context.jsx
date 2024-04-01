import { createContext, useEffect, useState } from 'react';


//First create context
export const context = createContext()

// provide context
export const ContextProvide = ({children}) => {

    const [todos, setTodo] = useState({
        id:'',
        title:'',
        completed:false
      });

      const [arr, setArr] = useState([...JSON.parse(localStorage.getItem('todos'))]);

      useEffect(() =>{ localStorage.setItem('todos', JSON.stringify(arr))
    }, [arr] );

      const addTodoHandler = () => {
        // dispatch({type: 'ADD', payload:todos})
        setArr([...arr, todos]);
        setTodo({id:'', title:'', completed: false});
      }
      const ichange = (e) => {
        setTodo({
          id: Math.random() * 20000,
          title: e.target.value,
          completed:false
        })  
        }
    return(
        <context.Provider value={{todos, setTodo, arr, setArr, addTodoHandler, ichange }}>
                {children}
        </context.Provider>
    )
}