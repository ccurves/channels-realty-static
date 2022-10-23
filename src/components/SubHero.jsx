import React from "react";

const SubHero = () => {
  return (
    <div className="bg-light mt-5">
      <div class="position-relative zi-2">
        <div class="container content-space-t-2 content-space-b-2 content-space-b-lg-3  text-center">
          <div class="mx-lg-auto mb-5">
            <span class="display-5 text-primary  text-wrap">
              Become a Land Owner with <br className="d-none d-lg-block" /> as
              low as ₦20,000
            </span>
          </div>
          <div class="w-lg-50 text-center mx-lg-auto mb-10">
            <p className="lead">
              With a ₦20,000 deposit and completing your designated tasks, you
              can claim your own land Channels Villa.
            </p>
          </div>
          <a class="btn btn-primary btn-transition px-6" href="/">
            Join now
          </a>

          <a
            class=" btn btn-outline-secondary btn-transition ms-3"
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
  );
};

export default SubHero;
