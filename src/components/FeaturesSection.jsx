import React from "react";
import img from "../assets/img/Screenshot-01.png";

const FeaturesSection = () => {
  return (
    <div class="position-relative bg-light rounded-2 mx-3 mx-lg-10 mb-5">
      <div class="container content-space-2 content-space-lg-3">
        <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-5">
          <h2>Channels Realty Webapp</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            molestiae atque consequatur reiciendis neque labore.
          </p>
        </div>

        <div class="row">
          <div class="col-lg-7 mb-9 mb-lg-0">
            <div class="pe-lg-6">
              <figure class="device-browser">
                <div class="device-browser-header">
                  <div class="device-browser-header-btn-list">
                    <span class="device-browser-header-btn-list-btn"></span>
                    <span class="device-browser-header-btn-list-btn"></span>
                    <span class="device-browser-header-btn-list-btn"></span>
                  </div>
                  <div class="device-browser-header-browser-bar">
                    app.channels.realty
                  </div>
                </div>

                <div class="device-browser-frame">
                  <img class="device-browser-img" src={img} alt="" />
                </div>
              </figure>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="mb-4">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                odio?
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
                adipisci rem, reprehenderit cumque unde debitis iusto et non
                tempora voluptates.
              </p>
            </div>

            <ul class="list-checked list-checked-primary mb-5">
              <li class="list-checked-item">Lorem ipsum, dolor sit amet</li>
              <li class="list-checked-item">Lorem ipsum, dolor sit amet</li>
              <li class="list-checked-item">Lorem ipsum, dolor sit amet</li>
            </ul>

            <a class="btn btn-primary" href="#">
              Get started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
