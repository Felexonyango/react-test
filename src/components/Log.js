
import React,{useState,useEffect} from "react";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Col } from "react-bootstrap";

import { useNavigate} from 'react-router-dom';


export default function App() {
  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("")
  const [isDisabled, setIsDisabled] = useState(true);
 
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };




  useEffect(() => {
    setIsDisabled(!validateEmail(email));
    setIsDisabled(password.length<=8)
    
  }, [email,password]);


 

 

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Col sm={7}>
      <Form.Control
       type="email" 
       placeholder="Enter email"
      value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
    </Col>
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
      


    <Button 
    variant="primary" 
    type="submit"
    disabled={isDisabled}
    onClick={() => navigate('/dashboard')}
    >
      Submit
    </Button>
       
  
    </Form>
  );
}
