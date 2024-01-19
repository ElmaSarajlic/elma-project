// EditUserInfoPage.js
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import ChangeUserInfoCard from '../components/ChangeUserInfoCard';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useUpdateUser from '../hooks/useUpdateUser';
import { RootState } from '../store';
import { User } from '../utils/types';
import '../App.css';

const EditUserInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.auth.userId);
  const { mutate: updateUser, isError, error } = useUpdateUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch the user information here and set it to state
    // For example:
    // setUser(fetchedUser);

    // TODO: Replace with real user fetching logic
  }, [userId]);

  const onSave = (editedUser: User) => {
    if (userId && editedUser) {
      updateUser({ id: userId, user: editedUser }, {
        onSuccess: () => {
          console.log('Changes saved');
          navigate('/UserInfo'); // Navigate to the user info page or wherever appropriate
        },
        onError: (updateError) => {
          console.error('Error updating user:', updateError);
        },
      });
    }
  };

  const onCancel = () => {
    navigate('/UserInfo'); // Navigate to the user info page or wherever appropriate
  };

  if (isError) {
    console.error('Update error:', error);
    // Here you can return an error component or a message to the user
  }

  if (!user) {
    // Show loading or fetch the user
    return <div>Loading user information...</div>;
  }

  return (
    <>
      <NavBar />
      <div style={{ marginTop: '20px' }}>
        <ChangeUserInfoCard user={user} onSave={onSave} onCancel={onCancel} />
      </div>
    </>
  );
};

export default EditUserInfoPage;
