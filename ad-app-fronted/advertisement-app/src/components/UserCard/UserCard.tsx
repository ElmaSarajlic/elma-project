import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import { User } from '../../utils/types';

type Props = {
  user: User;
};

const UserCard = ({ user }: Props) => {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar src={user.avatarUrl} alt={user.username} />} // Fixed 'Avatar' to 'user.username'
        title={user.username} // Changed 'username' to 'title' to display the user's name
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

export default UserCard;
