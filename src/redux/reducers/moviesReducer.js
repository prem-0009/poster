import * as actionTypes from "../actionTypes/actionTypes";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

const initialState = {
  // myFavoriteList: localStorage.getItem("myFavList")
  //   ? JSON.parse(localStorage.getItem("myFavList"))
  //   : [],
  searchedMovieList: [],
  myFavoritesList: [],
  randomFavoritesList: [],
  counter:0
  // token:jwtDecode(localStorage.getItem('jwtToken')),
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SEARCH_MOVIES:
      console.log(action.payload);

      return {
        searchedMovieList: [...action.payload],
      };

    case actionTypes.GET_MY_FAVORITES:
      return {
        ...state,
        myFavoritesList: [...action.payload],
        counter:state.counter+1
      };

    // case actionTypes.STAY_UP_FAV_MOVIES:
    //   console.log(action);

    //   return {
    //     ...state,
    //     myFavoritesList: [...action.payload],
    //   };

    case actionTypes.NEW_LIST_AFTER_DELETION:
      return {
        ...state,
        myFavoritesList: [...action.payload],
      };

    case actionTypes.ADD_TO_FAV:
      console.log(initialState.myFavoritesList);

      localStorage.setItem("myFavList", JSON.stringify(state.myFavoritesList));
      // localStorage.setItem("watched", JSON.stringify(state.watched));

      // localStorage.setItem('myFavList',[...state.myFavoritesList])
      console.log(action);

      return {
        ...state,
        myFavoritesList: state.myFavoritesList
          ? [...state.myFavoritesList, action.payload]
          : [...action.payload],
        // localStorage.setItem("myFavList", JSON.stringify(action.payload))
      };

    default:
      return state;
  }
};

export default moviesReducer;
// https://image.tmdb.org/t/p/w500undefined
// https://image.tmdb.org/t/p/w500undefined
