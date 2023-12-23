import React, { useState } from 'react';

import { SubCategory } from '../../utils/types';

interface CategoryCardProps {
  id: string;
  title: string;
  subCategories: SubCategory[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const cardStyle = {
    width: 'max-width', 
    backgroundColor: '#f8f9fa', 
    borderRadius: '8px', 
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
    marginBottom: '1rem', 
    padding: '1rem',
    cursor: 'pointer', 
  };

  const titleStyle = {
    fontWeight: 'bold',
    color: '#333', 
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.25rem', 
    marginBottom: '0.5rem', 
  };

  const subCategoryListStyle = {
    listStyleType: 'none', 
    paddingLeft: '1.5rem', 
  };

  const subCategoryItemStyle = {
    padding: '0.25rem 0',
    borderBottom: '1px solid #ddd', 
    fontSize: '1rem', 
  };

  return (
    <div style={cardStyle} className="category-card">
      <div style={titleStyle} className="category-title" onClick={() => setIsOpen(!isOpen)}>
        <span style={{ marginRight: '0.5rem' }}>{isOpen ? '▼' : '▶'}</span>
        {title}
      </div>
      {isOpen && (
        <ul style={subCategoryListStyle} className="subcategory-list">
          {subCategories.map((subCategory) => (
            <li key={subCategory.id} style={subCategoryItemStyle} className="subcategory-item">
              {subCategory.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryCard;
