import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './styles';
import { getProduct } from '../../../actions/products';
import { getPost } from '../../../actions/posts';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const ProductDetail = ({ transaction }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [process, setProcess] = useState();
  const [isShow, setisShow] = useState(false);
  const [expanded, setExpanded] = React.useState('panel1');
  
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  

  useEffect(() => {
    var productId = transaction?.product
    if(productId){
      dispatch(getProduct(productId))
      setProcess(transaction?.process.metadata)
      setisShow(true)
    }
    if(process?.Supplier){
      dispatch(getPost(process?.Supplier))
    }
  });

  var product = useSelector((state) => state.products);
  var post = useSelector((state) => state.posts);

  if(!isShow){
    return null
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
          <Typography variant="body2" color="textSecondary" component="p">Loại: {product?.productType}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách sử dụng: {product?.productPackaging}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách đóng gói: {product?.productUsing}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Cách bảo quản: {product?.productPreservation}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">Thành phần: {product?.productComposition?.map((composition) => `#${composition} `)}</Typography>
          <br/>
            {product.productURL ? (
              <a href={product.productURL} download>
                  <img src={product.productURL} alt="img"/>
              </a>) : null}
          <br/>
        </CardContent>

        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Supplier</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Name: {process?.Supplier}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Place: {post?.gardenAddress}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Owner: {post?.gardenOwner}</Typography>
              </CardContent> 

            </AccordionDetails>
          </Accordion>
        
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Manufacturer</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                process?.Manufacturer?.map((pro, id) => (
                  <CardContent key={id}>
                    <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">CreatedAt: {pro?.processCreateAt}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Place: {pro?.processPlace}</Typography>
                  </CardContent>
              )) 
              }
            </AccordionDetails>
          </Accordion>

        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Distributor</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {
                process?.Distributor?.map((pro, id) => (
                  <CardContent key={id}>
                    <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">CreatedAt: {pro?.processCreateAt}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">Place: {pro?.processPlace}</Typography>
                  </CardContent> 
              )) 
              }
            </AccordionDetails>
          </Accordion>

        <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <Typography>Retailer</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {process?.Retailer?.map((pro, id) => (
                    <CardContent key={id}>
                      <Typography variant="body2" color="textSecondary" component="p">Name: {pro?.processName}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">Detail: {pro?.processDetail}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">CreatedAt: {pro?.processCreateAt}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p">CreatedAt: {pro?.processPlace}</Typography>
                    </CardContent> 
                )) }
            </AccordionDetails>
          </Accordion>
      
      </Card>
      
    );
  }
};

export default ProductDetail;
