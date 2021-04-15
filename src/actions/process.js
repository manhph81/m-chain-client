import { FETCH_ALL_PROCESS,FETCH_PROCESS ,CREATE_PROCESS, UPDATE_PROCESS, DELETE_PROCESS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProcess = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProcess(); 
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ALL_PROCESS, processPayload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};

export const getPro = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPro(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_PROCESS, processPayload: data });
    }
    
  } catch (error) {
    return null
    console.log(error.message);
  }
};


export const createProcess = (post) => async (dispatch) => {
 
  try {
    const { data } = await api.createProcess(post);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      await dispatch({ type: CREATE_PROCESS, processPayload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProcess = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateProcess(id, post);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: UPDATE_PROCESS, processPayload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteProcess = (id) => async (dispatch) => {
  try {
    const { data }  = await api.deleteProcess(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: DELETE_PROCESS, processPayload: data.id });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};
