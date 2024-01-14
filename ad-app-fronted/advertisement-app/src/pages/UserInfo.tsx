import React from 'react';
import NavBar from '../components/NavBar';
import UserInfo from '../components/UserInfo';
import Container from '@mui/material/Container';
import { user } from '../constants';



const UserProfilePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="md" style={{ marginTop: '100px' }}>
        <UserInfo user={user} />
      </Container>
    </div>
  );
};

export default UserProfilePage;
