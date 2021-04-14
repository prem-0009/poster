import React, { useRef } from "react";
import "./signup.css";
import { connect } from "react-redux";

import { handleRegister } from "../../redux/action/authAction";
import { Route, Redirect } from "react-router-dom";

export const Register = (props) => {
  console.log(props.isAuth);

  const refUsername = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  return (
    <div>
      {props.isAuth ? (
        <Route>
          <Redirect to="/home" />
        </Route>
      ) : (
        <div className="signup">
          <h2>Register</h2>
          <br></br>
          <input ref={refUsername} placeholder="user-name"></input>
          <br></br>
          <input ref={refEmail} placeholder="email"></input>
          <br></br>
          <input ref={refPassword} placeholder="password"></input>
          <br></br>
          <button
            onClick={() =>
              props.handleRegister(
                refUsername.current.value,
                refEmail.current.value,
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
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps, { handleRegister })(Register);
