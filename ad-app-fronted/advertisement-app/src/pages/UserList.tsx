import React from 'react';
import { User } from '../utils/types';
import UserCardList from '../components/UserCardList';
import AppNavbar from '../components/NavBar';

interface HomePageProps {
  users: User[]; // An array of User objects
}

const HomePage: React.FC<HomePageProps> = ({ users }) => {
  return (
    <div>
      <AppNavbar />
      <div style={{ padding: '20px' }}>
        <h1>Welcome to the User List Page</h1>
        <UserCardList users={users} />
      </div>
    </div>
  );
};

export default HomePage;
