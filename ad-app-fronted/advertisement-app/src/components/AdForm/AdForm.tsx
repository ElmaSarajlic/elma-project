import React, { useState } from 'react';
import { categoryList } from '../../constants'; // Adjust the import path as necessary
import { Category, SubCategory } from '../../utils/types'; // Adjust this import path as necessary
import { Container, Card, CardContent, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string | undefined; value: unknown }>) => {
    const name = e.target.name as keyof AdFormData;
    const value = e.target.value as string;
    setFormData({ ...formData, [name]: value });

    if (name === 'category') {
      const selectedCategory = categoryList.find(category => category.title === value);
      setSubCategories(selectedCategory?.subCategories || []);
      setFormData(prevFormData => ({ ...prevFormData, subCategory: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Replace with your form submission logic
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Image URL"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                label="Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {categoryList.map((category: Category) => (
                  <MenuItem key={category.id} value={category.title}>{category.title}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {subCategories.length > 0 && (
              <FormControl fullWidth margin="normal">
                <InputLabel>Subcategory</InputLabel>
                <Select
                  name="subCategory"
                  value={formData.subCategory}
                  onChange={handleInputChange}
                  label="Subcategory"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {subCategories.map((subCategory: SubCategory) => (
                    <MenuItem key={subCategory.id} value={subCategory.title}>{subCategory.title}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ marginTop: '1rem' }}
            >
              Add Ad
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewAdForm;
