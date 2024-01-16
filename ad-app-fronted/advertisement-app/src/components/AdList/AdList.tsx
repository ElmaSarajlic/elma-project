import React, { useEffect, useState } from 'react';
import AdCard from '../AdCard/AdCard';
import { Ad } from '../../utils/types';
import { AdService } from '../../services';
import { Grid } from '@mui/material';

type Props = {};

const AdList = (props: Props) => {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    AdService()
      .then((data) => {
        setAds(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Unable to render data!</h4>
          <p>{error}</p>
          <hr />
          <p className="mb-0">Something went wrong, please try again.</p>
        </div>
      ) : (
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
