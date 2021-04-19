import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";
import jwtDecode from "jwt-decode";

export const handleRegister = (username, email, pass) => async (dispatch) => {
  let info = { username, email, pass };
  if (username && email && pass) {
    // console.clear();
    // console.log(info);

    try {
      let payload = await axios.post(
        "http://localhost:4000/api/users/register",
        info
      );

      // dispatch({
      //   type: actionTypes.AUTH_SUCCESS_MESSAGE,
      //   message: payload.data.message,
      // });

      alert(`${payload.data.message}`);
    } catch (e) {
      alert(`${e.response.data.message}`);
    }
  } else {
    alert("enter everything");
  }
};

export const handleLogin = (email, pass) => async (dispatch) => {
  let userInfo = { email, pass };
  // console.clear();

  try {
    let payload = await axios.post(
      "http://localhost:4000/api/users/login",
      userInfo
    );
    // console.log(payload);

    const { token } = payload.data;
    localStorage.setItem("jwtToken", token);
    let decode = jwtDecode(token);
    // console.log(decode);

    dispatch({
      type: actionTypes.AUTH_USER_SIGN_IN_SUCCESSFUL,
      message: decode,
    });
  } catch (e) {
    console.log(e);

    // dispatch({
    //   type: actionTypes.AUTH_USER_SIGN_IN_FAILURE,
    //   message: e.response.data.message,
    // });
    alert(e.response.data.message);
  }
};

export const stayUp = (token) => async (dispatch) => {
  // console.log("stayup");
  if (token) {
    let decode = jwtDecode(token);
    // console.log("stayup is activated");
    dispatch({
      type: actionTypes.AUTH_USER_STAY_UP,
      message: decode,
    });
  }
};

export const logout = () => async (dispatch)=> {
  localStorage.removeItem("jwtToken");
    
    dispatch({
        type:actionTypes.LOG_OUT,
        // message:
    })
}
