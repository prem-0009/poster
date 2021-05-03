import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getAllFavorites } from "../../redux/action/favAction";
import "./allsFavList.scss";

export const AllsFAvList = (props) => {
  console.clear();
  // console.log(props.user.username);

  // console.log(props.allsFavList);
  // console.log(props);
  const {user}=props;
// console.log(props.user);

  let othersFavList = props.allsFavList.filter((item) => {
    if (item[0] !== props.user.username) {
      return item;
    }
  });
  // console.log(othersFavList);
  // console.log(props.allsFavList);
  
  

  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className='main-one'>
      <div className="main-alls">
        {othersFavList.map((item) => (
          <div>

            {/* {item[0] !== props.user.username ?<div>hi</div>:<div>bye</div>} */}
          <div key={item[0]} className="each-alls">
            <p className='user-allsFavList'>user-name:{item[0]}</p>
            <div>
              <div className="each-one-alls">
                {item[1].map((curr) => (
                  <img src={imgHttps + curr.poster_path} className="img-alls" />
                  ))}
              </div>
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
    user: state.loginReducer.user,
    allsFavList: state.moviesReducer.allUserFavList,
  };
};

export default connect(mapStateToProps, { getAllFavorites })(AllsFAvList);

