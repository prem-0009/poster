import React, { useRef } from "react";
import "./register.scss";
import { connect } from "react-redux";

import { handleRegister } from "../../redux/action/authAction";
import { Route, Redirect } from "react-router-dom";

export const Register = (props) => {
  console.log(props.isAuth);

  const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  return (
    <div className='first-register'>
      {props.isAuth ? (
        <Route>
          <Redirect to="/home" />
        </Route>
      ) : (
        <div className="main-reg">
          <h2 className="h-reg txt">Register</h2>
          <input
            className="in-reg"
            ref={refUsername}
            placeholder="user-name"
          ></input>
          <input className="in-reg" ref={refEmail} placeholder="email"></input>
          <input
            className="in-reg"
            ref={refPassword}
            placeholder="password"
          ></input>

          <button
            onClick={() =>
              props.handleRegister(
                refUsername.current.value,
                refEmail.current.value,
                refPassword.current.value
              )
            }
            className="btn-reg"
          >
            submit
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps, { handleRegister })(Register);
