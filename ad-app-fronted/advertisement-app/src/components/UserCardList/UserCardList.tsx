import React from 'react';
import { Grid } from '@mui/material';
import { User } from '../../utils/types';
import UserCard from '../UserCard';

interface UserCardListProps {
  users: User[]; // An array of User objects
}

const UserCardList: React.FC<UserCardListProps> = ({ users }) => {
  return (
    <Grid container spacing={2}>
      {users.map((user, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <UserCard user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default UserCardList;
