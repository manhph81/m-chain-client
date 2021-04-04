import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';

import Pro from './Process/Pro';
import useStyles from './styles';

const Process = ({ processes }) => {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  return (
    processes?.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {user?.result?.acType === "Manufacturer" ? 
          processes?.Manufacturer?.map((pro) => (
            <Grid key={pro._id} item xs={12} sm={6} md={6}>
              <Pro pro={pro} /> 
            </Grid>
          ))
          : null}
        {user?.result?.acType === "Distributor" ? 
          processes?.Distributor?.map((pro) => (
            <Grid key={pro._id} item xs={12} sm={6} md={6}>
              <Pro pro={pro} /> 
            </Grid>
          ))
          : null}
        {user?.result?.acType === "Retailer" ? 
          processes?.Retailer?.map((pro) => (
            <Grid key={pro._id} item xs={12} sm={6} md={6}>
              <Pro pro={pro} /> 
            </Grid>
          ))
          : null}
      </Grid>
    )
  );
};

export default Process;
