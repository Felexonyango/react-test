import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Dashboard=() =>{
  return (
    <>
  
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav >
            <Nav.Link>
              <Link to='/todo'>Todo</Link>
              </Nav.Link>
            <Nav.Link >
              <Link to="/lorem">
                Lorem
              </Link>
              </Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Dashboard