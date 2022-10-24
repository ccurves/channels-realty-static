import React from "react";
import { listingItems } from "../data";
import ListingCard from "./ListingCard";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Carousel.css";

const ListingSection = () => {
  const sliderSettings = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  };
  return (
    <div class="container content-space-2 content-space-b-lg-3">
      <div class="w-md-75 w-lg-50 text-center mx-md-auto mb-7">
        <h2>New properties for instant sales</h2>
      </div>

      <Swiper
        breakpoints={sliderSettings}
        spaceBetween={40}
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
        <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
          {listingItems.map((listing, index) => (
            <SwiperSlide>
              <ListingCard listing={listing} key={listing.id} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div class="text-center">
        <a class="btn btn-outline-primary" href="/properties">
          View all properties for sale{" "}
          <i class="bi-chevron-right small ms-1"></i>
        </a>
      </div>
    </div>
  );
};

export default ListingSection;
