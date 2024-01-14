import React from 'react';
import NavBar from '../components/NavBar';
import CategoryList from '../components/CategoryList'; 
import { categoryList } from '../constants'
import Container from '@mui/material/Container';



const CategoryPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container maxWidth="lg" style={{ marginTop: '100px' }}>
        <CategoryList categories={categoryList} />
      </Container>
    </div>
  );
};

export default CategoryPage;

