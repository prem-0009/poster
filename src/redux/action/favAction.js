import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const addToFavorite = (movie, user) => async (dispatch) => {//-----------------add to fav
// console.clear()
  console.log(movie, user);

  // const [watchList, setWatchList] = useState()

  await axios({
    method: "post",
    url: `http://localhost:4000/api/favorites/add-favorite`,
    data: {
      movie: movie,
      user: user,
    },
  })
    .then((res) => {
//put the favorites in the local storage
      // localStorage.setItem('myFavorites',JSON.stringify() )
      console.log(res.data);
        dispatch({
          type: actionTypes.ADD_TO_FAV,
          payload: res.data.favMovie,
        });
    })
    .catch((e) => console.log(e));
};

export const getMyFavoritesList = (myId) => async (dispatch) => {
  // console.log(myId);
  let getMyFavList = await axios({
    method: "get",
    url: `http://localhost:4000/api/favorites/get-favorites-by-id/${myId}`,
  });
  // console.log(getMyFavList);
console.log(getMyFavList.data.favMovies);

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
 
export const handleToDeleteFav=(movieId, userId) => async(dispatch)=>{
  console.log(movieId, userId);

  let deleteThisMovie = await axios({
    method:'delete',
    url:`http://localhost:4000/api/favorites/delete/${userId}/${movieId}`
  })
//after we delete one movie get the new list from BE
console.log(deleteThisMovie.data)
dispatch({
  type:actionTypes.NEW_LIST_AFTER_DELETION,
  payload:deleteThisMovie.data
})

  
}