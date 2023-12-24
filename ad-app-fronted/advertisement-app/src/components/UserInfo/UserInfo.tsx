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
        src="https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" 
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
