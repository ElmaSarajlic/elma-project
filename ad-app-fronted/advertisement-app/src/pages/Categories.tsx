import React from 'react';
import NavBar from '../components/NavBar';
import { categoryList } from '../constants';
import CategoryList from '../components/CategoryList';



const UserInfoPage = () => {
    return (
        <>
            <NavBar />
            <div style={{ marginTop: '20px' }}>
            <CategoryList categories={categoryList} />          </div>
        </>
    );
};

export default UserInfoPage;
