import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, IconButton } from '@mui/material';
import useGetUsers from '../../hooks/useGetUsers';
import { User } from '../../utils/types';
import DeleteBtn from '../DeleteBtn';

type Props = {
    user: User;
  
  };


const UserCard = ({ user }: Props) => {
  return (
      <Card sx={{ marginBottom: 2, width: '100%' }}> 
        <CardHeader
          avatar={<Avatar src={user.imgUrl} alt={user.username} />}
          title={user.username } 
          subheader={user.email}
          action={
            <IconButton onClick={handleDelete} aria-label="delete user">
              <DeleteBtn />
            </IconButton>
          }
          sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
        />
      </Card>
    );
  };

  export default UserCard;

