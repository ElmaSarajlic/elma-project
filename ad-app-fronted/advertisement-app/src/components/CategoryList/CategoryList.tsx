import React from 'react';
import useCategories from '../../hooks/useCategories'; // Custom hook to fetch categories
import CategoryCard from '../CategoryCard/CategoryCard'; // Component to display each category
import { Grid } from '@mui/material'; // Material-UI grid for layout

const CategoryList = () => {
  const { data: categories, isLoading, error } = useCategories();

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to render data!</h4>
          <p>{error.message}</p>
          <hr />
          <p className="mb-0">Something went wrong, please try again.</p>
        </div>
      ) : categories && (
        <Grid container spacing={2}>
          {categories.map(category => (
            <Grid item xs={12} sm={6} md={4} key={category.id}>
              <CategoryCard 
                id={category.id} 
                title={category.title} 
                subcategories={category.subcategories} 
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CategoryList;
