import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";
import { useState } from "react";

export const addToFavorite = (movie, user) => async (dispatch) => {
  //-----------------add to fav
  // console.clear();
  // console.log(movie, user);

  // const [watchList, setWatchList] = useState()
  // const [favMovies, setFavMovies] = useState(localStorage.getItem("myFavList")
  // ? (localStorage.getItem("myFavList"))
  // : [])
  console.log("here");

  await axios({
    method: "post",
    url: `/api/favorites/add-favorite`,
    data: {
      movie: movie,
      user: user,
    },
  })
    .then((res) => {
      //put the favorites in the local storage
      // console.log(res.data);
      // localStorage.setItem('myFavorites',JSON.stringify(res.data.favMovie) )
      // setFavMovies([...favMovies,...res.data.favMovie])
      // console.log(favMovies);

      dispatch({
        type: actionTypes.ADD_TO_FAV,
        payload: res.data.favMovies,
      });
    })
    .catch((e) => console.log(e));
};

export const getMyFavoritesList = (myId) => async (dispatch) => {
  //--------------------get my fav
  // console.log(myId);
  let getMyFavList = await axios({
    method: "get",
    url: `/api/favorites/get-favorites-by-id/${myId}`,
  });
  // console.log(getMyFavList);
  // console.log(getMyFavList.data.favMovies);

  dispatch({
    type: actionTypes.GET_MY_FAVORITES,
    payload: getMyFavList.data.favMovies,
  });
  // console.log(getMyFavList);
};

//don't need the below code i guess
// export const stayUpFavList = (data) => async (dispatch) => {
//   console.log("stayp movies", data);
//   dispatch({
//     type: actionTypes.STAY_UP_FAV_MOVIES,
//     payload: data,
//   });
// };

export const handleToDeleteFav = (movieId, userId) => async (dispatch) => {
  //-----------------delete from fav
  // console.log(movieId, userId);

  let deleteThisMovie = await axios({
    method: "delete",
    url: `/api/favorites/delete/${userId}/${movieId}`,
  });
  //after we delete one movie get the new list from BE
  // console.log(deleteThisMovie.data);
  dispatch({
    type: actionTypes.NEW_LIST_AFTER_DELETION,
    payload: deleteThisMovie.data,
  });
};

export const getAllFavorites = () => async (dispatch) => {
  try {
    let getAll = await axios({
      method: "get",
      url: `/api/favorites/get-all-favorites`,//http://localhost:4000
    });
    // console.log(getAll);
    let data = [];

    data = [...getAll.data];
    // for (const [key, value] of Object.entries(getAll)){
    //   console.log(value);
    //   data.push(key.data)

    // }

    // console.log(data);
    dispatch({
      type: actionTypes.GET_ALL_FAV,
      payload: data,
    });
  } catch (e) {
    console.log(e);
  }
};
