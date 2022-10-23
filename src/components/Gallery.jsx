import React from "react";
import img from "../assets/img/20.jpg";
import img2 from "../assets/img/29.jpg";
import img3 from "../assets/img/31.jpg";
import img4 from "../assets/img/25.jpg";
import img5 from "../assets/img/26.jpg";
import img6 from "../assets/img/4.jpg";
import img7 from "../assets/img/27.jpg";
import img8 from "../assets/img/23.jpg";

const Gallery = () => {
  return (
    <div class="content-space-1">
      <div class="container-fluid px-lg-9">
        <div class="row gx-3 align-items-center">
          <div class="col">
            <div class="d-grid gap-3">
              <img class="img-fluid shadow rounded-2" src={img} alt="" />
              <img class="img-fluid shadow rounded-2" src={img2} alt="" />
            </div>
          </div>

          <div class="col">
            <div class="d-grid gap-3">
              <img class="img-fluid shadow rounded-2" src={img3} alt="" />
              <img class="img-fluid shadow rounded-2" src={img4} alt="" />
            </div>
          </div>
          <div class="col">
            <div class="d-grid gap-3">
              <img class="img-fluid shadow rounded-2" src={img5} alt="" />
              <img class="img-fluid shadow rounded-2" src={img6} alt="" />
            </div>
          </div>
          <div class="col-md d-none d-md-inline-block">
            <div class="d-grid gap-3">
              <img class="img-fluid shadow rounded-2" src={img7} alt="" />
              <img class="img-fluid shadow rounded-2" src={img8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
