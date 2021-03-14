import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import useStyles from './styles';

const Pro = ({ pro, productId }) => {
  const classes = useStyles();

  const editPro = () =>{
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={pro.processSelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={pro.proOwner} />
      <div className={classes.overlay}>
        <Typography variant="h6">{pro.processOwner}</Typography>
        <Typography variant="body2">{moment(pro.processCreatedAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
       <Button style={{ color: 'white' }} size="small" onClick={editPro()}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{pro.processName}</Typography>

      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">Loại: {pro.processType}</Typography>
      </CardContent>

    </Card>
  );
};

export default Pro;
