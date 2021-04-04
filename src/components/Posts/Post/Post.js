import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

// import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'))

  // const isConfirmDelete = () =>{
  //   if(window.confirm('Delete the item?')) dispatch(deletePost(post._id))
  // }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post?.gardenSelectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post?.gardenCreatedByName}</Typography>
        <Typography variant="body2">{moment(post?.gardenCreatedAt).fromNow()}</Typography>
      </div>
      {user?.result?._id === post?.gardenCreatedBy ? 
        <div className={classes.overlay2}>
          <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post?._id)}><MoreHorizIcon fontSize="default" /></Button>
        </div>
      : null
      }
      

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post?.gardenTags?.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post?.gardenName}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">Type: {post?.gardenType}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Adress: {post?.gardenAddress}</Typography>
        <Typography variant="body2" color="textSecondary" component="p">Year: {post?.gardenYear}</Typography>

      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* { (user?.result) && (
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post?._id))}><ThumbUpAltIcon fontSize="small" /> Like {post?.gardenLikes?.length-1} </Button>
        )}
        { (user?.result?.name === post?.name) && (
          
          <Button size="small" color="primary" onClick={isConfirmDelete}><DeleteIcon fontSize="small" /> Delete</Button>
        )} */}
      </CardActions>
    </Card>
  );
};

export default Post;
