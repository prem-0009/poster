import React, { useRef } from "react";
import { handleLogin } from "../../redux/action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Login = (props) => {
  console.clear();
  console.log(props);

  const refEmail = useRef();
  const refPassword = useRef();

  return (
    <div>
      {props.state.isAuth ? (
        <Route>
          <Redirect to="/home" />
        </Route>
      ) : (
        <div>
          <h2>Login</h2>
          <br></br>
          <input placeholder="email" ref={refEmail}></input>
          <br></br>
          <input placeholder="password" ref={refPassword}></input>
          <br></br>
          <button
            onClick={() =>
              props.handleLogin(
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
  console.log(state);

  return {
    state,
  };
};

export default connect(mapStateToProps, { handleLogin })(Login);
