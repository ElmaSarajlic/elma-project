import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import { Category } from '../../utils/types';
import { SubCategory } from '../../utils/types';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <CategoryCard id={category.id} title={category.title} subCategories={category.subCategories} />
      ))}
    </div>
  );
};

export default CategoryList;
