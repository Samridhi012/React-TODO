import React, { useState } from 'react'

function Todolist(props) {
  
  const [deletionState,changeDeletionState]= useState(false);


  function handleDeleteIcon(){
    changeDeletionState(true);
  }
  
  return (
    <li className="list-item" 
    onClick={handleDeleteIcon} 
    style={{textDecoration : deletionState ? "line-through" : "none"}}
    >
      {props.item}
    </li>
  )
}

export default Todolist;