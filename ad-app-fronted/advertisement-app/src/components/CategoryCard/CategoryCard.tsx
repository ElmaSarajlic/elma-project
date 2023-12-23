import React, { useState } from 'react';

interface SubCategory {
  name: string;
}

interface CategoryCardProps {
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
          {subCategories.map((subCategory, index) => (
            <li key={index} className="subcategory-item">
              {subCategory.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryCard;
