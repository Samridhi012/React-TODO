import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';

function App() {
  const [listTodo,setListTodo]=useState([]);

  function addingList(inputText){
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  
  function deleteListItem(key){
    let newListTodo = [...listTodo];
    //array.splice(start, noOfElementsToBeDeleted, item1, item2, ...);
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO</h1>
        <br/>
        <TodoInput addList={addingList}/>
        {listTodo.map((listItem,indexValue)=>{
          return (
            <Todolist 
              key={indexValue} 
              index={indexValue} 
              item={listItem} 
              deleteItem={deleteListItem}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App;