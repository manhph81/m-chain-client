import { AUTH, UPDATE_USER } from '../constants/actionTypes';


import * as api from '../api/index.js';

export const signin = ( formData, history ) => async (dispatch) => {
    try {
        const {data} = await api.signin(formData)
        if(data?.message){
            window.alert(data?.message)
        } else {
            window.alert("Login succesfully")
            dispatch({type: AUTH, data})
            const acType = data?.result?.acType
            acType === "Consumer" ? history.push(`/`) : history.push(`/${acType}`)
        }
       
    } catch (error) {
      console.log(error.message)
    }
};
export const signup = ( formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        
        if(data?.message){
            window.alert(data?.message)
        } else {
            window.alert(`Signup succesfully account ${data?.result?.email}`)
            dispatch({type: AUTH, data})
            history.push('/')
        }
    } catch (error) {
        console.log(error.message)
    }
};

export const updateUser = (id, user) => async (dispatch) => {
    try {
      const { data } = await api.updateUser(id, user);
      if(data?.message) {
        window.alert(data?.message)
      }else{
        dispatch({ type: UPDATE_USER, data });
      }
      
    } catch (error) {
      console.log(error.message);
    }
  };