import React from 'react';
import { Ad } from "../../utils/types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteButton from '../DeleteBtn';
import useDeleteAd from '../../hooks/useDeleteAd';
import EditButton from '../EditButton';
import { useNavigate } from 'react-router-dom';

type Props = {
  ad: Ad;

};

const AdCard = ({ ad }: Props) => {

  const { mutate: deleteAd } = useDeleteAd();


  const onDelete = () => {
    // Call the delete function with the ad's ID
    deleteAd(ad.id, {
      onSuccess: () => {
        // You may want to refetch the ads list or update the state to remove the deleted ad
        console.log(`Ad with ID ${ad.id} was deleted.`);
        window.location.reload();
        
      },
      onError: (error) => { 
        // Handle the deletion error
        console.error('Error deleting the ad:', error);
      },
    });
  };

  const navigate = useNavigate();


  
  function onEdit(): void {
     navigate ('/edit/:adId')  }

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
        <DeleteButton onDelete={onDelete} /> <EditButton handleClick={onEdit} />

      </CardContent>
    </Card>
  );
};

export default AdCard;