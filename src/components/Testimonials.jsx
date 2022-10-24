import React from "react";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
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

      <div
        class="w-md-65 text-center mx-md-auto bg-secondary rounded-4 "
        style={{
          background: `url(${img}) no-repeat`,
        }}
      >
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          navigation={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide>
              <figure className="p-4">
                <div class="mb-3">
                  <img
                    class="avatar avatar-xl avatar-circle"
                    src={testimonial.img}
                    alt=""
                  />
                </div>

                <blockquote class="blockquote text-white ">
                  “ {testimonial.msg} ”
                </blockquote>
                <figcaption class="blockquote-footer mb-5 text-white">
                  {testimonial.name}
                  <span class="blockquote-footer-source fw-bold">
                    {testimonial.title}
                  </span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
