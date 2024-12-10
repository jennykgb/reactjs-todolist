import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, todoIndex, handleEditTodo} =props
  return (
    <li className='todoItem' >
            <div className='actionsContainer'>
              {children}
              <button onClick ={()=>{
                handleEditTodo(todoIndex)
              }}>
                <i class="fa-regular fa-pen-to-square"></i>
              </button>
              <button onClick={()=>{
                handleDeleteTodo(todoIndex)
              }}>
                <i class="fa-solid fa-trash"></i>
              </button>
              
              
            </div>
          
    </li>
  )
}
