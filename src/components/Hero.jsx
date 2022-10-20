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
                Real Estate made <span class="text-primary ">easy</span> <br />
                and <span class="text-primary ">affordable</span>
              </h1>
              <p class="text-white">
                Channels Realty believes everyone deserves a comfortable home of
                their own. We make provision of shelter easy for everyone.
              </p>
            </div>

            <div class="d-grid gap-3 w-lg-75">
              {" "}
              <div class="input-card-form">
                <label for="jobTitleForm" class="form-label visually-hidden">
                  Search for properties
                </label>
                <div class="input-group input-group-merge">
                  <span class="input-group-prepend input-group-text">
                    <i class="bi-search"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    id="jobTitleForm"
                    placeholder="Search for properties"
                    aria-label="Search for properties"
                  />
                </div>
              </div>{" "}
              <a
                class="btn btn-primary"
                href="https://app.channels.realty/sign-up"
              >
                Create new account
              </a>
            </div>
          </div>
        </div>

        <div class="d-none d-lg-block col-lg-6 position-lg-absolute top-0 end-0 me-2 mt-5">
          <img
            class="img-fluid"
            src={img2}
            alt=""
            style={{ height: "490px", marginLeft: "20px" }}
          />
          <img
            class="img-fluid "
            src={img2}
            alt=""
            style={{ height: "490px", marginLeft: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
