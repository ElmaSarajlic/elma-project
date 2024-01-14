import React from 'react';
import NavBar from '../components/NavBar';
import LoginForm from '../components/login/Login'; 
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const LoginPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="sm" style={{ marginTop: '120px' }}>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
          <LoginForm />
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
