import React, { useRef } from "react";
import { connect } from "react-redux";
import { Redirect, Route, NavLink, Link } from "react-router-dom";

// import {searchMovie} from '../../redux/action/searchAction'
import { logout } from "../../redux/action/authAction";
import { getMyFavoritesList, getAllFavorites } from "../../redux/action/favAction";

import "./navbar.scss";

export const Navbar = (props) => {
  console.log(props);

  return (//-------------------------------------------------------return------------
    <div className="navbar">
      <NavLink to="/" className="btn home">
        Home
      </NavLink>

      {/*------------------------------------------- user info here */}
      {props.state.loginReducer.isAuth ? (
        <>
          {/* <button className="btn profile"> */}
            <NavLink to="/profilePage" 
            className="btn profile"
            >
              {props.state.loginReducer.user.username}
            </NavLink>
          {/* </button> */}
          {/* <button className="btn favorites"> */}
            <NavLink to="/favorites" className="btn favorites" onClick={()=>props.getMyFavoritesList(props.data.user.id)}>
              My Favorites
            </NavLink>
            <Link 
            // to='/allsFavList' 
            className='btn watchList' 
            to={{pathname:'/allsFavList', state:{props:true}}}
            onClick={props.getAllFavorites}
            >
          Other favorite list
            </Link>
          {/* </button> */}
        </>
      ) : null}

      {props.state.loginReducer.isAuth ? (
        <NavLink  to='/' onClick={props.logout} className="btn logout">
          Logout
        </NavLink>
      ) : (
        <div className="login-register">
          <button className="btn register">
            <NavLink to="/register" className="btn login">
              Register
            </NavLink>
          </button>
          <button className="btn login">
            <NavLink to="/login" className="btn login">
              Login
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    state:state,
    data: state.loginReducer,
  };
};

export default connect(mapStateToProps, { logout, getMyFavoritesList, getAllFavorites  })(Navbar);
