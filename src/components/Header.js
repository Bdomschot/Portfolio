import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';



function Header(){
    return(
    <Container className="p-o" >
          <Navbar collapseOnSelect className="border-bottom" bg="transparent" expand="lg" >
            <Navbar.Brand className = "text-muted">Benjamin Domschot</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto text-light">
                    <NavDropdown className= "bg-light text-muted" title="More" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/">Home</NavDropdown.Item>
                      <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                      <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
                      <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                
            </Navbar>
    </Container>
    )
}

export default Header;