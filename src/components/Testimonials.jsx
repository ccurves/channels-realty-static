import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../data";
import img from "../assets/svg/wave-pattern-light.svg";

const Testimonials = () => {
  return (
    <div class="container content-space-1 content-space-md-3">
      <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
        <h2>Channerators speak!</h2>
      </div>
      <div class="js-swiper-single-testimonials swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div
          class="swiper-wrapper"
          id="swiper-wrapper-c92ae436a620d3f9"
          aria-live="polite"
          style={{ transform: "translate3d(0px, 0px, 0px)" }}
        >
          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide>
                <div
                  class="swiper-slide swiper-slide-active"
                  role="group"
                  aria-label="1 / 3"
                  key={index}
                >
                  <figure
                    class="w-md-65 text-center mx-md-auto bg-secondary rounded-4 p-4"
                    style={{
                      background: `url(${img}) no-repeat`,
                    }}
                  >
                    <div class="mb-3">
                      <img
                        class="avatar avatar-xl avatar-circle"
                        src={testimonial.img}
                        alt=""
                      />
                    </div>

                    <blockquote class="blockquote text-white">
                      {testimonial.msg}
                    </blockquote>
                    <figcaption class="blockquote-footer mb-5 text-white">
                      {testimonial.name}
                      <span class="blockquote-footer-source fw-bold">
                        {testimonial.title}
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
