import React, {useState, useRef} from 'react';
import {Container, Card, CardContent, makeStyles, Grid, TextField, Button, Paper} from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader';
import useStyles from './styles';



const ScanQR = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [scanResultFile, setScanResultFile] = useState('');
  const [scanResultWebCam, setScanResultWebCam] =  useState('');
  const [isShow, setIsShow] =  useState(0);
  const classes = useStyles();
  const qrRef = useRef(null);


  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response);
          // console.log(response)
    }catch (error) {
      console.log(error);
    }
  }
  const handleErrorFile = (error) => {
    console.log(error);
  }
  const handleScanFile = (result) => {
      if (result) {
          setScanResultFile(result);
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
        setScanResultWebCam(result);
    }
  }

  const showGenerate = () =>{
    setIsShow(0)
  }

  const showScanQR = () =>{
    setIsShow(1)
  }

  const showScanQRWebcam = () =>{
    setIsShow(2)
  }

  return (
      <Paper className={classes.paper}>
          <Card>
            <h2 className={classes.title}>Scan QR Codes</h2>
            <CardContent>
              <Grid container spacing={2}>
                 {/* <Grid item xs={12} sm={12} > 
                  <Button className={classes.btn} variant="contained" color="secondary" onClick={showGenerate}>Generate</Button>
                  {isShow === 0 ? 
                    <Grid item xs={12} sm={12} >
                      <TextField label="Enter Text Here" onChange={(e) => setText(e.target.value)}/>
                      <Button className={classes.btn} variant="contained" 
                        color="primary" onClick={() => generateQrCode()}>Generate</Button>
                        <br/>
                        <br/>
                        <br/>
                        {imageUrl ? (
                          <a href={imageUrl} download>
                              <img src={imageUrl} alt="img"/>
                          </a>) : null}
                        <br/>
                      <Button className={classes.btn} variant="contained" color="primary">Download</Button>                       
                    </Grid>
                  : null}
                </Grid> */}
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
                    <h3>Scanned Code: {scanResultFile}</h3>
                  </Grid>
                  : null}
                </Grid>
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
                      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3>
                      {/* {scanResultWebCam!=='' ? window.alert(scanResultWebCam) : null} */}
                    </Grid> 
                  : null}
                </Grid>
              </Grid>
            </CardContent>
        </Card>
      </Paper>
  );
};

export default ScanQR;
