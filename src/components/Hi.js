
import React, { useState,useEffect } from "react";

import validator from 'validator'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

import { LinkContainer } from 'react-router-bootstrap'
import { Col } from "react-bootstrap";

const Login = () => {
  
  const [email, setEmail] = useState('')

 const [password,setPassword]=useState("")

 const [isButtonDisabled, setIsButtonDisabled] = useState(true)



  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmail('Valid Email :)')
    } else {
      setEmail('Enter valid Email!')
    }
  }
 
  
  
  
useEffect(()=>{
  
},[password])
  return (
<div>

    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Col sm={7}>
      <Form.Control type="email" 
      placeholder="Enter email"
      onChange={(e) => validateEmail(e)} />
    </Col>

      <span style={{
       fontWeight: 'bold',
          color: 'red',
   }}>{email}</span>
      <Form.Text className="text-muted">
       
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>

<Col sm={7}>

    <Form.Control
     type='password'
     placeholder="password"
    onChange={(e) => setPassword(e.target.value)}/>

</Col>
    </Form.Group>
    
    <LinkContainer to="/login">
            
  </LinkContainer>
    <Button 
    variant="primary" 
    type="submit"
    disabled={!isButtonDisabled}
    onClick={()=>{setIsButtonDisabled(false)}}
    
    >
      Submit
    </Button>
  </Form>


</div>

  );
}
export default Login;
