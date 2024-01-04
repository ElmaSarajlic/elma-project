import React from 'react';
import NavBar from '../components/NavBar';
import AdForm from '../components/AdForm';



const UserInfoPage = () => {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: '20px' }}>
            <AdForm/>          </div>
        </>
    );
};

export default UserInfoPage;
