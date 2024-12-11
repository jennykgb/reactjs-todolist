import { useState } from "react"

export default function TodoCard(props) {
  const {children, handleDeleteTodo, todoIndex, handleEditTodo} =props

  const [clicked, setClicked] = useState(false)

  return (
    <li className='todoItem'>
            <div className='actionsContainer'>
              <div className='item' onClick={()=>{
                if(clicked){
                  setClicked(false)
                } else{
                  setClicked(true)
                }
              }}>
                {clicked? <i class="fa-solid fa-square-check"></i> :<i class="fa-solid fa-square"></i>}
          
                {children}
              </div>
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
