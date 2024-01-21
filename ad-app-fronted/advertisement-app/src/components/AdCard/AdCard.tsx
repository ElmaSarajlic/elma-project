import React from 'react';
import { Ad } from "../../utils/types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  ad: Ad;
};

const AdCard = ({ ad }: Props) => {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={ad.imgUrl}
        alt={ad.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ad.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ad.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ad.contact}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ad.subcategory}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdCard;