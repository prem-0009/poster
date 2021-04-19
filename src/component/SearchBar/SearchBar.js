import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchMovie } from "../../redux/action/searchAction";

import { NavLink } from "react-router-dom";
import './searchBar.scss'

export const SearchBar = (props) => {
  const refSearchMovie = useRef();

  //   const searchMovieHere = (movie) => {
  console.log("here");
  // console.log(movie);

  return (
    <div className='searchbar'>
      
        <input
          placeholder="Search…"
      
          ref={refSearchMovie}
          //   onClick={() => props.searchMovie(refSearchMovie.current.value)}
        />
        <button onClick={() => props.searchMovie(refSearchMovie.current.value ? refSearchMovie.current.value:'batman')} className='btn navLink'>
          <NavLink to="/searchPage" className='btn navLink'>search</NavLink>
        </button>

        {/* </NavLink> */}
      
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    state,
  };
};

export default connect(mapStateToProps, { searchMovie })(SearchBar);
