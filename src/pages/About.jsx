import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import img2 from "../assets/img/29.jpg";
import img6 from "../assets/img/4.jpg";
import img7 from "../assets/img/27.jpg";
import PacakagesGrid from "../components/PacakagesGrid";
import Gallery from "../components/Gallery";
import img from "../assets/svg/wave-pattern-light.svg";

const About = () => {
  return (
    <>
      <Navbar />
      <main id="content" role="main">
        <div class="container content-space-t-3 content-space-t-lg-3">
          <div class="w-lg-75 text-center mx-lg-auto mb-5">
            <h1 class="display-6">
              We Are <span className="text-primary">Channels Realty</span>{" "}
            </h1>
          </div>
          <Gallery />
        </div>

        <div
          className="bg-secondary text-white"
          style={{
            background: `url(${img}) no-repeat`,
          }}
        >
          <div class="container content-space-2 content-space-lg-3">
            <div class="row justify-content-lg-between">
              <div class="col-lg-4 mb-5 mb-lg-0">
                <h2 className="display-6 text-white">
                  Everyone deserves a Home!
                </h2>
              </div>

              <div class="col-lg-6">
                <p className="lead">
                  Shelter is one of the basic necessities in life. Without
                  shelter, there will be no protection of man’s dignity. If this
                  is true, why then does the word ‘homeless’ exist? Why does
                  shelter have to select between the rich and the poor? At
                  Channels Realty, we believe everyone should have a shot at
                  becoming a homeowner. We have come up with a strategy to bring
                  Real Estate to the masses no matter the class.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="border-top mx-auto" style={{ maxWidth: "25rem" }}></div>

        <div className="">
          <div class="container content-space-2 content-space-lg-3">
            <div class="w-lg-75 text-center mx-lg-auto">
              <div class="mb-5 mb-md-10">
                <h1 class="display-4">
                  Our <span className="text-primary">Strategy</span>{" "}
                </h1>
                <p class="">
                  There is a popular saying that reads; “All fingers are not
                  equal”. We recognise this to translate to the fact that
                  everyone cannot be in the same class when it comes to wealth.
                </p>
                <p class="">
                  This is the basis we built our strategy on. We have different
                  products to suit each class.
                </p>
              </div>
            </div>
            <div class="row justify-content-lg-center">
              <div class="col-sm-6 col-lg-4 mb-3 mb-sm-4">
                <div class="d-flex px-md-4">
                  <div class="flex-grow-1 ms-3 text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4285/4285622.png"
                      alt=""
                      className="img-fluid w-25 mb-4"
                    />

                    <h4>Outright</h4>
                    <p>
                      You can buy a land outrightly from our listings, we will
                      supply you with every paper of the land ownership.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-sm-6 col-lg-4 mb-3 mb-sm-4">
                <div class="d-flex px-md-4">
                  <div class="flex-grow-1 ms-3 text-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3591/3591611.png"
                      alt=""
                      className="img-fluid w-25 mb-4"
                    />
                    <h4>Subscription</h4>
                    <p>
                      You also have the option of subscribing to own a land on
                      Channels Villa just with ₦
                      {parseInt(
                        process.env.REACT_APP_REG_AMOUNT
                      ).toLocaleString()}
                      .
                      {/* With Channels Villa you
                    can claim a 150 sqm of land by referring 15 people, 300 sqm
                    of land by referring 30 people, and 600 sqm of land by
                    referring 60 people. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <PacakagesGrid />

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
              <img class="card-img rounded-2" src={img6} alt="" />
              <div class="card card-sm text-center mt-n7 mx-3">
                <div class="card-body">
                  <h4 class="card-title">Gaius Kingsley</h4>
                  <p class="card-text">Co Founder and Team Lead</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mb-5 mb-lg-0">
              <img class="card-img rounded-2" src={img2} alt="" />
              <div class="card card-sm text-center mt-n7 mx-3">
                <div class="card-body">
                  <h4 class="card-title">Adeleye Mathew</h4>
                  <p class="card-text">Co founder and Team Strategist</p>
                </div>
              </div>
            </div>

            <div class="col-sm-6 col-md-3 mb-5 mb-sm-0">
              <img class="card-img rounded-2" src={img7} alt="" />
              <div class="card card-sm text-center mt-n7 mx-3">
                <div class="card-body">
                  <h4 class="card-title">Oveh Moses</h4>
                  <p class="card-text">Co Founder and Team Project Manager</p>
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
