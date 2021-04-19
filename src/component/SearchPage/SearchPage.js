import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchMovie } from "../../redux/action/searchAction";
import {
  addToFavorite,
  getMyFavoritesList,
} from "../../redux/action/favAction";

import { NavLink } from "react-router-dom";
import "./searchPage.scss";

export const SearchPage = (props) => {
  //   console.log(props.movieList[0]);
  // console.log(props);

  const refSearchMovie = useRef();

  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  const handleKeyPress = (e) => {
    //haven't implement this yet
    console.log(e);
    if (e.keyCode === 13) {
      props.searchMovie(e.target.value);
    }
    //   e.keyCode === 13 ? (props.searchMovie(e.target.value)):(null)
  };

  //on click call a function which will check if the movie has already been added\
  let disable;
  const checkNAddToFavorite = (movie, userId) => {
    // console.clear()
    // console.log(movie);
    // console.log(userId);
    // console.log(props);

    // props.getMyFavoritesList(userId.id);
    console.log("props", props);

    if (props.favoriteList) {
      props.favoriteList.map((item) => {
        //item.id is not being sent back to databases
        if (movie.id !== item._id) {
          console.log('-------------------adding ----------');
          
          console.log("item", item); //no movie id here
          console.log("movie", movie);

          props.addToFavorite(movie, userId);
        }
        
        return;
        
      });
    } else {
      props.addToFavorite(movie, userId);
    }
  };


  return (
    <div>
      <input
        placeholder="Search…"
        ref={refSearchMovie}
        //   onClick={() => props.searchMovie(refSearchMovie.current.value)}

        onKeyPress={handleKeyPress}
      />
      <button onClick={() => props.searchMovie(refSearchMovie.current.value)}>
        <NavLink to="/searchPage">search</NavLink>
      </button>

      {/* </NavLink> */}
      <div className="display">
        {props.movieList
          ? props.movieList.map((item) => (
              <div
              // className=' display'
              >
                <img src={imgHttps + item.poster_path} className="img" />
                {/* <button onClick={() => props.addToFavorite(item, props.user)}>   works*/}
                <button
                  disabled={disable}
                  onClick={() => checkNAddToFavorite(item, props.user)}
                >
                  add
                </button>
                <button
                  disabled={disable}
                  // onClick={() => checkNAddToWatchList(item, props.user)}
                >
                  add to watchlist
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
    movieList: state.moviesReducer.searchedMovieList,
    user: state.loginReducer.user,
    favoriteList: state.moviesReducer.myFavoritesList,
  };
};

export default connect(mapStateToProps, {
  searchMovie,
  addToFavorite,
  getMyFavoritesList,
})(SearchPage);
