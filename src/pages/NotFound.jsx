import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import svg from "../assets/svg/oc-error.svg";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center h-100">
      {" "}
      <header
        id="header"
        class="navbar navbar-expand navbar-light navbar-absolute-top"
      >
        <div class="container">
          <nav class="navbar-nav-wrap">
            <Link class="navbar-brand" to="/">
              <img class="navbar-brand-logo" src={logo} alt="Logo" />
            </Link>
          </nav>
        </div>
      </header>{" "}
      <main id="content" role="main">
        <div class="container content-space-t-3 content-space-t-lg-1 text-center mt-5">
          <div class="mb-3">
            <img
              class="img-fluid"
              src={svg}
              alt=""
              style={{ width: "24rem" }}
            />
          </div>

          <div class="mb-4">
            <p class="fs-4 mb-0">Oops! Looks like you followed a bad link.</p>
          </div>
          <Link class="btn btn-primary" to="/">
            Go back home
          </Link>
        </div>
      </main>
      <footer class="position-absolute start-0 end-0 bottom-0">
        <div class="container pb-5 content-space-b-sm-1">
          <div class="row justify-content-between align-items-center">
            <div class="col-sm mb-3 mb-sm-0">
              <p class="small mb-0">
                &copy; Channels Realty 2022. All rights reserved.
              </p>
            </div>

            <div class="col-sm-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i class="bi-facebook"></i>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i class="bi-google"></i>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i class="bi-twitter"></i>
                  </a>
                </li>

                <li class="list-inline-item">
                  <a class="btn btn-soft-secondary btn-xs btn-icon" href="#">
                    <i class="bi-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
