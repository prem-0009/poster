import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { connect } from "react-redux";
import axios from "axios";
import closeIcon from "../../icons/close-icon.png";
import {
  getMyFavoritesList,
  handleToDeleteFav,
} from "../../redux/action/favAction";
import "./favorites.scss";

export const Favorites = (props) => {
  // console.clear();
  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  console.log(props.myFavList);
  let userId = props.data;

  return (
    <div className="main-fav">
      <div className="sec-fav">
        {props.myFavList.length > 0 ? (
          props.myFavList.map((item) => (
            <div className="each-fav" key={item._id}>
              <img src={imgHttps + item.poster_path} className="img-fav" />
              <p className="each-para">{item.overview}</p>
              <button
                className="delete-fav"
                onClick={() => props.handleToDeleteFav(item._id, userId)}
              >
                delete
              </button>
            </div>
          ))
        ) : (
          <h3>Nothing here...</h3>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    myFavList: state.moviesReducer.myFavoriteList,
    data: state.loginReducer.user.id,
  };
};

export default connect(mapStateToProps, {
  getMyFavoritesList,
  handleToDeleteFav,
})(Favorites);
