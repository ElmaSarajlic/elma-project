import React from 'react';
import { Category } from '../../utils/types';
import { categoryList } from '../../constants';

// Define a type for the component's props
type CategoryListProps = {
  category: Category[];
};

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
  return (
    <div>
      <h3>Categories</h3>
      <ul>
        {category.map((categoryItem) => (
          <li key={categoryItem.id}>{categoryItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
