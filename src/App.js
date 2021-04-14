import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import { NotFound } from "./component/NotFound/NotFound";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import { stayUp } from "./redux/action/authAction";

function App(props) {
  // console.clear();
  
  console.log("from app", props);

  useEffect(() => {
    let token = localStorage.getItem("jwtToken");

    props.stayUp(token);
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/home" component={Home} />

          <Route path="" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);

  return {
    state,
  };
};

export default connect(mapStateToProps, { stayUp })(App);

// export default App;
