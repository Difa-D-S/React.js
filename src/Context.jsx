import { createContext, useEffect, useReducer, useState } from 'react';


//First create context
export const context = createContext(null)

// provide context
export const ContextProvider = ({children}) => {

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

    return(
        <context.Provider value={{todos, inputValue, setInputValue, editId, setEditId, show, setShow, 
                    addTodoHandler, handleDelete, checkBoxOnChange, handleEditTodo, handleSaveEdit}}>
                {children}
        </context.Provider>
    )
}