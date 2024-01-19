import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, IconButton } from '@mui/material';
import useGetUsers from '../../hooks/useGetUsers';
import { User } from '../../utils/types';
import DeleteBtn from '../DeleteBtn';
import useDeleteUser from '../../hooks/useDeleteUser';

type Props = {
    user: User;
  
  };


const UserCard = ({ user }: Props) => {
    const { mutate: deleteAd } = useDeleteUser();


  const onDelete = () => {
    deleteAd(user.id, {
      onSuccess: () => {
        console.log(`User with ID ${user.id} was deleted.`);
        window.location.reload();
        
      },
      onError: (error) => { 
        console.error('Error deleting the ad:', error);
      },
    });
  };

  return (
      <Card sx={{ marginBottom: 2, width: '100%' }}> 
        <CardHeader
          avatar={<Avatar src={user.imgUrl} alt={user.username} />}
          title={user.username } 
          subheader={user.email}
          action={
              <DeleteBtn onDelete={onDelete} />
          }
          sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
        />
      </Card>
    );
  };

  export default UserCard;

