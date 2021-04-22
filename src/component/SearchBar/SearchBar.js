import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchMovie } from "../../redux/action/searchAction";

import { Link } from "react-router-dom";
import './searchBar.scss'

export const SearchBar = (props) => {
  const refSearchMovie = useRef();

  //   const searchMovieHere = (movie) => {
  console.log("here");
  // console.log(movie);
const hi = ()=>{
  props.searchMovie(refSearchMovie.current.value ? refSearchMovie.current.value:'batman');
}

  return (
    <div className='main-searchbar'>
      
        <input
          className='in-searchbar'
          placeholder="Search…"
      
          ref={refSearchMovie}
          //   onClick={() => props.searchMovie(refSearchMovie.current.value)}
        />
        <button 
        // onClick={() => props.searchMovie(refSearchMovie.current.value ? refSearchMovie.current.value:'batman')}
         className='btn btn-searchbar'>
           {/* problem is here...----------------------------------- */}
          <Link onClick={() => props.searchMovie(refSearchMovie.current.value ? refSearchMovie.current.value:'batman')} 
          to="/searchPage" className='btn '>search</Link>
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
