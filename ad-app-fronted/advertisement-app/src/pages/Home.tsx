import React from 'react';
import NavBar from '../components/NavBar'; 
import AdList from '../components/AdList'; 
import Container from '@mui/material/Container';

const HomePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: '100px' }}>
        <AdList />
      </Container>
    </div>
  );
};

export default HomePage;