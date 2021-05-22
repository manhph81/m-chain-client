import React,  { useState } from 'react';
import { Button, Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ setCurrentId, setisShow, setproId }) => {
  var products = useSelector((state) => state.products);
  const [isOwner, setIsOwner] = useState(true)
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))
  
  var productLoad
  switch (user?.result?.acType) {
    case "Supplier":
      productLoad = "Supplier"
      break;
    case "Manufacturer":
      productLoad = "Supplier"
      break;
    case "Distributor":
      productLoad = "Manufacturer"
      break;
  
    default:
      productLoad = "Distributor"
      break;
  }


  const switchMode =()=>{
    setIsOwner((prevIsSignup) => !prevIsSignup)
  }

  
  return (
    <Grid container spacing={2}>
      {
        user?.result?.acType ==="Manufacturer" ? null : 
        <Button onClick={switchMode} color="secondary" type="submit" fullWidth variant="contained" className={classes.submit}>
          { isOwner ? 'Go to buy Products': "See My Products"}
        </Button>
      }
        

      {
        isOwner ? (
            <>
                  {!products.length ? <CircularProgress /> : (
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                      {products.map((product) => (
                        user?.result?._id === product.productOwnerId ?
                          <Grid key={product._id} item xs={12} sm={6} md={6}>
                            <Product product={product} setCurrentId={setCurrentId} setisShow={setisShow} setproId={setproId}/>
                          </Grid>
                        : null
                      ))}
                    </Grid>
                  )}
            </>
        ) : 
        (
          <>
              {!products.length ? <CircularProgress /> : (
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                 
                  {products.map((product) => (
                    user?.result?._id !== product.productOwnerId && (product.productPlace === productLoad || product.productPlace ===  user?.result?.acType) ?
                      <Grid key={product._id} item xs={12} sm={6} md={6}>
                        <Product product={product} setCurrentId={setCurrentId} setisShow={setisShow} setproId={setproId}/>
                      </Grid>
                    : null
                  ))}
                </Grid>
              )}
          </>
        )
      }
  </Grid>

  );
 

};

export default Products;
