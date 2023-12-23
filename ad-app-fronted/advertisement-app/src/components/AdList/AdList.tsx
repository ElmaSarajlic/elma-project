import React, { useState } from 'react';
import { adList } from '../../constants';
import AdCard from '../AdCard/AdCard';
import Grid from '@mui/material/Grid';

type Props = {};

const AdList = (props: Props) => {
  const [ads, setAds] = useState(adList);

  // Uncomment and use this function for search functionality
  // const search = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const filteredAds = adList.filter(ad => 
  //     ad.title.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setAds(filteredAds);
  // };

  return (
    <Grid container spacing={2}>
      {ads.map((ad, index) => (
        <Grid item xs={12} key={index}>
          <AdCard ad={ad} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AdList;
