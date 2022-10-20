import React from "react";
import { listingItems } from "../data";
import ListingHeader from "./ListingHeader";

const ListingGrid = () => {
  return (
    <div class="container content-space-t-1 content-space-b-2 content-space-b-lg-3">
      <ListingHeader />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 mb-5">
        {listingItems.map((listing) => (
          <div class="col mb-3" key={listing.id}>
            <div class="card card-flush shadow-none h-100">
              <a
                class="card-pinned"
                href=""
                data-fslightbox="propertyGridGallery1"
              >
                <img class="card-img" src={listing.img} alt="" />

                <div class="card-pinned-top-start">
                  <span class="badge bg-success">New</span>
                </div>

                <div class="card-pinned-bottom-end">
                  <span class="btn btn-light btn-xs btn-icon">
                    <i class="bi-images"></i>
                  </span>
                </div>
              </a>

              <a
                class="d-none"
                href=""
                data-fslightbox="propertyGridGallery1"
              ></a>
              <a
                class="d-none"
                href=""
                data-fslightbox="propertyGridGallery1"
              ></a>
              <a
                class="d-none"
                href=""
                data-fslightbox="propertyGridGallery1"
              ></a>

              <a class="card-body" href="/properties">
                <span class="card-subtitle text-body">For sale</span>

                <div class="row align-items-center mb-3">
                  <div class="col">
                    <h4 class="card-title text-inherit">{listing.title}</h4>
                  </div>

                  <div class="col-auto">
                    <h3 class="card-title text-primary">
                      {" "}
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
                    <i class="bi-rulers text-muted me-1"></i> {listing.sqft}{" "}
                    sqft Total Area
                  </li>
                </ul>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListingGrid;
