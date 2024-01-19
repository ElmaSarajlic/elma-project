import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import useGetUsers from '../../hooks/useGetUsers';
import { User } from '../../utils/types';

type Props = {
    user: User;
  
  };


const UserCard = ({ user }: Props) => {
  return (
      <Card sx={{ marginBottom: 2, width: '100%' }}> 
        <CardHeader
          avatar={<Avatar src={user.imgUrl} alt={user.username} />}
          title={user.username  DeleteButton onDelete={onDelete} } 
          subheader={user.email}
        />
      </Card>
    );
  };

  export default UserCard;

