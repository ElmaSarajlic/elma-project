import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Category } from '../../utils/types';
import { useNavigate } from 'react-router-dom';

const AddSubcategoryForm: React.FC = () => {
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');



  const handleAdd = () => {
    console.log(`Adding Subcategory: ${subcategory} to Category: ${category || newCategory}`);
    setCategory('');
    setNewCategory('');
    setSubcategory('');
  };
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/Home');
    setCategory('');
    setNewCategory('');
    setSubcategory('');
  };

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
          displayEmpty
        >
          {category.map((cat: Category) => (
            <MenuItem key={cat.id} value={cat.title}>{cat.title}</MenuItem>
          ))}
          <MenuItem value="">Add New Category</MenuItem>
        </Select>
      </FormControl>
      {category === '' && (
        <TextField
          label="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          fullWidth
          margin="normal"
        />
      )}
      <TextField
        label="Subcategory"
        value={subcategory}
        onChange={(e) => setSubcategory(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAdd}>
        Add
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
};

export default AddSubcategoryForm;