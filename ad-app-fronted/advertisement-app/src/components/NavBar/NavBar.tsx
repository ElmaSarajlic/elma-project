import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar } from '@mui/material'; 
const AppNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ width: '100%', maxWidth: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">AdMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/AdForm">Add ad</Nav.Link>
            <Nav.Link href="/Categories" >Categories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </AppBar>
  );
};

export default AppNavbar;
