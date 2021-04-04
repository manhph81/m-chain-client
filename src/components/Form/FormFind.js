import React, { useState, useRef } from 'react';
import { TextField, Button, Card, Paper, CardContent, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import QrReader from 'react-qr-reader';

import useStyles from './styles';
import { getTransaction  } from '../../actions/transaction';

const FormFind = () => {
  const [productData, setProductData] = useState({ content: ''});
  const [isShow, setIsShow] =  useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const qrRef = useRef(null);

  const clear = () => {
    setProductData({ content: ' ' });
  };

  const handleChange=(e)=>{
    setProductData({ ...productData, [e.target.name] : e.target.value.trim() })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(productData.content){
      await dispatch(getTransaction(productData.content));
    }
    clear()
  };
  const showScanQR = () =>{
    isShow === 0 ? setIsShow(1) : setIsShow(0)
  }

  const showScanQRWebcam = () =>{
    isShow === 0 ? setIsShow(2) : setIsShow(0)
  }

  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
    if (result) {
      setProductData({content: result});
    }
}
  const onScanFile = () => {
    qrRef.current.openImageDialog();
  }

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result){
      setProductData({content: result});
    }
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        
        <TextField name="content" variant="outlined" label="Token" fullWidth value={productData.content} onChange={handleChange} />
    
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>

      <Paper className={classes.paper}>
        <Card>
          <h2 className={classes.title}>Scan QR Codes</h2>
          <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} >
                    <Button className={classes.btn} variant="contained" color="secondary" onClick={showScanQR}>Scan Qr Code</Button>
                    {isShow === 1 ? 
                    <Grid item xs={12} sm={12}> 
                      <QrReader
                        ref={qrRef}
                        delay={300}
                        style={{width: '100%'}}
                        onError={handleErrorFile}
                        onScan={handleScanFile}
                        legacyMode
                      />
                      <Button className={classes.btn} variant="contained" color="primary" onClick={onScanFile}>Import file</Button>
                   
                    </Grid>
                    : null}
                    <Grid item xs={12} sm={12} >
                      <Button className={classes.btn} variant="contained" color="secondary" onClick={showScanQRWebcam}>Scan Qr By Webcam</Button>
                      {isShow === 2 ?
                        <Grid item xs={12} sm={12} >
                          <h3>Qr Code Scan by Web Cam</h3>
                          <QrReader
                          delay={300}
                          style={{width: '100%'}}
                          onError={handleErrorWebCam}
                          onScan={handleScanWebCam}
                          />
                        </Grid> 
                      : null}
                    </Grid>
                  </Grid>
              </Grid>
          </CardContent>
        </Card>
      </Paper>
    </Paper>
  );
};

export default FormFind;
