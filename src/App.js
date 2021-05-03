import "./App.scss";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import { NotFound } from "./component/NotFound/NotFound";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { stayUp } from "./redux/action/authAction";
import ProfilePage from "./component/ProfilePage/ProfilePage";
import SearchPage from "./component/SearchPage/SearchPage";
import Favorites from "./component/Favorites/Favorites";
import  AllsFAvList  from "./component/AllsFavList/AllsFAvList";
// import {stayUpFavList} from './redux/action/favAction'

function App(props) {
  // console.clear();
  // console.log(props);

  useEffect(() => {
    let token = localStorage.getItem("jwtToken");
    // localStorage.setItem("myFavLista", [...props.myList]);
    props.stayUp(token);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profilePage" component={ProfilePage} />
          <Route exact path="/searchPage" component={SearchPage} />
          <Route exact path="/searchPage" component={SearchPage} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/allsFavList" component={AllsFAvList} />

          <Route exact path="/" component={Home} />

          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
    myList: state.moviesReducer.myFavoritesList,
  };
};

export default connect(mapStateToProps, { stayUp })(App);
