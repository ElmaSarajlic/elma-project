import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import { Category } from '../../utils/types';
import Grid from '@mui/material/Grid';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <Grid container spacing={2}>
      {categories.map((category) => (
        <Grid item xs={12} key={category.id}>
          <CategoryCard id={category.id} title={category.title} subCategories={category.subcategories} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CategoryList;