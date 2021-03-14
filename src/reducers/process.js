import { FETCH_ALL_PROCESS, CREATE_PROCESS, UPDATE_PROCESS, DELETE_PROCESS } from '../constants/actionTypes';

export default (process = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PROCESS:
      return action.processPayload;
    case CREATE_PROCESS:
      return [...process, action.processPayload];
    case UPDATE_PROCESS:
      return process.map((pro) => (pro._id === action.processPayload._id ? action.processPayload : pro));
    case DELETE_PROCESS:
      return process.filter((pro) => pro._id !== action.processPayload);
    default:
      return process;
  }
};

