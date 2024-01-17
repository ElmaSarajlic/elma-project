import React, { useState } from 'react';
import { categoryList } from '../../constants';
import { Category, Subcategory } from '../../utils/types'; 
import { Container, Card, CardContent, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

interface AdFormData {
  imageUrl: string;
  description: string;
  contact: string;
  category: string;
  subCategory: string;
}

interface FormErrors {
  contact: string;
  category: string;
}

const NewAdForm: React.FC = () => {
  const [formData, setFormData] = useState<AdFormData>({
    imageUrl: '',
    description: '',
    contact: '',
    category: '',
    subCategory: ''
  });
  const [errors, setErrors] = useState<FormErrors>({
    contact: '',
    category: ''
  });
  const [subCategories, setSubCategories] = useState<Subcategory[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string | undefined; value: unknown }>) => {
    const name = e.target.name as keyof AdFormData;
    const value = e.target.value as string;
    setFormData({ ...formData, [name]: value });

    if (name === 'contact' || name === 'category') {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'category') {
      const selectedCategory = categoryList.find(category => category.title === value);
      setSubCategories(selectedCategory?.subcategories || []);
      setFormData(prevFormData => ({ ...prevFormData, subCategory: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = { contact: '', category: '' };
    let isValid = true;

    if (!formData.contact) {
      newErrors.contact = 'Please add contact information';
      isValid = false;
    }
    if (!formData.category) {
      newErrors.category = 'Please choose a category';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData); 
    }
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
              error={Boolean(errors.contact)}
              fullWidth
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              helperText={errors.contact}
            />
            <FormControl fullWidth margin="normal" error={Boolean(errors.category)}>
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
              <FormHelperText>{errors.category}</FormHelperText>
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
                  {subCategories.map((subCategory: Subcategory) => (
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
