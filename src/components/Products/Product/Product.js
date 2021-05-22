import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';

import moment from 'moment';
import useStyles from './styles';
import MenuEdit from '../../Menu/MenuEdit'


const Product = ({ product, setCurrentId, setisShow, isShow, setproId }) => {
  const classes = useStyles();
  // const user = JSON.parse(localStorage.getItem('profile'))


  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={product.productSelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={product.productOwner} />
      <div className={classes.overlay}>
        <Typography variant="h6">{product.productGarden}</Typography>
        <Typography variant="body2">{moment(product.productCreatedAt).fromNow()}</Typography>
      </div>

      <div className={classes.overlay2}>
        <MenuEdit setCurrentId = {setCurrentId} id ={product._id} setisShow={setisShow} setproId={setproId} owner ={product.productOwnerId} product={product}></MenuEdit>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">Composition: {product.productComposition?.map((composition) => `#${composition} `)}</Typography>
      </div>

      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product.productName}</Typography>

      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">Type: {product.productType}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Packaging: {product.productPackaging}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Using: {product.productUsing}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Preservation: {product.productPreservation}</Typography>
        <br/>
          {product.productURL ? (
            <a href={product.productURL} download>
                <img src={product.productURL} alt="img"/>
            </a>) : null}
        <br/>
      </CardContent>

    </Card>
  );
};

export default Product;
