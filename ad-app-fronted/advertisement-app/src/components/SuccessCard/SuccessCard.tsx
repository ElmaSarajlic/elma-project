import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';

const SuccessCard: React.FC = () => {
  return (
    <Card sx={{ minWidth: 275, backgroundColor: green[50] }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <CheckCircleOutlineIcon sx={{ color: green[500], mr: 2 }} />
          <Typography variant="h5" component="div">
            Successfully Added
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SuccessCard;
