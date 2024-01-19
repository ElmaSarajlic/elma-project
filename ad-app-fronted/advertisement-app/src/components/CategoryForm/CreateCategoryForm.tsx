import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useCreateCategory from '../../hooks/useCreateCategory';
import { Category } from '../../utils/types';

const AddCategoryForm: React.FC = () => {
  const [name, setname] = useState<string>('');
  const navigate = useNavigate();
  const { mutate: createCategory } = useCreateCategory();

  const handleAdd = async () => {
    if (name) {
      try {
      

        await createCategory(category);
        console.log(`Category: ${name} added successfully`);
        navigate('/AddSubcategory'); // Make sure this route is correctly defined in your routing setup
      } catch (error) {
        console.error('Error adding category:', error);
      }
    }
  };

  const handleCancel = () => {
    navigate('/Home'); // Replace with the appropriate route for your application
  };

  return (
    <div>
      <TextField
        label="Category"
        value={name}
        onChange={(e) => setname(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Save Category
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default AddCategoryForm;
