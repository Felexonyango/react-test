
import React from "react";
import { Button} from 'react-bootstrap';
import {  Form} from 'react-bootstrap';
import { Col } from "react-bootstrap";

const Todos = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue
}) => {
  return todos.map((todo) => (
    <div className="todo-row">
      {editId === todo.id ? (


  <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Col sm={7}>
        <Form.Control 
         type="text"
         className="input" 
         value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new todo" />
           </Col>
      </Form.Group>

       
      ) : (
        <div
          key={todo.id}
          className={todo.isComplete ? "complete" : ""}
          onClick={() => completeTodo(todo.id)}
        >
          {todo.text}
        </div>
      )}
      {editId === todo.id ? (
        <Button onClick={() => editTodo(todo.id, inputValue)}>Update</Button>
      ) : (
        <>
         <Button 
        variant="outline-danger"
         onClick={() => removeTodo(todo.id)}>
          ✕
          </Button>
     
          <Button onClick={() => handleEditChange(todo.id, todo.text)}>
            Update
          </Button>
        </>
      )}
    </div>
  ));
};

export default Todos;