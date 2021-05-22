import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { updateUser } from '../../actions/auth';


const FormProfile = () => {
  const classes = useStyles();
  var [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user?.result?._id === 0) {
      // await dispatch(createPost({...postData }));
    } else {
      // console.log('submit')
      await dispatch(updateUser(user?.result?._id, {...user }));
    }
  };

  const handleChange=(e)=>{
    setUser({ ...user,[e.target.name] : e.target.value })
  }

  if(!user?.result?._id){
    return(
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Please Sign In!
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{user?.result?._id ? `Editing "${user?.result?.acName}"` : 'Profile'}</Typography>
        <TextField name="acName" variant="outlined" label="Name" fullWidth value={user?.result?.acName} onChange={handleChange} />
        <TextField name="email" variant="outlined" label="Email" fullWidth value={user?.result?.email} onChange={handleChange} />
        <TextField name="acAdress" variant="outlined" label="Adress" fullWidth multiline rows={4} value={user?.result?.acAdress} onChange={handleChange} />
        <TextField name="acPhone" variant="outlined" label="Phone" fullWidth multiline rows={4} value={user?.result?.acPhone} onChange={handleChange} />
        <TextField name="acPublicKey" disabled={true} variant="outlined" label="PublicKey" fullWidth multiline rows={4} value={ user?.result?.acPublicKey} />
        <TextField name="acPrivateKey" disabled={true} variant="outlined" label="PrivateKey" fullWidth multiline rows={4} value={user?.result?.acPrivateKey}  />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setUser({ ...user, acSelectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth onClick={handleSubmit}>Submit</Button>
      </form>
    </Paper>
  );
};

export default FormProfile;
