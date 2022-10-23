import React from "react";

const SocialLinks = () => {
  return (
    <div className="bg-soft-primary mt-5">
      <div class="position-relative zi-2">
        <div class="container content-space-t-2 content-space-b-2 content-space-b-lg-3  text-center">
          <div class="mx-lg-auto mb-5">
            <span class="lead  text-wrap">
              Follow us on our Social Media Channels to get more updates on our
              available packages:
            </span>
          </div>
          <div class="col-sm-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a class="btn btn-secondary btn-sm btn-icon" href="#">
                  <i class="bi-facebook"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a class="btn btn-secondary btn-sm  btn-icon" href="#">
                  <i class="bi-google"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a class="btn btn-secondary btn-sm  btn-icon" href="#">
                  <i class="bi-twitter"></i>
                </a>
              </li>

              <li class="list-inline-item">
                <a class="btn btn-secondary btn-sm  btn-icon" href="#">
                  <i class="bi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
