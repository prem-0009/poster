import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchMovie } from "../../redux/action/searchAction";
import SearchBar from "../SearchBar/SearchBar";


import "./home.scss";

const Home = (props) => {
  console.clear();
  const [homeMovies, setHomeMovies] = useState([]);

  const refSearchMovie = useRef();

  //why is it rendering twice
  //   console.log('rendered twice');

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

  let imgHttps = `https://image.tmdb.org/t/p/w500`;

  return (
    <div className="main-page-home">
      <div className="fixed-home">
        <SearchBar />

        <h3>Upcoming movies...</h3>
      </div>

      <div className="main-home">
        {homeMovies.map((item) => (
          <img
            className="img-home"
            src={imgHttps + item.poster_path}
            alt={item.title}
            key={item.id}
          />
        ))}
      </div>
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
