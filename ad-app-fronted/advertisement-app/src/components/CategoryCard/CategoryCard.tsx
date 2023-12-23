import React, { useState } from 'react';

import { SubCategory } from '../../utils/types';

interface CategoryCardProps {
  id: string; 
  title: string;
  subCategories: SubCategory[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="category-card">
      <div className="category-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{isOpen ? '▼' : '▶'}</span> {title}
      </div>
      {isOpen && (
        <ul className="subcategory-list">
          {subCategories.map((subCategory) => (
            <li key={subCategory.id} className="subcategory-item">
              {subCategory.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryCard;
