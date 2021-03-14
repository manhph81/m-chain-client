import { FETCH_ALL_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, LIKE_PRODUCT } from '../constants/actionTypes';

export default (products = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRODUCT:
      return action.productPayload;
    case LIKE_PRODUCT:
      return products.map((product) => (product._id === action.productPayload._id ? action.productPayload : product));
    case CREATE_PRODUCT:
      return [...products, action.productPayload];
    case UPDATE_PRODUCT:
      return products.map((product) => (product._id === action.productPayload._id ? action.productPayload : product));
    case DELETE_PRODUCT:
      return products.filter((product) => product._id !== action.productPayload);
    default:
      return products;
  }
};

