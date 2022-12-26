import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Navbar = () => {
  return (
    <header
      id="header"
      class="navbar navbar-expand-lg navbar-end navbar-absolute-top navbar-light navbar-show-hide navbar-scrolled"
      data-hs-header-options='{
            "fixMoment": 1000,
            "fixEffect": "slide"
          }'
    >
      <div class="container">
        <nav class="js-mega-menu navbar-nav-wrap">
          <a class="navbar-brand" href="index.html" aria-label="Front">
            <img class="navbar-brand-logo" src={logo} alt="Logo" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-default">
              <i class="bi-list"></i>
            </span>
            <span class="navbar-toggler-toggled">
              <i class="bi-x"></i>
            </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/chanerators">
                  Chanerators
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/properties">
                  Properties
                </Link>
              </li>
              <li class="nav-item">
                <a
                  class="btn btn-primary btn-transition"
                  href={`${process.env.REACT_APP_WEBAPP_URL}`}
                >
                  Sign in <i class="bi-person-circle ms-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
