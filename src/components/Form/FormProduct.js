import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createProduct, updateProducts } from '../../actions/products';
import { getPosts } from '../../actions/posts'



const FormProduct = ({ currentId, setCurrentId }) => {
  const [productData, setProductData] = useState({ productName: '', productGarden: '', productPackaging: '',productUsing:'', productPreservation:'',productComposition: '', productType :'',productSelectedFile: '', productPlace:'', productOwnerId :'', productOwner :'' });
  const product = useSelector((state) => (currentId ? state.products.find((message) => message._id === currentId) : null));
  const gardens = useSelector((state)=>  state?.posts)
  const dispatch = useDispatch();
  
  const classes = useStyles();


  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    dispatch(getPosts());
    if (product) {
      setProductData(product);
    }
  },[product]);

  const clear = () => {
    setCurrentId(0);
    setProductData({ productName: ' ', productGarden: ' ', productPackaging: ' ',productUsing:'', productPreservation:'',productComposition: '', productType :'',productSelectedFile: '', productURL:''  });
  };

  const handleChange=(e)=>{
    setProductData({ ...productData, [e.target.name] : e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      await dispatch(createProduct({...productData,productPlace:  user?.result?.acType, productOwner : user?.result?.acName, productOwnerId : user?.result?._id}));
      window.location.reload()
      clear();
    } else {
      await dispatch(updateProducts(currentId, {...productData,productPlace:  user?.result?.acType, productOwner : user?.result?.acName, productOwnerId : user?.result?._id}));
      clear();
    }
    
  };


  if(!user?.result?.acName){
    return(
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In!
        </Typography>
      </Paper>
    )
  } else {
    return (
      <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? `Editing "${productData?.productName}"` : 'Creating a Product'}</Typography>
          <TextField name="productName" variant="outlined" label="Product Name" fullWidth value={productData?.productName} onChange={handleChange} />
          <TextField 
              name="productGarden" 
              label="Supplier"
              onChange={handleChange}
              variant = "outlined"
              fullWidth
              value ={productData?.productGarden}
              InputProps={{
                endAdornment: (
                  <datalist id="productGarden">{
                    gardens?.map(garden => (
                      <option key={garden?._id} value={garden?.gardenName}>
                      </option>
                    )) 
                    }           
                  </datalist>
                  ),
                  inputProps: { 
                        list: "productGarden"
                  }
                }}
          >
          </TextField>

          <TextField name="productType" variant="outlined" label="Product Type" fullWidth value={productData?.productType} onChange={handleChange} />
          <TextField name="productPackaging" variant="outlined" label="Packaging" fullWidth multiline rows={4} value={productData?.productPackaging} onChange={handleChange} />
          <TextField name="productUsing" variant="outlined" label="Using" fullWidth multiline rows={4} value={productData?.productUsing} onChange={handleChange} />
          <TextField name="productPreservation" variant="outlined" label="Preservation" fullWidth multiline rows={4} value={productData?.productPreservation} onChange={handleChange} />
          <TextField name="productComposition" variant="outlined" label="Composition" fullWidth value={productData?.productComposition} onChange={(e) => setProductData({ ...productData, productComposition: e.target.value.split(',') })} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, productSelectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
      </Paper>
    );
  }
};

export default FormProduct;
