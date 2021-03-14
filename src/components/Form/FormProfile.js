import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';


const FormProfile = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ acName: '', email: '', adress: '', phone: '', acSelectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (currentId === 0) {
    //   dispatch(createPost({...postData }));
    //   clear();
    // } else {
    //   dispatch(updatePost(currentId, {...postData }));
    //   clear(); 
    // }
  };

  if(!user?.result?.acName){
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
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Profile'}</Typography>
        <TextField name="acName" variant="outlined" label="Name" fullWidth value={user?.result?.acName} onChange={(e) => setPostData({ ...postData, owner: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" fullWidth value={user?.result?.email} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="adress" variant="outlined" label="Adress" fullWidth multiline rows={4} value={user?.result?.adress} onChange={(e) => setPostData({ ...postData, adress: e.target.value })} />
        <TextField name="phone" variant="outlined" label="Phone" fullWidth multiline rows={4} value={user?.result?.phone} onChange={(e) => setPostData({ ...postData, phone: e.target.value })} />
      
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, acSelectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
  );
};

export default FormProfile;
