import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AppNavbar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">adme</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Add ad</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">category1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">category2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">category3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#login">Prijavi se</Nav.Link>
          <Nav.Link href="#register">Registracija</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
