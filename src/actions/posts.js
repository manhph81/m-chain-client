import { FETCH_ALL,FETCH_ONE, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ALL, payload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ONE, payload: data });
    }
    
  } catch (error) {
    return null
    console.log(error.message);
  }
};


export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: CREATE, payload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: UPDATE, payload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: LIKE, payload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: DELETE, payload: data.id });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};
