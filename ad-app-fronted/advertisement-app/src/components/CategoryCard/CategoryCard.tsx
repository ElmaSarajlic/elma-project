import React, { useState } from 'react';
import { SubCategory } from '../../utils/types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';

interface CategoryCardProps {
  id: string;
  title: string;
  subCategories: SubCategory[];
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subCategories }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card sx={{ marginBottom: '1rem', boxShadow: 2 }}>
      <CardContent>
        <Typography 
          sx={{ 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '1.25rem', 
            marginBottom: '0.5rem' 
          }}
          variant="h5"
        >
          <IconButton onClick={() => setIsOpen(!isOpen)} size="small" sx={{ marginRight: '0.5rem' }}>
            {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
          {title}
        </Typography>
        {isOpen && (
          <List sx={{ paddingLeft: '1.5rem', listStyle: 'none' }}>
            {subCategories.map((subCategory) => (
              <ListItem 
                key={subCategory.id} 
                sx={{ padding: '0.25rem 0', borderBottom: 1, borderColor: 'divider', fontSize: '1rem' }}
              >
                {subCategory.title}
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
