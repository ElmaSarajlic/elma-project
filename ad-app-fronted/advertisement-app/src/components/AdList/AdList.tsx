import React, { useEffect, useState } from 'react';
import AdCard from '../AdCard/AdCard';
import { Grid } from '@mui/material';
import { useAds } from '../../hooks';
import useGetAdsBySubcategory from '../../hooks/usegetAds';
import { string } from 'yup';
import { useParams } from 'react-router-dom';

type Props = {};

const AdList = () => {
  const { subcategoryName } = useParams<{ subcategoryName?: string }>();
  const { data: ads, isLoading, error } = subcategoryName 
    ? useGetAdsBySubcategory(subcategoryName) 
    : useAds();
  
 
  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to render data!</h4>
          <p>{error.message}</p>
          <hr />
          <p className="mb-0">Something went wrong, please try again.</p>
        </div>
      ) : ads && (
        <Grid container spacing={2}>
          {ads.map((ad, index) => (
            <Grid item xs={12} key={index}>
              <AdCard ad={ad} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default AdList;
