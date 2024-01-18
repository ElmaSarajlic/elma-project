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



interface CategoryCardProps {
  id: string;
  title: string;
  subcategories: Subcategory[];
}
 
const CategoryCard: React.FC<CategoryCardProps> = ({ title, subcategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubCategoryClick = (subcategory: Subcategory) => {
    console.log("Subcategory clicked:", subcategory.title);
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
            sx={{ marginRight: '0.5rem', color: isOpen ? 'secondary.main' : 'inherit' }} // Change color when open
          >
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {title}
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
                  <Typography sx={{ fontSize: '1rem' }}>
                    {subcategory.title}
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
