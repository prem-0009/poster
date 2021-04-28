import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import Carousel from "react-bootstrap/Carousel";

import { searchMovie } from "../../redux/action/searchAction";
// import SearchBar from "../SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import "./home.scss";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const Home = (props) => {
  console.clear();
  // console.log(props);

  const [homeMovies, setHomeMovies] = useState([]);
  console.log(homeMovies[0]);

  const refSearchMovie = useRef();
  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  //why is it rendering twice
  //   console.log('rendered twice');
  //--bootstrap
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === homeMovies.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? homeMovies.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = homeMovies.map((item, i, arr) => {
    return (
      <CarouselItem key={item.src}>
        {
          <div className="display-home">
            <img
              src={imgHttps + arr[i].poster_path}
              alt={item.title}
              className="img-home"
            />
            <div className="flex-home">
              <p>{item.overview}</p>
              <p className="date-home">Release data : {item.release_date}</p>
            </div>
          </div>
        }
      </CarouselItem>
    );
  });
  //--bootstrap

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        setHomeMovies(res.data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="main-fav">
      <div className="fixed-home">
        <h5 className="h-home">Upcoming movies...</h5>
      </div>

      <Container>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          interval={null}
        >
          <CarouselIndicators
            items={homeMovies}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            className="indicator-home"
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    moviesList: state.moviesListHome,
    state: state,
  };
};

export default connect(mapStateToProps, { searchMovie })(Home);
