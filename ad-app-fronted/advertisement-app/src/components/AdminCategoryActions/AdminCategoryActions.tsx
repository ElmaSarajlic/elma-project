import React, { useState } from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';

interface AdminCategoryActionsProps {
  onCategoryAdd: (categoryName: string, subcategoryName?: string) => void;
}

const AdminCategoryActions: React.FC<AdminCategoryActionsProps> = ({ onCategoryAdd }) => {
  const [categoryName, setCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate and submit the category or subcategory names
    if (categoryName.trim() !== '') {
      onCategoryAdd(categoryName, subcategoryName.trim() || undefined);
      // Clear the form
      setCategoryName('');
      setSubcategoryName('');
    }
  };

  return (
    <Container>
      <h2>Add Category or Subcategory</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Category Name"
              fullWidth
              variant="outlined"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Subcategory Name (optional)"
              fullWidth
              variant="outlined"
              value={subcategoryName}
              onChange={(e) => setSubcategoryName(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '1rem' }}>
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AdminCategoryActions;
