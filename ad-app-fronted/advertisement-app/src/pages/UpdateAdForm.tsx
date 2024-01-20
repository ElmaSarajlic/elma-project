import React, { useState, useEffect } from 'react';
import {
  Container, Card, CardContent, TextField, Button,
  FormControl, InputLabel, Select, MenuItem, FormHelperText,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Category, Subcategory, Ad } from '../utils/types';
import useUpdateAd from '../hooks/useUpdateAd';
import appAxios from '../services/AppAxios';

interface AdFormData extends Omit<Ad, 'subcategory'> {
  category: string;
  subcategory: string;
}

interface FormErrors {
  title?: string;
  imgUrl?: string;
  contact?: string;
  category?: string;
  subcategory?: string;
}

const NewAdForm: React.FC = () => {
  const navigate = useNavigate();
  const { adId } = useParams<{ id: string }>();
  const { mutate: updateAd } = useUpdateAd();
  const [formData, setFormData] = useState<AdFormData>({
    id: '',
    title: '',
    imgUrl: '',
    description: '',
    contact: '',
    category: '',
    subcategory: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await appAxios.get<Category[]>('/categories');
        setCategories(categoriesResponse.data);

        if (adId) {
          const adResponse = await appAxios.get<Ad>(`/ads/${adId}`);
          const currentAd = adResponse.data;
          const categoryOfAd = categoriesResponse.data.find(
            category => category.subcategories.some(subcat => subcat.id === currentAd.subcategory)
          );

          setFormData({
            id: currentAd.id,
            title: currentAd.title,
            imgUrl: currentAd.imgUrl,
            description: currentAd.description,
            contact: currentAd.contact,
            category: categoryOfAd ? categoryOfAd.id : '',
            subcategory: currentAd.subcategory,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [adId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>
  ) => {
    const name = e.target.name as keyof AdFormData;
    const value = e.target.value as string;
    setFormData({ ...formData, [name]: value });

    if (name === 'category') {
      const selectedCategory = categories.find(c => c.id === value);
      setSubcategories(selectedCategory?.subcategories || []);
      setFormData(prevFormData => ({ ...prevFormData, subcategory: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.title) {
      newErrors.title = 'Title is required';
      isValid = false;
    }
    if (!formData.imgUrl) {
      newErrors.imgUrl = 'Image URL is required';
      isValid = false;
    }
    if (!formData.contact) {
      newErrors.contact = 'Contact information is required';
      isValid = false;
    }
    if (!formData.category) {
      newErrors.category = 'Category is required';
      isValid = false;
    }
    if (!formData.subcategory) {
      newErrors.subcategory = 'Subcategory is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    updateAd(formData, {
      onSuccess: () => navigate('/'),
      onError: (error) => console.error('Error updating ad:', error),
    });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Card variant="outlined">
        <CardContent>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Image URL"
              name="imgUrl"
              value={formData.imgUrl}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              error={!!errors.imgUrl}
              helperText={errors.imgUrl}
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
              error={!!errors.contact}
              fullWidth
              label="Contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              helperText={errors.contact}
            />
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              margin="normal"
              variant="outlined"
              error={!!errors.title}
              helperText={errors.title}
            />
            <FormControl fullWidth margin="normal" error={!!errors.category}>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                label="Category"
              >
                {categories.map(category => (
                  <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.category}</FormHelperText>
            </FormControl>
            <FormControl fullWidth margin="normal" error={!!errors.subcategory}>
              <InputLabel id="subcategory-label">Subcategory</InputLabel>
              <Select
                labelId="subcategory-label"
                name="subcategory"
                value={formData.subcategory}
                onChange={handleInputChange}
                label="Subcategory"
              >
                {subcategories.map(subcategory => (
                  <MenuItem key={subcategory.id} value={subcategory.id}>{subcategory.name}</MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.subcategory}</FormHelperText>
            </FormControl>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <Button variant="outlined" color="secondary" onClick={() => navigate('/')}>
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NewAdForm;
