import React, { useRef } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { searchMovie } from "../../redux/action/searchAction";
import { FaSistrix } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

import { Link,NavLink } from "react-router-dom";
import "./searchBar.scss";

export const SearchBar = (props) => {
  console.clear()
  const refSearchMovie = useRef();

  //   const searchMovieHere = (movie) => {
  // console.log("here");
  // console.log(props.state);
  
  // console.log(movie);
  // const hi = () => {
  //   props.searchMovie(
  //     refSearchMovie.current.value ? refSearchMovie.current.value : "batman"
  //   );
  // };

  return (
    <div className="main-searchbar">
      {/* <input
        className="in-searchbar"
        placeholder="Search…"
        ref={refSearchMovie}
        //   onClick={() => props.searchMovie(refSearchMovie.current.value)}
      />
      <span
        // onClick={() => props.searchMovie(refSearchMovie.current.value ? refSearchMovie.current.value:'batman')}
        className="btn btn-searchbar"
      >
        {/* problem is here...----------------------------------- */}
        {/* <Link
          onClick={() =>
            props.searchMovie(
              refSearchMovie.current.value
                ? refSearchMovie.current.value
                : "batman"
            )
          }
          to="/searchPage"
        >
          <FaSistrix className />
        </Link> */}
      {/* </span>  */}

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" 
        placeholder="Search…"
        ref={refSearchMovie}/>
        <NavLink 
        // variant="outline-primary"
         onClick={() =>
            props.searchMovie(
              refSearchMovie.current.value
                ? refSearchMovie.current.value
                : "batman"
            )
          }
          to='/searchPage'
          className='nav-searchbar '
          >
            <FaSistrix className='search-icon'/>
            {/* Search */}
            </NavLink>
      </Form>

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
