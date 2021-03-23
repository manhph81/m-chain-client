import React, {useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { getProcess } from '../../../actions/process';


const ProductDetail = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const process = useSelector((state) => state.process);
  var supplier = []
  var manu = []
  var dis = []
  var retailer = []
  


  process?.map((pro) => (
    pro.productId===product?._id && pro.processType === "admin" ? supplier.push(pro) : null,
    pro.productId===product?._id && pro.processType === "Supplier" ? supplier.push(pro) : null,
    pro.productId===product?._id && pro.processType === "Manufacturer" ? manu.push(pro) : null,
    pro.productId===product?._id && pro.processType === "Distributor" ? dis.push(pro) : null,
    pro.productId===product?._id && pro.processType === "Retailer" ? retailer.push(pro) : null
  ))

  useEffect(() => {
    dispatch(getProcess())
  }, []);


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
  
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{product?.productName}</Typography>
        
        <CardContent>
          <Typography className={classes.details} gutterBottom variant="h5" component="h2">Info product</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Loại: {product?.productType}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách sử dụng: {product?.productPackaging}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách đóng gói: {product?.productUsing}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách bảo quản: {product?.productPreservation}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">Thành phần: {product?.productComposition?.map((composition) => `#${composition} `)}</Typography>
        </CardContent>

        <Typography className={classes.details} gutterBottom variant="h5" component="h2">Info Supplier</Typography>
        {supplier?.map((pro) => (
          <CardContent key={pro?._id}>
            <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">processCreatedAt: {pro?.processCreatedAt}</Typography>
          </CardContent> 
        )) }

        <Typography className={classes.details} gutterBottom variant="h5" component="h2">Info Manufacturer</Typography>
        {manu?.map((pro) => (
           <CardContent key={pro?._id}>
            <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">processCreatedAt: {pro?.processCreatedAt}</Typography>
          </CardContent> 
        )) }

        <Typography className={classes.details} gutterBottom variant="h5" component="h2">Info Distributor</Typography>
        {dis?.map((pro) => (
           <CardContent key={pro?._id}>
            <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">processCreatedAt: {pro?.processCreatedAt}</Typography>
          </CardContent> 
        )) }

        <Typography className={classes.details} gutterBottom variant="h5" component="h2">Info Retailer</Typography>
        {retailer?.map((pro) => (
           <CardContent key={pro?._id}>
            <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">processCreatedAt: {pro?.processCreatedAt}</Typography>
          </CardContent>  
        )) }

      </Card>
    );
  }
};

export default ProductDetail;
