import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Dashboard=() =>{
  return (
    <>
  
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav >
            <Nav.Link href='/todo'>Todo</Nav.Link>
            <Nav.Link href='/lorem'>Lorem</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Dashboard