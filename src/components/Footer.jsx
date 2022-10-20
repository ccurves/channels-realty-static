import React from "react";
import logo from "../assets/img/logo-white.png";

const Footer = () => {
  return (
    <footer class="bg-secondary">
      <div class="container pb-1 pb-lg-5">
        <div class="row content-space-t-2">
          <div class="col-lg-3 mb-7 mb-lg-0">
            <div class="mb-5">
              <a class="navbar-brand" href="../index-2.html" aria-label="Space">
                <img class="navbar-brand-logo" src={logo} alt="" />
              </a>
            </div>

            <ul class="list-unstyled list-py-1">
              <li>
                <a class="link-sm link-light" href="#">
                  <i class="bi-geo-alt-fill me-1"></i> 153 Williamson Plaza,
                  Maggieberg
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="tel:1-062-109-9222">
                  <i class="bi-telephone-inbound-fill me-1"></i> +1 (062)
                  109-9222
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm mb-7 mb-sm-0">
            <h5 class="text-white mb-3">Company</h5>

            <ul class="list-unstyled list-py-1 mb-0">
              <li>
                <a class="link-sm link-light" href="#">
                  About
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  Careers{" "}
                  <span class="badge bg-warning text-dark rounded-pill ms-1">
                    We're hiring
                  </span>
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  Blog
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  Properties
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm mb-7 mb-sm-0">
            <h5 class="text-white mb-3">Chanerators</h5>

            <ul class="list-unstyled list-py-1 mb-0">
              <li>
                <a class="link-sm link-light" href="#">
                  Task
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  Become an Influencer
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  Affilate Requirements
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm">
            <h5 class="text-white mb-3">Resources</h5>

            <ul class="list-unstyled list-py-1 mb-5">
              <li>
                <a class="link-sm link-light" href="#">
                  <i class="bi-question-circle-fill me-1"></i> Help
                </a>
              </li>
              <li>
                <a class="link-sm link-light" href="#">
                  <i class="bi-person-circle me-1"></i> Your Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-top border-white-10 my-7"></div>

        <div class="row mb-7">
          <div class="col-sm mb-3 mb-sm-0">
            <ul class="list-inline list-separator list-separator-light mb-0">
              <li class="list-inline-item">
                <a class="link-sm link-light" href="/privacy-policy">
                  Privacy &amp; Policy
                </a>
              </li>
              <li class="list-inline-item">
                <a class="link-sm link-light" href="/terms">
                  Terms
                </a>
              </li>
              <li class="list-inline-item">
                <a class="link-sm link-light" href="#">
                  Road Map
                </a>
              </li>
            </ul>
          </div>

          <div class="col-sm-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a class="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i class="bi-facebook"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a class="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i class="bi-google"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a class="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i class="bi-twitter"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a class="btn btn-soft-light btn-xs btn-icon" href="#">
                  <i class="bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="w-md-85 text-lg-center mx-lg-auto">
          <p class="text-white-50 small">
            &copy; Channels Realty 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
