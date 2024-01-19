import React from 'react';
import UserCardList from '../components/UserCardList';
import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';


const UserListPage: React.FC = () => {
    return (
        <><NavBar /><Container style={{ marginTop: '100px' }}>
            <UserCardList users={[]} />
        </Container></>
    );
  };

export default UserListPage;
