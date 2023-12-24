import React from 'react';
import { User } from '../../utils/types';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

type Props = {
  user: User;
};

const UserInfo = ({ user }: Props) => {
  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'primary', textAlign: 'center', padding: '20px' }}>
      {/* Avatar for user picture */}
      <Avatar
        sx={{ width: 80, height: 80, margin: '0 auto' }}
        alt={user.username}
        src="/path/to/user-image.jpg" // Replace with user's image path
      />
      <Typography variant="h5" sx={{ marginTop: '20px' }}>
        {user.username}
      </Typography>
      <Typography variant="body2"> 
        {user.email} 
      </Typography>
      <Button size="medium" variant="outlined" sx={{ marginTop: '20px' }}>
        Edit personal information
      </Button>
    </Container>
  );
};

export default UserInfo;
