import { FETCH_ALL_TRANSACTION, CREATE_TRANSACTION } from '../constants/actionTypes';

export default (transactions = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTION:
      return action.payload;
    case CREATE_TRANSACTION:
      return [...transactions, action.payload];
    default:
      return transactions;
  }
};

