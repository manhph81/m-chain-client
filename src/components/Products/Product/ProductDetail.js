import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core/';
import moment from 'moment';

import useStyles from './styles';


const ProductDetail = ({ product }) => {
  const classes = useStyles();

  if(product?.length<=0){
    return <></>
  }else{
    return (
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={product?.productSelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product?.productOwner} />
        <div className={classes.overlay}>
          <Typography variant="h6">{product?.productGarden}</Typography>
          <Typography variant="body2">{moment(product?.productCreatedAt).fromNow()}</Typography>
        </div>
  
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">Thành phần: {product?.productComposition?.map((composition) => `#${composition} `)}</Typography>
        </div>
  
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product?.productName}</Typography>
  
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Loại: {product?.productType}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách sử dụng: {product?.productPackaging}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách đóng gói: {product?.productUsing}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách bảo quản: {product?.productPreservation}</Typography>
        </CardContent>
  
        <CardActions className={classes.cardActions}>
        </CardActions>
      </Card>
    );
  }
};

export default ProductDetail;
