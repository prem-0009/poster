import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { connect } from "react-redux";
import axios from "axios";
import closeIcon from "../../icons/close-icon.png";
import {
  getMyFavoritesList,
  handleToDeleteFav,
} from "../../redux/action/favAction";
import "./favorites.scss";
import { FaTrash } from "react-icons/fa";
import Container from "react-bootstrap/Container";
// import "./home.scss";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

export const Favorites = (props) => {
  // console.clear();
  // const {username}=props.state;
  // console.log(username);

  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  console.log(props.myFavList);
  let userId = props.data;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.myFavList - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? props.myFavList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  const slides =
    // props.myFavList.length > 0 ? (
    props.myFavList.map((item) => {
      return (
        <CarouselItem>
          {
            <div className="each-fav" key={item._id}>
              <img
                src={imgHttps + item.poster_path}
                className="img-fav"
                alt={item.title}
              />
              {item.overview ? (
                <p className="each-para">{item.overview}</p>
              ) : (
                <p>nothing from the API</p>
              )}
              <button
                className="delete-fav"
                onClick={() => props.handleToDeleteFav(item._id, userId)}
              >
                <FaTrash className="del-fav" />
              </button>
            </div>
          }
        </CarouselItem>
      );
    });
  // ) : (
  //   <CarouselItem>
  //     <h3>Nothing here...</h3>)
  //   </CarouselItem>
  // );

  return (
    <div className="main-fav">
      {/* <div className="sec-fav"> */}
      {/* {slides} */}

      <Container>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={null}
        >
          <CarouselIndicators
            items={props.myFavList}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            // className="indicator-home"
          />

          {slides}

          {/* {slides} */}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
      {/* {props.myFavList.length > 0 ? (
          props.myFavList.map((item) => (
            <div className="each-fav" key={item._id}>
              <img src={imgHttps + item.poster_path} className="img-fav" alt={item.title}/>
              {item.overview? 
              <p className="each-para">{item.overview}</p>:
              <p>nothing from the API</p>
              }
              <button
                className="delete-fav"
                onClick={() => props.handleToDeleteFav(item._id, userId)}
              >
                <FaTrash className='del-fav'/>
              </button>
            </div>
          ))
        ) : (
          <h3>Nothing here...</h3>
        )} */}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
    myFavList: state.moviesReducer.myFavoriteList,
    data: state.loginReducer.user.id,
  };
};

export default connect(mapStateToProps, {
  getMyFavoritesList,
  handleToDeleteFav,
})(Favorites);
