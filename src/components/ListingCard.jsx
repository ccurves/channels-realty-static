import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div class="col mb-3">
      <a class="card card-flush shadow-none h-100" href="/">
        <div class="card-pinned">
          <img class="card-img" src={listing.img} alt="" />

          <div class="card-pinned-top-start">
            <span class="badge bg-success">New</span>
          </div>
        </div>

        <div class="card-body text-start">
          <span class="card-subtitle text-body">For sale</span>

          <div class="row align-items-center mb-3">
            <div class="col">
              <h4 class="card-title text-inherit">{listing.title}</h4>
            </div>

            <div class="col-auto">
              <h3 class="card-title text-primary">
                &#8358;{listing.price.toLocaleString()}
              </h3>
            </div>
          </div>

          <ul class="list-inline list-separator text-body small">
            <li class="list-inline-item">
              <i class="bi bi-file-earmark-richtext text-muted me-1"></i>
              {listing.deed}
            </li>

            <li class="list-inline-item">
              <i class="bi-rulers text-muted me-1"></i> {listing.sqft} sqft
              Total Area
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default ListingCard;
