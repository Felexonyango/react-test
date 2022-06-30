import React,{useState} from "react";
import {  Form,Button} from 'react-bootstrap';
import { Col } from "react-bootstrap";

const  TodoForm=(props)=> {
    const [input, setInput] = useState('');

    const handleChange = e => {
      setInput(e.target.value);
    };

    const handleSubmit = e => {
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        complete: false
      });
      setInput('');
    };

    return (
   <Form onSubmit={handleSubmit}> 

<Form.Group>
        <Form.Label><b>Add Todo</b></Form.Label>
        <Col sm={7}>
        <Form.Control 
         type="text"
         className="input" 
         value={input} 
         onChange={handleChange}
          placeholder="Add new todo" />
           </Col>
      </Form.Group>

        <Button 
        variant="primary mb-3" type="submit"
        onClick={handleSubmit }>add todo</Button>
      </Form>
    );
  }
  export  default TodoForm