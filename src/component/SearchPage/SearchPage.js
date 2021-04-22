import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionTypes from "../../redux/actionTypes/actionTypes";

import { searchMovie } from "../../redux/action/searchAction";
import {
  addToFavorite,
  getMyFavoritesList,
} from "../../redux/action/favAction";

import { NavLink, Link } from "react-router-dom";
import "./searchPage.scss";

export const SearchPage = (props) => {
  //-------------------------------start component
  //   console.log(props.movieList[0]);
  // console.clear();
  console.log("searchpage", props);

  const refSearchMovie = useRef();

  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  let getMovieFromLocal;
  let disable;
  // let findMovie = props.favoriteList.find((item)=>item._id=732450);
  // console.log(findMovie);

  const checkNAddToFavorite = (movie, userId) => {
    //-----------------------------------------------------------to add movies

    // console.log("movieid", movie);

    if (props.favoriteList.length > 0) {
      console.log("adding on the old list");

      let findMovie = props.favoriteList.filter(
        (item) => item._id === movie.id
      );
      console.log(findMovie);
      if (findMovie.length !== 0) {
        alert("movie already in the list");
      }
      if (findMovie.length === 0) {
        props.addToFavorite(movie, userId);
      }
    } else {
      console.log("making new fav list");

      props.addToFavorite(movie, userId);
    }
  };

  return (
    <div className="main-searchPage">
      <div className="second-searchPage">
              <input
                className="input-searchPage"
                placeholder="Search…"
                ref={refSearchMovie}
                //   onClick={() => props.searchMovie(refSearchMovie.current.value)}

                // onKeyPress={handleKeyPress}
              />
              <button
                className="button-sp"
                onClick={() => props.searchMovie(refSearchMovie.current.value)}
              >
                <Link to="/searchPage">search</Link>
              </button>
      </div>

      {/* </NavLink> */}
      <div className="display">
        {props.searchedList
          ? props.searchedList.map((item) => (
              <div
                // className=' display'
                key={item.id}
              >
                <img src={imgHttps + item.poster_path} className="img" />

                <button
                  disabled={disable}
                  onClick={() => checkNAddToFavorite(item, props.user)}
                >
                  add
                </button>

                <p className="p">{item.overview}</p>
              </div>
            ))
          : null}
      </div>
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    searchedList: state.moviesReducer.searchedMovieList,
    user: state.loginReducer.user,
    favoriteList: state.moviesReducer.myFavoriteList,
  };
};

export default connect(mapStateToProps, {
  searchMovie,
  addToFavorite,
  getMyFavoritesList,
})(SearchPage);
