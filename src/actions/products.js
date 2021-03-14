import { FETCH_ALL_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, LIKE_PRODUCT } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH_ALL_PRODUCT, productPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchProduct(id);
    dispatch({ type: FETCH_ALL_PRODUCT, productPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    console.log(data)
    dispatch({ type: CREATE_PRODUCT, productPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProducts = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProducts(id, product);

    dispatch({ type: UPDATE_PRODUCT, productPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeProducts = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeProducts(id);

    dispatch({ type: LIKE_PRODUCT, productPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProducts = (id) => async (dispatch) => {
  try {
    await api.deleteProducts(id);

    dispatch({ type: DELETE_PRODUCT, productPayload: id });
  } catch (error) {
    console.log(error.message);
  }
};
