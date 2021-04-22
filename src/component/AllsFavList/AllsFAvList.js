import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getAllFavorites } from "../../redux/action/favAction";
import "./allsFavList.scss";

export const AllsFAvList = (props) => {
  console.clear();
  // console.log(props.user.username);

  // console.log(props.allsFavList);
  console.log(props);

  let othersFavList = props.allsFavList.filter((item) => {
    if (item[0] !== props.user.username) {
      return item;
    }
  });

  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className='main-one'>
      <div className="main-alls">
        {props.allsFavList.map((item) => (
          <div key={item[0]} className="each-alls">
            <h3>user-name:{item[0]}</h3>
            <div>
              <div className="each-one-alls">
                {item[1].map((curr) => (
                  <img src={imgHttps + curr.poster_path} className="img-alls" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    myList: state.moviesReducer.myFavoritesList,
    user: state.loginReducer,
    allsFavList: state.moviesReducer.allUserFavList,
  };
};

export default connect(mapStateToProps, { getAllFavorites })(AllsFAvList);
