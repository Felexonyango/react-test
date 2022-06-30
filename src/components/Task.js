import React from 'react'
import { Button} from 'react-bootstrap';

const Task=({ todo, index, removeTodo })=> {
  return (
    <div
      className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
       
        <Button 
        variant="outline-danger"
         onClick={() => removeTodo(index)}>
          ✕
          </Button>
    
          
       
       
      
      </div>
    </div>
  );
}
export default Task