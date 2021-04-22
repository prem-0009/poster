import axios from "axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const searchMovie = (movie) => async (dispatch) => {
  console.log(movie);
  

  await axios
    .get(
      ` https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
    )
    .then((res) => {
      dispatch({
        type: actionTypes.LOAD_SEARCH_MOVIES,
        payload: res.data.results,
      });
      // console.log(res.data.results);
    })
    .catch((e) => console.log(e));
};
