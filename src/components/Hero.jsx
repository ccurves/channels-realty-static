import React from "react";
import img from "../assets/img/Rectangle-16.png";
import img2 from "../assets/img/Rectangle-1.png";

const Hero = () => {
  return (
    <div
      class="position-relative content-space-t-md-1 mt-7 content-space-b-md-2 mx-md-10 p-5"
      style={{
        background: `url(${img}) no-repeat`,
        backgroundSize: "cover",
        maxHeight: "848px",
        borderRadius: "41px",
      }}
    >
      <div class="container position-relative content-space-t-2 content-space-t-lg-3 content-space-b-1">
        <div class="row position-relative zi-2">
          <div class="col-lg-8">
            <div class="w-lg-75 text-start text-lg-start mb-5 mb-lg-7 ">
              <h1 class="display-6 text-white">
                Real Estate made <span class="text-primary ">easy</span>{" "}
                <br className="d-none d-lg-block" />
                and <span class="text-primary ">affordable</span>
              </h1>
              <p class="text-white text-wrap">
                Channels Realty believes everyone deserves a comfortable home of
                their own. We make provision of shelter easy for everyone.
              </p>
            </div>
            <div class="d-grid d-sm-flex gap-3">
              <a
                class="btn btn-primary btn-transition px-6"
                href={`${process.env.REACT_APP_WEBAPP_URL}`}
              >
                Get Started
              </a>

              <a
                class=" btn btn-outline-light btn-transition"
                href="/"
                role="button"
                data-fslightbox="youtube-video"
              >
                Learn more
                <i class="bi-chevron-right small ms-1"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="d-none d-lg-flex col-lg-6 position-lg-absolute top-0 end-0  ">
          <img
            class="img-fluid"
            src={img2}
            alt=""
            style={{ height: "450px", marginLeft: "20px" }}
          />
          <img
            class="img-fluid "
            src={img2}
            alt=""
            style={{ height: "450px", marginLeft: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
