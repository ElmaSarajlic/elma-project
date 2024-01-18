import React, { useState } from 'react';
import { Subcategory } from '../../utils/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import {  useNavigate } from 'react-router-dom';




interface CategoryCardProps {
  id: string;
  name: string;
  subcategories: Subcategory[];
}
 
const CategoryCard: React.FC<CategoryCardProps> = ({ name, subcategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubCategoryClick = (subcategory: Subcategory) => {
    console.log("Subcategory clicked:", subcategory.name);
    // Navigate to the AdsBySubcategory page with the selected subcategory
    navigate(`/subcategory/${subcategory.id}`); // Replace with your desired URL
  };

  return (
    <Card sx={{ 
      marginBottom: '1rem', 
      boxShadow: 2,  
      transition: '0.3s', 
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
      },
      overflow: 'visible',
      borderRadius: '10px', // rounded corners
    }}>
      <CardContent sx={{
        padding: '16px', 
        '&:last-child': { paddingBottom: '16px' },
      }}>
        <Typography 
          sx={{ 
            fontWeight: 'bold', 
            color:'#7c4e79',
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '1.25rem', 
            marginBottom: '0.5rem',
          }}
          variant="h5"
        >
          <IconButton 
            onClick={() => setIsOpen(!isOpen)} 
            size="small" 
            sx={{ marginRight: '0.5rem', color: isOpen ? '#7c4e79' : 'inherit' }} // Change color when open
          >
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {name}
        </Typography>
        {isOpen && (
          <List sx={{ paddingLeft: '1.5rem', listStyle: 'none', transition: 'max-height 0.3s ease-in-out', maxHeight: isOpen ? '500px' : '0', overflow: 'hidden' }}>
            {subcategories.map((subcategory) => (
              <ListItem 
                key={subcategory.id} 
                disablePadding
                sx={{ borderBottom: 1, borderColor: 'divider', '&:hover': { backgroundColor: 'action.hover' } }} // hover effect for list items
              >
                <ListItemButton onClick={() => handleSubCategoryClick(subcategory)}>
                  <Typography sx={{ fontSize: '1rem', color:'black' }}>
                    {subcategory.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
