import { FETCH_ALL_TRANSACTION, CREATE_TRANSACTION, CREATE_TRANSACTIONB2B, FETCH_TRANSACTION } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getTransactions = () => async (dispatch) => {
  try {
    const { data } = await api.fetchTransactions();
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ALL_TRANSACTION, tranPayload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const getTransaction = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchTransaction(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      await dispatch({ type: FETCH_TRANSACTION, tranPayload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};


export const createTransaction = (product, user) => async (dispatch) => {
  try {
    var transaction = {product: product, user: user}
    const { data } = await api.createTransaction(transaction);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: CREATE_TRANSACTION, tranPayload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransactionB2B = (product, user) => async (dispatch) => {
  try {
    var transaction = {product: product, user: user}
    const { data } = await api.createTransactionB2B(transaction);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: CREATE_TRANSACTIONB2B, tranPayload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};
