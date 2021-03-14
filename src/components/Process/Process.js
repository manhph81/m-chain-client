import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Pro from './Process/Pro';
import useStyles from './styles';

const Process = ({ productId }) => {
  const process = useSelector((state) => state.process);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  
  
  return (
    !process.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {process?.map((pro) => (
             (productId === pro.productId && user?.result?.acType=== pro.processType) ? 
              <Grid key={pro._id} item xs={12} sm={6} md={6}>
                <Pro pro={pro} productId={productId} /> 
              </Grid>
            : null

        ))}
      </Grid>
    )
  );
};

export default Process;
