import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import appAxios from '../../services/AppAxios';
import { Category, Subcategory } from '../../utils/types';
import useCreateAd from '../../hooks/useCreateAd';
import { useNavigate } from 'react-router-dom';

interface AdFormData {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  contact: string;
  category: string;
  subcategory: string;
}

interface FormErrors {
  contact: string;
  category: string;
}

const NewAdForm: React.FC = () => {
  const [formData, setFormData] = useState<AdFormData>({
    id: '',
    title : '',
    imgUrl: '',
    description: '',
    contact: '',
    category: '',
    subcategory: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    contact: '',
    category: ''
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  const { mutate: createAd } = useCreateAd(); // Assuming createAd is provided by useCreateAd


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await appAxios.get('/categories');
        setCategories(response.data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string | undefined; value: unknown }>) => {
    const name = e.target.name as keyof AdFormData;
    const value = e.target.value as string;
    setFormData({ ...formData, [name]: value });

    if (name === 'contact' || name === 'category') {
      setErrors({ ...errors, [name]: '' });
    }

    if (name === 'category') {
      const selectedCategory = categories.find(category => category.name === value);
      setSubcategories(selectedCategory?.subcategories || []);
      setFormData(prevFormData => ({ ...prevFormData, subcategory: '' }));
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
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createAd(formData); 
        navigate('/Home');// Call the createAd function from useCreateAd

        window.location.reload();
        // Optionally: Reset form or show success message
      } catch (error) {
        console.error('Error creating ad:', error);
        // Optionally: Show error message
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Image URL Field */}
            <TextField
              fullWidth
              label="Image URL"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            {/* title Field */}
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
            />
            {/* Description Field */}
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
            {/* Contact Field */}
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
            {/* Category Selection */}
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
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.name}>{category.name}</MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.category}</FormHelperText>
            </FormControl>
            {/* Subcategory Selection */}
            {subcategories.length > 0 && (
              <FormControl fullWidth margin="normal">
                <InputLabel>Subcategory</InputLabel>
                <Select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleInputChange}
                  label="Subcategory"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {subcategories.map((subcategory) => (
                    <MenuItem key={subcategory.id} value={subcategory.name}>{subcategory.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              )}
            {/* Submit Button */}
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
