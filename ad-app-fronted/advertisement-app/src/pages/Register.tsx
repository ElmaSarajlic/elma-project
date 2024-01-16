import React from 'react';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/register/Register';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import '../App.css'



const RegisterPage: React.FC = () => {

  return (
    <div>
      <NavBar />
      <Container maxWidth="sm" style={{ marginTop: '120px' }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <RegisterForm />
        </Box>
      </Container>
    </div>
  );
};

export default RegisterPage;
