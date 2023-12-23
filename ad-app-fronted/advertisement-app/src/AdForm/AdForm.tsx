import React, { useState } from 'react';
import { categoryList } from '../constants'; // Adjust the import path as necessary
import { Category, SubCategory } from '../utils/types'; // Adjust this import path as necessary

interface AdFormData {
  imageUrl: string;
  description: string;
  contact: string;
  category: string;
  subCategory: string;
}

const NewAdForm: React.FC = () => {
  const [formData, setFormData] = useState<AdFormData>({
    imageUrl: '',
    description: '',
    contact: '',
    category: '',
    subCategory: ''
  });
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // If a category is selected, find its subcategories
    if (name === 'category') {
      const selectedCategory = categoryList.find(category => category.title === value);
      setSubCategories(selectedCategory?.subCategories || []);
      // Reset subCategory when category changes
      setFormData(prevFormData => ({
        ...prevFormData,
        subCategory: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle the form submission, such as sending the formData to a server
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label htmlFor="imageUpload" className="form-label">Image URL</label>
        <input 
          type="text"
          className="form-control"
          id="imageUpload"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="http://example.com/image.jpg"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descriptionInput" className="form-label">Description</label>
        <textarea 
          className="form-control"
          id="descriptionInput"
          name="description"
          rows={3}
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contactInput" className="form-label">Contact</label>
        <input 
          type="text"
          className="form-control"
          id="contactInput"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          placeholder="Contact Information"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="categorySelect" className="form-label">Category</label>
        <select 
          className="form-select"
          id="categorySelect"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        >
          <option value="">Select a Category</option>
          {categoryList.map((category: Category) => (
            <option key={category.id} value={category.title}>{category.title}</option>
          ))}
        </select>
      </div>
      {subCategories.length > 0 && (
        <div className="mb-3">
          <label htmlFor="subCategorySelect" className="form-label">Subcategory</label>
          <select 
            className="form-select"
            id="subCategorySelect"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleInputChange}
          >
            <option value="">Select a Subcategory</option>
            {subCategories.map((subCategory: SubCategory) => (
              <option key={subCategory.id} value={subCategory.title}>{subCategory.title}</option>
            ))}
          </select>
        </div>
      )}
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">Add Ad</button>
      </div>
    </form>
  );
};

export default NewAdForm;
