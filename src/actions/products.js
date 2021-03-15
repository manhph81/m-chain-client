import { FETCH_ALL_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, LIKE_PRODUCT } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ALL_PRODUCT, productPayload: data });
    }
      
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: FETCH_ALL_PRODUCT, productPayload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: CREATE_PRODUCT, productPayload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProducts = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProducts(id, product);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: UPDATE_PRODUCT, productPayload: data });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProducts = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProducts(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: LIKE_PRODUCT, productPayload: data });
    }
   
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProducts = (id) => async (dispatch) => {
  try {
    const { data } = await api.deleteProducts(id);
    if(data?.message) {
      window.alert(data?.message)
    }else{
      dispatch({ type: DELETE_PRODUCT, productPayload: data.id });
    }
    
  } catch (error) {
    console.log(error.message);
  }
};
