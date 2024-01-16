import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppBar } from '@mui/material';

const AppNavbar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ width: '100%', position: 'absolute', top: 0, left: 0, bgcolor: "#7c4e79" }}>
      <Navbar expand="lg" variant="dark" style={{ backgroundColor: 'yourColorHere' }}> {/* Replace yourColorHere with your desired color */}
        <Navbar.Brand href="/home" style={{ color: 'white' }}>AdMe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Home" style={{ color: 'white' }}>Home</Nav.Link>
            <Nav.Link href="/AdForm" style={{ color: 'white' }}>Add ad</Nav.Link>
            <Nav.Link href="/Categories" style={{ color: 'white' }}>Categories</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" style={{ color: 'white' }}>Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </AppBar>
  );
};

export default AppNavbar;
