import React, { useRef } from "react";
import { handleLogin } from "../../redux/action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Login = (props) => {
  // console.clear();
  // console.log(props);

  const refUsername = useRef();
  const refPassword = useRef();

  return (
    <div className='first-register'>
      {props.isAuth.isAuth ? (
        // null
        <Route>
          <Redirect to="/" />
        </Route>
      ) : (
        <div className="main-reg">
          <h2 className='h-reg txt'>Login</h2>

          <input className='in-reg' placeholder="user name" ref={refUsername}></input>
          <input className='in-reg' placeholder="password" ref={refPassword}></input>

          <button
          className='btn-reg'
            onClick={() =>
              props.handleLogin(
                refUsername.current.value,
                refPassword.current.value
              )
            }
          >
            submit
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    isAuth: state.loginReducer,
  };
};

export default connect(mapStateToProps, { handleLogin })(Login);
