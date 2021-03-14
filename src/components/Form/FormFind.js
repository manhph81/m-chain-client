import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { getProduct  } from '../../actions/products';



const FormFind = () => {
  const [productData, setProductData] = useState({ content: '', productSelectedFile:''});
  const dispatch = useDispatch();
  const classes = useStyles();

  const clear = () => {
    setProductData({ content: ' ',productSelectedFile: '' });
  };

  const handleChange=(e)=>{
    setProductData({ ...productData, [e.target.name] : e.target.value.trim() })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(productData.content){
      dispatch(getProduct(productData.content));
    }
    clear()
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        
        <TextField name="content" variant="outlined" label="Token" fullWidth value={productData.content} onChange={handleChange} />
        <Typography variant="h6" >SCAN QR</Typography>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, productSelectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default FormFind;
