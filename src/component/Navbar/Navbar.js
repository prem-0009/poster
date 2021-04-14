import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
// import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Redirect, Route, NavLink } from "react-router-dom";
//for css material ui
import { useStyles } from "./navbarCss";

export const Navbar = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          {/*------------------------------------------- user info here */}
          {props.state.isAuth ? (
            <Button>{props.state.user.username}</Button>
          ) : null}
          <Typography className={classes.title} variant="h6" noWrap>
            {/* Material-UI */}
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {props.state.isAuth ? (
            <Button color="inherit">Logout</Button>
          ) : (
            <div>
              <Button color="inherit">
                <NavLink to="/register">Register</NavLink>
              </Button>
              <Button color="inherit">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);

  return {
    state,
  };
};

export default connect(mapStateToProps)(Navbar);
