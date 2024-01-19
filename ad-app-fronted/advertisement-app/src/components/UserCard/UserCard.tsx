import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import useGetUsers from '../../hooks/useGetUsers';
import { User } from '../../utils/types';

type Props = {
    user: User;
  
  };


const UserCard = ({ user }: Props) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={user.imgUrl} alt={user.username} />} 
        title={user.username} 
        subheader={user.email}
      />
      <CardContent>
        <Typography variant="body2">
          Additional user information can go here if needed.
        </Typography>
      </CardContent>
    </Card>
  );
};

const UserList: React.FC = () => {
  const { data: users, error } = useGetUsers();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList;
