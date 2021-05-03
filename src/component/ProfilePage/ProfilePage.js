import React, { useState, useRef,useEffect } from "react";
import { connect } from "react-redux";
import "./profilePage.scss";
import { handleChangeEmail } from "../../redux/action/editEmailAction";

export const ProfilePage = (props) => {
  // console.log("profilepage", props);
  const { loginReducer } = props.state;
  const [isTrue, setIsTrue] = useState(false);

  const refNewEmail = useRef();

  // console.log(loginReducer);
  // useEffect(() => {
    
  // }, [isTrue])

  const toChangeEmail=()=>{
    setIsTrue(false)
    props.handleChangeEmail(refNewEmail.current.value, loginReducer.user.username)
  }
  return (
    <div className="div-main">
      <div className="main-profile">
        <div className="tr1-profile">
          <span style={{ position: "fixed", marginLeft: "30px" }}>
            user-name:
          </span>
          <span>{loginReducer.user.username}</span>
        </div>
        <div className="tr2-profile">
          <span style={{ position: "fixed", marginLeft: "30px" }}>email:</span>
          {isTrue ? (
            <div>
              <input
                className="input-profile"
                placeholder="input new email"
                // value={loginReducer.user.username}
                ref={refNewEmail}
              ></input>
              {/* <div> */}
              <button onClick={() => setIsTrue(false)}>don't edit</button>
              {/* </div>
              <div> */}
              <button
                onClick={() =>
                  toChangeEmail()
                  // props.handleChangeEmail(
                  //   refNewEmail.current.value,
                  //   loginReducer.user.username
                  // )
                  // setIsTrue(false)
                }
                // onClickCapture={() => setIsTrue(false)}
              >
                submit
              </button>
              {/* </div> */}
            </div>
          ) : (
            <div>
              <span className="user-profile">{loginReducer.user.email}</span>
              {/* <div> */}
              <button onClick={() => setIsTrue(true)}>change my email</button>
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { handleChangeEmail })(ProfilePage);
