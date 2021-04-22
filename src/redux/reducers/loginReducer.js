import * as actionTypes from "../actionTypes/actionTypes";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

const initialState = {
  isAuth: false,
  user: {},
  moviesListHome: [],
  // token:jwtDecode(localStorage.getItem('jwtToken')),
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS_MESSAGE://----------------------
      return { state };

    case actionTypes.AUTH_USER_SIGN_IN_SUCCESSFUL://----------------
      // console.log(action);

      return {
        isAuth: true,
        user: {
          username: action.message.username,
          email: action.message.email,
          id: action.message.id,
        },
      };

    case actionTypes.AUTH_USER_STAY_UP://--------------------stay up user
      // console.log(action);

      return {
        isAuth: true,
        user: {
          username: action.message.username,
          email: action.message.email,
          id: action.message.id,
        },
      };

    case actionTypes.LOG_OUT://--------------------------------logout
      return {
        isAuth: false,
        user: null,
      };

      case actionTypes.EDIT_EMAIL://-----------------------------change email
      console.log(action);
      
      return {
        ...state,
        user:{
          username:action.payload.username,
          email:action.payload.email,
          id:action.payload._id
        }
      }

    default:
      return state;
  }
};

export default loginReducer;
