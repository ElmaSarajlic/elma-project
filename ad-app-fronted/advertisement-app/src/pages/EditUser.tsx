import React, { useState } from 'react';
import NavBar from '../components/NavBar'; 
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import '../App.css'
import ChangeUserInfoCard from '../components/ChangeUserInfoCard';
import { useNavigate } from 'react-router-dom';

const EditUserPage: React.FC = () => {
  const userId = useSelector((state: RootState) => state.auth.userId);
  const navigate = useNavigate(); 


  const [user, setUser] = useState({
    id: userId,
    imgUrl :'',
    username: ''
  });


  return (
    <div>
      <NavBar />
      <Container style={{ marginTop: '100px' }}>
        <ChangeUserInfoCard
          open={false}
          handleClose={() => {
            navigate('/UserInfo');
          }}
          user={user}
          setUser={setUser} 
        />
      </Container>
    </div>
  );
};

export default EditUserPage;
