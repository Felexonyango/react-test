import React,{useState} from 'react'
import {  Form,Button} from 'react-bootstrap';
import { Col } from "react-bootstrap";

const FormTodo=({ addTodo })=> {

    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Col sm={7}>
        <Form.Control 
         type="text"
         className="input" 
         value={value} 
         onChange={e => setValue(e.target.value)}
          placeholder="Add new todo" />
           </Col>
      </Form.Group>
      
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }
  export default FormTodo