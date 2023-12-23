import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar } from '@mui/material'; // Import the AppBar component

const AppNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ width: '100%', maxWidth: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">AdMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Add ad</Nav.Link>
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#categories">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login">Log In</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </AppBar>
  );
};

export default AppNavbar;
