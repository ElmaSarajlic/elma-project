import React from 'react';
import { Grid } from '@mui/material';
import UserCard from '../UserCard/UserCard'; 
import useGetUsers from '../../hooks/useGetUsers';

type Props = {};


const UserList: React.FC = () => {
    const { data: users, error } = useGetUsers();
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!users) {
      return <div>Loading...</div>;
    }
  
    return (
      <Grid container spacing={2}>
        {users.length > 0 ? (
          users.map((user, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <UserCard user={user} />
            </Grid>
          ))
        ) : (
          <div>No users found.</div>
        )}
      </Grid>
    );
  };
  
  export default UserList;
  
