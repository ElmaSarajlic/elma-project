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
  const id = useSelector((state: RootState) => state.auth.id);
  const { mutate: updateUser, isError, error } = useUpdateUser();
  const [user, UpdateUser] = useState<User | null>(null);

  useEffect(() => {
    
  }, [id]);

  const onSave = (editedUser: User) => {
    if (id && editedUser) {
      updateUser({ id: id, user: editedUser }, {
        onSuccess: () => {
          console.log('Changes saved');
          navigate('/UserInfo'); 
        },
        onError: (updateError) => {
          console.error('Error updating user:', updateError);
        },
      });
    }
  };

  const onCancel = () => {
    navigate('/UserInfo'); 
  };

  if (isError) {
    console.error('Update error:', error);
  }

  if (!user) {
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
