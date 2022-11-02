import React from "react";
import { packages } from "../data";

const PacakagesGrid = () => {
  return (
    <div class="border-top bg-secondary text-white">
      <div class="container content-space-2 content-space-lg-3">
        <div class="w-lg-50 text-center mx-lg-auto mb-7">
          <h1 class="display-4 mb-3 text-white">
            Our <span className="text-primary">Products</span>
          </h1>
          <div
            class="border-top mx-auto mb-7 bg-light"
            style={{ maxWidth: "25rem" }}
          ></div>
          <div className="mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
              alt=""
              className="img-fluid"
              style={{ maxWidth: "4rem" }}
            />
          </div>
          <h2 className="text-white">Channels Instant Buy</h2>
          <p>
            Claim any of the lands listed by paying the price it is listed for.
          </p>
          <button className="btn btn-outline-light btn-transition px-3">
            Buy a land
          </button>
        </div>
        <hr className="bg-light  mx-auto mb-7" style={{ maxWidth: "7rem" }} />
        <div class="w-lg-50 text-center mx-lg-auto mb-7">
          <h2 className="text-white">Channels Villa Packages</h2>
        </div>

        <div class="row mb-7 ">
          {packages.map((plan, index) => (
            <div class="col-sm-6 col-lg-4 mb-5 mb-lg-0">
              <div
                class="card  text-center aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div class="card-body">
                  <div className="mb-4">
                    <img
                      class="img-fluid"
                      src={plan.img}
                      alt=""
                      style={{ height: "8rem" }}
                    />
                  </div>

                  <h3 class="card-title">{plan.name}</h3>
                  <p class="card-text">
                    Pay the sum of ₦20,000 to join this package and refer{" "}
                    {plan.ref} people to claim {plan.sqm} sqm of land.
                  </p>

                  <div class="d-grid">
                    <a class="btn btn-primary btn-transition" href="">
                      Sign up for this package
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PacakagesGrid;
