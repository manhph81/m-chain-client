import { AUTH } from '../constants/actionTypes';


import * as api from '../api/index.js';

export const signin = ( formData, history ) => async (dispatch) => {
    try {
        const {data} = await api.signin(formData)
        dispatch({type: AUTH, data})
        const acType = data?.result?.acType
        acType === "Consumer" ? history.push(`/`) : history.push(`/${acType}`)
        window.alert("Login succesfully")
    } catch (error) {
      console.log(error.message)
    }
};
export const signup = ( formData, history) => async (dispatch) => {
    try {
        const {data} = await api.signup(formData)
        // dispatch({type: AUTH, data})
        window.alert(`Signup succesfully account ${data?.result?.email}`)
        history.push('/')
    } catch (error) {
        console.log(error.message)
    }
};