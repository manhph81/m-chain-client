import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { Link } from 'react-router-dom'

import useStyles from './styles';
import { createProcess } from '../../actions/process';


const FormProcess = ({ productId }) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const [processData, setProcessData] = useState({ processName: '', processDetail: '', processType: '',processSelectedFile:'' });
  const dispatch = useDispatch();
  
  const classes = useStyles();

 

  useEffect(() => {
    if (process) {
      setProcessData(process);
    }
  },[process]);

  const clear = () => {
    setProcessData({ processName: '', processDetail: '', processSelectedFile:'' });
  };

  const handleChange=(e)=>{
    setProcessData({ ...processData, [e.target.name] : e.target.value })
}
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(productId!==0){
      dispatch(createProcess({...processData, processOwner : user?.result?.acName, processType : user?.result?.acType , productId:productId }));
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
          <Typography variant="h6">Quy trình sản xuất</Typography>
          <TextField name="processName" variant="outlined" label="Tên quy trình" fullWidth value={processData.processName} onChange={handleChange} />
          <TextField name="processDetail" variant="outlined" label="Detail" fullWidth multiline rows={4} value={processData.processDetail} onChange={handleChange} />
          <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 })  => setProcessData({ ...processData, processSelectedFile: base64 })} /></div>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
          <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
         
          <Typography variant="h6" component={Link} to={ {pathname:`/${user?.result?.acType}`}}>SEE PRODUCT</Typography>

        </form>
      </Paper>
    );
  }
};

export default FormProcess;
