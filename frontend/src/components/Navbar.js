import React, { Fragment, useState } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const navbar = ({ isAuthenticated, logout }) => {
  const [redirect, SetRedirect] = useState(false);

  const logout_user = () => {
    logout();
    SetRedirect(true);
  };

  const authLinks = (
    <li className="nav-item">
      <a className="nav-link" onClick={logout_user} href="#!">
        Logout
      </a>
    </li>
  );

  const guestLinks = (
    <Fragment>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" exact to="/signup">
          Sign Up
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Auth System
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            {<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
          </ul>
        </div>
      </nav>
      {redirect ? <Redirect to="/" /> : <></>}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(navbar);
