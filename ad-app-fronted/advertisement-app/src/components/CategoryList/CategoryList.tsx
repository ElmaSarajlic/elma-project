import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

interface Category {
  title: string;
  subCategories: { name: string }[];
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryCard key={index} title={category.title} subCategories={category.subCategories} />
      ))}
    </div>
  );
};

export default CategoryList;
