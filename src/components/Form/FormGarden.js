import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const FormGarden = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ gardenName: '',gardenYear: '', gardenOwner: '', gardenAddress: '', gardenType:'', gardenSelectedFile: '', gardenTags:'' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0)
    setPostData({ gardenName: '',gardenOwner:'', gardenYear: '', gardenAddress: '', gardenType:'', gardenSelectedFile: '', gardenTags:'' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({...postData, gardenCreatedByName : user?.result?.acName, gardenCreatedBy: user?.result?._id }));
      clear();
    } else {
      dispatch(updatePost(currentId, {...postData, gardenCreatedByName : user?.result?.acName, gardenCreatedBy: user?.result?._id }));
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
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.gardenName}"` : 'Creating a Garden'}</Typography>
        <TextField name="gardenOwner" variant="outlined" label="Owner" fullWidth value={postData.gardenOwner} onChange={(e) => setPostData({ ...postData, gardenOwner: e.target.value })} />
        <TextField name="gardenName" variant="outlined" label="Name" fullWidth value={postData.gardenName} onChange={(e) => setPostData({ ...postData, gardenName: e.target.value })} />
        <TextField name="gardenAddress" variant="outlined" label="Adress" fullWidth multiline rows={4} value={postData.gardenAddress} onChange={(e) => setPostData({ ...postData, gardenAddress: e.target.value })} />
        <TextField name="gardenYear" variant="outlined" label="Year" fullWidth value={postData.gardenYear} onChange={(e) => setPostData({ ...postData, gardenYear: e.target.value })} />
        <TextField name="gardenType" variant="outlined" label="Type" fullWidth value={postData.gardenType} onChange={(e) => setPostData({ ...postData, gardenType: e.target.value })} />
        <TextField name="gardenTags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.gardenTags} onChange={(e) => setPostData({ ...postData, gardenTags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, gardenSelectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default FormGarden;
