import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img from "../assets/img/20.jpg";
import img2 from "../assets/img/29.jpg";
import img3 from "../assets/img/31.jpg";
import img4 from "../assets/img/25.jpg";
import img5 from "../assets/img/26.jpg";
import img6 from "../assets/img/4.jpg";
import img7 from "../assets/img/27.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <main id="content" role="main">
        <div class="container content-space-t-3 content-space-t-lg-3">
          <div class="w-lg-75 text-center mx-lg-auto">
            <div class="mb-5 mb-md-10">
              <h1 class="display-4">The Mission</h1>
              <p class="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                aperiam tenetur aspernatur architecto! Consectetur hic sint
                voluptatum officiis explicabo beatae.
              </p>
            </div>
          </div>

          <div class="row gx-3">
            <div class="col mb-3">
              <div
                class="bg-img-start"
                style={{
                  background: `url(${img}) no-repeat`,
                  height: "15rem",
                }}
              ></div>
            </div>

            <div class="col-3 d-none d-md-block mb-3">
              <div
                class="bg-img-start"
                style={{
                  background: `url(${img2})  no-repeat`,
                  height: "15rem",
                }}
              ></div>
            </div>

            <div class="col mb-3">
              <div
                class="bg-img-start"
                style={{
                  background: `url(${img3}) no-repeat`,
                  height: "15rem",
                }}
              ></div>
            </div>

            <div class="w-100"></div>

            <div class="col mb-3 mb-md-0">
              <div
                class="bg-img-start"
                style={{
                  background: `url(${img4}) center no-repeat`,
                  height: "15rem",
                }}
              ></div>
            </div>

            <div class="col-4 d-none d-md-block mb-3 mb-md-0">
              <div
                class="bg-img-start"
                style={{
                  background: `url(${img}) no-repeat`,
                  height: "15rem",
                }}
              ></div>
            </div>

            <div class="col">
              <div
                class="bg-img-start"
                style={{
                  background: `url(${img5}) no-repeat`,
                  height: "15rem",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div class="border-top mx-auto" style={{ maxWidth: "25rem" }}></div>

        <div class="container content-space-2 content-space-lg-3">
          <div class="row justify-content-lg-between">
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h2>Tools should adapt to the user, not the other way around.</h2>
            </div>

            <div class="col-lg-6">
              <p>
                Since 2007, we have helped 25 companies launch over 1k
                incredible products. We believe the best digital solutions are
                built at the intersection of business strategy, available
                technology, and real user's needs.
              </p>
              <p>
                Things can get really complex, really quickly, and a pragmatic,
                synthetic and clear vision is essential to be able to create
                something that, after all, is meant to be used. Emotions also
                have a big role to play and developing clear and beautiful
                aesthetics is of the utmost importance to create a pleasant
                environment in which the user actually enjoys the time spent in
                it. In the end, we're all suckers for beautiful things that just
                work
              </p>
            </div>
          </div>
        </div>

        <div class="border-top mx-auto" style={{ maxWidth: "25rem" }}></div>

        <div class="container content-space-2 content-space-lg-3">
          <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-5 mb-md-9">
            <span class="d-block small font-weight-bold text-cap mb-2">
              Our Team
            </span>
            <h2>Trust the professionals</h2>
          </div>

          <div class="row mb-7 align-items-center justify-content-center">
            <div class="col-sm-6 col-md-3 mb-5 mb-lg-0">
              <img
                class="card-img rounded-2"
                src={img6}
                alt="Image Description"
              />
              <div class="card card-sm text-center mt-n7 mx-3">
                <div class="card-body">
                  <h4 class="card-title">Christina Kray</h4>
                  <p class="card-text">Project Manager</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mb-5 mb-lg-0">
              <img
                class="card-img rounded-2"
                src={img2}
                alt="Image Description"
              />
              <div class="card card-sm text-center mt-n7 mx-3">
                <div class="card-body">
                  <h4 class="card-title">Jeff Fisher</h4>
                  <p class="card-text">CEO, Director</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mb-5 mb-sm-0">
              <img
                class="card-img rounded-2"
                src={img7}
                alt="Image Description"
              />
              <div class="card card-sm text-center mt-n7 mx-3">
                <div class="card-body">
                  <h4 class="card-title">Lida Reidy</h4>
                  <p class="card-text">Marketer</p>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center">
            <div class="card card-info-link card-sm">
              <div class="card-body">
                Want to work with us?{" "}
                <a class="card-link ms-2" href="">
                  We're hiring <span class="bi-chevron-right small ms-1"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;
