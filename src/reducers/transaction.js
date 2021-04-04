import { FETCH_ALL_TRANSACTION, FETCH_TRANSACTION , CREATE_TRANSACTION, CREATE_TRANSACTIONB2B  } from '../constants/actionTypes';

export default (transactions = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TRANSACTION:
      return action.tranPayload;
    case FETCH_TRANSACTION:
      return action.tranPayload;
    case CREATE_TRANSACTION:
      return [...transactions, action.tranPayload];
    case CREATE_TRANSACTIONB2B:
      return [...transactions, action.tranPayload];
    default:
      return transactions;
  }
};

