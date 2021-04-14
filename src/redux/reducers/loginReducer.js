import * as actionTypes from "../actionTypes/actionTypes";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

const initialState = {
  isAuth: false,
  user: {},
  // token:jwtDecode(localStorage.getItem('jwtToken')),
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS_MESSAGE:
      return { state };

    case actionTypes.AUTH_USER_SIGN_IN_SUCCESSFUL:
      return {
        isAuth: true,
        user: {
          username: action.message.username,
          email: action.message.email,
        },
      };

    case actionTypes.AUTH_USER_STAY_UP:
      console.log(action);

      return {
        isAuth: true,
        user:{
          username:action.message.username,
          email:action.message.email
        }
      };

    default:
      return state;
  }
};

export default loginReducer;
