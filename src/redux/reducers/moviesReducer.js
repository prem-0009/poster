import * as actionTypes from "../actionTypes/actionTypes";
// import jwtDecode from "jwt-decode";
// import { useEffect } from "react";

const initialState = {
  myFavoriteList:
    // localStorage.getItem("myFavList")
    //   ? localStorage.getItem("myFavList")
    //   :
    [],
  searchedMovieList: [],
  // myFavoritesList: [],
  randomFavoritesList: [],
  allUserFavList: [],
  // token:jwtDecode(localStorage.getItem('jwtToken')),
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SEARCH_MOVIES: //------------------load search movies
      // console.log(action.payload);

      return {
        ...state,
        searchedMovieList: [...action.payload],
      };

    case actionTypes.GET_MY_FAVORITES: //---------------------get my fav
      // console.log(action);

      return {
        ...state,
        myFavoriteList: [...action.payload],
        // counter:state.counter+1
      };

    // case actionTypes.STAY_UP_FAV_MOVIES:
    //   console.log(action);

    //   return {
    //     ...state,
    //     myFavoritesList: [...action.payload],
    //   };

    case actionTypes.NEW_LIST_AFTER_DELETION: //-----------------new list after deletion
      return {
        ...state,
        myFavoriteList: [...action.payload],
      };

    case actionTypes.ADD_TO_FAV: //------------------------------add to fav
      // console.log(state.myFavoriteList);

      // console.log("add to action", action);

      return {
        ...state,
        myFavoriteList:
          state.myFavoriteList.length > 0
            ? [...state.myFavoriteList, action.payload]
            : [action.payload],
        //  [action.payload],
      };

    case actionTypes.GET_ALL_FAV:
      let allFavorite = [];
      //putting username and his list in 'allFavorite'
      action.payload.forEach((item) => {
        allFavorite.push([item.username, item.favMovies]);
      });
      // console.log(allFavorite);
      return {
        ...state,
        allUserFavList: [...allFavorite],
      };

    default:
      return state;
  }
};

export default moviesReducer;
