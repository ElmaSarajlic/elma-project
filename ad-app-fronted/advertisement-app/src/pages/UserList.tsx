import React from 'react';
import { User } from '../utils/types';
import UserCardList from '../components/UserCardList';
import NavBar from '../components/NavBar';
import { Container } from 'react-bootstrap';
import HomePage from './Home';


const UserListPage: React.FC = () => {
    return (
        <><NavBar /><Container style={{ marginTop: '100px' }}>
            <UserCardList users={[]} />
        </Container></>
    );
  };

export default UserListPage;
