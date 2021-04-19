import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { connect } from "react-redux";
import axios from "axios";
import {
  getMyFavoritesList,
  handleToDeleteFav,
} from "../../redux/action/favAction";
import "./favorites.scss";

export const Favorites = (props) => {
  // console.clear();
  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  console.log(props);
  let userId = props.data;
  // console.log(props.myFavList);
  let displayFavMovies;
const [favList, setFavList] = useState([])  
  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:4000/api/favorites/get-favorites-by-id/${userId}`,
  //       )
  //     .then((res) => {
  //       setFavList(res.data.favMovies);
  //       console.log(res.data.favMovies);
  //     })
  //     .catch((e) => console.log(e));
  // }, [props.state]);

  // console.log(favList);
  


  // useEffect(() => {
  //   // localStorage.setItem('myFavList',[...props.myFavList])
  //   console.log("fav", props.myFavList);
  // }, [props.state]);

  return (
    <div className="main-fav">
      {/* //   send id from back and put it as key */}
      {/* <div className="main">{displayFavMovies} </div> */}
      <div className="main">
        {props.myFavList
          ? props.myFavList.map((item) => (
              <div className="mainp" key={item._id}>
                <img src={imgHttps + item.poster_path} className="img" />
                <p className="para">{item.overview}</p>
                <button
                  className="fav-delete"
                  onClick={() => props.handleToDeleteFav(item._id, userId)}
                >
                  delete
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    myFavList: state.moviesReducer.myFavoritesList,
    data: state.loginReducer.user.id,
  };
};

export default connect(mapStateToProps, {
  getMyFavoritesList,
  handleToDeleteFav,
})(Favorites);
