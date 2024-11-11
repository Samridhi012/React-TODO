import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');

    function handleEnterPress(event){
        if(event.keyCode===13){    //enter key ASCII Code is 13
            props.addList(inputText)
            setInputText("")
        }
    }

    function handleTextChange(event){
      setInputText(event.target.value);
    };

    function handleButton(){
        props.addList(inputText);
        setInputText("");
    }
    
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add task"
        value={inputText}
        onChange={handleTextChange}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" onClick={handleButton}>+</button>      
    </div>
  );
}

export default TodoInput;
