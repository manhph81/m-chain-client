import {  AUTH, LOGOUT, UPDATE_USER } from '../constants/actionTypes';


const authReducer = (state = { authData:null, isShowAlert:false }, action)=>{
  switch(action.type){
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data}))
      return{ ...state, authData:action?.data, isShowAlert:true}
    case UPDATE_USER:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data}))
      return{ ...state, authData:action?.data, isShowAlert:true}
    case LOGOUT:
      localStorage.clear()
      return{ ...state, authData:null}
    default:
      return state
  }
}

export default authReducer;

