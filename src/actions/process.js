import { FETCH_ALL_PROCESS, CREATE_PROCESS, UPDATE_PROCESS, DELETE_PROCESS } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getProcess = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProcess(); 
    dispatch({ type: FETCH_ALL_PROCESS, processPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const createProcess = (post) => async (dispatch) => {
  try {
    const { data } = await api.createProcess(post);
    dispatch({ type: CREATE_PROCESS, processPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProcess = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateProcess(id, post);
    dispatch({ type: UPDATE_PROCESS, processPayload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const deleteProcess = (id) => async (dispatch) => {
  try {
    await api.deleteProcess(id);

    dispatch({ type: DELETE_PROCESS, processPayload: id });
  } catch (error) {
    console.log(error.message);
  }
};
