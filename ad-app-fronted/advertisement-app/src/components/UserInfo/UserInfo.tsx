import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useUser } from '../../hooks';
import { logout } from '../../store/authSlice';

const UserInfo = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Current userId:', userId);
  }, [userId]);

  if (!userId) {
    return null;
  } 

  const { data: user, isLoading, isError, error } = useUser(userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      console.error('Error loading user:', error);
    }
    if (user) {
      console.log('Loaded user data:', user);
    }
  }, [user, isError, error]);

  const handleEditClick = () => {
    navigate('/EditUser');
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!userId) {
    return <div>No user ID found</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message || 'Failed to load user data'}</div>;
  }

  return (
    <Container maxWidth="sm" sx={{ backgroundColor: 'primary', textAlign: 'center', padding: '20px' }}>
      {user && (
        <>
          <Avatar
            sx={{ width: 80, height: 80, margin: '0 auto' }}
            alt={user.username}
            src={user.avatarUrl || 'default-avatar-url.jpg'}
          />
          <Typography variant="h5" sx={{ marginTop: '20px' }}>
            {user.username}
          </Typography>
          <Typography variant="body2">
            {user.email}
          </Typography>
          <Button size="medium" variant="outlined" sx={{ marginTop: '20px' }} onClick={handleEditClick}>
            Edit personal information
          </Button>
          <Button size="medium" variant="outlined" sx={{ marginTop: '20px' }} onClick={handleLogout}>
            Log out
          </Button>
        </>
      )}
    </Container>
  );
};

export default UserInfo;
