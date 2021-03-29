import { FETCH_ALL_TRANSACTION, CREATE_TRANSACTION } from '../constants/actionTypes';

import * as api from '../api/index.js';


export const getTransaction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransaction();
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ALL_TRANSACTION, payload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};


export const createTransaction = (post) => async (dispatch) => {
  try {
    const { data } = await api.createTransaction(post);
    console.log(data)
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: CREATE_TRANSACTION, payload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};
